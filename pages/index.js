import {Box, Typography} from "@mui/material";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";
import statusCode from "../constants/statusCode";
import {successToast} from "@/helper/toast";

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        (router?.query?.statusCode === statusCode.OK) && successToast(router?.query?.message);
        (router?.query?.statusCode === statusCode.NOT_FOUND) && successToast(router?.query?.message);
    }, [])
  return (
    <Typography className='text-center' component={'span'}>
        <Box className='home-box'>
            <div>
                <Link href={'skillsheet'}>Checker</Link>
            </div>
        </Box>
    </Typography>
  )
}
