import PageLayout from "../../components/layouts/page-layout";
import Head from 'next/head'

const Index = () => {
    return (
        <div className="container">
            <h1>
                我们的传统
            </h1>
            <div className={'main-video'}>
                <video className="video-background" autoPlay loop muted nocontrols='true'>
                    <source src="/images/university/traditions/traditions-video.mp4"></source>
                </video>
            </div>
            <div>
                <h2 className={'accent'}>我们的传统</h2>
                <div className="text">
                    <p className={'indent'}>波洛茨克国立大学的现代史从<span className={'montserrat'}>1968</span>年开始。在这之前的十年内、
                        波洛茨克国立大学的现代史从1968年开始。在这之前的十年内、在古城波洛茨克市附件建立了一个新的大型石油化工中心— 新波洛茨克。这个年轻而有发展前景的新城拥有欧洲最大的石油加工厂之一、这自然也需要大量受过高等教育的人才。首先、急需的就是工程师、化学工程师、化学工程方面的机械专家、建筑师和技工等。</p>
                    <p className={'indent'}>为了培养这些人才创建了白俄罗斯国立工学院新波洛茨克分校。可以说分校发展迅猛、在<span className={'montserrat'}>1974</span>年就在分校的基础上成立了独立的新波洛茨克工学院。苏联各方面的学术专家被邀请到了新波洛茨克工学院、在这里他们积极开发企业所需要的新技术。</p>
                    <p className={'indent'}>也正是这些学者们的热情、职业精神和勇敢让新波洛茨克工学院发展壮大、不仅使工学院成为培养顶级工程师的中心、而且开拓了区域所需的人文领域方向。在这个基础上、在<span className={'montserrat'}>1993</span>年成立波洛茨克国立大学、这是一所标准的现代化欧洲大学。</p>
                    <p className={'indent'}>尽管大学的主要校区位于新波洛茨克市、但命名为“波洛茨克国立大学”这是不偶然的。波洛茨克市拥有几百年的教育传统。早在<span className={'montserrat'}>1581</span>年、在古波洛茨克市就成立了波洛茨克耶稣学院、这个神学院很快就成了教育和文化中心。正式因为神学院极高的学术水平、<span className={'montserrat'}>1812</span>年在耶稣学院的基础上建立了波洛茨克耶稣科学院、这是白俄罗斯境内第一所现代高等教育机构。</p>
                    <p className={'indent'}>从创建耶稣科学院那天起、可以说发展教育的道路及其曲折、甚至几经关闭。但是神学院所承载的优秀教育传统不会消失。而波洛茨克国立大学正是传承和发扬了这样的优秀教育传统、在所在地区发展大学教育。</p>
                    <p className={'indent'}>同时、还有标志性的历史事件不得不说一下、之前的耶稣学院主楼成为了波洛茨克大学校区的一部分。在<span className={'montserrat'}>2005</span>年完成了对耶稣学院老楼进行现代化改造的工作、同时在改造后的老楼里开始有大学生学习。高等教育的培养回到了它开始的地方。</p>
                </div>
                <div className="images">
                    <div className={'img img_with-margin'}>
                        <img src={'/images/university/traditions/1.webp'}/>
                        <h2 className={"accent"}>我们的传统</h2>
                        <p className={'indent'}>在之前的波洛茨克耶稣学院院内、每隔一个小时便会响起国际大学生体育联合会会歌<span className={"montserrat"}>“Gaudeamus”</span>和波洛茨克大学校歌。随着音乐的响起、在古钟下会依次展示著名历史人物的蜡像。</p>
                    </div>
                    <div className={'img img_with-margin'}>
                        <img src={'/images/university/traditions/2.webp'}/>
                        <h2 className={"accent"}>将自己写进历史</h2>
                        <p className={'indent'}>隆重的一年级新生注册仪式也是从波洛茨克耶稣学院那时开始的。在新学年开始时、大学新生会通过校长通道并在“波洛茨克大学”登记簿上签上自己的名字。</p>
                    </div>
                    <div className={'img img_with-margin'}>
                        <img src={'/images/university/traditions/3.webp'}/>
                        <h2 className={"accent"}>音乐会</h2>
                        <p className={'indent'}>每周三工作日的中午、在大学会有现场的演出。演出会持续半个小时、演出节目从古典到现代、同时还提供好喝的茶</p>
                    </div>
                    <div className={'img img_with-margin'}>
                        <img src={'/images/university/traditions/4.webp'}/>
                        <h2 className={"accent"}>知识源</h2>
                        <p className={'indent'}>每年大学会举办隆重的颁奖仪式、为在大学各个领域做出贡献的人提供专门奖励。红毯环节、节日音乐会和对提名者的奖励成为校园生活中令人深刻的记忆和难闻的事情。</p>
                    </div>
                    <div className={'img img_with-margin'}>
                        <img src={'/images/university/traditions/5.webp'}/>
                        <h2 className={"accent"}>大学生建筑队</h2>
                        <p className={'indent'}>大学生建筑队活动也是大学延续的多年传统。建筑队<span className={"montserrat"}>“EUREKA”</span>和<span className={"montserrat"}>“ZODIACS”</span>会在白俄罗斯众多的大学生建筑队中脱颖而出并赢得很多的奖励。</p>
                    </div>
                    <div className={'img img_with-margin'}>
                        <img src={'/images/university/traditions/6.webp'}/>
                        <h2 className={"accent"}>花伞节</h2>
                        <p className={'indent'}>春天最重要的活动之一就是花伞节。在花伞节上会有各种娱乐活动、不仅吸引着大学的学生和老师们、还吸引着来自城市中的客人们。</p>
                    </div>
                    <div className={'img img_with-margin'}>
                        <img src={'/images/university/traditions/7.webp'}/>
                        <h2 className={"accent"}>为毕业生举办的露天活动</h2>
                        <p className={'indent'}>这个活动不仅保留了传统、而且还进行了创新。因为露天活动中是为毕业生举办的、他们有机会补充自己喜爱的活动和自己非常期待的夏季节日。</p>
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
                <title>传统</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="keywords" content="传统, 我们的传统, 我们的传统, 我们的传统, 将自己写进历史, 音乐会, 知识源, 大学生建筑队, 花伞节"></meta>
                <meta name="description" content=""></meta>
            </Head>
            <PageLayout>
                {page}
            </PageLayout>
        </>
    )
}

export default Index;