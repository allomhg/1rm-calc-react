import { InputNumType } from "../Form/Form";

export const InputNumber: React.FunctionComponent<InputNumType> = ({name}) => {
    return (
        <div className="flex flex-col p-2">
            <label htmlFor="units">Enter {name}</label>
            <input type="number" placeholder={name} className="p-2 rounded border"></input>
        </div>
    );
}