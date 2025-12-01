import React from "react";
import "./HomeFeatureList.css";

export default function HomeFeatureList() {
    const items = [
        {
            title: "ZEISS Vision Expertise",
        },
        {
            title: "Personalized Eye Examination",
        },
        {
            title: "Prescription Lenses",
        },
    ];
    return (
        <div className="feature-List">
            {items.map((items, i) => (
                <div key={i} className="feature-rows">
                    <h3 className="List-title">{items.title}</h3>
                    <button className="arrow-butn">
                        →
                    </button>
                </div>
            ))}
        </div>
    );
}