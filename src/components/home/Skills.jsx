import React, { Component } from "react";

class Skills extends Component {
  render() {
    console.log(this.props.skills);
    if (this.props.skills) {
      var sectionName = "Skills";
      var skills = this.props.skills.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                {/* <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i> */}
                <span className="iconify" data-icon={skills.class}></span>
                  <p
                    className="text-center"
                    style={{ fontSize: "16px", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
