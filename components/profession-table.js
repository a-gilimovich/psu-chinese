import Link from 'next/link'

const Table = ({faculty, professions, active}) => {
    return (
        <div className={'profession-table-wrapper'}>
            <h2 className={'accent'}>{faculty}</h2>
            <div className={'profession-table'}>
                <div className={'profession-table__line profession-table__line_caption'}>
                    <div className={'profession-table__cell profession-table__cell_dark'}>职业</div>
                    <div className={'profession-table__cell'}>资质</div>
                    <div className={'profession-table__cell profession-table__cell_dark'}>教育形式</div>
                    <div className={'profession-table__cell'}>时期</div>
                    <div className={'profession-table__cell profession-table__cell_dark'}>教学语言</div>
                    <div className={'profession-table__cell'}>价格</div>
                </div>
                {professions ? professions.map((el) => {
                    return (
                        <div key={el.id} className={'profession-table__line' + (el.last === true ? ' profession-table__line_last' : '')}>
                            <div className={'profession-table__cell profession-table__cell_dark'}>
                                <Link href={el.src}><a className={el.active === true ? '' : 'not-active'}>
                                    {el.name}
                                </a></Link>
                            </div>
                            <div className={'profession-table__cell'}>{el.qualification}</div>
                            <div className={'profession-table__cell profession-table__cell_dark'}>{el.educationForm}</div>
                            <div className={'profession-table__cell'}>
                                <span className={'montserrat'}>{el.period}</span>年
                            </div>
                            <div className={'profession-table__cell profession-table__cell_dark'}>{el.language}</div>
                            <div className={'profession-table__cell montserrat'}>{el.price}</div>
                        </div>
                    )
                }) : undefined}
            </div>
        </div>
    );
};

export default Table;