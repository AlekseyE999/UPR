import React from "react";
import '../styles/table.css';
import Graphs from "./graphs";

const Table = (props) => {
    return (
        <div className="table">
            <ul className="table_header">
                <li>№</li>
                <li>Задача</li>
                <li>Ед. Изм.</li>
                <li>Кол-во</li>
                <li>Примечание</li>
                <li>Отчетный месяц</li>
                <li>Отчетный год</li>
                <li>Фирма</li>
                <li>Время записи</li>
            </ul>
            <Graphs/>
            <Graphs/>
            <Graphs/>
            <Graphs/>
        </div>
    );
}

export default Table;