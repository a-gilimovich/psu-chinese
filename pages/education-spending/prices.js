import PageLayout from "../../components/layouts/page-layout";

const Index = () => {
    return (
        <>
            Цены!<br/>
        </>
    );
};

Index.getLayout = function getLayout(page) {
    return (
        <PageLayout>
            {page}
        </PageLayout>
    )
}

export default Index;