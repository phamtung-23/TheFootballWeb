
import { Fragment } from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import DefaultLayout from "./components/layout/DefaultLayout";

import {publicRouter} from './routers'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            {publicRouter.map((route, index) =>{
              let Layout = DefaultLayout

              if(route.layout){
                Layout = route.layout
              }else if(route.layout === null){
                Layout = Fragment
              }
              const Page = route.component
              return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>
            })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
