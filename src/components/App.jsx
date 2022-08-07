import { useEffect, useState } from "react";
import axios from "axios";


const App = () => {
    let [advice, setAdvice] = useState({
        id: "loading",
        text: "fetching..."
    })

    const fetcher = async () => {
        const response = await axios("https://api.adviceslip.com/advice");

        setAdvice({
            id: response.data.slip.advice,
            text: response.data.slip.id
        });
    }

    useEffect(() => {
        fetcher();
    }, [])

    function handleClick() {
        // let dice = document.querySelectorAll("box .dice-wrapper .dice");
        fetcher();
    }

    return (
        <div className="box">
            <p>ADVICE #<span>{advice.text}</span> </p>
            <h1>&#8220;{advice.id}&#8221;</h1>
            <img className="pattern" src="./dist/images/pattern-divider-desktop.svg" alt="" />
            <div className="dice-wrapper" onClick={handleClick}>
                <img className="dice" src="./dist/images/icon-dice.svg" alt="" />
            </div>
        </div>
    )
}

export default App