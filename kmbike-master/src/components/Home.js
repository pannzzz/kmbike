    import React from "react";
    import PromoBanner from "./PromoBanner";
    import ProductsSection from "./ProductsSection";
    import CategoriesSection from "./CategoriesSection";
    import NewsSection from "./NewsSection";
    import Footer from "./Footer";

    const Home = () => {
    return (
        <div>
        <PromoBanner />
        <ProductsSection />
        <CategoriesSection />
        <NewsSection />
        <Footer />
        </div>
    );
    };

    export default Home;

