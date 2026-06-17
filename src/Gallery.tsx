
import { useState } from "react";
import {type Project, type MediaItem} from "./data/projects.ts";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export type GalleryProps = {
    selected: Project | null;
    setSelected: React.Dispatch<React.SetStateAction<Project | null>>;
    projects: Project[];
}


function Gallery({selected, setSelected, projects}: GalleryProps) {
   
    const [index, setIndex] = useState(0); //  1-based

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
    
  
    const {category} = useParams();
    const filteredProjects = !category || category === "all" ?
    projects : projects.filter(p => p.category === category);

    const [isMobile, setIsMobile]= useState(window.innerWidth < 700);

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 700);
        window.addEventListener("resize", onResize);
        return() => window.removeEventListener("resize", onResize);
    }, []);
    





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
        
      
        
    
      {/* MODAL */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
            className="close-btn"
            onClick={() => setSelected(null)}
            aria-label="close modal"
            >
                x
            </button>
            {/* MEDIA (1-based → index - 1) */}
            <div className="media-frame">
                {isMobile ? (
                    selected.media.slice(1).map((item, i) => (
                    <div key={i} className="mobile-media-item">
                        {item.type === "image" ? (
                        <img src={item.src} alt="" />
                        ) : item.type === "video" ? (
                        <video controls>
                            <source src={item.src} type="video/mp4" />
                        </video>
                        ) : item.type === "vimeo" ? (
                        <iframe
                            className="vimeo-frame"
                            src={item.src}
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        />
                        ) : null}
                    </div>
                    ))
                ) : (
                <>
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
                ): null}
                </>
                )}

            </div>
        {/* CAROUSEL */}
        
            {/* CONTROLS */}
            {!isMobile && (
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
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;


