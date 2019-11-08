import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten ">
              <h3 style={{color:'#c4d7f5'}}>Address:</h3>
            </div>
            <div className="ten columns">
              <h5 style={{color:'#82aef5'}}>{resumeData.address1}</h5>
              <h5 style={{color:'#82aef5'}}>{resumeData.city}</h5>
              <h5 style={{color:'#82aef5'}}>{resumeData.country}</h5>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
              Linked in : <span><a href={resumeData.linkedinId}>
                  {resumeData.linkedinId}
                </a></span>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}