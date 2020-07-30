import React from 'react';

import aboutImg from "../../../static/assets/images/about/fishpic.jpg" 

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
          <div className="right-content">
            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst quisque sagittis purus sit. Bibendum arcu vitae elementum curabitur vitae. Faucibus a pellentesque sit amet porttitor. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Sodales ut eu sem integer vitae justo eget. Commodo quis imperdiet massa tincidunt nunc. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Velit egestas dui id ornare arcu odio ut sem. Fringilla phasellus faucibus scelerisque eleifend. Ut ornare lectus sit amet est placerat in egestas. Cursus eget nunc scelerisque viverra mauris in. Quis vel eros donec ac odio tempor orci. Elementum nisi quis eleifend quam.</p>
            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst quisque sagittis purus sit. Bibendum arcu vitae elementum curabitur vitae. Faucibus a pellentesque sit amet porttitor. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Sodales ut eu sem integer vitae justo eget. Commodo quis imperdiet massa tincidunt nunc. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Velit egestas dui id ornare arcu odio ut sem. Fringilla phasellus faucibus scelerisque eleifend. Ut ornare lectus sit amet est placerat in egestas. Cursus eget nunc scelerisque viverra mauris in. Quis vel eros donec ac odio tempor orci. Elementum nisi quis eleifend quam.</p>
          </div>
        </div>
      </div>
    )
}