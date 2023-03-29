import * as React from "react";

function Title(props) {
        return (
            <div className="w-screen bg-primary mt-28">
                <div className="max-w-7xl max-h-60 mx-auto text-white text-7xl leading-[3em] font-bold">
                    <div className="flex mx-auto">
                        {props.title}
                    </div>
                </div>
            </div>
    );
}

export default Title;
