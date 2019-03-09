import React, {Component} from "react";
import {Grid, Cell} from 'react-mdl';
import PokemonGif from 'react-pokemon-gif';
// import styles from '../Pokemon.css';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'charizard' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }
    render() {
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>


                            <PokemonGif
                                className="avatar-img"
                                pokemon={this.state.text}
                                height={100}
                            />
                            <div className="namer">
                                <div className="namer-input">
                                    <input type="text" className="namername" placeholder="Who's your favorite Pokemon?" onChange={this.handleChange}/>
                                </div>
                            </div>

                        <div className="banner-text">
                            <h1>DevOps Engineer </h1>

                            <hr/>
                            <p>HTML/CSS | Javascript | React | Python | NodeJS</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/anthony-bell-492b448b/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/anthony-bell" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                {/* Email */}
                                <a href="/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                </a>
                            </div>


                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;