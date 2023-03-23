import React, {useEffect, useState} from 'react';

const Sidebar = ({hide}) => {
    const LIGHT = {
        BACKGROUND: '#ffffff',
        COLOR: '#282828',
        BORDER_COLOR_LIGHT: '#B0B0B0',
        BORDER_COLOR_DARK: '#B1B1B1',
        MENU_ITEM_COLOR: '#B1B1B1',
        TABLE_COLOR_DARK: '#EDEDED',
        FILTER: 'none'
    }

    const DARK = {
        BACKGROUND: '#282828',
        COLOR: '#F1F1F1',
        BORDER_COLOR_LIGHT: '#F1F1F1',
        BORDER_COLOR_DARK: '#F1F1F1',
        MENU_ITEM_COLOR: '#F1F1F1',
        TABLE_COLOR_DARK: '#313131',
        FILTER: 'invert(100%)'
    }

    const USUAL_LIGHT = {
        ACCENT_COLOR: '#EC6B4A',
        ACCENT_COLOR_2: '#F19F8A',
    }

    const USUAL_DARK = {
        ACCENT_COLOR: '#EC6B4A',
        ACCENT_COLOR_2: '#F19F8A',
    }

    const SEE_LIGHT = {
        ACCENT_COLOR: '#282828',
        ACCENT_COLOR_2: '#282828',
    }

    const SEE_DARK = {
        ACCENT_COLOR: '#F1F1F1',
        ACCENT_COLOR_2: '#F1F1F1',
    }

    const [theme, setTheme] = useState({});
    const [visuallyImpaired, setVisuallyImpaired] = useState(null);


    const changeTHEME = () => {
        setTheme(JSON.stringify(theme) === JSON.stringify(LIGHT) ? DARK : LIGHT);
    }

    const changeSEE = () => {
        setVisuallyImpaired(!visuallyImpaired);
    }

    useEffect(() => {
        if(Object.keys(theme).length === 0 && localStorage.getItem('theme') !== null && localStorage.getItem('theme') !== '{}')
            setTheme(JSON.parse(localStorage.getItem('theme')));
        else if(Object.keys(theme).length === 0) {
            setTheme(LIGHT);
        }
        else localStorage.setItem('theme', JSON.stringify(theme));

        //----

        if(visuallyImpaired === null && localStorage.getItem('visuallyImpaired') !== null)
            setVisuallyImpaired(localStorage.getItem('visuallyImpaired') === 'true');
        else if(visuallyImpaired === null) {
            setVisuallyImpaired(false);
        }
        else {
            localStorage.setItem('visuallyImpaired', visuallyImpaired.toString());
        }

        //----

        document.querySelector(':root').style.setProperty('--BACKGROUND', theme.BACKGROUND);
        document.querySelector(':root').style.setProperty('--COLOR', theme.COLOR);
        document.querySelector(':root').style.setProperty('--BORDER_COLOR_LIGHT', theme.BORDER_COLOR_LIGHT);
        document.querySelector(':root').style.setProperty('--BORDER_COLOR_DARK', theme.BORDER_COLOR_DARK);
        document.querySelector(':root').style.setProperty('--MENU_ITEM_COLOR', theme.MENU_ITEM_COLOR);
        document.querySelector(':root').style.setProperty('--TABLE_COLOR_DARK', theme.TABLE_COLOR_DARK);
        document.querySelector(':root').style.setProperty('--FILTER', theme.FILTER);

        if(JSON.stringify(theme) === JSON.stringify(LIGHT) && visuallyImpaired === false) {
            document.querySelector(':root').style.setProperty('--ACCENT_COLOR', USUAL_LIGHT.ACCENT_COLOR);
            document.querySelector(':root').style.setProperty('--ACCENT_COLOR_2', USUAL_LIGHT.ACCENT_COLOR_2);
        }
        else if(JSON.stringify(theme) === JSON.stringify(LIGHT) && visuallyImpaired === true) {
            document.querySelector(':root').style.setProperty('--ACCENT_COLOR', SEE_LIGHT.ACCENT_COLOR);
            document.querySelector(':root').style.setProperty('--ACCENT_COLOR_2', SEE_LIGHT.ACCENT_COLOR_2);
        }
        else if(JSON.stringify(theme) === JSON.stringify(DARK) && visuallyImpaired === false) {
            document.querySelector(':root').style.setProperty('--ACCENT_COLOR', USUAL_DARK.ACCENT_COLOR);
            document.querySelector(':root').style.setProperty('--ACCENT_COLOR_2', USUAL_DARK.ACCENT_COLOR_2);
        }
        else if(JSON.stringify(theme) === JSON.stringify(DARK) && visuallyImpaired === true) {
            document.querySelector(':root').style.setProperty('--ACCENT_COLOR', SEE_DARK.ACCENT_COLOR);
            document.querySelector(':root').style.setProperty('--ACCENT_COLOR_2', SEE_DARK.ACCENT_COLOR_2);
        }
    }, [theme, visuallyImpaired]);

    return (
        <div className={'nav__settings'} style={hide === true ? {display: 'none'} : undefined}>
            <svg className={'nav__svg-set'} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={changeSEE}>
                <path d="M20.0003 27.9999C16.2374 27.9999 12.6526 25.6779 9.34445 21.0978C8.88518 20.4618 8.88518 19.5379 9.34445 18.9029C12.6526 14.322 16.2373 12 20.0003 12C23.7633 12 27.3488 14.322 30.6561 18.9021C31.1145 19.539 31.1145 20.462 30.657 21.0979C27.3489 25.678 23.7631 28 20.0004 28L20.0003 27.9999ZM10.0649 19.5211C9.86789 19.7942 9.86789 20.2072 10.0649 20.48C13.1897 24.806 16.5327 26.9998 20.0003 26.9998C23.4679 26.9998 26.811 24.8059 29.9364 20.4788C30.1325 20.2057 30.1325 19.7937 29.9355 19.5208C26.8107 15.194 23.4678 12.9998 20.0001 12.9998C16.5325 12.9998 13.1895 15.1936 10.0648 19.5208L10.0649 19.5211Z" fill="#282828" filter={"var(--FILTER"}/>
                <path d="M20.0002 23.9998C17.9781 23.9998 16.3337 22.2059 16.3337 19.9999C16.3337 17.7939 17.9781 16 20.0002 16C22.0223 16 23.6667 17.7939 23.6667 19.9999C23.6667 22.2059 22.0223 23.9998 20.0002 23.9998ZM20.0002 17C18.4841 17 17.2503 18.346 17.2503 20C17.2503 21.654 18.4841 22.9999 20.0002 22.9999C21.5163 22.9999 22.7501 21.654 22.7501 20C22.7501 18.346 21.5163 17 20.0002 17Z" fill="#282828" filter={"var(--FILTER"}/>
            </svg>

            <svg className={'nav__svg-set'} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={changeTHEME}>
                <circle cx="20" cy="20" r="8.6" stroke="#282828" strokeWidth="0.8" filter={"var(--FILTER"}/>
                <path d="M20 20C20 24.9706 20 23.5 20 29C15.0294 29 11 24.9706 11 20C11 15.0294 15.0294 11 20 11C20 13.5 20 15.0294 20 20Z" fill="#282828" filter={"var(--FILTER"}/>
            </svg>
        </div>
    );
};

export default Sidebar;