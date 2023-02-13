import {Routes, Route} from 'react-router-dom';

import './App.css';
import GlobalStyles from './Components/GlobalStyles';
import { publicRoutes } from './routes';
import { Fragment } from 'react';
import MainLayout from './Layout/MainLayout';

//them danh muc

import ListCategory from './Components/Category/ListCategory';
import AddCategory from './Components/Category/AddCategory';
import EditCategory from './Components/Category/EditCategory';



function App() {

  return (
    
    //Trang
    <>
      <Routes>
        <Route exact path="/" element={<ListCategory/>}/>
        <Route exact path="/ListCategory" element={<ListCategory/>}/>
        <Route exact path="/AddCategory" element={<AddCategory/>}/>
        <Route exact path="/EditCategory" element={<EditCategory/>}/>
      </Routes>
    </>

    //end



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