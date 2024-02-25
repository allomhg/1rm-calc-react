import { InputStateType } from "../Form/Form";

// function calculateWeight() {
//     const reps =
// }

function generateRows( inputs: InputStateType ) {
    const rows: [JSX.Element] = [<></>];

    const reps = inputs.inputState.reps;
    const weight = inputs.inputState.weight;
    let percentage: number = 100;
    let calcWeight: number = 0;
    // const history = [];

    // const oneRepMax: number = weight * ( 1 + reps / 30 );

    for ( let i = 1; i <= 10; i += 1 ) {
        if ( i !== 1 ) {
            calcWeight *= percentage / 100;
            // calcReps = ( ( calcWeight / weight ) -1 ) * 30;
        } else {
            calcWeight = weight * ( 1 + reps / 30 );
            // calcReps = ( ( calcWeight / weight ) -1 ) * 30;
        }

        rows.push(
            <tr className="border-slate-400 border-b-2">
                <td className="bg-red-200 p-1 pl-2">{ percentage }</td>
                <td className="bg-red-300 p-1 pl-2">{ calcWeight }</td>
                <td className="bg-red-400 p-1 pl-2">{ i }</td>
            </tr>
        )
        percentage -= 10;
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