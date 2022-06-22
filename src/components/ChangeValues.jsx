import React from "react";


const ChangeValues = (props) => {
    return (
        <div className="change_values">
            <table border="2px">
                <thead>
                    <tr>
                        <th>Столбец</th>
                        <th>Текущее значение</th>
                        <th>Заменить на</th>
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

export default ChangeValues;