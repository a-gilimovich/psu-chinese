import HomePage from "../../components/home-pages/home-page";
import MainLayout from "../../components/layouts/main-layout";
import Contact from "../../components/contact";
import Head from "next/head";

const Index = () => {
    return (
        <div className={'content-wrapper'}>
            <div className={'description-wrapper description-wrapper_full '}>
                <h1>联系人</h1>
                <div className={'contacts-container'}>
                    <Contact person={{ // Приемная ректора
                        surname: '校长接待',
                        name: '罗曼诺夫·奥列格·亚历山德罗维奇',
                        desc: '大学校长、哲学博士、教授',
                        phones: '+375 214 59 95 35、 +375 214 59 95 36',
                        location: ['白俄罗斯维捷布斯克州新波洛茨克市、布洛希纳街',
                            <span key={1} className={'montserrat'}>29</span>, '号、',
                            <span key={2} className={'montserrat'}>266</span>, '室、邮编：',
                            <span key={3} className={'montserrat'}>211440</span>],
                        mail: 'y.romanovski@psu.by'
                    }}/>
                    <Contact person={{ //
                        surname: '预科',
                        name: '娜诺丝·安娜·弗拉基米罗夫娜',
                        desc: '预科系主任',
                        phones: '+375 214 50 58 34、 +375 29 719 93 13',
                        location: ['白俄罗斯维捷布斯克州新波洛茨克市、布洛希纳街',
                            <span key={1} className={'montserrat'}>30</span>, '号、',
                            <span key={2} className={'montserrat'}>229</span>, '室、',
                            <span key={3} className={'montserrat'}>235</span>, '室、邮编：',
                            <span key={4} className={'montserrat'}>211440</span>],
                        mail: 'po@psu.by'
                    }}/>
                    <Contact person={{
                        surname: '外国公民教育中心 ',
                        name: '马加林斯基·伊戈尔·弗拉基米罗维奇',
                        desc: [<span key={1} className={'montserrat'}>УМО</span>, '副主任'],
                        phones: '+375 214 50 57 62、+375 29 515 57 29 (Viber、 WhatsApp)、 +375 29 798 09 09',
                        location: ['白俄罗斯维捷布斯克州新波洛茨克市、布洛希纳街',
                            <span key={1} className={'montserrat'}>29</span>, '号、',
                            <span key={2} className={'montserrat'}>348</span>, '室、邮编：',
                            <span key={3} className={'montserrat'}>211440</span>],
                        mail: 'o.zhuravskaya@psu.by、 fis@psu.by'
                    }}/>
                    <Contact person={{
                        surname: '中国办公室 ',
                        name: 'Richard Li',
                        desc: ['中国首席代表'],
                        phones: '86-010-67333987',
                        location: ['北京市朝阳区南新园西路',
                            <span key={1} className={'montserrat'}>8</span>, '号龙头公寓、',
                            <span key={2} className={'montserrat'}>S908</span>, '、邮编：',
                            <span key={3} className={'montserrat'}>100022</span>],
                        mail: 'richard.li@psu.by',
                        dop: {
                            name: 'Alex Liu',
                            desc: ['中国办公室经理'],
                            mail: 'chinaoffice@psu.by',
                        }
                    }}/>
                </div>
            </div>
        </div>
    );
};

Index.getLayout = function getLayout(page) {
    return (
        <>
            <Head>
                <title>联系人</title>
            </Head>
            <MainLayout>
            {page}
        </MainLayout>
        </>
    )
}

export default Index;