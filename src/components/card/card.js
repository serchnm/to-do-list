import React from "react";
import "./card.scss";

function card() {
  return (
    <div className="card-center">
      <div className="card">
        <a href="https://example.com">
          <div className="card-content">
            <div class="card-thumbnail-container avatar bg-pale-red">
              <img
                src={require("../../image/rowletCensura.png")}
                loading="lazy"
                alt="Explore NeoBrutalismCSS"
                className="card-thumbnail"
              />
            </div>
            <div className="text-small">October 8, 2023</div>
            <p>
              <strong>Explore NeoBrutalismCSS: A Revolutionary library</strong>
            </p>
            <p>
              Unveil the future of NeoBrutalism with our groundbreaking approach
              that will transform your life.
            </p>
            <p>
              <button class="nb-button default"> Click Here </button>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default card;
