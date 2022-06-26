import React, { useEffect, useState } from "react";
import TasksTableRow from "./TasksTableRow.jsx";

const TasksTable = ({tasks, onTaskSelectionChange, onSelectAll}) => {

    console.log("Table");

    return (

        <div className="TasksTable">
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th><button className="btn text-white" onClick={onSelectAll}>✓</button></th>
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
                        tasks.map((task, i) => <TasksTableRow task={task} index={i} onTaskSelectionChange={onTaskSelectionChange} key={task.id} />)
                    }
                </tbody>
            </table>
        </div>

    );
}

export default TasksTable;
