const Contact = ({person}) => {
    return (
        <div className={'contact'}>
            <div className={'person__caption'}>
                <h2>{person.surname}</h2>
                <p>{person.name}<br/>
                    {person.desc}</p>
            </div>

            <div className={'person__contacts person-contacts'}>
                <div className={'person-contacts__block'}>
                    <div>电话: <span className={'accent montserrat'}>{person.phones}</span></div>
                </div>
                <div className={'person-contacts__block'}>
                    <div>地址: {person.location}</div>
                </div>
                <div className={'person-contacts__block'}>
                    <div>邮箱: <span className={'accent montserrat'}>{person.mail}</span></div>
                </div>
                {person.dop ?
                    <>
                        <br/>
                        <div className={'accent'}>{person.dop.name}<br/>
                            {person.dop.desc}</div>
                        邮箱: <span className={'accent montserrat'}>{person.dop.mail}</span>
                    </> : undefined}
            </div>
        </div>
    );
};

export default Contact;