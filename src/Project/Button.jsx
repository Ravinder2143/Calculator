const Button = ({ arr,texteventhandle }) => {
    return (
        <div className="flex flex-wrap justify-center gap-3 p-4">
            {arr.map((item, index) => (
                <button
                    key={index}
                    className="border-2 border-black px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-200 active:bg-gray-300 w-[22%] md:w-[18%] lg:w-[14%] text-center"
                    onClick={()=>texteventhandle(item)}
                >
                    {item}
                </button>
            ))}
        </div>
    );
};

export default Button;
