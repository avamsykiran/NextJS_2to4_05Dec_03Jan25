import { useState } from "react";

const CounterFn = () => {
    
    let [count,setCount] = useState(0);

    const stepUp = event => setCount(count +1);

    return (
        <section className='col-2 p-2 m-2 bg-dark text-light fw-bold text-center' onClick={stepUp}>
            Count : {count}
        </section>
    );
}

export default CounterFn;