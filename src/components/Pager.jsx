import * as React from 'react';

function Pager(props) {
    return (
        <div className="flex h-screen fixed top-center right-0 z-50">
            <div className="my-auto mr-4">{props.children}</div>
        </div>
    );
}

function Item(props) {
    const color = props.active ? "#EC4899" : "#FFB3DA";
    return (
        <div className="group hidden md:block relative w-[10px] h-[10px] m-4 cursor-pointer" onClick={() => props.onClick(props.number-1)}>
            {props.label && <span className="absolute top-[-4px] left-[-130px] bg-primary text-white leading-[0.7rem] w-[120px] text-center p-1 invisible group-hover:visible">{props.label}</span>}
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" fill={color}>
                <circle cx="20" cy="20" r="20" />
            </svg>
            &nbsp;
        </div>
    );
}
Pager.Item = Item;

export default Pager;
