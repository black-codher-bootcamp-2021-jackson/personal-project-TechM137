import React from "react";
import {Link} from "react-router-dom";
import "../style/resources.css";

 function Resources() {
        return (
            <body>
                <div class="header">
                    <h1> Resources </h1>
                        <div class="dropdown">
                            <button class="link">Topics</button>
                            <div class="dropdown-menu">
                                Dropdown Content
                            </div>
                        </div>
                    </div>
                <div>
                    <ul>
                        <li><a href= "https://www.thecyberhelpline.com/" id="CyberHelpline"> TheCyberHelpline </a></li>
                        <li><a href="/" id="DataBreaches"> Data Breaches </a></li>
                        <li><a href ="/" id="PrivacyBreaches"> Privacy Breaches </a></li>
                    </ul>
                </div>
           </body>
        )
    }

export default Resources;