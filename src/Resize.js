import React, {useState, useEffect} from "react";



function Resize()
{
const [height, width] = useWindowSize();
    return (
    <>
    height: {height}, width: {width};
    </>
    );
}

function useWindowSize() 
{
    const [state, setstate] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
        const handleResize = () => {
            setstate([window.innerHeight, window.innerWidth]);
        }
       window.addEventListener("resize", handleResize);
       return () => {
           window.removeEventListener("resize", handleResize);
       }
       
    }, [])
    return state;
}

export default Resize;