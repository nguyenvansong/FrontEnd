// import {Routes, Route} from 'react-router-dom';

import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import GlobalStyles from './Components/GlobalStyles';
import { publicRoutes } from './routes';
import { Fragment } from 'react';
import MainLayout from './Layout/MainLayout';
import ListAccount from './Components/Admin/ListAccount';
import AddAccount from './Components/Admin/AddAccount';
import EditAccount from './Components/Admin/EditAccount';
import SideBar from './Components/SideBar/SideBar';
// import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {

  return (
    <div className="App">
      <SideBar/>
      <Routes>
        <Route exact path="/" element={<ListAccount/>}/>
        <Route exact path="/AddAcount" element={<AddAccount/>}/>
        <Route exact path="/EditAccount" element={<EditAccount/>}/>
      </Routes>
      
    </div>
    // <GlobalStyles>
    //   <div className="App">
    //     <Routes>
    //       {publicRoutes.map((route,index) => {
    //         const Layout = route.layout === null ? Fragment : MainLayout;
    //         const Page = route.component;
    //         return <Route key={index} path={route.path} element={
    //           <Layout>
    //             {Page}
    //           </Layout>
    //         } />
    //       })}
    //     </Routes>
    //   </div>
    // </GlobalStyles>
    
  );
}

export default App;
// jsfafgjasfjasf
//wkafhjsaf