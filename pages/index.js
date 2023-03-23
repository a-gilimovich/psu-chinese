import HomePage from "../components/home-pages/home-page";
import MainLayout from "../components/layouts/main-layout";
import Head from "next/head";

export default function Page() {
    return <HomePage activeId={1}/>;
}

Page.getLayout = function getLayout(page) {
    return (
        <>
            <Head>
                <title>以耶夫罗西尼波洛茨克命名的波洛茨克国立大学</title>
                <link rel={'icon'} href={'/favicon.svg'}/>
            </Head>
            <MainLayout>
                {page}
            </MainLayout>
        </>
    )
}