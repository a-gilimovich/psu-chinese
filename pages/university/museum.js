import PageLayout from "../../components/layouts/page-layout";
import Head from 'next/head'

const Index = () => {
    return (
        <div className="container">
            <h1>
                博物馆特色
            </h1>
            <div className={'main-image'}
                 style={{backgroundImage: 'url("/images/museum/main-image.webp")'}}>
            </div>
            <div className="content">
                    <h2 className="accent">博物馆的基础</h2>
                    <p className={'indent small-margin'}>
                        波洛奇纳教育和科学博物馆成立于 <span className={"montserrat"}>2002</span> 年、大学的前任校长巴边科·恩斯特·米哈伊洛维奇是创建博物馆的倡议者、 格鲁德尼茨卡娅·塔玛拉·亚历山德罗夫娜是博物馆的创建者及第一任馆长。她参与了博物馆物品的鉴定、研究、记录和博物馆藏品的创作、她还是《博物馆条例》及其主题展览计划的作者。前第一任基金保管人玛丽娜·库克肖诺克对博物馆物品的管理和保存做出了重大贡献。博物馆专家米辛·帕维尔·伊万诺维奇负责研究和组织博物馆物品的推广。
                    </p>
                    <p className="indent small-margin">
                        <span className={"montserrat"}>2021</span>年<span className={"montserrat"}>9</span>月<span className={"montserrat"}>1</span>日历史与旅游系高级讲师格拉齐林·叶夫根尼·弗拉基米罗维奇被任命为博物馆馆长。
                    </p>
                    <p className="indent">
                        博物馆第一任馆长 - 格鲁德尼茨卡娅·塔玛拉·亚历山德罗夫娜
                    </p>
                <div className="museum-content">
                    <div className="museum-images">
                        <img src="/images/museum/1.webp" className="museum-img"/>
                        <img src="/images/museum/2.webp" className="museum-img"/>
                    </div>
                    <div className={"text-left"}>
                        <h2 className="accent">博物馆结构</h2>
                        <p className="indent small-margin">
                            博物馆由三个独立的房间组成。
                            位于图书馆二楼的是一个面积为<span className={"montserrat"}>143.8</span>平方米的博览厅、面积为24.5平方米的储藏室、一个博物馆工作人员办公室、位于图书馆三楼的是一个面积为<span className={"montserrat"}>23.9</span>平方米的俱乐部大堂建筑。博物馆主要藏品3963件、科学辅助藏品<span className={"montserrat"}>9344</span>件。
                        </p>
                        <p className="indent small-margin">
                            博物馆的陈列品分为以下几个部分：
                        </p>
                        <p className="indent small-margin">
                            &quot;PSU 是该地区的教育、科学、文化中心。&quot;
                        </p>
                        <p className="indent small-margin">&quot;波洛茨克学院（波洛茨克武备中学）的历史和建筑&quot;。</p>
                        <p className="indent small-margin">&quot;波洛茨克第 <span className={"montserrat"}>431</span> 军医院的历史&quot;。</p>
                        <p className={"indent small-margin"}>&quot;波洛茨克国立大学 — 该地区教育、科学和文化的中心&quot; 是一个位于新洛茨克布洛希纳街30号的展览厅、展示以下主题：</p>
                        <div className={"indent small-margin"}>
                            <ol className={"list"}>
                                <li>1. 我们的起源</li>
                                <li>2. 波洛茨克国立大学的发展阶段</li>
                                <li>3. 教育过程</li>
                                <li>4. 大学里的科学</li>
                                <li>5. 继续教育</li>
                                <li>6. 我们的骄傲</li>
                                <li>7. 学生建筑队</li>
                                <li>8. 波洛茨克国立大学的胜利士兵</li>
                                <li>9. NPI-PSU文化</li>
                                <li>10. 体育和旅游</li>
                                <li>11. 国际NPI–国际PSU</li>
                            </ol>
                        </div>
                        <p className={"indent small-margin"}>&quot;波洛茨克学院（波洛茨克武备中学）的历史和建筑&quot; 部分位于波洛茨克射手大街4号. 本部分展厅呈现三个主题：</p>
                        <div className={"indent small-margin"}>
                            <ol className={"list"}>
                                <li>1. 波洛茨克耶稣会学院</li>
                                <li>2. 波洛茨克武备中学</li>
                                <li>3. 波洛茨克第<span className={"montserrat"}>431</span>军医院</li>
                            </ol>
                        </div>
                        <p className={"indent"}>博物馆的发展计划预期设计创建展览馆的第三部分 — 《学生团队的历史》、位于波洛茨克区梅德雷奇耶大街和平4A-1</p>
                    </div>
                    </div>
                    <div className="museum-images">
                        <img src="/images/museum/3.webp" className="museum-img"/>
                        <img src="/images/museum/4.webp" className="museum-img"/>
                    </div>
                <div className={"text-left"}>
                    <h2 className="accent">博物馆藏品</h2>
                    <p className="indent small-margin">
                        博物馆的藏品分为以下几类：
                    </p>
                    <p className="indent small-margin">
                        照片文件收藏品 — 这是我们教育机构历史上的1231张照片；
                    </p>
                    <p className="indent small-margin">
                        <span className={"montserrat"}>583</span>件文献资料揭示了我们的历史事实；
                    </p>
                    <p className="indent small-margin">
                        旗帜学（旗帜研究）藏品、其中包括旗帜、幡帜、三角旗、标语牌——我们教育机构社会和政治生活的见证者。
                    </p>
                    <p className="indent small-margin">
                        文字收藏由与我们大学历史主题相关的图标组成；
                    </p>
                    <p className="indent small-margin">
                        手稿藏品是伟大卫国战争参与者的宝贵记忆、A.I.谢苗诺娃和B.T.纳德科拓的的博士论文、以及副博士论文；
                    </p>
                    <p className="indent small-margin">
                        仪器和设备藏品使我们能够直观地跟踪我校教育和科学过程科学技术设备的巨大变化；
                    </p>
                    <p className="indent small-margin">
                        <span className={"montserrat"}>UK 2 WAR</span>业余无线电台的藏品包括一个电台和来自世界各地电台的<span className={"montserrat"}>9500</span>多张丰富多彩的回执卡片、<span className={"montserrat"}>110</span>份证书和文凭；
                    </p>
                    <p className="indent small-margin">
                        考古学收藏品、包括在前耶稣协会、学院、武备中学区域中发现的材料、以及在它们附近的区域中发现的材料；
                    </p>
                    <p className="indent small-margin">
                        博物馆藏品中的民族志材料既有学生们-历史学家们的实地实践成果、也有大学工作人员的作品；
                    </p>
                    <p className="indent small-margin">
                        美术明信片藏品 - 这些是<span className={"montserrat"}>20</span>世纪<span className={"montserrat"}>60</span>年代至<span className={"montserrat"}>80</span>年代在白俄罗斯共和国出版的明信片和卡片集；
                    </p>
                    <p className="indent small-margin">
                        留声机唱片藏品——大约<span className={"montserrat"}>400</span>张、内容反映了<span className={"montserrat"}>20</span>世纪中叶苏联音乐爱好者的品味；
                    </p>
                    <p className="indent small-margin">
                        印刷出版物藏品、包括书籍、杂志、广告册、报纸、折叠册、日历（约 <span className={"montserrat"}>7000</span> 份）、是 MNAP最多的藏品。
                    </p>
                    <div className="indent p">
                        教育文献收藏包括以下藏品：
                        <ul className="dot-list">
                            <li>• 中学教育出版物、</li>
                            <li>• 高校教育出版物、</li>
                            <li>• NPI-PSU 出版的教育出版物、</li>
                            <li>• 大众政治出版物。</li>
                        </ul>
                    </div>
                </div>
                <div className="museum-content">
                    <div className="museum-images">
                        <img src="/images/museum/5.webp" className="museum-img"/>
                    </div>
                    <h2 className="accent">科学与启蒙</h2>
                    <p className="indent small-margin">
                        在研究和教育活动领域、博物馆出版了<span className={"montserrat"}>16</span>本藏书：
                    </p>
                    <p className="indent small-margin">
                        &quot;波洛茨克大学胜利的士兵&quot;（<span className={"montserrat"}>2004</span> 年）、
                    </p>
                    <p className="indent small-margin">
                        &quot;我们命运中的伟大卫国战争&quot;（<span className={"montserrat"}>2005</span> 年）和
                    </p>
                    <p className="indent small-margin">
                        &quot;我们森林中的 <span className={"montserrat"}>Vyalіkaya Aichynnaya Vayna</span>&quot;（<span className={"montserrat"}>2010</span> 年）；
                    </p>
                    <p className="indent small-margin">
                        总标题为 &quot;波洛茨克国立大学文化普拉斯托拉&quot;（<span className={"montserrat"}>2008-2010</span>）的 <span className={"montserrat"}>12</span> 部藏品；
                    </p>
                    <p className="indent small-margin">
                        &quot;学生建设队历史汇编&quot;（<span className={"montserrat"}>2014</span>年）。
                    </p>
                </div>
            </div>

        </div>

    );
};

Index.getLayout = function getLayout(page) {
    return (
        <>
            <Head>
                <title>博物馆</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="keywords" content="博物馆特色, 博物馆的基础, 博物馆结构, 博物馆藏品, 科学与启蒙"></meta>
                <meta name="description" content=""></meta>
            </Head>
            <PageLayout>
                {page}
            </PageLayout>
        </>
    )
}

export default Index;