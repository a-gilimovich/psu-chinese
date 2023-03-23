import PageLayout from "../../components/layouts/page-layout";
import Comement from "../../components/comment";
import Head from 'next/head'

const Index = () => {
    return (
        <div className={'comments'}>
            <h1>政府积极参加大学的发展和建设</h1>
            <div className={'comment-list'}>
                <Comement data={{
                    text: ['波洛茨克国立大学校长奥列格·亚历山德罗维奇·罗曼不仅为大学的发展做着自己的贡献，同时他也为白俄罗斯国家的发展做出了贡献。他代表格罗德诺州成为了第七届白俄罗斯国民议会共和国委员会成员，他也是白俄罗斯共和国国民议会立法和国家建设委员会常委。'],
                    src: '/images/university/life-of-the-university/1.webp'
                }} position={'right'}/>

                <Comement data={{
                    text: ['奥列格·亚历山德罗维奇不仅发展了大学与企业和教育机构的区域关系，而且还发展了国际关系。 这就是波洛茨克国立大学与俄罗斯联邦合作的原因。  2022年6月2日，俄罗斯联邦驻白俄罗斯共和国代表处与波洛茨克国立大学签署合作协议。据此，在共同努力的之下，俄罗斯语言、历史和文化中心在波洛茨克学院成立。'],
                    src: '/images/university/life-of-the-university/2.webp'
                }} position={'left'}/>

                <Comement data={{
                    text: ['2022年4月8日，浙江树人大学（中华人民共和国）与波洛茨克国立大学在线上举行了隆重的合作签署仪式。'],
                    src: '/images/university/life-of-the-university/3.webp'
                }} position={'right'}/>

                <Comement data={{
                    text: ['2012年5月25日，白俄罗斯共和国总统亚历山大·格里戈里耶维奇·卢卡申科出席了波洛茨克市建城1150周年的纪念活动，并参观了波洛茨克国立大学。在这里他听取了委派的有关修复和重建大学建筑物中前耶稣会学院的执行情况。亚历山大·格里戈里耶维奇·卢卡申科参观了大学的校园，熟悉了教育组织的过程，与学生们进行了交谈。'],
                    src: '/images/university/life-of-the-university/4.webp'
                }} position={'left'} last/>

                <Comement data={{
                    text: ['2021年10月9日，在波洛茨克国立大学，白俄罗斯共和国国民议会共和国委员会主席娜塔莉亚·伊万诺夫娜·科恰诺娃以公开对话的形式会见了大学师生。娜塔莉亚·伊万诺夫娜 — 毕业于新波洛茨克理工学院，因此在友好的气氛中进行了母校见面会。'],
                    src: '/images/university/life-of-the-university/5.webp'
                }} position={'right'} last/>
                
                <Comement data={{
                    text: ['2022年1月17日，在波洛茨克国立大学，维捷布斯克州州长亚历山大·米哈伊洛维奇·苏博廷与大学领导及新波洛茨克市政府举行了工作见面会。在工作访问期间，亚历山大·米哈伊洛维奇了解了大学工程技术类科学实验室的基础设施及大学师生们的发展前景。'],
                    src: '/images/university/life-of-the-university/6.webp'
                }} position={'left'} last/>

                <Comement data={{
                    text: ['2022年4月21日，白俄罗斯共和国教育部部长安德烈·伊万诺维奇·伊万内茨出席了在波洛茨克国立大学举行的《白俄罗斯国家历史》学科教育刊物手稿讨论对话会。'],
                    src: '/images/university/life-of-the-university/7.webp'
                }} position={'right'} last/>

                <Comement data={{
                    text: ['我们的大学毕业生-市执行委员会主席：德米特里·弗拉基米罗维奇·德米多夫也是波拉茨克国立大学尊贵的客人，活动的积极参与者。'],
                    src: '/images/university/life-of-the-university/8.webp'
                }} position={'left'} last/>
            </div>
        </div>
    );
};

Index.getLayout = function getLayout(page) {
    return (
        <>
            <Head>
                <title>政府积极参加大学的发展和建设</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="keywords" content="政府积极参加大学的发展和建设, "></meta>
                <meta name="description" content=""></meta>
            </Head>
            <PageLayout>
                {page}
            </PageLayout>
        </>
    )
}

export default Index;