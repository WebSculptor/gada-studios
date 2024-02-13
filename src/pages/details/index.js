import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "constants";
import { slugFunction } from "utils";
import {
  LazyLoadImageComponent,
  InfoComponent,
  PresentationComponent,
  VariationComponent,
  PaginationComponent,
} from "components";
import "./details.scss";

export const DetailsPage = () => {
  const { slug } = useParams();
  const project = projects.find(
    (project) => slugFunction(project.projectName) === slug
  );

  const {
    projectName,
    showcase,
    type,
    client,
    about,
    goals,
    black,
    white,
    colored,
    variation,
    presentation,
    concept,
    selection,
    extraLogo,
    mockups,
    stationariesTop,
    stationariesBottom,
    stationary,
    company_profile,
    company_profile_image,
    product_design,
    product_design_image,
    merchandise,
    vehicles_images,
    vehicles,
  } = project;

  const singleAbout = about?.map((item) => (
    <div className="small__text" key={item}>
      {item}
    </div>
  ));

  const singleGoal = goals?.map((item) => (
    <div className="small__text" key={item}>
      {item}
    </div>
  ));

  const [isActive, setIsActive] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(white);
    setIsActive("White Variation");
    // eslint-disable-next-line
  }, []);

  const filters = [
    { type: white, text: "White Variation" },
    { type: black, text: "Black Variation" },
    { type: colored, text: "Brand Color" },
  ];

  useEffect(() => {
    document.title = `GADA Studios - ${projectName}`;
  }, [projectName]);

  return (
    <div className="details">
      <div className="details__banner">
        <LazyLoadImageComponent
          src={showcase && showcase}
          alt={projectName && projectName}
        />
      </div>

      <InfoComponent
        projectName={projectName && projectName}
        client={client}
        type={type}
        singleAbout={singleAbout}
        singleGoal={singleGoal}
        about={about}
        goals={goals}
      />

      <div className="complete__details">
        {presentation && <PresentationComponent presentation={presentation} />}

        {concept && (
          <div className="extra">
            <div className="other__content">
              <span></span>
              <div className="min__width">
                <h3>Design Concept</h3>
                <div className="small__text">{concept}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {selection && (
        <div className="image_selection grid">
          {selection.map((selection, _key) => (
            <LazyLoadImageComponent src={selection} key={_key} alt="" />
          ))}
        </div>
      )}

      {extraLogo && (
        <div className="extra_images flex">
          {extraLogo.map((extra, _key) => (
            <div key={_key}>
              <LazyLoadImageComponent src={extra} alt="" />
            </div>
          ))}
        </div>
      )}

      <div className="complete__details">
        {mockups && (
          <div className="extra">
            <div className="other__content">
              <span></span>
              <div className="min__width">
                <h3>Mockups</h3>
                <div className="small__text">{mockups}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {company_profile_image && (
        <div className="image_selection grid">
          <LazyLoadImageComponent src={company_profile_image} alt="" />
        </div>
      )}

      <div className="complete__details">
        {company_profile && (
          <div className="extra">
            <div className="other__content">
              <span></span>
              <div className="min__width">
                <h3>Company Profile</h3>
                <div className="small__text">{company_profile}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {stationariesTop && (
        <div className="image_selection grid">
          {stationariesTop.map((stationary, _key) => (
            <LazyLoadImageComponent src={stationary} key={_key} alt="" />
          ))}
        </div>
      )}

      <div className="complete__details">
        {stationary && (
          <div className="extra">
            <div className="other__content">
              <span></span>
              <div className="min__width">
                <h3>Stationary</h3>
                <div className="small__text">{stationary}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {stationariesBottom && (
        <div className="image_selection grid">
          {stationariesBottom.map((stationary, _key) => (
            <LazyLoadImageComponent src={stationary} key={_key} alt="" />
          ))}
        </div>
      )}

      {product_design_image && (
        <div className="image_selection macbook">
          <LazyLoadImageComponent src={product_design_image} alt="" />
        </div>
      )}

      <div className="complete__details">
        {product_design && (
          <div className="extra">
            <div className="other__content">
              <span></span>
              <div className="min__width">
                <h3>Product Design</h3>
                <div className="small__text">{product_design}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="complete__details">
        {merchandise && (
          <div className="extra">
            <div className="other__content">
              <span></span>
              <div className="min__width">
                <h3>Merchandise</h3>
                <div className="small__text">{merchandise}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {vehicles_images && (
        <div className="image_selection vehicle flex">
          {vehicles_images.map((vehicle, _key) => (
            <div key={_key}>
              <LazyLoadImageComponent src={vehicle} key={_key} alt="" />
            </div>
          ))}
        </div>
      )}

      <div className="complete__details">
        {vehicles && (
          <div className="extra">
            <div className="other__content">
              <span></span>
              <div className="min__width">
                <h3>Vehicles</h3>
                <div className="small__text">{vehicles}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {variation && (
        <VariationComponent
          variation={variation}
          filters={filters}
          isActive={isActive}
          selected={selected}
          setIsActive={setIsActive}
          setSelected={setSelected}
        />
      )}

      <PaginationComponent projects={projects} itemsPerPage={1} />
    </div>
  );
};
