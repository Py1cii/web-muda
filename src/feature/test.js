import React from 'react';
import './../../src/App.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from '@mui/material';

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

        <Button variant='outlined' class='menu flex flex-ai-c'>
          <GiHamburgerMenu size={35}/>
        </Button>

        <div>
          <h1>
            JOM
          </h1>
          <p style={{color: 'black'}}>
            sertai kami
          </p>
        </div>
      </header>

      <body>
        <p style={{color:'red'}}>Statistic</p>
        <p>Artikel & Berita</p>
      </body>

    </div>
  );
}

export default Test;