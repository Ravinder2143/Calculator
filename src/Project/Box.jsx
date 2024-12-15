const Box = ({ first }) => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="w-4/5 sm:w-3/5 md:w-1/2 lg:w-1/3 text-2xl font-bold">
                    <input
                        type="text"
                        className="border-2 border-black w-full p-2 rounded-md"
                        value={first} // Set the value of input to the "first" state
                        // readOnly
                    />
                </div>
            </div>
        </>
    );
};

export default Box;
