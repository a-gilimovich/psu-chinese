import PageLayout from "../../components/layouts/page-layout";
import Head from 'next/head'

const Index = () => {
    return (
        <div>
            <div>
                <div className={'big-image'} style={{backgroundImage: `url(/images/how-to-enter/big.webp)`}}>
                </div>
            </div>
            <div>
                <div className={'content_text'}>
                    <h2>第一步 选专业</h2>
                    <div className={'p'}>学校有<span className={'montserrat'}>30</span>多个专业</div>
                </div>
                <div className={'content_text'}>
                    <h2>第二步 提前准备好证件</h2>
                    <div className={'p'}>以毕业生的身份入学、需要准备以下的材料
                        <ul className={'ul'}>
                            <li>入学申请、护照、入境卡</li>
                            <li>所学科目成绩单</li>
                            <li>出生证明复印件</li>
                            <li>3*4cm尺寸无光面照片6张</li>
                            <li>最高学历证明、包括：大学毕业证书、学位证书</li>
                        </ul>
                        医疗证明
                        <ul className={'ul'}>
                            <li>国际旅行健康证（原件）、包括艾滋病检验报告</li>
                            <li>无任何白俄罗斯禁忌症的医学证明 </li>
                        </ul>
                        以上材料需中俄文对照的公证件。
                    </div>
                </div>

                <div className={'content_text'}>
                    <h2>第三步 拿到签证</h2>
                    <div className={'p'}>
                        进入波洛茨克大学学习您需要准备申请签证的材料
                        <ul className={'ul'}>
                            <li>入学邀请函（需要护照复印件、最高学历证书、填写完整的申请书）</li>
                            <li>拿到白俄罗斯驻中国大使馆通过的留学签证</li>
                        </ul>
                    </div>
                </div>

                <div className={'content_text'}>
                    <h2>第四步 通过波洛茨克大学的面试</h2>
                    <div className={'p'}>
                        入学邀请函（需要护照复印件、最高学历证书、填写完整的申请书）<br/>
                        拿到白俄罗斯驻中国大使馆通过的留学签证
                    </div>
                </div>

                <div className={'content_text'}>
                    <h2>第五步 确认入学名单</h2>
                    <div className={'p'}>
                        在外事办公室主任处确认一年级和预科入学新生名单
                    </div>
                </div>

                <div className={'content_text'}>
                    <h2>第六步 融入大学生活：学习、宿舍、休闲、运动、保持健康。</h2>
                    <div className={'p'}>
                        恭喜！您成为了波洛茨克大学外国学生的一员
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
                <title>如何进行</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="keywords" content="如何进行, 第一步 选专业, 第二步 提前准备好证件, 第三步 拿到签证, 第四步 通过波洛茨克大学的面试, 第五步 确认入学名单, 第六步 融入大学生活：学习、宿舍、休闲、运动、保持健康。"></meta>
                <meta name="description" content=""></meta>
            </Head>
            <PageLayout>
                {page}
            </PageLayout>
        </>
    )
}

export default Index;