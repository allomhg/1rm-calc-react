import { InputSelect } from "../InputSelect/InputSelect";
import { InputNumber } from "../InputNumber/InputNumber";
import { Button } from "../Button/Button";
import { Table } from "../Table/Table";
import { useState } from 'react';

export type InputNumType = {
    name: string;
    // value: number;
}

// const numInputs: InputNumType[] = [
//     {name: "Weight", value: 0},
//     {name: "Reps", value: 0},
// ]

const numInputs: InputNumType[] = [
    {name: "Weight"},
    {name: "Reps"},
]

export const Form = () => {
    const [weight, setWeight] = useState(0);
    const [reps, setReps] = useState(0);
    const [inputs, setInputs] = useState([0 ,0]) // Weight, reps

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    }
    
    const handleRepChange = (event) => {
        setReps(event.target.value);
    }

    const handleClick = () => {
        const combinedData = [weight, reps];
        setInputs(combinedData);
    }

    return (
        <form className="flex flex-col items-center p-4">
            <InputSelect />
            <div className="flex">
                {numInputs.map(( input ) => (
                <InputNumber
                    key={input.name}
                    name={input.name}
                    // value={input.value}
                />
                ))}
            </div>
            <Button onClick={handleClick} />
            <Table />
        </form>
    );
}