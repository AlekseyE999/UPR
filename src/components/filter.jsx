import React, { useState } from "react";
import '../styles/filter.css';
import Option from "./Option.jsx";

const Filter = (props) => {
    const [options, setOptions] = useState ([
        { id: 1, value: 'hour', name: 'час',},
        { id: 2, value: 'day', name: 'день',},
        { id: 3, value: 'week', name: 'неделя',},
        { id: 4, value: 'month', name: 'месяц',},
        { id: 5, value: 'year', name: 'год',},
    ]);

    const [firms, setFirm] = useState ([]);



    return (
        <div className="filter">
            <h2>Фильтр</h2>
            <div className="task">
                <h3>Задача</h3>
                <textarea style={{ height: 60, width: 240 }}></textarea>
            </div>
            <div className="units select_item">
                <h3>Ед. Изм.</h3>
                <select>
                    {
                        options.map((option) =>
                            <Option data={option} key={option.id} />
                        )
                    }
                </select>
            </div>
            <div className="counts select_item">
                <h3>Количество</h3>
                <input style={{ width: 30 }} type="number" min={1} max={99}></input>
            </div>
            <div className="reporting_month select_item">
                <h3>Отчётный месяц</h3>
                <select>
                    <option selected value="jan">Январь</option>
                    <option value="feb">Февраль</option>
                    <option value="mar">Март</option>
                    <option value="apr">Апрель</option>
                    <option value="may">Май</option>
                    <option value="jun">Июнь</option>
                    <option value="jul">Июль</option>
                    <option value="aug">Август</option>
                    <option value="sep">Сентябрь</option>
                    <option value="oct">Октябрь</option>
                    <option value="nov">Ноябрь</option>
                    <option value="dec">Декабрь</option>
                </select>
            </div>
            <div className="reporting_year select_item">
                <h3>Отчётный год</h3>
                <input style={{ width: 50 }} type="number" min={1990} max={2022}></input>
            </div>
            <div className="firm select_item">
                <h3>Фирма</h3>
                <select></select>
            </div>
            <button className="filter_out" type="submit">Отфильтровать</button>
        </div>
    );
}

export default Filter;