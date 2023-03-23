import PageLayout from "../../../components/layouts/page-layout";
import ProfessionTable from "../../../components/profession-table";
import Head from 'next/head'

const Index = () => {
    return (
        <>
            <div className={'big-image'}
                 style={{backgroundImage: 'url("/images/education/big.webp")'}}>
            </div>

            <ProfessionTable faculty={'人文系'} professions={[
                {id: 1, name: '学前教育', qualification: '教育家', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 2, name: '外语（标明语言）', qualification: '教师', educationForm: '年全日制', period: '4',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 3, name: '技术劳动与企业经营', qualification: '教师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 4, name: '体育', qualification: '教师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 5, name: '体育旅游管理', qualification: '教师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 6, name: '实用心理学', qualification: '教育心理学家', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 7, name: '历史（国内历史和世界通史）', qualification: '历史学家历史、社会人文学科教师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 8, name: '白俄罗斯历史', qualification: '历史学家历史、社会人文学科教师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 9, name: '罗马-日耳曼语言学', qualification: '外语文学教师（指定语言和文学）笔译/口译', educationForm: '年全日制', period: '4',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 10, name: '跨文化交流语言保障学（分专业方向）', qualification: '跨文化交际专家 笔译/口译（顾问）（指定沟通语言）', educationForm: '年全日制', period: '4、5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 11, name: '旅游酒店管理', qualification: '旅游业和酒店业领域的专家', educationForm: '年全日制', period: '4、5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: true}
            ]} />

            <ProfessionTable faculty={'建设工程系'} professions={[
                {id: 1, name: '设计（主体-空间环境）', qualification: '设计', educationForm: '年全日制', period: '5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 2, name: '室内设计', qualification: '设计', educationForm: '年全日制', period: '5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 3, name: '建筑学', qualification: '建筑师', educationForm: '年全日制', period: '5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 3, name: '工业和民用建筑', qualification: '建筑工程师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 4, name: '不动产管理及鉴定', qualification: '工程师、房地产专家', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 5, name: '道路建设', qualification: '建筑工程师', educationForm: '年全日制/函授', period: '5 / 6',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 6, name: '热力煤气供应、通风和空气保护', qualification: '建筑工程师', educationForm: '年全日制/函授', period: '5 / 6',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 7, name: '排污和水利资源保护', qualification: '建筑工程师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 8, name: '油气管道储存设施设计、建设和运营', qualification: '工程师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: true}
            ]} />

            <ProfessionTable faculty={'机械技术系'} professions={[
                {id: 1, name: '机械制造工艺学', qualification: '工程师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 2, name: '工业电子', qualification: '无线电电子工程专家', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 3, name: '企业化工机械设备及建材生产', qualification: '机械工程师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 4, name: '三维技术产品制造', qualification: '工程师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 5, name: '汽车保养技术（分专业方向）', qualification: '机械工程师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 6, name: '汽车服务', qualification: '机械工程师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 7, name: '道路交通管理', qualification: '工程师、监督员', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 8, name: '天然能源载体与碳材料化学技术', qualification: '化学技术工程师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: true}
            ]} />

            <ProfessionTable faculty={'无线电技术系'} professions={[
                {id: 1, name: '计算机物理学、物理过程的计算机建模', qualification: '物理学家、程序员', educationForm: '年全日制', period: '4',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 2, name: '无线电工程（分专业方向）', qualification: '无线电电子工程师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 3, name: '电控装置程序设计及制造', qualification: '电子软件工程师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 4, name: '电力供应（分专业方向）', qualification: '电力工程师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 5, name: '计算机安全（分专业方向）', qualification: '信息安全专家、数学家', educationForm: '年全日制', period: '4',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: true}
            ]} />

            <ProfessionTable faculty={'信息技术系'} professions={[
                {id: 1, name: '可编程移动系统', qualification: '可编程电子系统工程师', educationForm: '年全日制', period: '4',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 2, name: '信息技术软件', qualification: '软件工程师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 3, name: '计算机、系统和网络', qualification: '计算机工程师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 4, name: '人工智能', qualification: '计算机工程师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 5, name: '信息系统技术（分专业方向）', qualification: '软件工程师和经济学家', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 6, name: '大地测量学', qualification: '工程师', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: true}
            ]} />

            <ProfessionTable faculty={'财经系'} professions={[
                {id: 1, name: '社会传播学', qualification: '社会传播学家', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 2, name: '金融信贷”', qualification: '经济学家', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 3, name: '企业经济管理', qualification: '经济学家、经理', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 4, name: '会计、分析和审计（分专业方向）', qualification: '经济学家', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 5, name: '物流', qualification: '物流专家、经济学家', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 6, name: '电子市场营销', qualification: '营销专家和软件开、发人员', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: true}
            ]} />

            <ProfessionTable faculty={'法律系'} professions={[
                {id: 1, name: '法学', qualification: '法学家', educationForm: '年全日制/函授', period: '4 / 5',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: false},

                {id: 2, name: '海关事务', qualification: '海关事务专家', educationForm: '年全日制', period: '4',
                    language: '俄语 英语', price: '2300 USD', src: '/education/undergraduate', last: true}
            ]} />
        </>
    );
};

Index.getLayout = function getLayout(page) {
    return (
        <>
            <Head>
                <title>大学本科</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="keywords" content="大学本科, 体育系, 外语, 历史, 德国哲学 (英语授课), 德国哲学 (德语授课), 旅游, 学前教育, 
                                               服务劳动和造型艺术, 行为心理学, 技术劳动和技术创作, 体育文化, 建设工程系, 财经系, 无线电技术系,
                                               信息技术系, 法律系, 法学, 信息技术程序软件, 计算机安全（数字方法和程序系统）, 计算机系统和网络"></meta>
                <meta name="description" content=""></meta>
            </Head>
            <PageLayout>
                {page}
            </PageLayout>
        </>
    )
}

export default Index;