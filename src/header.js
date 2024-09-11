import React from 'react';
import './header.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <a href="#">about</a>
                <p></p>
                <a href="#">about</a>
            </div>
        )
    }
}
export default Header;