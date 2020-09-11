import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ViewPost from './components/ViewPost/ViewPost'
import Search from './components/search/Search'
import Activities from './components/search/Activities'
import Cities from './components/search/Cities'
import Hotels from './components/search/Hotels'
import Resturants from './components/search/Resturants'
import Cultural from './components/cultural/Cultural'
import Social from './components/social/Social'
import Environment from './components/environment/Environment'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/post/:id" component={ViewPost} />
        <Route path="/search" component={Search} />
        <Route path="/activities" component={Activities} />
        <Route path="/cities" component={Cities} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/restaurants" component={Resturants} />
        <Route path="/cultural" component={Cultural} />
        <Route path="/social" component={Social} />
        <Route path="/environment" component={Environment} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
