import * as React from "react";

function PortfolioBody(props) {
    return (
        <div className="md:max-w-7xl w-full md:mx-auto px-4 md:px-8 mt-12 text-lg md:text-xl border-t-4 border-solid border-primary md:border-none pt-12 md:pt-0">
            {props.children}
        </div>
    );
}

export default PortfolioBody;
