
import './App.css';
import SearchComp from './components/SearchComp';
import ModTab from './components/ModTab';
import {BrowserRouter, Route , Routes } from 'react-router-dom';
import ModTab3 from './components/ModTab3';
import ModTab2 from './components/ModTab2';
import ModTab4 from './components/ModTab4';
import ModTab5 from './components/ModTab5';
import HomeComp from './components/HomeComp';
import HomeComp2 from './components/HomeComp2';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomeComp/>}/>
    <Route path="ModTab2" element={<ModTab2/>}/>
    <Route path="ModTab3" element={<ModTab3/>}/>
    <Route path="ModTab4" element={<ModTab4/>}/>
    <Route path="ModTab5" element={<ModTab5/>}/>
    <Route path="SearchComp" element={<SearchComp/>}/>
    <Route path="ModTab" element={<ModTab/>}/>
    <Route path="HomeComp2" element={<HomeComp2/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
