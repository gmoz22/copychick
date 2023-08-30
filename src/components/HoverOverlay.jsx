import React, { useState } from 'react';
import PropTypes from "prop-types";

function HoverOverlay(props) {
    const [isShown, setIsShown] = useState(false);
    const handleClick = (link) => () => {
        if (link)
            window.location.href = link;
    };
    const showPointer = props.url ? "cursor-pointer" : null;
    return (
        <div className={props.divStyle}
             onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}
             onClick={handleClick(props.url)}
        >
            <img alt={props.header} src={props.image} className={props.imgStyle} />
            {isShown && (
                <div className={`absolute left-0 top-0 p-10 w-full h-full z-10 ${props.overlayStyle} ${showPointer} flex`}>
                    <div className="m-auto">
                        <div className={props.overlayHeaderStyle}>
                            {props.header}
                        </div>
                        {props.showHR && (
                            <hr />
                        )}
                        {props.caption && (
                            <div>
                                <br/>
                                <div className={props.overlayCaptionStyle}>
                                    {props.caption}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

HoverOverlay.propTypes = {
    divStyle: PropTypes.string,
    imgStyle: PropTypes.string,
    overlayStyle: PropTypes.string,
    overlayHeaderStyle: PropTypes.string,
    overlayCaptionStyle: PropTypes.string,
    image: PropTypes.elementType.isRequired,
    url: PropTypes.string,
    showHR: PropTypes.bool,
    header: PropTypes.string,
    caption: PropTypes.string,
};

// Specifies the default values for props:
HoverOverlay.defaultProps = {
    divStyle: "absolute left-0 top-0",
    imgStyle: "",
    overlayStyle: "",
    overlayHeaderStyle: "",
    overlayCaptionStyle: "",
    image: {},
    url: null,
    showHR: false,
    header: "",
    caption: "",
};

export default HoverOverlay;
