import React from "react";
import {Link} from "react-router-dom";
import "../style/resources.css";

 function Resources() {
        return (
        <div>
            <h1> Resources </h1>
                <li>
                  <ol><Link to="/https://www.thecyberhelpline.com/" id="CyberHelpline"> TheCyberHelpline </Link></ol>
                  <ol><Link to="/" id="DataBreaches"> Data Breaches </Link></ol>
                  <ol><Link to="/" id="PrivacyBreaches"> Privacy Breaches </Link></ol>
            </li>
         </div>
        )
    }

export default Resources;