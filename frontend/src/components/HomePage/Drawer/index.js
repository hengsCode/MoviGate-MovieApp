import { React } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDrawer } from "../../../redux/slices/drawer.slice";
import {
  KeyboardArrowRight,
  KeyboardArrowLeft,
  Home,
  Favorite,
  Whatshot,
  TrendingUp,
  FiberNew,
  Update,
} from "@material-ui/icons";
import "./styles.css";

const Drawer = () => {
  const history = useHistory();
  const { expand } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();

  const handleDrawerExpand = () => {
    dispatch(setDrawer({ expand: !expand }));
    let val = expand;
    const container = document.querySelector(".drawer-container");
    const menuLabel = container.querySelectorAll(".drawer-menu-label");
    const menuIcon = container.querySelectorAll(".drawer-menu-icon");
    if (!val) {
      menuIcon.forEach((element) => {
        element.style.transform = "translateX(-150px)";
      });
      menuLabel.forEach((element) => {
        element.style.opacity = 1;
      });
    } else {
      menuIcon.forEach((element) => {
        element.style.transform = "translateX(0)";
      });
      menuLabel.forEach((element) => {
        element.style.opacity = 0;
      });
    }
  };
  const handleHomeClick = () => {
    history.push("/");
  };
  const handlePopularClick = () => {
    history.push({
      pathname: "/popular",
      state: {
        filter: "popular",
      },
    });
  };
  const handleTrendingClick = () => {
    history.push({
      pathname: "/trending",
      state: {
        filter: "trending",
      },
    });
  };
  const handleLatestClick = () => {
    history.push({
      pathname: "/new",
      state: {
        filter: "new",
      },
    });
  };
  const handleUpcomingClick = () => {
    history.push({
      pathname: "/comingsoon",
      state: {
        filter: "comingsoon",
      },
    });
  };
  const handleFavouritesClick = () => {
    history.push({
      pathname: "/favourites",
      state: {
        filter: "favourites",
      },
    });
  };

  return (
    <>
      <div className="drawer-container" style={{ width: expand ? 400 : 70 }}>
        <div className="drawer-menu-item" onClick={handleHomeClick}>
          <Home class="drawer-menu-icon" />
          <div className="drawer-menu-label">Home</div>
        </div>
        <div className="drawer-menu-item" onClick={handlePopularClick}>
          <Whatshot class="drawer-menu-icon" />
          <div className="drawer-menu-label">Popular</div>
        </div>
        <div className="drawer-menu-item" onClick={handleTrendingClick}>
          <TrendingUp class="drawer-menu-icon" />
          <div className="drawer-menu-label">Trending</div>
        </div>
        <div className="drawer-menu-item" onClick={handleLatestClick}>
          <FiberNew class="drawer-menu-icon" />
          <div className="drawer-menu-label">New Releases</div>
        </div>
        <div className="drawer-menu-item" onClick={handleUpcomingClick}>
          <Update class="drawer-menu-icon" />
          <div className="drawer-menu-label">Coming Soon</div>
        </div>
        <div className="drawer-menu-item" onClick={handleFavouritesClick}>
          <Favorite class="drawer-menu-icon" />
          <div className="drawer-menu-label">Top Rated</div>
        </div>
      </div>

      <div
        className="expand-drawer-container"
        onClick={handleDrawerExpand}
        style={{ left: expand ? 350 : 20 }}
      >
        {expand ? (
          <KeyboardArrowLeft class="expand-drawer" />
        ) : (
          <KeyboardArrowRight class="expand-drawer" />
        )}
      </div>
    </>
  );
};

export default Drawer;
