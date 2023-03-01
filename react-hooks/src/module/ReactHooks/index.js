import React, { useState, useEffect } from 'react';
import useCounter from './module/index.js'

import useProfile from '.data.json'

function ReactHooks() {
    const { name, work, resume } = data;

    return (
        <div>
          <header>
            <div class="container-logo">
              <div class="header-left">
                <div class="header-name">CURICULLUM VITAE</div>
              </div>
              <div class="header-right">
                <a href="#about">About</a>
                <a href="#resume"><i></i> <span>Resume</span></a>
                <a href="#portfolio"><i></i><span>Portofolio</span></a>
                <a href="#contact"><span>Contact</span></a>
              </div>
            </div>
          </header>


        <div class="top-wrapper" id="about">
            <div class="containers">
              <h1>{name}</h1>
              <h2>{work}</h2>
              <p>{resume}</p>
            </div>
        </div>
        

        </div>
    )
}

export default ReactHooks;