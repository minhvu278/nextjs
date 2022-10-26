import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {PUBLISH_PATHS} from "../constants/constant";
import Cookies from 'js-cookie';

export default function RouteGuard({children}) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false)

    useEffect(() => {
        authCheck(router?.pathname)
        const hideContent = () => setAuthorized(false)

        router.events.on('routeChangeStart', hideContent)
        router.events.on('routeChangeComplete', authCheck)
        return () => {
            router.events.off('routeChangeStart', hideContent)
            router.events.off('routeChangeComplete', authCheck)
        }
    }, [router.pathname])

    function authCheck(url) {
        const path = url.split('?')[0];
        if (
            !Cookies.get('token') &&
            PUBLISH_PATHS.login !== path
        ) {
            setAuthorized(false)
            router.push(PUBLISH_PATHS.login)
        } else {
            setAuthorized(true)
        }
    }
    return (authorized && children)
}
