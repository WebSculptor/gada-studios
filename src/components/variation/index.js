import React from "react";
import "./variation.scss";
import { LazyLoadImageComponent } from "components";

export const VariationComponent = ({
  filters,
  isActive,
  selected,
  setIsActive,
  setSelected,
}) => {
  return (
    <div className="variations">
      <div className="filter_buttons">
        <div>
          {filters.map((item, id) => {
            return (
              <button
                key={id}
                className={item.text === isActive ? "activeButton" : ""}
                onClick={() => {
                  setSelected(item.type);
                  setIsActive(item.text);
                }}
              >
                <p>{item.text}</p>
              </button>
            );
          })}
        </div>
      </div>
      <div className="filtered">
        {selected &&
          selected.map((item, id) => (
            <div key={id} className="filtered_image">
              <LazyLoadImageComponent src={item} alt={item} />
            </div>
          ))}
      </div>
    </div>
  );
};
