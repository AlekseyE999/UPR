import React from "react";
import '../styles/actions.css';

const Action = (props) => {
    return (
        <div className="action">
            <div className="responsible">
                <h3>Ответственный</h3>

            </div>
            <div className="functions">
                <div className="period">
                    <h3>Период с</h3>
                    <input></input>
                    <h3>Период по</h3>
                    <input></input>           
                </div>
                <button className="button_undo"><img src="../img/undo.jpg" alt="Откатиться" width="100" height="75"></img></button> 
                <button className="button_redo"><img src="../img/redo.jpg" alt="Вернуться" width="100" height="75"></img></button>     
            </div>

        </div> 
    );
}

export default Action;