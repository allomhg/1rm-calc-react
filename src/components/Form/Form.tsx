import React, { createContext, useContext, useState, ReactNode } from 'react';
import { InputSelect } from "../InputSelect/InputSelect";
import { InputWeight } from "../InputWeight/InputWeight";
import { InputReps } from "../InputReps/InputReps";
import Button from "../Button/Button";
// import { Table } from "../Table/Table";
import { TableNew } from "../Table/TableNew";

// Setting the types for my InputState
export interface InputStateType {
    weightValue: number | undefined;
    repsValue: number | undefined;
    inputState: { weight: number | undefined, reps: number | undefined };
    units: string;
    error: string;
}

// Setting the types for my Context for the table data

export const Form = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [metricUnits, setMetricUnits] = useState("metric");

    const [inputs, setInputs] = useState<InputStateType>({
        weightValue: undefined, // Value for the weight input box
        repsValue: undefined, // Value for the reps input box
        inputState: { weight: undefined, reps: undefined }, // The actual weight and reps state
        units: "", // Currently unused
        error: "", // Currently unused
    })

    const handleUnitSelect = (newUnit: string) => {
        console.log("new unit: " + newUnit);
        if (newUnit == "imperial"){
            setMetricUnits(newUnit);
            console.log("bingus");
        } else {
            setMetricUnits(newUnit);
        }
        console.log(metricUnits);
    };

    const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);

        setInputs({ ...inputs, weightValue: newValue });
        console.log(inputs);
    };

    const handleRepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);

        setInputs({ ...inputs, repsValue: newValue });
        console.log(inputs);
    };

    // const errorHandling = (newValueTwo: string) => {
    //     const newError = newValueTwo.trim() === "" ? "This field cannot be empty" : "";
    //     setInputs({...inputs, error: newError});
    // }

    const toggleVisibility = () => setIsVisible(true); // Used to toggle visibility of table and reset button

    const handleCalculate = (e: React.MouseEvent<HTMLButtonElement>)  => {
        e.preventDefault();
        toggleVisibility();
        setInputs({
            ...inputs,
            inputState: {
                weight: inputs.weightValue,
                reps: inputs.repsValue,
            },
        })
        console.log(inputs)
        return;
    };

    const isButtonDisabled = () => {
        return inputs.weightValue === undefined || inputs.repsValue === undefined; // Will return true if both are not undefined
    };

    const handleReset = () => {
        console.log("Reset");
    };

    return (
        <form
            className="flex flex-col items-center p-4"
            onSubmit={ e => e.preventDefault()}
        >
            <InputSelect metricUnits={metricUnits} onUnitSelect={handleUnitSelect}  />
            {/* DO THESE INPUTS EVEN NEED TO BE THEIR OWN COMPONENTS? */}
            <div className="flex">
                <InputWeight onChange={handleWeightChange} units={metricUnits}/>
                <InputReps onChange={handleRepChange} />
            </div>
            <Button label="Calculate 1RM" onClick={handleCalculate} disabled={isButtonDisabled} />

            {/* <Table inputs={inputs} /> */}
            {isVisible && (
                <>
                    <Button label="Reset" onClick={handleReset} />
                    <TableNew inputs={inputs} units={metricUnits} />
                </>
            )}
            {/* {inputs.error && <p className="color: bg-red-400">{inputs.error}</p>} / */}
        </form>
    );
}