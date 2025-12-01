import React from "react";
import "./HomeCreations.css";
import { FiArrowRight } from "react-icons/fi";

const collectionsData = [
  {
    title: "The Luxury Edit – A World of Prestige",
    tag: "Collections",
    img: "/homecollection.jpeg",
    link: "http://localhost:5174/collection"
  },
  {
    title: "The Precision Collection – Lightness Refined",
    tag: "Collections",
    img: "/homecollection2.jpeg",
    link: "http://localhost:5174/collection"
  },
  {
    title: "The Expression Line – Culture, Creativity & Cool",
    tag: "Collections",
    img: "/homecollection3.jpeg",
    link: "http://localhost:5174/collection"
  }
];

export default function CollectionsSection() {
  return (
    <section className="collections-section">
      <div className="collections-grid">
        {collectionsData.map((item, index) => (
          <div className="collection-card" key={index}>
            <div className="collection-image">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="collection-content">
              <span className="collection-tag">{item.tag}</span>

              <h2 className="collection-title">{item.title}</h2>

              <a className="collection-more" href={item.link}>
                MORE <FiArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
