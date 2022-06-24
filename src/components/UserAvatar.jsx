import React from "react";
import Avatar from '@mui/material/Avatar';
import { green } from "@mui/material/colors";

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: green[700],
        },
        children: `${name[0].toUpperCase()}`,
    };
}

const UserAvatar = ({name}) => {
    return (
        <Avatar {...stringAvatar(name)} />
    );
}

export default UserAvatar;