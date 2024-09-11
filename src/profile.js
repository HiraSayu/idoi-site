import './profileStyle.css';
//import Header from "./header";
import ButtonAppBar from './ButtonAppBar';
import FadeAnimation from './FadeAnimation.tsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function Profile() {
  return (
    <div className="app">
      <ButtonAppBar/>
      <div className="app-body">
        <div class="imgCon">
          <h1>Profile</h1>
        </div>
        <FadeAnimation>
        <img className="proimage" src="./img/bisual.png" alt="key"></img>
        <h3>aurora</h3>
        <p>2023年3月18日にxxプロダクションからデビュー。</p>
        </FadeAnimation>
        <FadeAnimation>
        <img className="proimage" src="./img/member.jpg" alt="key"></img>
        <h3>yura</h3>
        <p>2005.5.12</p>
        </FadeAnimation>
        <FadeAnimation>
        <img className="proimage" src="./img/member.jpg" alt="key"></img>
        <h3>jiwong</h3>
        <p>2007.7.1</p>
        </FadeAnimation>
      </div>
    </div>
  );
}

export default Profile;
