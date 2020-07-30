import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import aboutImg from "../../../static/assets/images/about/rockpic.jpg" 

export default function() {
    return (
    <div className="ac-wrapper">
        <div
          className="left-column-ac"
          style={{
            background: "url(" + aboutImg + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top"
          }}
        />

        <div className="right-column-ac">
          <div className="right-content-f">
            <div className="para">
                <FontAwesomeIcon className="icon" icon="envelope"/>
                example@email.com
            </div>
            <div className="para">
                <FontAwesomeIcon className="icon" icon="phone"/>
                (123)-456-7890
            </div>
            <div className="para">
                <FontAwesomeIcon className="icon" icon="map-marker-alt"/>
                Flavortown, USA
            </div>
          </div>
        </div>
      </div>
    )
}