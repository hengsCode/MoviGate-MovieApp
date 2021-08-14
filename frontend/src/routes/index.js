import { React } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Home, Movies } from "../pages";
import { Header, Drawer, Footer } from "../components/HomePage";
import { MovieView } from "../components/MoviesPage";

const Routes = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Drawer />
          <Route exact path="/" component={Home} />
          <Route exact path="/:string" component={Movies} />
          <Route exact path="/search/:search" component={Movies} />
          <Route exact path="/movie/:movie" component={MovieView} />
          <Footer />
        </Router>
      </Provider>
    </>
  );
};

export default Routes;
