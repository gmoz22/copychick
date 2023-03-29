import * as React from "react";

function PortfolioHeader(props) {
    return (
        <div className="w-screen bg-primary pt-28 mx-auto text-center text-white text-7xl leading-[3em] font-bold">
            {props.title}
        </div>
    );
}

export default PortfolioHeader;
