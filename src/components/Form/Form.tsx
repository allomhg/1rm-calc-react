import { InputSelect } from "../InputSelect/InputSelect";
import { InputNumber } from "../InputNumber/InputNumber";

// const units = []

export interface InputNumber {
    name: string;
    value: number;
}

export const Form = () => {
    return (
        <form className="flex flex-col max-w-sm p-4">
            <InputSelect />
            <InputNumber />
            <InputNumber />
        </form>
    );
}