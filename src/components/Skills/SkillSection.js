import React, { Component } from "react";
import "./skills.css";
import SoftwareSkill from "./SoftwareSkills/SoftwareSkill";
import { skills } from "../../config";
import { Flip, Fade } from "react-reveal";

class SkillSection extends Component {
  render() {
    return (
      <div>
        {skills.map((skill) => {
          return (
            <div className="skills-main-div">
              <Flip left duration={2000}>
                <div className="skills-image-div">
                  <img
                    alt="Dan is hard at work"
                    src={require(`../../img/${skill.image}`)}
                  ></img>
                </div>
              </Flip>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading">{skill.title}</h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.descriptions.map((sentence) => {
                      return <p className="subTitle skills-text">{sentence}</p>;
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
