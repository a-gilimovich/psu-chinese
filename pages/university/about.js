import PageLayout from "../../components/layouts/page-layout";
import Head from 'next/head'

const Index = () => {
    return (
        <div className={'about-uni-container'}>
            <h1>波洛茨克国立大学一所团结、合作、高效的综合性大学</h1>
            <div className={'about-uni-container__big-image big-image'}
                 style={{backgroundImage: 'url("/images/university/about/index.webp")', backgroundPosition: '0 30%'}}>
            </div>
            <div className={'about-uni-container__content content'}>
                <div className={'about-uni-container__column'}>
                    <div className={'about-uni-container__text'}>
                        <div className={'about-uni-container__img about-uni-container__img_copy'}
                             style={{backgroundImage: 'url("/images/university/about/1.webp")',
                                 right: '0', backgroundPosition: 'left center'}}>
                        </div>
                        <p className={'indent small-margin'}>
                            在俄罗斯哲学中、有一个积极统一的概念 - 任何复杂的系统都应该被组织起来、使其所有组成部分都为相互强化从而使整个系统发挥作用。这一概念是波洛茨克国立大学战略发展的基础。
                        </p>
                        <p className={'indent small-margin'}>
                            在这里、技术型教育和社会人文教育、科学和商业、教学和培育和谐地融合在一起。这种融合有助于形成多方位的个性、并增加自身的竞争优势。
                        </p>
                        <p className={'indent'}>
                            根据世界领先的“网络计量学”大学排名、波洛茨克国立大学在全国<span className={'montserrat'}>50</span>
                            多所高等教育机构中排名第8位、是维捷布斯克州最好的教育机构。
                        </p>
                    </div>

                    <div className={'about-uni-container__img'}
                         style={{backgroundImage: 'url("/images/university/about/1.webp")',
                             backgroundPosition: 'left center'}}>
                    </div>

                    <div className={'about-uni-container__text'}>
                        <h2>事业统一</h2>
                        <p className={'indent small-margin'}>大学理念的一个重要组成部分是培养学生参与国家经济生活的意愿。</p>
                        <p className={'indent small-margin'}>在<span className={'montserrat'}>2020-2021</span>
                            学年、学生建筑团队“建筑师”成为《库兹巴斯<span className={'montserrat'}>300</span>》（俄罗斯克麦罗沃）国际学生建筑队的最佳施工单位。</p>
                        <p className={'indent small-margin'}>以苏联英雄V.I.耶罗尼科命名的大学生建筑队
                            <span className={'montserrat'}>“Эврика”</span>、
                            <span className={'montserrat'}>6</span>
                            年来一直是白俄罗斯最好的学生支队、也是全白俄罗斯青年建筑队比赛的获胜者、基于在工作中取得的高成就、他在该领域建立了良好的声誉。</p>
                        <p className={'indent small-margin'}>志工及初创活动让每个人都能发现自己的潜力。学践学统一既是学生们在自己感兴趣的专业上既可以学习、又可以进行实践。学生们很乐意为孤寡老人提供无偿援助、并积极参与儿童社会教育中心的合作。</p>
                        <p className={'indent small-margin'}>所有这些都有坚实的精神基础。</p>
                        <p className={'indent'}>根据波洛茨克国立大学与白俄罗斯东正教波洛茨克教区达成的协议、与神职人员定期举行会议、使学生们能够确定他们生活中的精神和道德方向。</p>
                    </div>

                    <div className={'about-uni-container__text'}>
                        <h2>个性统一</h2>
                        <p className={'indent small-margin'}>在波洛茨克国立大学、每个人都可以学习一门外语。</p>
                        <p className={'indent small-margin'}>课程在外语学习中心举行。</p>
                        <p className={'indent small-margin'}>大学为两个城市的青年创业和自营职业的区域发展做出了贡献。为了培养学生们和活跃居民们的商业能力、
                            波洛茨克国立大学开办了一所初创学校。学员与成功的商人、从业人员一起研究商业理念、提出自己的商业想法、然后提交给潜在的投资者、并付诸实施。</p>
                        <p className={'indent small-margin'}>有<span className={'montserrat'}>30</span>
                            多个运动和非运动单元为热衷于体育的学生和员工们提供服务、大学配备了现代化的健身房和专用大厅。</p>
                        <p className={'indent small-margin'}>波洛茨克国立大学的学生们正成为奥运会冠军和世界级运动员：</p>
                        <p className={'indent small-margin'}>安娜·索拉、伊琳娜·克里夫科、等等。</p>
                        <p className={'indent small-margin'}>善于创造的本性获得灵魂的职业。</p>
                        <p className={'indent small-margin'}>运转着<span className={'montserrat'}>20</span>
                            多个各类型的俱乐部。</p>
                        <p className={'indent'}>学生自治正在发展：监督管理、信息管理、服务部门和秩序部门。</p>
                    </div>

                    <div className={'about-uni-container__text about-uni-container__text_right'}>
                        <h2>目标统一</h2>
                        <div className={'about-uni-container__img about-uni-container__img_copy'}
                             style={{backgroundImage: 'url("/images/university/about/2.webp")',
                                 left: '0'}}>
                        </div>
                        <p className={'indent small-margin'}>正在实施一些独特的项目。</p>
                        <p className={'indent small-margin'}>午餐音乐会。</p>
                        <p className={'indent small-margin'}>每周三、在大课间休息的时侯、学生和教师都可以欣赏新波洛茨克音乐学院学生的表演、
                            他们演奏的音乐包括爵士乐、古典乐、民间曲目。</p>
                        <p className={'indent small-margin'}>科学和艺术奖 – <span className={'montserrat'}>«Крынiца ведаў»</span>。</p>
                        <p className={'indent small-margin'}>大学以不同的提名来表彰我们才华横溢的学生和员工的成功:《年度学生》、
                            《年度教师》、《年度运动员》、《年度英才》等等。</p>
                        <p className={'indent small-margin'}><span className={'montserrat'}>1</span>
                            月底、大学迎来传统体育节日《寒假》、该节日正逐渐走向国际化。</p>
                        <p className={'indent'}>来自体育运动专业的中国研究生们也参加了此节日。</p>
                    </div>

                    <div className={'about-uni-container__img'}
                         style={{backgroundImage: 'url("/images/university/about/2.webp")'}}>
                    </div>
                </div>

                <div className={'about-uni-container__column'}>
                    <div className={'about-uni-container__text about-uni-container__text_right'}>
                        <h2>社会联系</h2>
                        <p className={'indent small-margin'}>新波洛茨克是一个年轻的现代化城市、重要的工业中心、白俄罗斯石油化工产业的领头者。</p>
                        <p className={'indent small-margin'}>波洛茨克国立大学参加了创新工业石化工业集群、
                            参与者还有新波洛茨克市执行委员会和《<span className={'montserrat'}>Naftan</span>》开放式股份公司。
                            v在五年的时间里、集群规模有了很大的发展、目前已有10个成员、其中包括中国的《中信建设》。</p>
                        <p className={'indent small-margin'}>波洛茨克（<span className={'montserrat'}>862</span>年）
                            与诺夫哥罗德（<span className={'montserrat'}>859</span>年）和基辅
                            （<span className={'montserrat'}>860</span>年）一起是古俄罗斯历史最悠久的城市之一、
                            是白俄罗斯最古老的城市、<span className={'montserrat'}>10-12</span>
                            世纪波洛茨克公国的首府、一座拥有深厚文化底蕴教育传统的城市。在这里、在历史中心、
                            在西德维纳河岸风景名胜区、在历史悠久的城墙内、坐落着一栋教学楼。</p>
                        <p className={'indent small-margin'}>森林公园区内有一个高科技运动训练综合体、在综合体內培训着“体育”专业的学生。</p>
                        <p className={'indent'}>基于这所大学与该地区的各级中学和组织单位共同开设了<span className={'montserrat'}>20</span>
                            多个专业班级。
                            它们能够培训合格的青年专业人才、并使他们顺利成功地进入地区和共和国的人力市场。
                            波洛茨克国立大学通过建立自己的生态系统、协调该区域的教育、科学、社会和生产活动、以实现可持续发展。</p>
                    </div>

                    <div className={'about-uni-container__text  about-uni-container__text_right'}>
                        <h2>统一的价值观</h2>
                        <p className={'indent small-margin'}><span className={'montserrat'}>12</span>
                            世纪耶夫罗西尼亚·波洛茨卡牧师建立的学校和图书馆已成为高等文化教育的中心、
                            奠定了现代波洛茨克国立大学的价值体系。这所大学为考古队的工作成果而感到自豪、
                            该考古队在波洛茨克的上城堡和斯帕索·普雷奥布拉津神庙的遗址上发现了数千件物品。在总统特别基金的财政支持下、
                            学校具备丰富的科研设备、这些设备被广泛用于大学的研究和教育活动。</p>
                        <p className={'indent small-margin'}>波洛茨克国立大学最重要的价值之一是苏联人民在伟大的卫国战争中的胜利。
                            <span className={'montserrat'}>2021</span>年<span className={'montserrat'}>11</span>
                            月启动的“致敬伟大的胜利”历史爱国项目向青少年介绍了鲜为人知的历史事实、战争英雄们的个人故事。
                            大学的学者们详细地介绍了白俄罗斯民族遭受种族灭绝的情况、并且通过对案件基础证据的研究得到了新的补充事实。</p>
                        <p className={'indent'}>正在积极设立的军事教研室将为加强公民爱国价值观教育做出重大贡献。</p>
                    </div>

                    <div className={'about-uni-container__img'}
                         style={{backgroundImage: 'url("/images/university/about/3.webp")'}}>
                    </div>

                    <div className={'about-uni-container__text'}>
                        <h2>民族团结一致</h2>
                        <div className={'about-uni-container__img about-uni-container__img_copy'}
                             style={{backgroundImage: 'url("/images/university/about/3.webp")',
                                 right: '0'}}>
                        </div>
                        <p className={'indent small-margin'}>大学不仅为白俄罗斯学生、而且也为其他国家的学生提供各种学科的专家培训。</p>
                        <p className={'indent small-margin'}>我们有<span className={'montserrat'}>6000</span>
                            多名学生、其中<span className={'montserrat'}>20</span>%以上为来自19个国家的留学生。</p>
                        <p className={'indent small-margin'}>留学生主要来自是中华人民共和国、乌兹别克斯坦和土库曼斯坦。</p>
                        <p className={'indent'}>目前、大学正在筹备与国外高学合作开设的<span className={'montserrat'}>14</span>
                            个联合教育项目、<span className={'montserrat'}>8</span>个二级高等教育专业的教学是英语授课。</p>
                    </div>

                    <div className={'about-uni-container__text'}>
                        <h2>传统与创新统一</h2>
                        <p className={'indent small-margin'}>大学的优势在于教育过程和科学研究的跨学科性。</p>
                        <p className={'indent small-margin'}>人文和技术学科专家之间积极互动使开设smart课程成为可能。</p>
                        <p className={'indent small-margin'}>这是一种新的学习工具、从大学涉外教学活动组成部分的角度来看是切实可行的。</p>
                        <p className={'indent small-margin'}>大学中有<span className={'montserrat'}>7</span>个系
                            （<span className={'montserrat'}>4</span>
                            个技术系、<span className={'montserrat'}>3</span>个人文系）和<span className={'montserrat'}>25</span>个教研室。</p>
                        <p className={'indent small-margin'}>学校有<span className={'montserrat'}>365</span>
                            名教师、其中<span className={'montserrat'}>153</span>人拥有博士学位或副博士学位。</p>
                        <p className={'indent small-margin'}><span className={'montserrat'}>43</span>个第一阶段高等教育专业、
                            <span className={'montserrat'}>22</span>个第二阶段高等教育专业（硕士学位）、
                            <span className={'montserrat'}>20</span>个副博士教育专业。</p>
                        <p className={'indent small-margin'}>仅在波洛茨克国立大学能够学习到的<span className={'montserrat'}>2</span>
                            个白俄罗斯特有的专业：</p>
                        <p className={'indent small-margin'}>《天然能源载体和碳材料的化学工艺》、《油气管道和储气库的设计、建造和使用》。</p>
                        <p className={'indent small-margin'}>该大学<span className={'montserrat'}>50%</span>
                            以上的专业属于第五和第六工艺级专业。</p>
                        <p className={'indent small-margin'}>职业提高进修和再培训学院常年招生。</p>
                        <p className={'indent'}>论文答辩委员已设立并正常工作。</p>
                    </div>

                    <div className={'about-uni-container__text about-uni-container__text_last'}>
                        <h2>大学的统一一致</h2>
                        <p className={'indent small-margin'}>白俄罗斯各高学积极与外国大学开展学术交流项目。</p>
                        <p className={'indent'}>自<span className={'montserrat'}>2021</span>年以来、波洛茨克国立大学积极并成功地与白俄罗斯国立大学、布列斯特国立技术大学实施了网络合作。</p>
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
                <title>关于大学</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="keywords" content="关于大学, 事业统一, 个性统一, 目标统一, 社会联系, 统一的价值观, 民族团结一致, 传统与创新统一, 大学的统一一致"></meta>
                <meta name="description" content=""></meta>
            </Head>
            <PageLayout>
                {page}
            </PageLayout>
        </>
    )
}

export default Index;