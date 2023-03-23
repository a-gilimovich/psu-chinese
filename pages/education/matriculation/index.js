import PageLayout from "../../../components/layouts/page-layout";
import Contact from "../../../components/contact";
import Head from 'next/head'

const Index = () => {
    return (
        <>
            <div className={'content-wrapper'}>
                <div className={'description-wrapper_full'}>
                    <h1>大學預科教育</h1>
                    <div className={'matriculation-container'}>
                        <div>
                            <h2>為準備外國學生進入大學、開設了全日制預科系。</h2>
                            <p className={'small-margin'}><span className={'accent'}>學費</span>：每學年<span className={'montserrat'}>1800</span>美元起。</p>
                            <p className={'small-margin'}><span className={'accent'}>培訓時間</span>：<span className={'montserrat'}>10</span> 個月 - 從 <span className={'montserrat'}>9</span> 月 <span className={'montserrat'}>1</span> 日至 <span className={'montserrat'}>6</span> 月 <span className={'montserrat'}>30</span> 日。</p>
                            <p className={'small-margin'}>學生一到就開始上課。</p>
                            <p className={'small-margin'}>教育過程以學習俄語和未來專業科目為基礎。培訓在三個教育概況中進行：</p>
                            <p className={'small-margin'}>人道主義、經濟的、技術的。</p>
                            <p className={'small-margin'}>畢業後、學生參加考試、以確定未來專業的語言和科目的知識程度。成功完成大學預科課程並通過考試的人將獲得證書、允許他們繼續在白俄羅斯共和國、烏克蘭和俄羅斯聯邦的高等教育機構接受教育。</p>
                        </div>
                        <div>
                            <Contact person={{ // Приемная ректора
                                surname: '校长接待',
                                name: '罗曼诺夫·奥列格·亚历山德罗维奇',
                                desc: '大学校长、哲学博士、教授',
                                phones: '+375 214 59 95 35、 +375 214 59 95 36',
                                location: ['白俄罗斯维捷布斯克州新波洛茨克市、布洛希纳街',
                                    <span key={1} className={'montserrat'}>29</span>, '号、',
                                    <span key={2} className={'montserrat'}>266</span>, '室、邮编：',
                                    <span key={3} className={'montserrat'}>211440</span>],
                                mail: 'o.romanov@psu.by'
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Index.getLayout = function getLayout(page) {
    return (
        <>
            <Head>
                <title>预科</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="keywords" content="大學預科教育, 预科"></meta>
                <meta name="description" content=""></meta>
            </Head>
            <PageLayout>
                {page}
            </PageLayout>
        </>
    )
}

export default Index;