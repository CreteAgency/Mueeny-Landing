import React , {  Component,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Conditions from "./components/Conditions/Conditions";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Policy from "./components/Policy/Policy";
import FAQ from "./components/FAQ/FAQ";
import Partners from "./components/Partners/Partners";
import Job from "./components/Job Requirements/Job";
import GoDaddy from "./components/GoDaddy/GoDaddy";

function App() {
  
      return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/Home" exact component={() => <Home/>} />
          <Route path="/conditions" exact component={() => <Conditions/>} />
          <Route path="/policy" exact component={() => <Policy/>} />
          <Route path="/FAQ" exact component={() => <FAQ/>} />
           <Route path="/Partners" exact component={() => <Partners />} />
           <Route path="/Job" exact component={() => <Job/>} />
            <Route path="/GoDaddy" exact component={() => < GoDaddy/>} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
  
      }
export default App;
