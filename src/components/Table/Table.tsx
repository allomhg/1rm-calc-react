import { InputStateType } from "../Form/Form";

const data = {
    percentage: 100,
    weight: 50,
    reps: 10
}

function generateRows( inputs: InputStateType ) {
    const rows: [JSX.Element] = [<></>];

    const reps = inputs.inputState.reps;
    const weight = inputs.inputState.weight;
    const percentage: number = 100;

    // const oneRepMax: number = weight * ( 1 + reps / 30 );

    for (let i = 0; i < 100; i += 10) {
        // const calculatedWeight =

        rows.push(
            <tr className="border-slate-400 border-b-2">
                <td className="bg-red-200 p-1 pl-2">{ percentage - i }</td>
                <td className="bg-red-300 p-1 pl-2">{ weight * (1 + reps / 30) }</td>
                <td className="bg-red-400 p-1 pl-2">{ reps }</td>
            </tr>
        )
        data.reps -= 1;
    }
    return rows;
}

export const Table = ({ inputs }: {inputs: InputStateType}) => {
    const rows = generateRows(inputs);

    return (
        <section className="w-full">
            <table className="w-full border-collapse">
                <thead className="bg-sky-300 border-slate-400 border-b-4">
                    <tr>
                        <td className="pl-2">1RM %</td>
                        <td className="pl-2">Weight</td>
                        <td className="pl-2">Reps</td>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(( rows ) => (
                        rows
                    ))}
                </tbody>
            </table>
        </section>
    );
}