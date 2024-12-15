import { useState } from "react";                                                                                                                                                                                           
import Box from "./Box";
import Button from "./Button";

const Main = () => {
    const arr = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.', 'total'];
    const [prev, second] = useState(""); // Initialize the state with an empty string

    // Handler function for button clicks
    const texteventhandle = (value) => {
        if (value === 'C') {
            second(''); // Clear the input if 'C' is clicked
        }
        else if(value==='total'){
            const result=eval(prev);
            second(result);
        }
         else {
            second((prev) => prev + value); // Append the clicked button value
        }
    };

    return (
        <>
            {/* Pass the current text to Box */}
            <Box first={prev} />
            
            {/* Pass the array and click handler to Button */}
            <Button arr={arr} texteventhandle={texteventhandle} />
        </>
    );
};

export default Main;
