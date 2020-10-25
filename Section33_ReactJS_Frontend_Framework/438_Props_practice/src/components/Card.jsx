import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                {/* <Info detailInfo={props.key} /> */}
                <Info detailInfo={props.id} />
                <h2 className="name">{props.name}</h2>
                <Avatar image={props.img} />
            </div>
            <div className="bottom">
                <Info detailInfo={props.tel} />
                <Info detailInfo={props.email} />
            </div>
        </div>
    );
}

export default Card;
