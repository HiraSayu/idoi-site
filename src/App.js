import './App.css';
//import Header from "./header";
import ButtonAppBar from './ButtonAppBar';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//routing
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

//他のページ←.jsは省略していいらしい
import Profile from "./profile";
import Home from "./home";
import News from './news';
import Schedule from './schedule';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
     
    </Router>
  );
}

export default App;

/*
<div className="App">
      <ButtonAppBar/>
      <div className="app-body">
        <img className="image" src="./img/balletshoe.png" alt="key"></img>
      <h1>hello world, aurora</h1>
      <p>news</p>
      <p>profile</p>
      <p>discography</p>
       </div>
    </div>

      */
