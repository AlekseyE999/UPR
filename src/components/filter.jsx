import React from "react";
import '../styles/filter.css';

const Filter = (props) => {
    return (
        <div className="filter">
           <h2>Фильтр</h2>
            <div className="task">
                <h3>Задача</h3>
                <input></input>
            </div>
            <div className="units select_item">
                <h3>Ед. Изм.</h3>
                <select></select>       
            </div>
            <div className="counts select_item">
                <h3>Количество</h3>
                <select></select>       
            </div>
            <div className="reporting_month select_item">
                <h3>Отчётный месяц</h3>
                <select></select>       
            </div>
            <div className="reporting_year select_item">
                <h3>Отчётный год</h3>
                <select></select>       
            </div>
            <div className="firm select_item">
                <h3>Фирма</h3>
                <select></select>       
            </div>
            <button className="filter_out">Отфильтровать</button>
        </div> 
    );
}

export default Filter;