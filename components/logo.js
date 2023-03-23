import Link from 'next/link'

const Logo = ({hide, bigger}) => {
    return (
        <Link href={'/'}><a className={'logo'}>
            <svg className={"logo__img" + (bigger === true ? ' logo__img_bigger' : '')} width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.8103 8.97248L15.9406 0L0 8.97248V26.987L15.9406 35.9595L31.8103 26.987V8.97248Z" fill="#282828" filter={"var(--FILTER)"}/>
            </svg>
            <div className={hide === true ? "logo__name logo__name_hide" : "logo__name"}>
                POLOTSK<br/>STATE<br/>UNIVERSITY
            </div>
        </a></Link>
    );
};

export default Logo;