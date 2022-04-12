import React from "react";
import {formatTime} from "./formatTime";

export default function Timer({timeInSec}) {
    //time must be in second
    console.log(timeInSec);
    const formatedTime = formatTime(timeInSec);

    return <h2>{formatedTime}</h2>;
}
