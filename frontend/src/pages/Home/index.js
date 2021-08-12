import { React } from "react";
import {
  Header,
  Footer,
  HomeOverview,
  Drawer,
} from "../../components/HomePage";
import "./styles.css";

const Home = () => {
  return (
    <>
      <div class="home-page-container">
        <Header />
        <Drawer />
      </div>
      <Footer />
    </>
  );
};

export default Home;
