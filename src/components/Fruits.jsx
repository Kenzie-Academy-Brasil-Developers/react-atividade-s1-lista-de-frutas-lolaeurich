import { useState } from "react";
import React from "react";


function Fruits(){
    
    const [fruits, setFruits] = useState([
        { name: "Banana", color: "yellow", price: 2 },
        { name: "Cherry", color: "red", price: 3 },
        { name: "Strawberry", color: "red", price: 4 },
    ]);

    const filterRedFruits =  () => {
        const filtrados = fruits.filter(fruit => fruit.color === "red")
        setFruits(filtrados)
        return filtrados
    }

    const result = fruits.reduce(function (acumulador, objetoAtual){
        return acumulador + objetoAtual.price;
      }, 0);

    return (
        <>
            <p className="Total">Preço Total = {result}</p>          
            <ul className="Fruits">
            {fruits.map((fruit) => {
                return (
                <li key={fruit.name} >{fruit.name}</li>
                )
                })}
            </ul>
            <button className="Button"
                onClick={filterRedFruits}
                >Mostrar frutas vermelhas
            </button>   
        </>
    )
}

export default Fruits


/*return (
    <>
    <h1 className="Number">{number}</h1>
    <button className="Button"
    onClick={}>
        Criar Novo Número
    </button>
    </>
)*/