import React from "react";

const TasksTableRow = ({task, index, onTaskSelectionChange}) => {

    console.log(task.selected ? "table-warning" : '');

    const monthsNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return (
            <tr className={task.selected ? "table-warning" : ''}>
                <td><input type="checkbox" checked={task.selected} onChange={(e) => onTaskSelectionChange(index, e.target.checked)}></input></td>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.unit.name}</td>
                <td>{task.quantity}</td>
                <td>{task.description}</td>
                <td>{monthsNames[task.reportingDate.getMonth()]}</td>
                <td>{task.reportingDate.getYear() + 1900}</td>
                <td>{task.firm.name}</td>
                <td>{task.creationDate.toISOString().split('T')[0]}</td>
            </tr>
    );
}

export default TasksTableRow