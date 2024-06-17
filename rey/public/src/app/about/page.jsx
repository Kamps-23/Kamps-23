"use client";
import React from "react";
import "./style.css";
import Image from "next/image";

export default function About() {
  return (
    <div className="wrapper">
      <div>
        <div>
          <h1>INTRODUCTION</h1>
        </div>
        <div className="about-grid">
          <div className="image-container">
            <Image src={"/images/hero.png"} alt="about image 2" fill={true} />
          </div>
          <div>
            <p>
              Zambia, with its diverse and expansive geographical landscape,
              demands a sophisticated approach to surveying and mapping.
              Recognizing the critical role of accurate spatial data in various
              sectors such as urban planning, infrastructure development, and
              natural resource management. This introduction sets the stage for
              a transformative undertaking that not only strengthens the
              geospatial foundation of Zambia but also aligns with global
              standards for precision mapping and data accessibility
            </p>
          </div>
          <div></div>
        </div>
      </div>

      <div>
        <div className="second">
          <h1>BACKGROUND</h1>
        </div>
        <div className="about-grid">
          <div>
            <p>
              Surveying is imperative requirement in the planning and execution
              of nearly every form of construction with the survey control
              points being there for support and to facilitate the works.
            </p>
          </div>
          <div>
            <p>
              As the nation progresses, the demand for accurate and reliable
              spatial data becomes increasingly critical for informed
              decision-making, sustainable development, and effective resource
              management. Geodetic surveying, which forms the foundation of
              precise mapping and spatial analysis, is pivotal in meeting these
              demands.
            </p>
          </div>
          <div className="image-container">
            <Image src={"/images/hero.png"} alt="about image 2" fill={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
