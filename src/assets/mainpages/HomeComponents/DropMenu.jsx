import "./DropMenu.css";

export default function DropMenu({ handleClick }) {
  return (
    <div className="menu">
      <div className="item">
        <a href="#" className="link">
          <span> Our Menu </span>
          <svg viewBox="0 0 360 360" xml:space="preserve">
            <g id="SVGRepo_iconCarrier">
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              ></path>
            </g>
          </svg>
        </a>
        <div className="submenu">
          <button className="submenu-item" onClick={handleClick}>
            <a className="submenu-link" onClick={handleClick}>
              {" "}
              <img
                style={{ paddingRight: "10px" }}
                src="./Assets/mile2-aseets/icons/1.svg"
              />
              Ramen{" "}
            </a>
          </button>
          <button className="submenu-item" onClick={handleClick}>
            <a className="submenu-link" onClick={handleClick}>
              {" "}
              <img
                style={{ paddingRight: "10px" }}
                src="./Assets/mile2-aseets/icons/2.svg"
              />
              Pizza{" "}
            </a>
          </button>
          <button className="submenu-item" onClick={handleClick}>
            <a className="submenu-link" onClick={handleClick}>
              {" "}
              <img
                style={{ paddingRight: "10px" }}
                src="./Assets/mile2-aseets/icons/3.svg"
              />
              Burger{" "}
            </a>
          </button>
          <button className="submenu-item" onClick={handleClick}>
            <a className="submenu-link" onClick={handleClick}>
              {" "}
              <img
                style={{ paddingRight: "10px" }}
                src="./Assets/mile2-aseets/icons/4.svg"
              />
              French fries{" "}
            </a>
          </button>
          <button className="submenu-item" onClick={handleClick}>
            <a className="submenu-link" onClick={handleClick}>
              {" "}
              <img
                style={{ paddingRight: "10px" }}
                src="./Assets/mile2-aseets/icons/5.svg"
              />
              Fast food{" "}
            </a>
          </button>
          <button className="submenu-item" onClick={handleClick}>
            <a className="submenu-link" onClick={handleClick}>
              {" "}
              <img
                style={{ paddingRight: "10px" }}
                src="./Assets/mile2-aseets/icons/6.svg"
              />
              Soft drinks{" "}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
