import PageLayout from "../../components/layouts/page-layout";
import Head from 'next/head'

const Index = () => {
    return (
        <div className="container">
            <h1>
                创造力
            </h1>
            <div className={'main-image'}
                 style={{backgroundImage: 'url("/images/student-activities/creation/index.webp")'}}>
            </div>
            <div>
                <div className="text">
                    <p className={'indent small-margin'}>我们的学生有机会参加各种艺术团体：独唱工作室、
                        舞蹈工作室、学生剧院、智力游戏俱乐部和合唱团。</p>
                    <p className={'indent'}>我们为青年倡议的实施做出贡献，增加社会活动和有益于大学、学生的活动，
                        培养领导素质并组织有意义的休闲活动。独舞和舞蹈团体、智力游戏俱乐部和 KVN 以及学生剧院在大学里一直很受欢迎。</p>
                </div>
                <div className="images">
                    <div className={'img'}>
                        <img src={'/images/student-activities/creation/1.webp'}/>
                    </div>
                    <div className={'img'}>
                        <img src={'/images/student-activities/creation/2.webp'}/>
                    </div>
                    <div className={'img'}>
                        <img src={'/images/student-activities/creation/3.webp'}/>
                    </div>
                    <div className={'img'}>
                        <img src={'/images/student-activities/creation/4.webp'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

Index.getLayout = function getLayout(page) {
    return (
        <>
            <Head>
                <title>创造力</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="keywords" content="创造力"></meta>
                <meta name="description" content="创造力"></meta>
            </Head>
            <PageLayout>
                {page}
            </PageLayout>
        </>
    )
}

export default Index;