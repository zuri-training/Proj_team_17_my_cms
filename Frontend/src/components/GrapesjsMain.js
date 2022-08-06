import React, { useEffect } from 'react';
import Grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import dynamicConfig from "./grapesjsConfig";
import "./app.css";


const GrapesjsMain = () => {
    useEffect(() => {
        loadGrapesJs()
    }, [])
    const loadGrapesJs = async () => {
        const editor = await Grapesjs.init(dynamicConfig())
    }

  return (
    <>
        <div id="gjs">
            <h1>Hello World Component!</h1>
        </div>
        <div id="blocks"></div>
    </>
  );
  
}

export default GrapesjsMain;
