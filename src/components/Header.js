import React from "react";

function Header({name}) {
  return (
    <header>
        <h1>
           <a href="https://overreacted.io/">{name}</a>
        </h1>
    </header>
  )
}

export default Header;