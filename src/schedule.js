import './scheduleStyle.css';
//import Header from "./header";
import ButtonAppBar from './ButtonAppBar';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function Schedule() {
  return (
    <div className="app">
      <ButtonAppBar/>
      <div className="app-body">
      


    <div>
        <div className="imgCon">
            <h1>schedule</h1>
        </div>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" 
      contentHeight="300px"
      aspectRatio={800/100}
      events={[
        {title:"ライブ", start:"2024-04-12",end:"2024-04-14"}
      ]} />
    </div>

      </div>
    </div>
  );
}

export default Schedule;
