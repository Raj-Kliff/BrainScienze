import React from "react";
import Div from "../Div";

export default function Timeline({ data }) {
    return (
        <>
            {data.map((item, index) => (
                <Div key={`s-${index}`} className="cs-time_line cs-style1 p-2">
                    <h3 className="cs-accent_color">{item.year}</h3>
                    {item.title && (
                        <h2 className="bg-white px-5 py-2 text-black" style={{borderRadius:'20px'}}>
                            {item.title}
                        </h2>
                    )}
                    {item.list_item.map((l, index) => (
                        <p key={`item-${index}`}>{l}</p>
                    ))}
                </Div>
            ))}
        </>
    );
}
