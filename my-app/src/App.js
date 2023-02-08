import {Routes, Route} from 'react-router-dom';

import './App.css';
import GlobalStyles from './Components/GlobalStyles';
import { publicRoutes } from './routes';
import { Fragment } from 'react';
import MainLayout from './Layout/MainLayout';


function App() {

  return (
    
    <GlobalStyles>
      <div className="App">
        <Routes>
          {publicRoutes.map((route,index) => {
            const Layout = route.layout === null ? Fragment : MainLayout;
            const Page = route.component;
            return <Route key={index} path={route.path} element={
              <Layout>
                {Page}
              </Layout>
            } />
          })}
        </Routes>
      </div>
    </GlobalStyles>
  );
}

export default App;
// jsfafgjasfjasf
//wkafhjsaf
//1231