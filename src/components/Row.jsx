import React from "react";
import '../styles/row.css';

const Row = (props) => {
    return (
            <tr>
                <td><input type="checkbox" value="1417"></input></td>
                <td>sdc</td>
                <td>Задача</td>
                <td>Ед. Изм.</td>
                <td>Кол-во</td>
                <td>Примечание</td>
                <td>Отчетный месяц</td>
                <td>Отчетный год</td>
                <td>Фирма</td>
                <td>Время записи</td>
            </tr>
    );
}

export default Row