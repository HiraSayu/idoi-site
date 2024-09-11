import './profileStyle.css';
//import Header from "./header";
import ButtonAppBar from './ButtonAppBar';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import NewsCard from './newsCard';


function News() {
  return (
    <div className="app">
      <ButtonAppBar/>
      <div className="app-body">
        <div className="imgCon">
      <h1>News</h1></div>
        <NewsCard title="タイトル" date="2024/3/3" content="本文 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
        <NewsCard title="タイトル2" date="2024/3/21" content="本文"/>
        <NewsCard title="タイトル3" date="2024/3/3" content="本文"/>
        <NewsCard title="タイトル3" date="2024/3/3" content="本文"/>
      </div>
    </div>
  );
}

export default News;
