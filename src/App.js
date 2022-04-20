import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Manage from "./components/Manage/Manage";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/order">
            <Review></Review>
          </Route>
          <Route path="/manage">
            <Manage></Manage>
          </Route>
          <Route>
            <div className="text-center">
              <img
                className="w-75 m-5"
                src="http://ummah-reactjs.wpocean.com/static/media/error-404.8cf02993.png"
                alt=""
              />
              <h5 className="text-secondary text-center m-5">
                We’re sorry but we can’t seem to find the page you requested.
                This might be because you have typed the web address
                incorrectly.
              </h5>
              <a className="btn btn-danger" href="/shop">
                Back to home
              </a>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
