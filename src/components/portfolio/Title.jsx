import * as React from "react";

function PortfolioTitle(props) {
    return (
        <div className="text-3xl lg:text-4xl text-primary my-4">
            {props.title}
        </div>
    );
}

export default PortfolioTitle;
