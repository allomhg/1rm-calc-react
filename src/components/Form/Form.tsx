import { InputSelect } from "../InputSelect/InputSelect";
import { InputNumber } from "../InputNumber/InputNumber";

// const units = []

export interface InputNumber {
    name: string;
    value: number;
}


export const Form = () => {
    return (
        <form className="flex flex-col">
            <InputSelect />
            <InputNumber />
            <InputNumber />
        </form>
    );
}