
const data = {
    percentage: 100,
    weight: 50,
    reps: 10
}


export const Table = () => {

    const rows = [];

    for (let i = 0; i < data.percentage; i += 10) {
        rows.push(
            <tr className="border-slate-300 border-b-2">
                <td>{data.percentage}</td>
                <td>{data.weight}</td>
                <td>{data.reps}</td>
            </tr>
        )
    }

    return (
        <section className="p-4">
            <table className="w-full border-collapse">
                <thead className="bg-sky-300 border-slate-400 border-b-4">
                    <tr>
                        <td>1RM %</td>
                        <td>Weight</td>
                        <td>Reps</td>
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