import React, { useState } from 'react'
import './App.css'
import data from './data'
import MenuCard from './MenuCard';


const App = () => {



    // selection of food
    const [selectedFood, setSelectedFood] = useState([]);

    const handleFoodSelect = (food) => {

        //IF food is already selected
        if (selectedFood.includes(food)) {
            alert("Already Added to Cart! 🍕")
            return;
        }

        else{
            //Adding quantity to the food
            setSelectedFood(prev => [...prev, food]);
        }
        console.log("Selected Food",selectedFood);
    }


    const [menu, setMenu] = useState(data)

    return (
        <>
            <div className="container">
                <div className="menus">
                    {data.map((menuItem) => {
                        const { id, title, weight, img, price} = menuItem;
                        return (
                            <article key={id} className='menu-item'  >
                                <img src={img} alt={title} className='photo' />
                                <div className='item-info'>
                                    <p>Weight: {weight}</p>
                                    <header>
                                        <h4>{title}</h4>
                                        <h4 className='price'>${price}</h4>
                                    </header>
                                    <div className="button">
                                        <button onClick={() => { handleFoodSelect(menuItem) }}>Select Item</button>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
                <div className="cart">
                    <div className="cart-item">
                        {/* <h3>No Item Is selected Yet</h3> */}
                        {selectedFood.map((food) => (
                            <MenuCard key={food.id} food={food}/>
                        ))}

                    </div>
                    <div className="price">
                        <h3>Total: $0</h3>
                    </div>
                    <div className="button">
                        <button className="btn">Checkout</button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default App