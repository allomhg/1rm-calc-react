export const InputSelect = () => {
    return (
        <div className="p-2">
            <label htmlFor="units">Select units:</label>
            <select name="units" className="p-2 rounded">
                <option value="metric">Metric</option>
                <option value="imperial">Imperial</option>
            </select>
        </div>
    );
}