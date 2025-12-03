import React from "react";
import "./Blog.css";

const blogData = [
  {
    image: "blog1.jpg",
    title: "Blue Light Glasses — Trend or Real Need.",
    date: "October 28, 2025",
    desc: "Blue Light Glasses — Trend or Real Need? We live in a digital world. From the moment we wake up, the...",
  },
  {
    image: "blog2.jpeg",
    title: "The New Luxury: Quiet, Confident, Minimal",
    date: "October 28, 2025",
    desc: "The New Luxury: Quiet, Confident, Minimal Luxury today has changed. It is no longer about loud logos, bold colors, or...",
  },
  {
    image: "blog3.jpeg",
    title: "Eyewear is Not Just an Accessory",
    date: "October 28, 2025",
    desc: "Eyewear is Not Just an Accessory — It’s a statement in a world full of trends that change faster than...",
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">

    <div className="blog-heading">
        <h2>BLOG</h2>
    </div>
      <div className="blog-wrapper">
        {blogData.map((item, index) => (
          <div className="blog-card" key={index}>
            <img src={item.image} alt="" className="blog-img" />

            <div className="blog-content">
              <h2 className="blog-title">{item.title}</h2>
              <p className="blog-date">{item.date}</p>
              <p className="blog-desc">{item.desc}</p>

              <a className="blog-readmore" href="#">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
