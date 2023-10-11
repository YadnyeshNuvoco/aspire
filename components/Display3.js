import React from "react"
import { Chrono } from "react-chrono";

const Display3 = ({ movements }) => {
    const items = [
        {
            title: "May 1940",
            cardTitle: "Dunkirk",
            cardSubtitle:
                "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
            cardDetailedText: ["paragraph1", "paragraph2"],
            timelineContent: <div>Custom content</div>,
        },
        {
            title: "May 1930",
            cardTitle: "Dunkirk",
            cardSubtitle:
                "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
            cardDetailedText: ["paragraph1", "paragraph2"],
            timelineContent: <div className="bg-blue-300">Custom content</div>,
        },
    ];



    return (
        <div className="flex py-10">
            <Chrono mode="HORIZONTAL" items={items}></Chrono>
        </div>
    )
}

export default Display3;