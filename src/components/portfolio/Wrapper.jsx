import * as React from "react";

function PortfolioWrapper(props) {
    return (
        <div className="md:max-w-7xl w-full md:mx-auto mt-28 lg:mt-40 px-12">
            {props.children}
        </div>
    );
}

export default PortfolioWrapper;
