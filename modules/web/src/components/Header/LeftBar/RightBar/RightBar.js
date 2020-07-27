import React from 'react'

const RightBar = () => {
    return(
        <div className="h_right">
            <ul className="menu">
                <li className="active"><a href="index.html">hotel</a></li> |
                <li><a href="#">rooms &amp; suits</a></li> |
                <li><a href="#">reservation</a></li> |
                <li><a href="#">taxi service</a></li> |
                <li><a href="#">food</a></li> |
                <li><a href="#">spa</a></li>
                <div className="clear" />
            </ul>
        </div>
    );
};

export default RightBar