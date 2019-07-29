import React, {Component} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUsb, FaLaptopCode, FaServer, FaStar } from 'react-icons/fa';
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

                <VerticalTimeline className="aboutme-grid">


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date= "2018 - present"
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
                        iconStyle={{ background: 'rgb(249, 158, 33)', color: '#fff' }}
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
                        iconStyle={{ background: 'rgb(33, 243, 243)', color: '#fff' }}
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
                        icon={<FaServer />}
                    >
                        <h3 className="vertical-timeline-element-title">Jr. Systems Administrator</h3>
                        <h4 className="vertical-timeline-element-subtitle">UC Davis College of Engineering</h4>
                        <p>
                            Worked with a team in maintaining 60+ Linux computers for students, faculty, & professors.
                            I was able to tutor, & offer IT support for professors, faculty, & students.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<FaStar />}
                    />

                </VerticalTimeline>

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

                <section className="aboutme-grid">
                    {this.toggleCategories()}
                </section>
            </div>

        )
    }
}

export default AboutMe;