import React, { useState, useEffect } from 'react';
import {useRouter} from "next/router";
import {ELEMENTS} from "../components/home-pages/menu-items";

export function useActive() {
    const [active, setActive] = useState({});
    const router = useRouter();

    useEffect(() => {
        if(router.pathname === '/') setActive(ELEMENTS[0]);
        else {
            setActive(ELEMENTS.filter((el) => el.href === '/'+router.pathname.split('/')[1])[0]);
        }

    }, [router.pathname]);

    return active;
}