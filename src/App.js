import React  from "react";

import {Main} from "./components/Main"
import Splashscreen from "./components/Splashscreen";
import Footer from "./components/Footer";

export let answerKey = {}

export default function App(){
  const [showSplash, toggleSplash] = React.useState(true)
  
  function start(){
      toggleSplash(prev => !prev)
  }

  return(
      <div>
        {localStorage.clear()}
          {showSplash ? 

          <Splashscreen toggle={start}/> 
          : 
                <>
                    <Main />
                    <Footer />

  
                        
                </>
        } 
      </div>
  )
}
