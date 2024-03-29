import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
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
                      <h3>{item.ProjectName}</h3>
                      <p className="info">
                        {item.Company}
                        <span> </span> <em className="date">{item.MonthOfJoining} {item.YearOfJoining}</em> - <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p className="justify">
                        {item.Description && item.Description.map((point) => {
                          return (<><ul><b>* </b>{point}</ul></>)
                        })}
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>

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
                      <h3>{item.specialization}</h3>
                      <p className="info">
                        {item.UniversityName}
                        <span>&bull;</span> <em className="date">{item.StartYear} - {item.EndYear}</em></p>
                      <p>
                        {item.Percenatge}
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


            <div className="bars">

              {
                resumeData.skills
              }

            </div>

          </div>

        </div>

      </section>
    );
  }
}