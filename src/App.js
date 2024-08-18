import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



function App() {
  const [progress, setProgress] = useState(0)
  let updateProgress = (progress)=>{
    setProgress(progress);
  }
  const apiKey = process.env.REACT_APP_ANOTHER_API_KEY;
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <LoadingBar
        color=' #ff0000'
        progress={progress}
        height={3}
        shadow = {true}
      />
      <Routes>
        <Route path="/" element={<News apikey={apiKey} updateProgress = {updateProgress} key="general" pageSize={10} country="in" category="general" />} />
        <Route path="/business" element={<News apikey={apiKey} updateProgress = {updateProgress} key="business" pageSize={10} country="in" category="business" />} />
        <Route path="/entertainment" element={<News apikey={apiKey} updateProgress = {updateProgress} key="entertainment" pageSize={10} country="in" category="entertainment" />} />
        <Route path="/health" element={<News apikey={apiKey} updateProgress = {updateProgress} key="health" pageSize={10} country="in" category="health" />} />
        <Route path="/science" element={<News apikey={apiKey} updateProgress = {updateProgress} key="science" pageSize={10} country="in" category="science" />} />
        <Route path="/sports" element={<News apikey={apiKey} updateProgress = {updateProgress} key="sports" pageSize={10} country="in" category="sports" />} />
        <Route path="/technology" element={<News apikey={apiKey} updateProgress = {updateProgress} key="technology" pageSize={10} country="in" category="technology" />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
