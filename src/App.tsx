import "./App.css";
import Gallery from "./Gallery";
import { Routes, Route} from "react-router-dom";
import AboutPage  from "./AboutPage";

function App(){
  return (
    <>
      <div id="page-title">oirbebop</div>
      <div id="main-wrapper">
        <Routes>
          <Route path="/" element={<Gallery/>}  />
          {/*<Route path="/archive" element={<ArchivePage/>} />*/}
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;