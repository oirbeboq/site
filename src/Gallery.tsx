import { useState, useEffect } from "react";
import { type Project, type MediaItem } from "./data/projects.ts";
import { useParams } from "react-router-dom";

export type GalleryProps = {
  selected: Project | null;
  setSelected: React.Dispatch<React.SetStateAction<Project | null>>;
  projects: Project[];
};

function Gallery({ selected, setSelected, projects }: GalleryProps) {
  const { category } = useParams();

  const filteredProjects =
    !category || category === "all"
      ? projects
      : projects.filter((p) => p.category === category);

  // skip first media item (thumbnail convention)
  const mediaItems: MediaItem[] = selected ? selected.media.slice(1) : [];

  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // safe resize handling
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 700);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const openModal = (project: Project) => {
    setSelected(project);
    setIndex(0);
  };

  const closeModal = () => {
    setSelected(null);
    setIndex(0);
  };

  const current = mediaItems[index] ?? null;

  const next = () => {
    setIndex((i) => Math.min(i + 1, mediaItems.length - 1));
  };

  const prev = () => {
    setIndex((i) => Math.max(i - 1, 0));
  };

  return (
    <>
      {/* GRID */}
      <div className="grid-container">
        {filteredProjects.map((p, i) => (
          <div
            key={p.title + i}
            className={`box ${
              hovered !== null && hovered !== i ? "desaturated" : ""
            }`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => openModal(p)}
          >
            <img src={p.media[0].src} alt={p.title} />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={closeModal}
              aria-label="close modal"
            >
              ×
            </button>

            {/* MEDIA */}
            <div className="media-frame">
              {isMobile ? (
                mediaItems.map((item, i) => (
                  <div key={i} className="media-wrapper">
                    <div className="mobile-media-item">
                      {item.type === "image" && <img src={item.src} />}

                      {item.type === "video" && (
                        <video controls>
                          <source src={item.src} type="video/mp4" />
                        </video>
                      )}

                      {item.type === "vimeo" && (
                        <iframe
                          src={item.src}
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        />
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="media-wrapper">
                  {current?.type === "image" && <img src={current.src} />}

                  {current?.type === "video" && (
                    <video autoPlay loop controls>
                      <source src={current.src} type="video/mp4" />
                    </video>
                  )}

                  {current?.type === "vimeo" && (
                    <iframe
                      className="vimeo-frame"
                      src={`${current.src}?autoplay=1`}
                      allow="autoplay; fullscreen; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  )}
                </div>
              )}
            </div>

            {/* CONTROLS (desktop only) */}
            {!isMobile && mediaItems.length > 0 && (
              <div className="controls">
                <button
                  className="nav-btn"
                  onClick={prev}
                  disabled={index === 0}
                >
                  &lt;
                </button>

                <span className="counter">
                  {index + 1} / {mediaItems.length}
                </span>

                <button
                  className="nav-btn"
                  onClick={next}
                  disabled={index === mediaItems.length - 1}
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