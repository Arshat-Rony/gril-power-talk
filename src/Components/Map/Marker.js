import React from 'react';
import { ImLocation2 } from "react-icons/im"
const Marker = ({ text }) => {
    return (
        <div>
            <ImLocation2 />
            {text}
        </div>
    );
};

export default Marker;