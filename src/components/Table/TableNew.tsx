import { InputStateType } from "../Form/Form";

function generateRows( inputs: InputStateType ) {
    const rows: [JSX.Element] = [<></>];

    const reps = inputs.inputState.reps;
    const weight = inputs.inputState.weight;
    let percentage: number = 100;
    let calcWeight: number = 0, calcReps: number = 0;

    const oneRepMax: number = weight / (1.0278 - (0.0278 * reps))

    for ( let i = 1; i <= 10; i += 1 ) {
        if ( i !== 1 ) {
            calcWeight = oneRepMax * ( percentage / 100 );
            calcReps = ( ( oneRepMax / calcWeight ) - 1 ) * 30;
        } else {
            calcWeight = weight * ( 1 + reps / 30 );
            // calcReps = ( ( oneRepMax / weight ) - 1 ) * 30;
            calcReps = ( ( oneRepMax / weight ) - 1 ) * 30;
        }

        rows.push(
            <tr className="border-slate-400 border-b-2">
                <td>{ percentage }</td>
                <td>{ calcWeight }</td>
                <td>{ calcReps }</td>
            </tr>
        )
        percentage -= 10;
    }
    return rows;
}

export const TableNew = ({ inputs }: {inputs: InputStateType}) => {
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