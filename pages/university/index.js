import MainLayout from "../../components/layouts/main-layout";
import HomePage from "../../components/home-pages/home-page";

const Index = () => {
    return (
        <HomePage activeId={1}/>
    );
};

Index.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default Index;