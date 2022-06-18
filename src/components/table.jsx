import React from "react";
import '../styles/table.css';
import Row from "./Row";

const Table = (props) => {
    return (
        <div className="table">
            <table border="1px">
                <tr>
                    <th>✓</th>
                    <th>№</th>
                    <th>Задача</th>
                    <th>Ед. Изм.</th>
                    <th>Кол-во</th>
                    <th>Примечание</th>
                    <th>Отчетный месяц</th>
                    <th>Отчетный год</th>
                    <th>Фирма</th>
                    <th>Время записи</th>
                </tr>
                <Row />
                <Row />
                <Row />
                <Row />
            </table>

        </div>
    );
}

export default Table;