import Header from "./Component/header/Header.jsx";
import './App.css'
import Promo from "./Component/Promo/Promo.jsx";
import Usn from "./Component/USN/Usn.jsx";
import Graph from "./Component/Graph/Graph.jsx";
import Ngk from "./Component/Ngk/Ngk.jsx";


function App() {


  return (
    <div className="App">
    <Header></Header>
    <Promo></Promo>
    <Usn></Usn>
    <Graph></Graph>
    <Ngk></Ngk>
    </div>
  );
}

export default App;
