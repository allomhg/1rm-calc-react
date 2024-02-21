export const Button = ({ onClick }) => {
    return (
        <button type="button" className="py-2 px-8 my-4 rounded-full max-w-60 text-white bg-sky-500" onClick={onClick}>
            Calculate 1RM
        </button>
    );
}