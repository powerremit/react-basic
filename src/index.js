import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from "./chapter_03/Library";
import Clock from "./chapter_04/Clock";
import CommentList from "./chapter_05/CommentList";
import Notifications from "./chapter_06/Notification";
import NotificationList from "./chapter_06/NotificationList";
import Accomodate from "./chapter_07/Accomodate";
import ConfirmButton from "./chapter_08/ConfirmButton";
import LandingPage from "./chapter_09/LandingPage";
import AttendanceBook from "./chapter_10/AttendanceBook";
import Signup from "./chapter_11/Signup";
import Calculator from "./chapter_12/Calculator";
import ProfileCard from "./chapter_13/ProfileCard";
import DarkOrLight from "./chapter_14/DarkOrLight";
import Blocks from "./chapter_15/Blocks";



const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(()=>{
//     root.render(
//         <React.StrictMode>
//             {/*<Library />*/}
//             <Clock />
//             <CommentList />
//         </React.StrictMode>
//     );
// })

// root.render(
//         <NotificationList />
// )

root.render(
    <React.StrictMode>
        <Accomodate/>
        <ConfirmButton/>
        <LandingPage/>
        <AttendanceBook/>
        <Signup/>
        <Calculator/>
        <ProfileCard/>
        <DarkOrLight/>
        <Blocks/>
     </React.StrictMode>
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
