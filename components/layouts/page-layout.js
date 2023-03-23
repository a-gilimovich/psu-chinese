import React, {useEffect, useState} from 'react';
import Logo from "../logo";
import Networks from "../networks";
import Sidebar from "../sidebar";
import Ticker from "../ticker";
import Menu from "../menu";
import {useActive} from "../../hooks/useActive";
import {useSubActive} from "../../hooks/useSubActive";
import Link from "next/link";
import {useRouter} from "next/router";

const PageLayout = ({children, sub, ...props}) => {
    const [navOpen, setNavOpen] = useState(false);
    const subActive = useSubActive();
    const active = useActive();
    const router = useRouter();

    return (
        <div translate={'no'} className='wrapper' {...props}>
            <nav className={'nav'}>
                <div className={'nav__wrapper'}>
                    <div className={'nav__top'}>
                        <div className={'nav__logo-container'}>
                            <Logo hide={true} bigger={true}/>
                        </div>

                        <div className={'nav_line line'}>
                            <div className={'line__strip'}></div>
                        </div>

                        <Sidebar hide={!navOpen}/>

                        <div className={'button nav__button'}
                             onClick={() => setNavOpen(!navOpen)}>{navOpen === false ? '菜单' : '关闭'}</div>
                    </div>

                    <Menu open={navOpen} sub={sub}/>

                    <div className={'nav__bot'}>
                        <Networks />
                        <div className={'nav__copyright'}>
                            <div>© 2023&ensp;</div>
                            <div>Euphrosyne Polotskaya
State University</div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={'block-2'}>
                <div className={'block-2__line line'}>
                    <div className={'line__counter line__counter_text'}>
                        {subActive.name}
                    </div>

                    <div className={'block-2__nav-sub'}>
                        {active.links ? active.links.map((el, index) => {
                            return <Link href={el.href} key={el.id}>
                                <a className={'nav-sub__item'}
                                   style={el.href === router.pathname ? {display: 'none'} : undefined}>
                                    {el.name}
                                </a>
                            </Link>
                        }) : undefined}
                    </div>

                    <div className={'line__strip'}></div>

                    <Sidebar />
                </div>

                <main className={'main'}>
                    <div className={'main__content'}>
                        {children}
                    </div>
                </main>

                <footer className={'footer'}>
                    <Networks />
                    <div className={'nav__copyright'}>
                        <div>© 2023&ensp;</div>
                        <div>Polotsk State University</div>
                    </div>
                    <Ticker />
                </footer>
            </div>
        </div>
    );
};

export default PageLayout;