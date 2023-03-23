import MainLayout from "../../components/layouts/main-layout";
import HomePage from "../../components/home-pages/home-page";
import Head from "next/head";

const Index = () => {
    return (
        <HomePage activeId={1}/>
    );
};

Index.getLayout = function getLayout(page) {
    return (
        <>
            <Head><title>关于大学</title></Head>
            <MainLayout>
                {page}
            </MainLayout>
        </>
    )
}

export default Index;