import { ChangeEventHandler } from "react";

export const InputWeight = ({ onChange } : {onChange: ChangeEventHandler}) => {
    return (
        <div className="flex flex-col p-2">
            <label htmlFor="units">Enter Weight</label>
            <input type="number" className="p-2 rounded border" onChange={onChange} ></input>
        </div>
    );
}