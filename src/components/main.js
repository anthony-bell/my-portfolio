import React from 'react';
import {Switch, Route} from "react-router-dom";
import LandingPage from "./landingpage";
import Resume from "./resume";
import Contact from "./contact";
import Projects from "./projects";
import AboutMe from "./aboutme";


const Main = () => (
    <Switch>
        <Route exact path ="/" component={LandingPage} />
        <Route exact path ="/resume" component={Resume} />
        <Route exact path ="/contact" component={Contact} />
        <Route exact path ="/projects" component={Projects} />
        <Route exact path ="/aboutme" component={AboutMe} />
    </Switch>
)

export default Main;