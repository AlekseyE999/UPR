import React from "react";
import '../styles/graphs.css';

const Graphs = (props) => {
    return (
            <ul className="graph">
                <li>sdc</li>
                <li>Задача</li>
                <li>Ед. Изм.</li>
                <li>Кол-во</li>
                <li>Примечание</li>
                <li>Отчетный месяц</li>
                <li>Отчетный год</li>
                <li>Фирма</li>
                <li>Время записи</li>
            </ul>
    );
}

export default Graphs;