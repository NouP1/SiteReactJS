import Header from "./Component/header/Header.jsx";
import './App.css'
import Promo from "./Component/Promo/Promo.jsx";
import Usn from "./Component/USN/Usn.jsx";
import Graph from "./Component/Graph/Graph.jsx";


function App() {


  return (
    <div className="App">
    <Header></Header>
    <Promo></Promo>
    <Usn></Usn>
    <Graph></Graph>
    <div>Test</div>
    </div>
  );
}

export default App;
