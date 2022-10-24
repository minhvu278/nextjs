import React from 'react';
import Head from "next/head";
import styles from './login.module.scss';
import {MailOutline, Lock, CheckBox} from '@mui/icons-material';
import {Box, Button, Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";

export default function Login() {
    return (
        <div className={styles.loginWrapper}>
            <Head>
                <title>Login For Skillsheet</title>
                {/*<link rel='-rsmicon' href='/icon.png' />*/}
            </Head>

            <Box className={styles.loginCustom}>
                <form>
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
                        />
                    </Box>
                    {/*{*/}
                    {/*    errors?.password && <FormHelperText className={styles.errorMessage}>{errors.password}</FormHelperText>*/}
                    {/*}*/}
                    {/*<Box>*/}
                    {/*    {errors?.message && !errors?.email && !errors?.password && <Alert severity='error'>{errors?.message}</Alert>}*/}
                    {/*</Box>*/}
                    <FormControlLabel className={styles.rememberPassword} control={<Checkbox id='remember' name='remember' className={styles.checkBox} />} label="Remember" />
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
