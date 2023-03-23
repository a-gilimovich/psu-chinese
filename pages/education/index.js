import HomePage from "../../components/home-pages/home-page";
import MainLayout from "../../components/layouts/main-layout";
import Head from "next/head";

const Index = () => {
    return (
        <HomePage activeId={3}/>
    );
};

Index.getLayout = function getLayout(page) {
    return (
        <>
            <Head>
                <title>教育</title>
            </Head>
            <MainLayout>
            {page}
        </MainLayout>
        </>
    )
}

export default Index;