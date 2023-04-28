import React from 'react';
import './../../src/App.css';
import { GiHamburgerMenu } from "react-icons/gi";

function Test() {
  return (
    <div className="App">
      Hello World
      <p>MUDA , Typography</p>

      <header class='flex flex-jc-sb flex-ai-c'>
        <div class='logo flex-ai-c'>
          <h1>
            MUDA<h6>PG</h6>
          </h1>
        </div>

        <div class='flex flex-ai-c'>
          <GiHamburgerMenu size={35}/>
        </div>

        <div>
          <h1>
            JOM
          </h1>
          <p>
            sertai kami
          </p>
        </div>
      </header>

    </div>
  );
}

export default Test;