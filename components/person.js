const Person = ({person}) => {
    return (
        <div className={'person'}>
            <div className={'person__photo '}>
                <img src={person.src}/>
            </div>

            <div className={'person__caption'}>
                <h2>{person.surname}<br/>
                    {person.name}</h2>
                <p>{person.desc}</p>
            </div>

            <div className={'person__contacts person-contacts'}>
                <div className={'person-contacts__block'}>
                    <div className={'person-contacts__icon person-contacts__icon_phone'}></div>
                    <div>
                        {person.phones ? person.phones.map((phone) => {
                            return <div className={'person-contacts__phone-number montserrat'} key={phone}>{phone}&nbsp;</div>;
                        }) : undefined}
                    </div>
                </div>
                <div className={'person-contacts__block'}>
                    <div className={'person-contacts__icon person-contacts__icon_location'}></div>
                    <div>{person.location}</div>
                </div>
                <div className={'person-contacts__block person-contacts__block_last'}>
                    <div className={'person-contacts__icon person-contacts__icon_mail'}></div>
                    <div className={'montserrat'}>{person.mail}</div>
                </div>
            </div>
        </div>
    );
};

export default Person;