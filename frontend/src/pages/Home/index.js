import { React } from "react";
import { HomeOverview } from "../../components/HomePage";
import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="home-page-container">
        <HomeOverview />
      </div>
    </>
  );
};

export default Home;
