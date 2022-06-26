import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const JwtProvider = ({consumer, plug, ...props}) => {

    const navigate = useNavigate();

    const [jwt, setJwt] = useState(null);

    useEffect(() => {

        const jwt = localStorage.getItem('token');

        jwt ? setJwt(jwt) : navigate('/login', {replace: true});

    }, [navigate])

    return (
        <div className="AuthorizedAccess">

            {jwt ?
                React.cloneElement(consumer, {...props, jwt: jwt}) :
                plug}

        </div>
    );
}

export default JwtProvider;