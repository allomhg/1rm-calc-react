export const InputSelect = ( { metricUnits, onUnitSelect } ) => {

    const handleChange = (e) => {
        onUnitSelect(e.target.value);
        // console.log(e.target.value)
    }

    return (
        <div className="flex flex-col p-2">
            <label htmlFor="units">Select units</label>
            <select name="units" className="p-2 rounded" onChange={handleChange}>
                <option value="metric">Metric</option>
                <option value="imperial">Imperial</option>
            </select>
        </div>
    );
}