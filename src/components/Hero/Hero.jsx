import React, { useState } from "react";
import Typist from "react-typist";
import "./hero.css";
import { heroInfo } from "../../config";
import { Link } from 'react-scroll'
const { firstName, lastName, devDesc, icons } = heroInfo;

const Hero = () => {
  const [hoverstatus, setHoverstatus] = useState(
    new Array(icons.length).fill("socialicons")
  );

  const toggleHover = (data) => {
    const newhoverStatus = [...hoverstatus];

    if (data.event === "enter") {
      newhoverStatus[data.icon.id] = "socialiconshover";
      return setHoverstatus(newhoverStatus);
    } else if (data.event === "leave") {
      newhoverStatus[data.icon.id] = "socialicons";
      return setHoverstatus(newhoverStatus);
    }
  };

  return (
    <div>
      <div
        id="home"
        className="title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <div className="container container-fluid text-center ">
          <h1 className="display-1">{firstName + " " + lastName}</h1>
          <Typist className="lead"> {devDesc}</Typist>
          <div className="p-5">
            {icons.map((icon) => (
              <a
                key={icon.id}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i
                  className={`fab ${icon.image}  fa-3x ${hoverstatus[icon.id]}`}
                  onMouseOver={() => toggleHover({ icon, event: "enter" })}
                  onMouseOut={() => toggleHover({ icon, event: "leave" })}
                />
              </a>
            ))}
          </div>
          <Link
            className="btn btn-outline-light btn-lg"
            to="skills"
            role="button"
            aria-label="Learn more about me"
            smooth={true}
            duration={1000}
          >
            More about me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
