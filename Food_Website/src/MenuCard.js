import { useState } from 'react';

const MenuCard = ({food}) => {

    const {id, img, title, weight, price} = food;

    const [counter, setCounter] = useState(1);

    //increase counter
    const increase = (id) => {
        setCounter(count => count + 1);
    };

    //decrease counter
    const decrease = (id) => {
        if(counter > 0){
            setCounter(count => count - 1);
        }
    };


    return (
        
        <div className="single-cart">
            <img src={img} alt="" />
            <h4>{title}</h4>
            <div className="counter">
                <div className="btn__container">
                    <button onClick={() => { increase(id) }} className="control__btn" >+</button>
                    <span className="counter__output">{counter}</span>
                    <button onClick={() => { decrease(id) }} className="control__btn">-</button>
                </div>
            </div>

            <div className="p-w">
                <h4> ${(price*counter).toFixed(2)}</h4>
                <h4>{weight}</h4>
            </div>

        </div>
        
    )
}

export default MenuCard