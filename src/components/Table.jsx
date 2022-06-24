import React, { useEffect, useState } from "react";
import '../styles/table.css';
import Row from "./Row.jsx";
import axios from "axios";


const Table = (props) => {
    const [rows, setRows] = useState([
        { id: 1, task: 'task1', units: 'час', count: 3, note: 'что-то', month: 'октябрь', year: 2019, firm: 'ООО Front', time: '22.00' },
        { id: 2, task: 'task2', units: 'день', count: 100, note: 'какой то большой текст', month: 'декабрь', year: 2020, firm: 'ООО Frontфвыч', time: '24.00' },
        { id: 3, task: 'task3', units: 'год', count: 33, note: 'что-то', month: 'октябрь', year: 2013, firm: 'ООО Fronфывt', time: '21.00' },
        { id: 4, task: 'task4', units: 'месяц', count: 2, note: 'что-то', month: 'январь', year: 2017, firm: 'ООО Fronфвыt', time: '1.00' },
    ])

    // useEffect(() => {
    //     subscribe()
    // }, [])

    // // const subscribe = async () => {
    // //     try {
    // //         const { data } = await axios.get('http://localhost:3000/work-table')
    // //         setRows(prev => [data, ...prev])
    // //         await subscribe();
    // //     }
    // //     catch (e) {
    // //         setTimeout(() => {
    // //             subscribe()
    // //         }, 500)
    // //     }
    // // }

    return (

        <div className="table">
            <table border="2px">
                <thead>
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
                </thead>
                <tbody>
                    {
                        rows.map((data) =>
                            <Row data={data} key={data.id} />
                        )
                    }
                </tbody>
            </table>
        </div>

    );
}

export default Table;
