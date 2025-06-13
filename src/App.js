import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";
import ReactGA from "react-ga";

const TRACKING_ID = "G-30XW55ESY7";
function App() {

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);

    const script = document.createElement("script");
    script.innerHTML = `
      !function(e,r){
        try {
          if(e.vector) return console.log("Vector snippet included more than once.");
          var t={}; t.q=t.q||[];
          for(var o=["load","identify","on"],n=function(e){
            return function(){
              var r=Array.prototype.slice.call(arguments);
              t.q.push([e,r])
            }
          },c=0; c<o.length; c++){
            var a=o[c]; t[a]=n(a)
          }
          if(e.vector=t, !t.loaded){
            var i=r.createElement("script");
            i.type="text/javascript"; i.async=!0;
            i.src="https://cdn.vector.co/pixel.js";
            var l=r.getElementsByTagName("script")[0];
            l.parentNode.insertBefore(i,l);
            t.loaded=!0
          }
        } catch(e) {
          console.error("Error loading Vector:", e)
        }
      }(window,document);
      vector.load("b626a2a0-4126-422e-839b-e5c24f29e324");
    `;
    document.body.appendChild(script);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
