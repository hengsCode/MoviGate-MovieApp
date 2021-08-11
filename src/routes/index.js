import { React } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Home, Movies } from "../pages";
import { MovieView } from "../components/MoviesPage";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/goats" component={Movies} />
      <Route exact path="/movie/:movie" component={MovieView} />
    </Router>
  );
};

export default Routes;
