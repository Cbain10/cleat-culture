import React from "react";
import LookupCleatButton from "../../components/lookupCleatButton/LookupCleatButton";
import RecommendCleatButton from "../../components/recommendCleatButton/RecommendCleatButton";
import './Home.css';

const Home = () => {

    return (
        <>
            <div className="button-container">
                <LookupCleatButton />
                <div className="divider"/>
                <RecommendCleatButton />
            </div>
        </>
    )
}

export default Home;