import './App.css';
//import Header from "./header";
import ButtonAppBar from './ButtonAppBar';
import NewsCard from './newsCard';
import FadeAnimation from './FadeAnimation.tsx';
import Button from '@mui/material/Button';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function Home() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <div className="app-body">
        <img className="image" src="./img/bisual.png" alt="key"></img>
        <FadeAnimation>
      <h1>hello world, aurora</h1>
      <h3>news</h3>
      <NewsCard title="音楽番組出演決定！" date="2022/2/2" content="auroraが3月29日放送の音楽番組に〜"/>
      <NewsCard title="1stライブのグッズラインナップ発表!" date="2022/2/2" content="1stライブのグッズラインナップが発表されました。"/>
      <a href="" class="btn btn-flat"><span>view more</span></a>
      </FadeAnimation>

      <FadeAnimation>
      <h3>profile</h3>
      </FadeAnimation>

      <FadeAnimation>
      <h3>discography</h3>
      </FadeAnimation>
      
       </div>
    </div>
  );
}

export default Home;
