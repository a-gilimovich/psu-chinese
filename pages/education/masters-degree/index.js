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
                {id: 1, name: '教育原理方法论（分教育领域和层次）', qualification: '硕士研究生', educationForm: '年全日制', period: '1',
                    language: '俄语 英语', price: '2500 USD', src: '/education/undergraduate', last: false},

                {id: 2, name: '体育运动学', qualification: '硕士研究生', educationForm: '年全日制', period: '1',
                    language: '俄语 英语', price: '2500 USD', src: '/education/undergraduate', last: false},

                {id: 3, name: '文学研究', qualification: '硕士研究生', educationForm: '年全日制', period: '1',
                    language: '俄语 英语', price: '2500 USD', src: '/education/undergraduate', last: false},

                {id: 4, name: '历史', qualification: '硕士研究生', educationForm: '年全日制', period: '1',
                    language: '俄语 英语', price: '2500 USD', src: '/education/undergraduate', last: true}
            ]} />

            <ProfessionTable faculty={'建设工程系'} professions={[
                {id: 1, name: '房屋建筑及建筑物工程', qualification: '硕士研究生', educationForm: '年全日制', period: '1',
                    language: '俄语 英语', price: '2500 USD', src: '/education/undergraduate', last: true}

            ]} />

            <ProfessionTable faculty={'机械技术系'} professions={[
                {id: 1, name: '机械工程创新技术', qualification: '硕士研究生', educationForm: '年全日制', period: '1',
                    language: '俄语 英语', price: '2500 USD', src: '/education/undergraduate', last: false},

                {id: 2, name: '机器、设备及操作', qualification: '硕士研究生', educationForm: '年全日制', period: '1',
                    language: '俄语 英语', price: '2500 USD', src: '/education/undergraduate', last: false},

                {id: 3, name: '职业安全和人机工程学', qualification: '硕士研究生', educationForm: '年全日制', period: '1',
                    language: '俄语 英语', price: '2500 USD', src: '/education/undergraduate', last: true}
            ]} />

            <ProfessionTable faculty={'无线电技术系'} professions={[
                {id: 1, name: '应用物理', qualification: '硕士研究生', educationForm: '年全日制', period: '1.8',
                    language: '俄语 英语', price: '5000 USD', src: '/education/undergraduate', last: false},

                {id: 2, name: '电力与电气工程', qualification: '硕士研究生', educationForm: '年全日制', period: '1',
                    language: '俄语 英语', price: '2500 USD', src: '/education/undergraduate', last: false},

                {id: 3, name: '信息通信系统和网络', qualification: '硕士研究生', educationForm: '年全日制', period: '1.8',
                    language: '俄语 英语', price: '5000 USD', src: '/education/undergraduate', last: false},

                {id: 4, name: '碳氢化合物生产加工', qualification: '硕士研究生', educationForm: '年全日制', period: '1',
                    language: '俄语 英语', price: '2500 USD', src: '/education/undergraduate', last: true}
            ]} />

            <ProfessionTable faculty={'信息技术系'} professions={[
                {id: 1, name: '数学与计算机科学', qualification: '硕士研究生', educationForm: '年全日制', period: '1.8',
                    language: '俄语 英语', price: '5000 USD', src: '/education/undergraduate', last: false},

                {id: 2, name: '信息学和编程技术', qualification: '硕士研究生', educationForm: '年全日制', period: '1.8',
                    language: '俄语 英语', price: '5000 USD', src: '/education/undergraduate', last: false},

                {id: 3, name: '采矿与油气地质、地球物理学、矿山测量与底土几何、大地测量', qualification: '硕士研究生', educationForm: '年全日制', period: '1',
                    language: '俄语 英语', price: '2500 USD', src: '/education/undergraduate', last: true}
            ]} />

            <ProfessionTable faculty={'财经系'} professions={[
                {id: 1, name: '经济学', qualification: '硕士研究生', educationForm: '年全日制', period: '1',
                    language: '俄语 英语', price: '2500 USD', src: '/education/undergraduate', last: false},

                {id: 2, name: '财政税收与信贷', qualification: '硕士研究生', educationForm: '年全日制', period: '1',
                    language: '俄语 英语', price: '2500 USD', src: '/education/undergraduate', last: false},

                {id: 3, name: '会计、分析和审计', qualification: '硕士研究生', educationForm: '年全日制', period: '1',
                    language: '俄语 英语', price: '2500 USD', src: '/education/undergraduate', last: false},

                {id: 4, name: '工商管理', qualification: '工商管理硕士', educationForm: '年全日制', period: '1.8',
                    language: '俄语 英语', price: '5000 USD', src: '/education/undergraduate', last: false},

                {id: 5, name: '物流', qualification: '硕士研究生', educationForm: '年全日制', period: '1',
                    language: '俄语 英语', price: '2500 USD', src: '/education/undergraduate', last: true}
            ]} />

            <ProfessionTable faculty={'法律系'} professions={[
                {id: 1, name: '法理学', qualification: '硕士研究生', educationForm: '年全日制', period: '1',
                    language: '俄语 英语', price: '2500 USD', src: '/education/undergraduate', last: true}
            ]} />


        </>
    );
};

Index.getLayout = function getLayout(page) {
    return (
        <>
            <Head>
                <title>硕士</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="keywords" content="硕士"></meta>
                <meta name="description" content=""></meta>
            </Head>
            <PageLayout>
                {page}
            </PageLayout>
        </>
    )
}

export default Index;