import Link from 'next/link'
import {useActive} from "../../hooks/useActive";
import Loading from "../loading";
import {ELEMENTS} from "./menu-items";

const HomePage = ({activeId}) => {
    const active = ELEMENTS.filter(e => e.id === activeId)[0];

    return (
        <>
            {active.name === undefined ?
                <Loading/> :

                <div className={'content-wrapper'}>
                    <div className={'content-image ' + active.className}
                         style={{backgroundImage: `url(${active.imageURL})`}}>
                    </div>

                    <div className={'description-wrapper'}>
                        <h1>{active.name}</h1>
                        <h2 className={'h2-max-width'}>{active.caption}</h2>
                        {active.description ? active.description.map((el) => {
                            return <div key={el} className={'p small-margin'}>{el}</div>
                        }) : undefined}

                        <div className={'buttons-wrapper'}>
                            {
                                active.links ? active.links.map((el) => {
                                    return <Link href={el.href} key={el.id}><a>
                                        <div className={'button'}>{el.name}</div>
                                    </a></Link>
                                }) : undefined
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default HomePage;