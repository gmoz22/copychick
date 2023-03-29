import React, { useState } from 'react';
import PropTypes from "prop-types";

function PortfolioEntryImg(props) {
    const [isShown, setIsShown] = useState(false);
    const handleClick = (link) => () => {
        window.location.href = link;
    };
    return (
        <div className={props.divStyle}
             onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}
             onClick={handleClick(props.url)}
        >
            <img alt={props.client} src={props.image} className={props.imgStyle} />
            {isShown && (
                <div className="absolute left-0 top-0 w-full h-full p-10 z-10 text-white bg-primary_70 cursor-pointer flex">
                    <div className="m-auto">
                        <div className="text-4xl font-bold">
                            {props.client}
                        </div>
                        <hr />
                        <br/>
                        <div>
                            {props.work}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

PortfolioEntryImg.propTypes = {
    divStyle: PropTypes.string,
    imgStyle: PropTypes.string,
    image: PropTypes.elementType.isRequired,
    url: PropTypes.string,
    client: PropTypes.string,
    work: PropTypes.string,
};

// Specifies the default values for props:
PortfolioEntryImg.defaultProps = {
    divStyle: "absolute left-0 top-0",
    imgStyle: "",
    image: {},
    url: "#",
    client: "",
    work: "",
};

export default PortfolioEntryImg;
