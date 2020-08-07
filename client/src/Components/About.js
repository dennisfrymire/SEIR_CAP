import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

let github = 'https://github.com/dennisfrymire/SEIR_CAP';

class About extends Component {
    render() {
        return (
            <div className="container main-text">
                <p><span className="headline bold">quote</span> is a CRUD app using the MERN stack, and was executed as my capstone project from General Assembly's Software Engineering Immersive.</p>

                <p>You can check out the code on <a href={github}>Github</a>.</p>
            </div>
        )
    }
}

export default About;
