import {Routes, Route} from 'react-router-dom'
import Header from "./Component/header/Header.jsx";
import './App.css'
import Promo from "./Component/Promo/Promo.jsx";
import Usn from "./Component/USN/Usn.jsx";
import Graph from "./Component/Graph/Graph.jsx";
import Ngk from "./Component/Ngk/Ngk.jsx";
import SideBar from "./Component/SideBar/SideBar.jsx";


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/Vremyarosta' element={<Header/>}/>
      </Routes>
        <Promo></Promo>
        <Usn></Usn>
        <Graph></Graph>
        <Ngk></Ngk>
        <SideBar></SideBar>
      
    </div>
  );
}

export default App;
