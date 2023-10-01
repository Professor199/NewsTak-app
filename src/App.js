import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as HashRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App =(props)=> {
  let {apiKey,pageSize}=props;
  pageSize=5
  apiKey=process.env.REACT_APP_NEWS_API
    return (
      <div>
        <HashRouter>
        <Navbar/>
          <Routes>
            <Route exact  path="/home" element={<News key="general" apiKey={apiKey}  pageSize={pageSize} country="in" category="general"/>} />
            <Route exact  path="/" element={<News key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general"/>} />
            <Route exact path="/business" element={<News key="business" apiKey={apiKey} pageSize={pageSize} country="in" category="business"/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment"/>} />
            <Route exact path="/general" element={<News key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general"/>} />
            <Route exact path="/health" element={<News key="health" apiKey={apiKey} pageSize={pageSize} country="in" category="health"/>} />
            <Route exact path="/science" element={<News key="science" apiKey={apiKey} pageSize={pageSize} country="in" category="science"/>} />
            <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} pageSize={pageSize} country="in" category="sports"/>} />
            <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={pageSize} country="in" category="technology"/>} />
        </Routes>
        </HashRouter>
      </div>
    )
}
export default App
