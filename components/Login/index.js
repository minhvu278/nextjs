import React, {useState} from 'react';
import Head from "next/head";
import { useDispatch } from 'react-redux';
import styles from './login.module.scss';
import {MailOutline, Lock, CheckBox} from '@mui/icons-material';
import {Box, Button, Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";
import {useRouter} from "next/router";
import Cookies from 'js-cookie';
import statusCode from "../../constants/statusCode";
import {login} from "@/redux/actions/auth";

export default function Login() {

    const router = useRouter()
    const dispatch = useDispatch()
    const [error, setError] = useState([])
    const [values, setValues] = useState({email: '', password: '', remember: false})

    const handleChangeValue = (e) => setValues(values => (
        { ...values, [e.target.name]: e.target.name === 'remember' ? document.getElementById('remember').checked : e.target.value }
    ));

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        dispatch(login(values)).then((res) => {
            if (res?.status === statusCode.OK) {
                const token = res?.data?.access_token;
                const locale = res?.data?.user?.language;
                Cookies.set('token', token, {expires: values?.remember ? 365 : (1 / 24)}, {secure: true})
                Cookies.set('locale', locale, {expires: values?.remember ? 365 : (1 / 24)}, {secure: true})
                if (Cookies.get('previous-path')) {
                    router.push(Cookies.get('previous-path'))
                    Cookies.remove('previous-path')
                } else {
                    let pathName = '/'
                    router.push({
                        pathname: pathName,
                        query: {message: res?.data?.message, statusCode: res?.status}
                    }, pathName)
                }
            } else {
                setError(res?.data)
            }
        })
    }

    return (
        <div className={styles.loginWrapper}>
            <Head>
                <title>Login For Skillsheet</title>
                {/*<link rel='-rsmicon' href='/icon.png' />*/}
            </Head>

            <Box className={styles.loginCustom}>
                <form onSubmit={handleLoginSubmit}>
                    <Typography variant='h5' className={styles.title}>
                        Login
                    </Typography>
                    <Box className={styles.logo}></Box>
                    <Box className={styles.formGroup}>
                        <MailOutline className={styles.icon} />
                        <TextField
                            id='email'
                            name='email'
                            placeholder="Email"
                            variant='standard'
                            onChange={handleChangeValue}
                        />
                    </Box>
                    {/*{*/}
                    {/*    errors?.email && <FormHelperText className={styles.errorMessage}>{errors.email}</FormHelperText>*/}
                    {/*}*/}

                    <Box className={styles.formGroup}>
                        <Lock className={styles.icon} />
                        <TextField
                            id='password'
                            name='password'
                            // placeholder={trans.login.password}
                            variant='standard'
                            type='password'
                            onChange={handleChangeValue}
                        />
                    </Box>
                    {/*{*/}
                    {/*    errors?.password && <FormHelperText className={styles.errorMessage}>{errors.password}</FormHelperText>*/}
                    {/*}*/}
                    {/*<Box>*/}
                    {/*    {errors?.message && !errors?.email && !errors?.password && <Alert severity='error'>{errors?.message}</Alert>}*/}
                    {/*</Box>*/}
                    <FormControlLabel className={styles.rememberPassword} control={<Checkbox id='remember' name='remember' className={styles.checkBox} onClick={handleChangeValue} />} label="Remember" />
                    <Box className={styles.formGroup}>
                        <Button variant='contained' type='submit' className={styles.loginButton}>
                            Login
                        </Button>
                    </Box>
                </form>
            </Box>
        </div>
    )
}
