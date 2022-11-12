import React, { Component } from 'react';
import { ProgressBar } from './ProgressBar';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {!!(item.responsibilites && item.responsibilites.length) && item.responsibilites.map(responsibility => (
                          <div>- {responsibility}</div>
                        ))}
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.skills && resumeData.skills.map((item) =>
              (
                <div className="bars">
                  <ul className="skills">
                    <h3>{item.title}</h3>
                    {item.list && item.list.map((data) => {
                      return (
                        <>
                          <li>
                            <em>{data.skillname}</em>
                            <ProgressBar width="400" percent={data.skillPercent} />
                          </li>
                        </>
                      )
                    })}

                  </ul>

                </div>
              ))
            }

          </div>

        </div>

      </section>
    );
  }
}