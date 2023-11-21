import * as React from "react";
import {cn} from "../lib/utils";

function Body(props) {
    return (
        <div className={cn("max-w-7xl sm:w-auto mx-auto mt-12", props.className)}>
            {props.children}
        </div>
    );
}

export default Body;
