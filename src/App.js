import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './component/welcome'
import Hello from './component/hello';
import Redirect from './component/redirect';
import Image from './component/image';
import CalC from './component/calculator';
import Login from './component/login';
import Contact from './component/contact'
import Student from './component/studentdata';
import MinusPluse from './component/minuspluse';
import Indicator from './component/score';
import Example from './component/example'
import Array from './component/Arrays';
import WebApi from './component/services';
import Html from './component/Html';
import Html2 from './component/Html2';
import Quiz from './component/quiz/Quiz1';
import Heading from './component/headings/Heading';
import Hooks from './component/Hooks';
import Login2 from './login/Login';
import ParentReff from "./component/parentRef";

//let down = '#down';
class App extends React.Component {
  render() {
    return (
      <div className='App' >
        {/* <Hello /> */}
        {/* <Welcome /><br />
        <br /> */}
        {/* <Redirect /><br />
        <br /> */}
        {/* <Image />
        <br /><br /> */}
        {/* <CalC /><br />
        <br /> */}
        {/* <Login />
    npm start    <br /> */}
        {/* <Contact />
        <br />  */}
        {/* <Student />
        <br/> */}
        {/* <MinusPluse /> */}
        <br />
        {/* <Indicator />
        <br/> */}
         {/* <Example/>  */}
         {/* <br/> */}
         {/* <Array/> */}
         {/* <WebApi/> */}
         {/* <Html/> */}
         {/* <Html2/> */}
         {/* <Quiz/><br/> */}
         {/* <br/>
         <Heading/> */}
         {/* <Hooks/>          */}
         {/* <Login2/> */}
         <ParentReff />
      </div>
    );
  }
}

export default App;
