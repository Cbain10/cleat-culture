import React from "react";
import { AllCleatsSection } from "../../components/allCleatsSection/AllCleatsSection";
import NavBar from "../../components/navBar/NavBar";
import { NewsSection } from "../../components/newsSection/NewsSection";

const Home = () => {
    return (
        <div>
            <NavBar />
            <NewsSection />
            <AllCleatsSection />
        </div>
    )
}

export default Home;