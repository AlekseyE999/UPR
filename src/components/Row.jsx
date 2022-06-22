import React from "react";
import '../styles/row.css';

const Row = (props) => {
    return (
            <tr>
                <td><input type="checkbox" value={props.data.id}></input></td>
                <td>{props.data.id}</td>
                <td>{props.data.task}</td>
                <td>{props.data.units}</td>
                <td>{props.data.count}</td>
                <td>{props.data.note}</td>
                <td>{props.data.month}</td>
                <td>{props.data.year}</td>
                <td>{props.data.firm}</td>
                <td>{props.data.time}</td>
            </tr>
    );
}

export default Row