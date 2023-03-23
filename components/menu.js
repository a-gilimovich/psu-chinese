import React, {useEffect} from 'react';
import {ELEMENTS} from "./home-pages/menu-items";
import Link from "next/link";
import {useActive} from "../hooks/useActive";
import {useSubActive} from "../hooks/useSubActive";
import {useRouter} from "next/router";

const Menu = ({open, sub}) => {
    const active = useActive();
    const router = useRouter();

    return (
        <>
            <div className={('nav__menu menu' + (open === true ? ' nav__menu_open' : ''))}>
                <ul className={'menu__list'}>
                    {
                        ELEMENTS.map((element, index) => {
                            return <MenuElement key={element.id}
                                                element={element}
                                                active={active !== {} ?
                                                    JSON.stringify(active) === JSON.stringify(element)
                                                    : undefined}/>
                        })
                    }
                </ul>
            </div>

            <div className={'nav__sub'} style={sub === false ? {display: 'none'} : undefined}>
                {active.links ? active.links.map((el, index) => {
                    return <Link href={el.href} key={el.id}>
                        <a className={'nav-sub__item' +
                            (el.href === router.pathname ? ' nav-sub__item_active' : '')}
                           style={el.id === active.links[active.links.length-1].id ? {'marginRight': '0'} : undefined}>
                            {el.name}
                        </a>
                    </Link>
                }) : undefined}
            </div>
        </>
    );
};

const MenuElement = ({element, active}) => {
    return (
        <Link href={element.href}><a>
            <div className={'menu-li__before' + (active === true ? ' menu-li__before_active' : '')}>
            </div>
            <li className={'menu__li' + (active === true ? ' menu__li_active' : '')}>
                {element.name}
            </li>
        </a></Link>
    );
}

export default Menu;