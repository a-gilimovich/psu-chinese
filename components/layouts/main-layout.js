import React from 'react';
import Logo from "../logo";
import {useActive} from "../../hooks/useActive";
import Networks from "../networks";
import Menu from "../menu";
import Ticker from "../ticker";
import Sidebar from "../sidebar";

const MainLayout = ({children, ...props}) => {
    const active = useActive();

    return (
        <div translate={'no'} className='wrapper' {...props}>
            <nav className={'nav nav_open'}>
                <div className={'nav__wrapper'}>
                    <div className={'nav__top'}>
                        <div className={'nav__logo-container'}>
                            <Logo />
                        </div>

                        <div className={'nav_line line'}>
                            <div className={'line__counter'}>
                                {active !== {} ? (active.id < 10 ? '0' + active.id : active.id) : undefined}
                            </div>

                            <div className={'line__strip'}></div>
                        </div>

                        <Sidebar />
                    </div>

                    <Menu open={true}/>

                    <div className={'nav__bot'}>
                        <Networks />
                        <div className={'nav__copyright'}>
                            <div>© 2023&ensp;</div>
                            <div>Euphrosyne Polotskaya State University of Polotsk</div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={'block-2'}>
                <div className={'block-2__line line'}>
                    <div className={'line__counter'}>
                        {active !== {} ? (active.id < 10 ? '0' + active.id : active.id) : undefined}
                    </div>

                    <div className={'line__strip'}></div>

                    <Sidebar />
                </div>

                <main className={'main main_relative'}>
                    <div className={'main__content main__content_absolute'}>
                        {children}
                    </div>
                </main>

                <footer className={'footer'}>
                    <Networks />
                    <div className={'nav__copyright'}>
                        <div>© 2022&ensp;</div>
                        <div>Polotsk State University</div>
                    </div>
                    <Ticker />
                </footer>
            </div>
        </div>
    );
};

export default MainLayout;