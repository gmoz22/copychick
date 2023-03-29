import * as React from "react";

function PortfolioTitle(props) {
    return (
        <div className="text-3xl font-bold leading-[2em]">
            {props.title}
        </div>
    );
}

export default PortfolioTitle;
