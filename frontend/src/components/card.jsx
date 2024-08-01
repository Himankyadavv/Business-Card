import React, { useState } from "react";

function Card({ detail }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ fontSize: "20px", paddingBottom: "10px" }}>
        <b>{detail.name}</b>
      </div>
      <div style={{ paddingBottom: "10px", fontSize: "16px", color: "#555" }}>
        {detail.desc}
      </div>
      <div style={{ paddingBottom: "10px" }}>
        <div style={{ fontSize: "16px", display: "flex" }}>
          <b>Intrests</b>
        </div>
        <ul style={{ paddingLeft: "10px" }}>
          {detail.intrests.map((data, index) => (
            <li
              key={index}
              style={{ fontSize: "14px", color: "#555", margin: "5px" }}
            >
              {data}
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          flexDirection: "row",
          padding: "10px 0px 20px 0px",
        }}
      >
        {detail.links.map((data, index) => (
          <div key={index}>
            <a
              key={index}
              href={data}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#fff",
                border: "1px solid #007BFF",
                backgroundColor: "#007BFF",
                padding: "10px 15px",
                borderRadius: "8px",
              }}
            >
             twitter
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
