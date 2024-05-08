import { InputSelect } from "../InputSelect/InputSelect";
import { InputWeight } from "../InputWeight/InputWeight";
import { InputReps } from "../InputReps/InputReps";
import { Button } from "../Button/Button";
// import { Table } from "../Table/Table";
import { TableNew } from "../Table/TableNew";
import { useState } from 'react';

export interface InputStateType {
    weightValue: number;
    repsValue: number;
    inputState: { weight: number, reps: number };
    units: string;
    error: string;
}

export const Form = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [metricUnits, setMetricUnits] = useState("metric");

    const [inputs, setInputs] = useState<InputStateType>({
        weightValue: 0,
        repsValue: 0,
        inputState: { weight: 0, reps: 0},
        units: "",
        error: "",
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

        // const newValueTwo = event.target.value.replace(/[^0-9]/g, "");

        setInputs({ ...inputs, weightValue: newValue });
        // setInputs({ ...inputs, weightValue: newValueTwo });
        // errorHandling(newValueTwo);
        console.log(inputs);
    }

    const handleRepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);

        setInputs({ ...inputs, repsValue: newValue });
        // errorHandling(newValue);
        console.log(inputs);
    }

    // const errorHandling = (newValueTwo: string) => {
    //     const newError = newValueTwo.trim() === "" ? "This field cannot be empty" : "";
    //     setInputs({...inputs, error: newError});
    // }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>)  => {
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
    }

    return (
        <form
            className="flex flex-col items-center p-4"
            onSubmit={ e => e.preventDefault()}
        >
            <InputSelect metricUnits={metricUnits} onUnitSelect={handleUnitSelect}  />
            <div className="flex">
                <InputWeight onChange={handleWeightChange} units={metricUnits}/>
                <InputReps onChange={handleRepChange} />
            </div>
            <Button onClick={handleClick} />
            {/* <Table inputs={inputs} /> */}
            {isVisible && (
                <TableNew inputs={inputs} units={metricUnits} />
            )}
            {inputs.error && <p className="color: bg-red-400">{inputs.error}</p>}
        </form>
    );
}