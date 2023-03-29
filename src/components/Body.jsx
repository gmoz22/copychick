import * as React from "react";

function Body(props) {
    return (
        <div className="max-w-7xl mx-auto mt-12">
            {props.children}
        </div>
    );
}

export default Body;
