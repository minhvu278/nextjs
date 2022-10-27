import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSkillSheet} from "@/redux/actions/skillSheet";
import {useRouter} from "next/router";
import statusCode from "@/constants/statusCode";
import styles from './skillsheet.module.scss';
import LanguageIcon from '@mui/icons-material/Language';
// import NoteComponents from './NoteComponents';
import {
    Avatar,
    Box,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";

export default function SkillSheetComponent() {
    const skillsheet = useSelector(state => state.skillSheetReducer)
    const dispatch = useDispatch()
    const router = useRouter()
    console.log("Manh Mom", skillsheet?.data?.skill_sheet)

    useEffect(() => {
        dispatch(getSkillSheet()).then(skillsheet => {
            if (skillsheet?.data == null) {
                router.push({
                    pathname: "/",
                    query: {
                        message: "Loi roi",
                        statusCode: statusCode.NOT_FOUND
                    }
                }, '/')
            }
        })
    }, [])
    const data = skillsheet?.data?.skill_sheet
    return (
        <>
            <Box sx={{flexGrow: 1}} className={`${styles.skillsheetPage}`}>
                {/*<style jsx global>{`*/}
                {/*    .main-background {*/}
                {/*        background: ${color};*/}
                {/*    }*/}

                {/*    .text-background {*/}
                {/*        color: ${color};*/}
                {/*    }*/}

                {/*    .text-color {*/}
                {/*        color: ${textColor};*/}
                {/*    }*/}
                {/*`}*/}
                {/*</style>*/}
                <div className={`${styles.skillSheetBody} text-color`}>
                    <Box sx={{width: '100%'}}>
                        <Grid item xs={4} className={`${styles.information} main-background`}>
                            <div className={`${styles.avatar}`}>
                                <Avatar
                                    alt="OK"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtHicoNe2uxGF8U6z0uMN_x0VoM4cdMgQ7VA&usqp=CAU"
                                    sx={{width: 250, height: 250}}
                                />
                            </div>
                            <div className={`${styles.name}`}>
                                {data?.full_name}
                            </div>
                            <div className={`${styles.job}`}>
                                Developer
                            </div>
                            <div className={`${styles.titleInfoCol}`}>
                                Contact Information
                            </div>
                            <div className={`${styles.contactInfo}`}>
                                <TableContainer>
                                    <Table aria-label="simple table">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" scope="row" width={150} className={`${styles.title} text-color`}>
                                                    Full Name
                                                </TableCell>
                                                <TableCell align="left" className={`${styles.name} text-color`}>
                                                    {data?.full_name}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row" width={150} className={`${styles.title} text-color`}>
                                                    Date of birth
                                                </TableCell>
                                                <TableCell align="left" className={`${styles.name} text-color`}>
                                                    {data?.date_of_birth}
                                                </TableCell>
                                                <TableRow>
                                                    <TableCell component="th" scope="row" width={150} className={`${styles.title} text-color`}>
                                                        Gender
                                                    </TableCell>
                                                    <TableCell align="left" className={`${styles.name} text-color`}>
                                                        {data?.gender}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell component="th" scope="row" width={150} className={`${styles.title} text-color`}>
                                                        Address
                                                    </TableCell>
                                                    <TableCell align="left" className={`${styles.name} text-color`}>
                                                        {data?.address}
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell component="th" scope="row" width={150} className={`${styles.title} text-color`}>
                                                        Phone
                                                    </TableCell>
                                                    <TableCell align="left" className={`${styles.name} text-color`}>
                                                        <div>{data?.phones?.phone_number_emergency} (use) </div>
                                                        <div>{data?.phones?.phone_number_japan || 'null'} (jp) </div>
                                                        <div>{data?.phones?.phone_number_vietnam} (vn) </div>
                                                    </TableCell>
                                                </TableRow>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </Grid>
                        <Grid item xs={8} className={`${styles.extraInfo}`}>
                            <div className={`${styles.language_level} text-background`}>
                                <div className={`${styles.extraInfoTitle}`}>
                                    <LanguageIcon />
                                    <div className={`${styles.name}`}>Languages Levels</div>
                                </div>
                                <div className={`${styles.extraInContent}`}>
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Language</TableCell>
                                                    <TableCell align="right">Business Language</TableCell>
                                                    <TableCell align="right">Daily Language</TableCell>
                                                    <TableCell align="right">IT Language</TableCell>
                                                    <TableCell align="right">Reading Comprehension</TableCell>
                                                    <TableCell align="right">System Design</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {data?.languagePoints.map((row) => (
                                                    <TableRow
                                                        key={row.name}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align="center">{row.business_language}</TableCell>
                                                        <TableCell align="center">{row.daily_language}</TableCell>
                                                        <TableCell align="center">{row.it_language}</TableCell>
                                                        <TableCell align="center">{row.reading_comprehension}</TableCell>
                                                        <TableCell align="center">{row.system_design}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <div className={`${styles.note}`}>
                                        <div className={styles.title}>
                                            Note: *
                                        </div>
                                        {/*<NoteComponents*/}
                                        {/*    data={[*/}
                                        {/*        ['A', 'Thượng cấp'],*/}
                                        {/*        ['B', 'Trung cấp'],*/}
                                        {/*        ['C', 'Sơ cấp'],*/}
                                        {/*        ['D', 'Người mới']*/}
                                        {/*    ]}*/}
                                        {/*/>*/}
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Box>
                </div>
            </Box>
        </>
    )
}
