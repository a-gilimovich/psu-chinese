import PageLayout from "../../components/layouts/page-layout";
import Head from 'next/head'

const Index = () => {
    return (
        <div className="container">
            <h1>
                体育
            </h1>
            <div className={'main-image'}
                 style={{backgroundImage: 'url("/images/student-activities/sport/index.webp")'}}>
            </div>
            <div>
                <div className="text">
                    <h2>体育协会</h2>
                    <p className={'indent small-margin'}>除了大一到大四列入大纲的体育必修课，水平较高的学生有机会通过基础训练班的筛选，
                        在基础训练班可以在专业教练的指导下进行如体操、篮球、排球、举重、柔道、滑雪、游泳、
                        摔跤、定向越野、旅行、足球以及健身等方面的训练。
                    </p>
                    <p className={'indent small-margin'}>学校为在校学习的有潜力的运动员开设了进阶体育班、从而为国家级和国际级比赛培养种子选手。</p>
                    <p className={'indent'}>基础训练班和进阶班的体育课是免费的！</p>
                </div>
                <div className="images">
                    <div className={'img'}>
                        <img src={'/images/student-activities/sport/1.webp'}/>
                    </div>
                    <div className={'img'}>
                        <img src={'/images/student-activities/sport/2.webp'}/>
                    </div>
                    <div className={'img'}>
                        <img src={'/images/student-activities/sport/3.webp'}/>
                    </div>
                    <div className={'img'}>
                        <img src={'/images/student-activities/sport/4.webp'}/>
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
                <title>体育</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="keywords" content="体育, 体育协会"></meta>
                <meta name="description" content="体育"></meta>
            </Head>
            <PageLayout>
                {page}
            </PageLayout>
        </>
    )
}

export default Index;