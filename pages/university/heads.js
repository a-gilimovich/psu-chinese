import PageLayout from "../../components/layouts/page-layout";
import Person from "../../components/person";
import Head from 'next/head'

const Index = () => {
    return (
        <div className={'heads'}>
            <h1>领导</h1>
            <div className={'heads__elements'}>
{                <Person person={{ // Романовский
                    src: '/images/university/heads/rector.webp',
                    surname: '罗曼诺夫斯基',
                    name: '尤里·亚森托维奇',
                    desc: ' ',
                    phones: ['+375 214 59 95 35,', '+375 214 59 95 36'],
                    location: ['白俄罗斯维捷布斯克州新波洛茨克市、布洛希纳街',
                        <span key={1} className={'montserrat'}>29</span>, '号、',
                        <span key={2} className={'montserrat'}>266</span>, '室、邮编：',
                        <span key={3} className={'montserrat'}>211440</span>],
                    mail: 'y.romanovski@psu.by'
                }}/>}

<Person person={{ // Голубева
                    src: '/images/university/heads/golubeva.webp',
                    surname: '戈卢别娃',
                    name: '奥克萨娜·瓦列里耶夫娜',
                    desc: '第一副校长、物理和数学博士、副教授',
                    phones: ['+375 214 59 95 34,', '+375 214 59 95 36'],
                    location: ['白俄罗斯维捷布斯克州新波洛茨克市、布洛希纳街',
                        <span key={1} className={'montserrat'}>29</span>, '号、',
                        <span key={2} className={'montserrat'}>266</span>, '室、邮编：',
                        <span key={3} className={'montserrat'}>211440</span>],
                    mail: 'o.golubeva@psu.by'
                }}/>

                <Person person={{ // Голубев
                    src: '/images/university/heads/golubev.webp',
                    surname: '戈卢别夫',
                    name: '尤里·彼得罗维奇',
                    desc: '教学工作副校长、教育学博士、副教授',
                    phones: ['+375 214 50 57 99'],

                    location: ['白俄罗斯维捷布斯克州新波洛茨克市、布洛希纳街',
                        <span key={1} className={'montserrat'}>29</span>, '号、',
                        <span key={2} className={'montserrat'}>262</span>, '室、邮编：',
                        <span key={3} className={'montserrat'}>211440</span>],
                    mail: 'y.golubev@psu.by'
                }}/>

                <Person person={{ // Бурая
                    src: '/images/university/heads/buraja.webp',
                    surname: '布朗',
                    name: '伊琳娜·弗拉基米罗夫娜',
                    desc: '学术工作副校长、教育学博士、副教授',
                    phones: ['+375 214 50 57 99'],
                    location: ['白俄罗斯维捷布斯克州新波洛茨克市、布洛希纳街',
                        <span key={1} className={'montserrat'}>29</span>, '号、',
                        <span key={2} className={'montserrat'}>262</span>, '室、邮编：',
                        <span key={3} className={'montserrat'}>211440</span>],
                    mail: 'i.buraya@psu.by'
                }}/>

                <Person person={{ // Коваленко
                    src: '/images/university/heads/kovalenko.webp',
                    surname: '科瓦连科',
                    name: '帕维尔·瓦西里耶维奇',
                    desc: '教育工作副校长、教育学博士、副教授',
                    phones: ['+375 214 50 57 02'],
                    location: ['白俄罗斯维捷布斯克州新波洛茨克市、布洛希纳街',
                        <span key={1} className={'montserrat'}>29</span>, '号、',
                        <span key={2} className={'montserrat'}>259</span>, '室、邮编：',
                        <span key={3} className={'montserrat'}>211440</span>],
                    mail: 'p.kovalenko@psu.by'
                }}/>

                <Person person={{ // Михова
                    src: '/images/university/heads/mihova.webp',
                    surname: '米霍娃',
                    name: '叶连娜·谢尔盖耶夫娜',
                    desc: '副校长',
                    phones: ['+375 214 50 57 04'],
                    location: ['白俄罗斯维捷布斯克州新波洛茨克市、布洛希纳街',
                        <span key={1} className={'montserrat'}>29</span>, '号、',
                        <span key={2} className={'montserrat'}>252</span>, '室、邮编：',
                        <span key={3} className={'montserrat'}>211440</span>],
                    mail: 'e.mihova@psu.by'
                }}/>
            </div>
        </div>
    );
};

Index.getLayout = function getLayout(page) {
    return (
        <>
            <Head>
                <title>领导</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="keywords" content="罗曼诺夫 奥列格·亚历山德罗维奇, 戈卢别娃 奥克萨娜·瓦列里耶夫娜, 布朗 伊琳娜·弗拉基米罗夫娜, 戈卢别夫 尤里·彼得罗维奇,  
                                               科瓦连科 帕维尔·瓦西里耶维奇 , 米霍娃 叶连娜·谢尔盖耶夫娜"></meta>
                <meta name="description" content=""></meta>
            </Head>
            <PageLayout>
                {page}
            </PageLayout>
        </>
    )
}

export default Index;