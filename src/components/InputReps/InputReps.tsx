// import { InputNumType } from "../Form/Form";
import { ChangeEventHandler } from "react";

export const InputReps = ({ onChange }: {onChange: ChangeEventHandler}) => {
    return (
        <div className="flex flex-col p-2">
            <label htmlFor="units">Enter Reps</label>
            <input type="number" className="p-2 rounded border" onChange={onChange}></input>
            <p className="relative bottom-9 left-40 select-none w-5" >Reps</p>
        </div>
    );
}