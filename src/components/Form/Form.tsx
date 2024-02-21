import { InputSelect } from "../InputSelect/InputSelect";
// import { InputNumber } from "../InputNumber/InputNumber";
import { InputWeight } from "../InputWeight/InputWeight";
import { InputReps } from "../InputReps/InputReps";
import { Button } from "../Button/Button";
import { Table } from "../Table/Table";
import { useState } from 'react';

interface InputStateType {
    weightValue: number;
    repsValue: number;
    inputState: { weight: number, reps: number }
}

export const Form = () => {
    const [inputs, setInputs] = useState<InputStateType>({
        weightValue: 0,
        repsValue: 0,
        inputState: { weight: 0, reps: 0},
    })

    const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        if (isNaN(newValue)) {
            return;
        }

        setInputs({ ...inputs, weightValue: newValue });
        console.log(inputs);
    }

    const handleRepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        if (isNaN(newValue)) {
            return;
        }
        setInputs({ ...inputs, repsValue: newValue });
        console.log(inputs);
    }

    const handleClick = () => {
        setInputs({
            ...inputs,
            inputState: {
                weight: inputs.weightValue,
                reps: inputs.repsValue,
            },
        })
        console.log(inputs)
    }

    return (
        <form className="flex flex-col items-center p-4">
            <InputSelect />
            <div className="flex">
                <InputWeight onChange={handleWeightChange} />
                <InputReps onChange={handleRepChange} />
            </div>
            <Button onClick={handleClick} />
            <Table inputs={inputs} />
        </form>
    );
}