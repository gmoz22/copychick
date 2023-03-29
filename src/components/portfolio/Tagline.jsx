import * as React from "react";

function PortfolioTagline(props) {
    return (
        <div className="text-sm uppercase font-bold text-gray-400 leading-[2em]">
            {props.title}
        </div>
    );
}

export default PortfolioTagline;
