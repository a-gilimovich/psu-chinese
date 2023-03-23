export const ELEMENTS = [
    {
        id: 1,
        name: '大学',
        translation: 'Университет',
        href: '/university',
        imageURL: '/images/university/index.webp',
        className: 'img_1',
        caption: '一所现代性的古典大学',
        description: ['波洛茨克国立大学一所团结、合作、高效的综合性大学。在俄罗斯哲学中、有一个积极统一的概念 - 任何复杂的系统都应该被组织起来、使其所有组成部分都为相互强化从而使整个系统发挥作用。这一概念是波洛茨克国立大学战略发展的基础。',
            '在这里、技术型教育和社会人文教育、科学和商业、教学和培育和谐地融合在一起。这种融合有助于形成多方位的个性、并增加自身的竞争优势。',
            '根据世界领先的“网络计量学”大学排名、波洛茨克国立大学在全国50多所高等教育机构中排名第8位、是维捷布斯克州最好的教育机构。',
        ],
        links: [
            {
                id: 1,
                name: '关于大学',
                translation: 'Об университете',
                href: '/university/about'
            },
            {
                id: 2,
                name: '领导',
                translation: 'Руководство',
                href: '/university/heads'
            },
            {
                id: 3,
                name: '传统',
                translation: 'Традиции',
                href: '/university/traditions'
            },
            {
                id: 4,
                name: '博物馆',
                translation: 'Музей',
                href: '/university/museum'
            },
            {
                id: 5,
                name: '政府积极参加大学的发展和建设',
                translation: 'Участие государства в жизни университета',
                href: '/university/state-in-the-life-of-the-university'
            }
        ]
    },
    {
        id: 2,
        name: '如何进行',
        translation: 'Как поступить',
        href: '/how-to-enter',
        imageURL: '/images/how-to-enter/index.webp',
        className: 'img_2',
        style: {backgroundPosition: '94% 25%'},
        title: 'Euphrosyne Polotskaya State University',
        caption: '波洛茨克国立大学欢迎您！',
        description: ['每年我们都会遇到数百名外国留学生、他们后来成为我们最好的学生。' +
        '对于每个学生、在整个教育过程中我们都会给予最热烈的欢迎和最坚定地支持。',
            '在这里、您的才华将得到充分的展现、结交到新朋友、并为自己开辟光明的前景。',
        ],
        links: [
            {
                id: 1,
                name: '如何进行',
                translation: 'Этапы',
                href: '/how-to-enter/stages'
            },
        ]
    },
    {
        id: 3,
        name: '教育',
        translation: 'Обучение',
        href: '/education',
        imageURL: '/images/education/index.webp',
        className: 'img_3',
        description: ['本部分包含预科、本科和研究生课程的所有入学信息、及格分数、学费、专业等。'],
        links: [
            {
                id: 1,
                name: '预科',
                translation: 'Подготовительное отделение',
                href: '/education/matriculation'
            },
            {
                id: 2,
                name: '大学本科',
                translation: 'Бакалавриат',
                href: '/education/undergraduate'
            },
            {
                id: 3,
                name: '硕士',
                translation: 'Магистратура',
                href: '/education/masters-degree'
            }
        ]
    },
    {
        id: 4,
        name: '学生活动',
        translation: 'Студенческая деятельность',
        href: '/student-activities',
        imageURL: '/images/student-activities/index.webp',
        className: 'img_4',
        description: ['我们大学有丰富的兴趣协会。 体育课、声乐和舞蹈工作室。 在本部分中、您将找到有关学生活动的详细信息。'],
        links: [
            {
                id: 1,
                name: '体育',
                translation: 'Спорт',
                href: '/student-activities/sport'
            },
            {
                id: 2,
                name: '创造力',
                translation: 'Творчество',
                href: '/student-activities/creation'
            },
        ]
    },
    {
        id: 5,
        name: '住所',
        translation: 'Проживание',
        description: ['大学有7栋宿舍、配备有活动室、自助餐厅、健身房、淋浴间、洗衣房。为外地学生生、研究生、' +
        '博士生和大学工作人员提供宿舍。大学距离宿舍距离很近。由于地处市中心、学生可以快速到达商店、诊所、银行、公园等生活所需的场所。',
            ['住宿费用为每月', <span key={1} className={'montserrat'}>40-50</span> ,'美元、视宿舍类型而定。']],
        href: '/habitation',
        imageURL: '/images/habitation/index.webp',
        className: 'img_5',
        links: []
    },
    {
        id: 6,
        name: '教育费用',
        translation: 'Стоимость обучения',
        href: '/education-spending',
        description: ['学习形式：全日制（根据日常表安排）',
            ['学习时间：', <span key={2} className={'montserrat'}>10</span>, '个月'],
            ['费用：', <span key={3} className={'montserrat'}>1800</span>, '美元(按白俄罗斯共和国国家银行当日汇率支付以白俄罗斯卢布进行支付)。'],
            '学习概况：',
            [<div key={4}>
                <ul className={'ul'}>
                    <li>人文</li>
                    <li>经济</li>
                    <li>技术</li>
                    <li>对外俄语 英语</li>
                </ul>
            </div>]],
        imageURL: '/images/education-spending/index.webp',
        className: 'img_6',
        links: []
    },
    {
        id: 7,
        name: '联系人',
        translation: 'Контакты',
        description: ['Text'],
        href: '/contacts',
        imageURL: '/images/how-to-enter/index.webp',
        className: 'img_7',
        links: []
    }
]