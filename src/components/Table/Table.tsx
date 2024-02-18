
const data = {
    percentage: 100,
    weight: 50,
    reps: 10
}

function generateRows() {
    const rows: [JSX.Element] = [<></>];

    for (let i = 0; i < data.percentage; i += 10) {
        rows.push(
            <tr className="border-slate-400 border-b-2">
                <td className="bg-red-200 p-1 pl-2">{data.percentage - i}</td>
                <td className="bg-red-300 p-1 pl-2">{data.weight * (1 + data.reps / 30)}</td>
                <td className="bg-red-400 p-1 pl-2">{data.reps}</td>
            </tr>
        )
        data.reps -= 1;
    }
    return rows;
}

export const Table = () => {

    const rows = generateRows();

    return (
        <section className="p-4 bg-white">
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