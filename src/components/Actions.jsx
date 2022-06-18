import React from "react";
import '../styles/actions.css';
import undoLogo from "../img/undo.png"
import redoLogo from "../img/redo.png"

const Action = (props) => {
    return (
        <div className="action">
            <div className="responsible">
                <h3>Ответственный</h3>

            </div>
            <div className="functions">
                <div className="period">
                    <h3>Период с</h3>
                    <input type="date" min="2019-01-26" max="2023-05-18" style={{width: 100, height: 20}}></input>
                    <h3>Период по</h3>
                    <input type="date" min="2019-01-26" max="2023-05-18" style={{width: 100, height: 20}}></input>           
                </div>
                <div></div>
                <button className="button_undo"><img src={undoLogo} alt="Откатиться" style={{width: 40, height: 30}}></img></button> 
                <button className="button_redo"><img src={redoLogo} alt="Вернуться" style={{width: 40, height: 30}}></img></button>     
            </div>

        </div> 
    );
}

export default Action;