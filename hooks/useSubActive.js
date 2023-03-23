import React, { useState, useEffect } from 'react';
import {useRouter} from "next/router";
import {useActive} from "./useActive";

export function useSubActive() {
    const [subActive, setSubActive] = useState({});
    const active = useActive();
    const router = useRouter();

    useEffect(() => {
        if(active.links && active.links.filter(e => e.href === router.pathname).length > 0)
            setSubActive(active.links.filter(e => e.href === router.pathname)[0]);
        else setSubActive({});

    }, [active, router.pathname]);

    return subActive;
}