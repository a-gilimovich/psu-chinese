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
                <title>Euphrosyne Polotskaya State University of Polotsk</title>
                <link rel={'icon'} href={'/favicon.svg'}/>
            </Head>
            <MainLayout>
                {page}
            </MainLayout>
        </>
    )
}