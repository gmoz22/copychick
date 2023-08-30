import * as React from "react";

function PortfolioHeader(props) {
    return (
        <div className="w-full mx-auto inline-block md:flex">
            <div className="w-full md:w-1/2 p-0 md:p-8">
                <img className="w-full" src={props.image} />
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-8 mt-4 md:mt-0 text-lg">
                {props.children}
            </div>
        </div>
    );
}

export default PortfolioHeader;
