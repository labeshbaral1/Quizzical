import React from "react"
import {store} from "../redux/store"


export default function Footer(props){

    const [gameOver, toggleGameOver] = React.useState(false)

    

    return(
        <footer className="footer-container">
             <div id="score">
                    
            </div>

            <div className="footer-button" onClick={
                ()=> {
                    toggleGameOver(true)
                    submit(gameOver);
                    }
                }
                > 
                {gameOver ? "Play Again": "Check Answers"}
            
            </div>

        </footer>

    )
}

function submit(gameOver) {

    if (gameOver){

        window.location.reload();
    }
    else{
        let c = 0
            for (var i=1; i <= localStorage.length; i++)  {
                c += (store.getState()[i][localStorage.getItem(i)] ? 1 : 0)
            }
        
        const score = document.getElementById("score")
        score.innerText=  `You scored ${c}/${localStorage.length} correct answers`
        score.style.display = "block"
    }   
        }  


