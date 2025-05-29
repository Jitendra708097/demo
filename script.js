import React,{useState} from "react";
import ReactDOM from "react-dom/client";


function Counter()
{

    let [count,setCount] = useState(0);

     function increamentnumber()
     {
        count = count+1;
        setCount(count);
        console.log("count is ",count);
     }

     function decreamentnumber()
     {
        count = count-1;
        setCount(count);
        console.log("count is ",count);
     }

     function resetnumber()
     {
        count = 0;
        setCount(count);
        console.log("count is ",count);
     }

    return (

        <div className="counter">
            <h1 style={{textAlign:"center"}}>Counter</h1>
            <h2 style={{textAlign:"center"}}>Count is : {count}</h2>
            <button onClick={increamentnumber}>Increase</button>
            <button onClick={decreamentnumber}>Decrease</button>
            <button onClick={resetnumber}>Reset</button>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter/>);