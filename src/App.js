import React, { Component } from 'react';
import logo from '../public/favicon.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
   <section>
   <header>
    <img src={logo} className="App-logo-new" alt="logo"/>
     <h1>Coming Soooooon !!</h1>
   </header>
   <main> 
      <div class="container">
        <p>
          "In a coding twist of fate, our brave developer accidentally turned our 'Coming Soon' website into a digital disappearing act with just one click. Armed with a keyboard and fueled by coffee, they're on a quest to rescue our lost site from the clutches of the mischievous Bug-Bite. Stay tuned for the epic comeback – it's the tale of a vanished website that will reappear with a software magician's 'Ta-da!'🎩✨"</p>
         <a type="submit" href="https://api.whatsapp.com/send/?phone=7379081148">Contact Us</a>
      </div>
      </main>
   </section>
    );
  }
}

export default App;