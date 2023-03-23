const Comement = ({data, position, last}) => {
    return (
        <div className={'comment ' + (last === true ? 'comment_last' : '')}>
            <div className={'comment__img img_with-margin'}>
                <img className={'img_' + position} src={data.src}/>
            </div>
            <h2 className={'accent h2_' + position}>{data.caption}</h2>
            {data.text ? data.text.map((el, index) => {
                return <p key={el} className={`indent indent_${position} `  + ''}>
                    {el}
                </p>
            }) : undefined}
        </div>
    );
};

export default Comement;