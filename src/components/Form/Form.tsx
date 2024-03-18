import { InputSelect } from "../InputSelect/InputSelect";
// import { InputNumber } from "../InputNumber/InputNumber";
import { InputWeight } from "../InputWeight/InputWeight";
import { InputReps } from "../InputReps/InputReps";
import { Button } from "../Button/Button";
// import { Table } from "../Table/Table";
import { TableNew } from "../Table/TableNew";
import { useState } from 'react';
// import { TableNew } from "../Table/TableNew";

export interface InputStateType {
    weightValue: number;
    repsValue: number;
    inputState: { weight: number, reps: number }
}

export const Form = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [metricUnits, setMetricUnits] = useState("metric");

    const [inputs, setInputs] = useState<InputStateType>({
        weightValue: 0,
        repsValue: 0,
        inputState: { weight: 0, reps: 0},
    })

    const toggleVisibility = () => setIsVisible(true);

    const handleUnitSelect = (newUnit: string) => {
        console.log("new unit: " + newUnit);
        if (newUnit == "imperial"){
            setMetricUnits(newUnit);
            console.log("bingus");
        } else {
            setMetricUnits(newUnit);
        }
        console.log(metricUnits);
    }

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
        toggleVisibility();
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
            <InputSelect metricUnits={metricUnits} onUnitSelect={handleUnitSelect}  />
            <div className="flex">
                <InputWeight onChange={handleWeightChange} units={metricUnits}/>
                <InputReps onChange={handleRepChange} />
            </div>
            <Button onClick={handleClick} />
            {/* <Table inputs={inputs} /> */}
            {isVisible && (
                <TableNew inputs={inputs}/>
            )}
        </form>
    );
}