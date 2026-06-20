import "./App.css";
import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AboutPage  from "./AboutPage";
import Gallery from "./Gallery";
import projects, {type Project} from "./data/projects.ts";

function App(){
    const navigate = useNavigate();
    const location = useLocation();
    const [selected, setSelected] = useState<Project | null>(null);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [infoOpen, setInfoOpen] = useState(false);

    const isGallery = location.pathname ==="/" || location.pathname.startsWith("/gallery");
    const isInfo = location.pathname === "/about" || location.pathname === "/archive";
    
  return (
    <>
    {/* NOTCH */}
        {!selected && (<div className="notch">
            {/*GALLERY MENu */}
            <div className="menu-wrapper"
                onMouseEnter={() => 
                    {setGalleryOpen(!galleryOpen);
                    setInfoOpen(false);
                
                }}
                onMouseLeave={() =>
                    {setGalleryOpen(false);
                }}
                >
                <button className={`notch-btn ${isGallery ? "active" : ""}`}>
                    Gallery
                </button>

                {galleryOpen && (
                <div className="gallery-menu"
                    onClick ={(e) => e.stopPropagation()}
>
                    <button 
                    onClick={() => {
                        setGalleryOpen(false);
                        navigate("/");
                    }}>
                        All
                    </button>

                    <button 
                    onClick={() => {
                        setGalleryOpen(false);
                        navigate("/animation");
                    }}>
                        Animations
                    </button>

                    <button
                    onClick={() => {
                        setGalleryOpen(false);
                        navigate("/character")
                    }}>
                        Characters
                    </button>

                    <button
                    onClick={() => {
                        setGalleryOpen(false);
                        navigate("/game")
                    }}>
                        Games
                    </button>
                </div>
                )}

            </div>

            
            <div className="menu-wrapper"
                onMouseEnter={() =>
                    {setInfoOpen(!infoOpen); 
                    setGalleryOpen(false);}}
                onMouseLeave={() => 
                    {setInfoOpen(false)}}
>
                <button className={`notch-btn ${isInfo ? "active" : ""}`}>
                    Info
                </button>

            {(galleryOpen || infoOpen) &&(
            <div className="menu-overlay">
       
            {/* INFO MENU */}
            {infoOpen &&(
            <div className="info-menu"
                onClick ={(e) => e.stopPropagation()}>
                <a 
                    href="/archive"
                    onClick={() =>{
                    setInfoOpen(false);
                }}>
                    Archive
                </a>

                <a href="/about"
                    onClick={() =>{
                    setInfoOpen(false);
                }}>
                    About me
                </a>
            </div>
            )}
      </div>
     )}
        </div>
      </div>)}
      
  
      <div id="main-wrapper">
          <div id="page-title">
                <div className="title">
                    <a href="/">
                        <img src= "/about-page/title.png"/>
                    </a>
                
                </div>
                <div className="title-desc">
                    Visual Development | Character Design, Game Design & Animation
                </div>
            </div>
        <Routes>
          <Route path="/" element={<Gallery 
            selected={selected}
            setSelected={setSelected}
            projects={projects}/>}  />
          <Route path="/:category" element={<Gallery selected={selected}
            setSelected={setSelected}
            projects={projects}/>} />
          {/*<Route path="/archive" element={<ArchivePage/>} />*/}
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
        
      </div>
      <div className="demo-reel-container">

      </div>
    </>
  );
}

export default App;