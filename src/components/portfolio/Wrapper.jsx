import * as React from "react";

function PortfolioWrapper(props) {
    return (
        <div className="max-w-7xl mx-auto mt-12">
            {props.children}
        </div>
    );
}

export default PortfolioWrapper;
