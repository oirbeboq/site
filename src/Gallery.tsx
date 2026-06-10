
import { useState } from "react";
import projects, {type Project, type MediaItem} from "./data/projects.ts";


function Gallery() {
    const [selected, setSelected] = useState<Project | null>(null);
    const [index, setIndex] = useState(0); // 🔥 1-based

    const openModal = (projects:Project) => {
        setSelected(projects);
        setIndex(1); // start at 1
    };
    // index is 1-based and intentionally skips media[0]
    const safeIndex =
    selected ? Math.min(index, selected.media.length - 1) : 0;

    const current: MediaItem | null =
    selected ? selected.media[safeIndex] : null;

    const[hovered, setHovered] = useState<number |null>(null);
    
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [category, setCategory] = useState("all");

    const filteredProjects = category === "all" ?
    projects : projects.filter(p => p.category === category);

    const [infoOpen, setInfoOpen] = useState(false);

    const [activePage, setActivePage] = useState("gallery");


  return (
    <>
      {/* GRID */}
      <div className="grid-container">
        {filteredProjects.map((p, i) => (
          <div key={i} 
          className={`box ${hovered !== null && hovered !== i ? 'desaturated': ""}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          onClick={() => openModal(p)}>
            <img src={p.media[0].src} alt={p.title} />
          </div>
        ))}
      </div>

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
            onClick={() =>{
                 setActivePage('gallery');
            }}>
            <button className={`notch-btn ${activePage === "gallery" ? "active" : ""}`}>
                Gallery
            </button>

            {galleryOpen && (
            <div className="gallery-menu"
                onClick ={(e) => e.stopPropagation()}>
                <button 
                onClick={() => {setCategory("all");
                    setGalleryOpen(false);
                    setActivePage("gallery");
                }}>
                    All
                </button>

                <button 
                onClick={() => {setCategory("animation");
                    setGalleryOpen(false);
                    setActivePage("gallery");
                }}>
                    Animations
                </button>

                <button
                onClick={() => {setCategory("character");
                    setGalleryOpen(false);
                    setActivePage("gallery");
                }}>
                    Characters
                </button>

                <button
                onClick={() => {setCategory("game");
                    setGalleryOpen(false);
                    setActivePage("gallery");
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
                
            onClick={() =>{
                 setActivePage('info');
            }}>
             <button className={`notch-btn ${activePage === "info" ? "active" : ""}`}>
                 Info
            </button>

            {(galleryOpen || infoOpen) &&(
            <div className="menu-overlay">
       
            {/* INFO MENU */}
            {infoOpen &&(
            <div className="info-menu"
                onClick ={(e) => e.stopPropagation()}>
                <button onClick={() =>{
                    setInfoOpen(false);
                    setActivePage("info");
                }}>
                    Archive
                </button>

                <button onClick={() =>{
                    setInfoOpen(false);
                    setActivePage("info");
                }}>
                    About me
                </button>
            </div>
            )}
      </div>
     )}
        </div>
      </div>)}
        
    
      {/* MODAL */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MEDIA (1-based → index - 1) */}
            <div className="media-frame">
                {current?.type === "image" ? (
                    <img src={current.src}/>
                ) : current?.type === "video" ? (
                    <video key={current.src} autoPlay loop controls>
                        <source src= {current.src} type="video/mp4"/>
                    </video>
                ) : current?.type ==="vimeo" ?(
                    <iframe
                        className="vimeo-frame"
                        src={current.src + "?autoplay=1"}
                        allow="autoplay; fullscreen; picture-in-picture; 
                        clipboard-write; encrypted-media; web-share"   
                        allowFullScreen
                    />
                ): null
                }
                
                {/*}
                {current && (current.type === "image" ? (
                    <img src={current.src} />
                    ) : (
                    <video key={current.src}autoPlay loop controls>
                        <source
                        src={current.src}
                        type="video/mp4"
                        />
                    </video>
                    )
                )}
                */}

            </div>
        {/* CAROUSEL */}
        
            {/* CONTROLS */}
            <div className="controls">
                <button
                    className={`nav-btn ${index === 1 ? "disabled" : ""}`}
                    disabled={index === 1}
                    onClick={() =>
                        setIndex((prev) =>
                        prev > 1 ? prev - 1 : prev
                        )
                    }
                    >
                    &lt;
                </button>

              <span className="counter">
                {index} / {selected.media.length - 1}
              </span>
                
                <button
                    className={`nav-btn ${
                        index === selected.media.length - 1
                        ? "disabled"
                        : ""
                    }`}
                    disabled={index === selected.media.length - 1}
                    onClick={() =>
                        setIndex((prev) =>
                        prev < selected.media.length
                            ? prev + 1
                            : prev
                        )
                    }
                    >
                    &gt;
                </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;

