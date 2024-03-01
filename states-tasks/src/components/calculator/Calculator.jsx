import {useState} from "react";

// Sukurkite react biblioteka paremtą skaičiuotuvą. Aplikacijos esmė:
// Atvaizduojami:
// Mygtukai su skaičiais nuo 0 iki 9.
// Mygtukai su aritmetiniais veiksmais: Daugyba, dalyba, sudėtis ir atimtis.
// Mygtukas rezultatui išvesti.
// Suvedami duomenys: pirmas skaičius, aritmetinis veiksmas, antras skaičius ir po paspaudimo ant rezultato mygtuko šis atvaizduojamas komponente.
// Patikrinkite ar atliekamas veiksmas yra validus t.y. Ar nėra bandoma atlikti dalybos iš nulio.

const Calculator = () => {
    const [firstDigit, setFirstDigit] = useState();
    const [secondDigit, setSecondDigit] = useState();
    const [action, setAction] = useState();

    const handleClickNumb = (e) => {
        const value = e.target.textContent;
        if (action) {
            // Jeigu veiksmas jau yra pasirinktas, pridedame skaitmenį prie antrojo skaitmens
            setSecondDigit(prevSecondDigit => (prevSecondDigit ? prevSecondDigit + value : value));
        } else {
            // Jeigu veiksmas dar nepasirinktas, pradedame naują pirmąjį skaitmenį
            setFirstDigit(prevFirstDigit => (prevFirstDigit ? prevFirstDigit + value : value));
        }
    }

    const handleClickOperator = (e) => {
        console.log(e.target.textContent)
        setAction(e.target.textContent)
    }

    const handleClickResult = (e) => {
        let result = 0;

        if (action === `+`) {
            result = firstDigit + secondDigit
        } else if (action === `-`) {
            result = firstDigit - secondDigit
        } else if (action === `/`) {
            result = firstDigit / secondDigit
        } else {
            result = firstDigit * secondDigit
        }
        console.log(result)
    }

    return (
        <>
            <div> pirmas skaicius: {firstDigit}</div>
            <div> veiksmas: {action}</div>
            <div> antras skaicius: {secondDigit}</div>
            <div>
                <button onClick={handleClickNumb}>0</button>
                <button onClick={handleClickNumb}>1</button>
                <button onClick={handleClickNumb}>2</button>
                <button onClick={handleClickNumb}>3</button>
                <button onClick={handleClickNumb}>4</button>
                <button onClick={handleClickNumb}>5</button>
                <button onClick={handleClickNumb}>6</button>
                <button onClick={handleClickNumb}>7</button>
                <button onClick={handleClickNumb}>8</button>
                <button onClick={handleClickNumb}>9</button>
            </div>
            <div>
                <button onClick={handleClickOperator}>+</button>
                <button onClick={handleClickOperator}>-</button>
                <button onClick={handleClickOperator}>/</button>
                <button onClick={handleClickOperator}>*</button>
            </div>
            <div>
                <button onClick={handleClickResult}>Calculate</button>
                {/*<input type="number" value={value}/>*/}
            </div>
        </>
    )
}


export default Calculator