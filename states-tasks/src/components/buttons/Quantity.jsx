import {useState} from "react";

{/*Sukurkite komponentą pavadinimu "Quantity" ir priskirkite state'ą qty. Komponente atvaizduokite tris elementus:
    Minuso ikoną, Elementą kuriame atvaizduojama qty reikšmė.
    Pliuso ikoną Užregistruokite paspaudimo įvykius ikonoms pagal atitinkamą simbolį.
    Paspaudus ant elemento padidinkite arba pamažinkite qty reikšmę. T.y. +1 arba -1

  Sukurkite pirmos užduoties event’o funkcijų validaciją
    qty reikšmė negali būti mažesnė nei 0 ir didesnė nei 100.
*/}


const Quantity = () => {
    const [qty, setCount] = useState(0)

    const handleClickplus = (e) => {
        if (qty < 100)
            setCount(qty + 1)
    }

    const handleClickminus = (e) => {
        if (qty > 0)
            setCount(qty - 1)
    }
    return(
        <>
            <button onClick={handleClickplus}>
                <i className="bi bi-plus-square"></i>
            </button>
            <div>{qty}</div>
            <button onClick={handleClickminus}>
                <i className="bi bi-dash-square"></i>
            </button>
        </>
    )
}

export default Quantity