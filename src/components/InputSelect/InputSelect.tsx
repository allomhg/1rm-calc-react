export const InputSelect = () => {
    return (
        <>
            <label htmlFor="units">Select units:</label>
            <select name="units">
                <option value="metric">Metric</option>
                <option value="imperial">Imperial</option>
            </select>
        </>
    );
}