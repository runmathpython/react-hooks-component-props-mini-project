import React from "react";

function About({image = "https://via.placeholder.com/215", about}){
    return(
      <aside>
        <img src={image} alt="blog logo" />
        <p>
          Personal blog by <a href="https://twitter.com/dan_abramov">Dan Abramov</a>.
          <br />
          {about}
        </p>
      </aside>
    )
}

export default About;
