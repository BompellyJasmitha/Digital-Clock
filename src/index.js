import React from 'react';
import ReactDOM from "react-dom/client";
import Clock from './digitallock.jsx';


let ele=ReactDOM.createRoot(document.getElementById("root"))
ele.render(<div id="mainDiv">
                <Clock/>
          </div>)


