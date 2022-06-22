import React from "react";

const Option = (props) => {
    return (
        <option value={props.data.value}>{props.data.name}</option>
    );
}

export default Option;