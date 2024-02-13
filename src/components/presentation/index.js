import { LazyLoadImageComponent } from "components";
import "./presentation.scss";

export const PresentationComponent = ({ presentation }) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div className="presentation__container">
      <div className="presentation">
        <div className="pres__top">
          <LazyLoadImageComponent
            src={presentation.top}
            alt={presentation.top}
          />
        </div>
        <div className="pres__mid">
          <LazyLoadImageComponent
            src={presentation.mid}
            alt={presentation.mid}
          />
        </div>
        <div className="pres__bot">
          {isMobile ? (
            <>
              <LazyLoadImageComponent
                src={presentation.bot1}
                alt={presentation.bot1}
              />
              {presentation.bot2 && (
                <LazyLoadImageComponent
                  src={presentation.bot2}
                  alt={presentation.bot2}
                />
              )}
            </>
          ) : (
            <LazyLoadImageComponent
              src={presentation.bot}
              alt={presentation.bot}
            />
          )}
        </div>
      </div>
    </div>
  );
};
