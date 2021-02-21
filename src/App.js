import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container'>
          <div className='wrapper'>
            <div className='home'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/works' component={Works} />
                <Route exact path='/about-me' component={About} />
                <Route exact path='/contact-me' component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Works() {
  return (
    <div className="">
      Merhaba
    </div>
  );
}

function About() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

function Home() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <h5>Hi, I'am Ali.</h5>
        <h1>I'am Jr.Front End Developer</h1>
      </div>
    </div>
  );
}
export default App;
