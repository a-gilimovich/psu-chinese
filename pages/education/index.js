import HomePage from "../../components/home-pages/home-page";
import MainLayout from "../../components/layouts/main-layout";

const Index = () => {
    return (
        <HomePage activeId={3}/>
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