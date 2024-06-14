import React  from "react";
import react,{useState}from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMinus } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

import { MdExposurePlus1 } from "react-icons/md";

const CounterComponent =()=>
    {
        let [counter,setCounter]=useState(0)


        function increment()
        {
            setCounter(counter++);
           
        }

        function reset()
        {
            setCounter(counter=0);
        }

        function decrement()
        {
            setCounter(counter--);
        }

        return (
            <div>
            <h3>{counter}</h3>
           < MdExposurePlus1 onClick={increment} size={32} style={{color:'red',marginRight:'10px'}}/>
           <GrPowerReset onClick={reset} size={30} style={{color:'blue',marginRight:'10px'}}/>
           <FaMinus onClick={decrement} size={30} style={{color:'green',marginRight:'10px'}}/>
           

           
            </div>
        )
            
    
    };

export default CounterComponent;