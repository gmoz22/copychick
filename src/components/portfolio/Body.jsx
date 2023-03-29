import * as React from "react";

function PortfolioBody(props) {
    return (
        <div className="w-full">
            <div className="w-1/4 pr-10 float-right">
                <div className="text-sm text-tertiary"><span className="text-lg text-gray-600 font-bold">Work:</span> {props.type}</div>
                <br/>
                <div className="text-sm text-tertiary"><span className="text-lg text-gray-600 font-bold">Client Type:</span> {props.industry}</div>
            </div>
            <div className="w-3/4 pr-10">
                {props.children}
            </div>
        </div>
    );
}

export default PortfolioBody;
