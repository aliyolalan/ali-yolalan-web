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
      Burası Portfolyo Olacak, Projeler Burada Görünecek.
    </div>
  );
}

function About() {
  return (
    <div className="">
      Burası Hakkımda Kısmı Olacak, Hakkımdaki Bilgiler ve CV Burada Görünecek.
    </div>
  );
}

function Contact() {
  return (
    <div className="">
      Burası İletişim Kısmı Olacak, Kişiler Bana Buradan Ulaşacak.
    </div>
  );
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