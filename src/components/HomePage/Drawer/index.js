import { React } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const Drawer = () => {
  const history = useHistory();
  const handleGoatsClick = () => {
    history.push({
      pathname: "/goats",
      state: {
        filter: "goat",
      },
    });
  };
  const handleHomeClick = () => {
    history.push("/");
  };
  return (
    <div class="drawer-container">
      <div class="drawer-menu-container">
        <button onClick={handleHomeClick}>Home</button>
        <button>All Movies</button>
        <button onClick={handleGoatsClick}>G.O.A.T's</button>
        <button>Trending</button>
      </div>
    </div>
  );
};

export default Drawer;
