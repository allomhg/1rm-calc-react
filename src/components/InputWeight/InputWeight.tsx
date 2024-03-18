import { ChangeEventHandler } from "react";

export const InputWeight = ({ onChange, units } : {onChange: ChangeEventHandler, units: string}) => {
    let displayUnit: string = "";
    
    if (units == "metric") {
        displayUnit = "kg";
    } else {
        displayUnit = "lb";
    }

    return (
        <div className="flex flex-col p-2">
            <label htmlFor="units">Enter Weight</label>
            <input type="number" className="p-2 rounded border" onChange={onChange} ></input>
            <p className="relative bottom-9 left-40 select-none w-5" >{displayUnit}</p>
        </div>
    );
}