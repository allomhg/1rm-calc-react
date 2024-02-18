import { InputSelect } from "../InputSelect/InputSelect";
import { InputNumber } from "../InputNumber/InputNumber";
import { Button } from "../Button/Button";

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
    return (
        <form className="flex flex-col items-center p-4 bg-white">
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
            <Button />
        </form>
    );
}