import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import Homecontainer from "@containers/home";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}
const Home = () => (
    <Wrapper>
        <SEO pageTitle="" />
        <Header />
        <main id="main-content">
            <Breadcrumb pageTitle="Home" currentPage="Home" />
        </main>
        <Homecontainer />
        <Footer />
    </Wrapper>
);
export default Home;
