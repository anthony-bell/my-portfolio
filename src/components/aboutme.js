import React, {Component} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUsb, FaLaptopCode } from 'react-icons/fa';
import {Tabs , Tab} from "react-mdl";

class AboutMe extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div><h1>Summary</h1></div>
            )
        }else if (this.state.activeTab ===1){
            return(
                <div>
                <VerticalTimeline>


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2018 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaLaptopCode />}
                    >
                        <h3 className="vertical-timeline-element-title">DevOps Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Nokia Software</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2016 - 2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaUsb />}
                    >
                        <h3 className="vertical-timeline-element-title">Systems Administrator</h3>
                        <h4 className="vertical-timeline-element-subtitle">SJSU Charles W. Davidson College of Engineering</h4>
                        <p>
                            Tested & deployed scalable, highly available & modular software products.
                            Wrote scripts to enhance user experience & integrated scripts with Linux utilizing my command line skills.
                            Utilized my verbal & writing communication skills by providing support for hardware & software related issues for clients & faculty.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Summer 2017"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaLaptopCode />}
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bluescape</h4>
                        <p>
                            Wrote REST APIs with NodeJs & improved my design/implementation skills for queries/database schemas
                            by analyzing/designing relational databases with Swagger & MongoDB/Mongoose. Enhanced my leadership skills by mentoring high school & undergraduate interns by familiarizing them with REST calls & APIs,
                            as well as an introduction to NodeJs.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2006 - 2008"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2013"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                        <p>
                            Strategy, Social Media
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2012"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                        <p>
                            Creative Direction, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        // icon={<StarIcon />}
                    />

                </VerticalTimeline>
                </div>
            )
        }
    }
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Summary</Tab>
                    <Tab>Experience</Tab>
                </Tabs>

                <section classname="aboutme-grid">
                    {this.toggleCategories()}
                </section>
            </div>

        )
    }
}

export default AboutMe;