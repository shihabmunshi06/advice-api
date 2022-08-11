import { useEffect, useRef, useState } from "react";
import axios from "axios";


const App = () => {
    const initState = {
        id: "loading...",
        text: "fetching..."
    }
    let [advice, setAdvice] = useState(initState)
    const button = useRef();

    const fetcher = async () => {
        let num = Math.random() * 200;
        num = Math.floor(num);

        const response = await axios(`https://api.adviceslip.com/advice/${num}`);

        setAdvice({
            id: response.data.slip.advice,
            text: response.data.slip.id
        });
        button.current.classList.remove("active");
    }

    useEffect(() => {
        fetcher();
    }, [])


    function handleClick() {
        if (!button.current.classList.contains("active")) {
            button.current.classList.add("active");
            setAdvice(initState)
            fetcher()
        }
    }


    return (
        <div className="box">
            <p>ADVICE #<span>{advice.text}</span> </p>
            <h1>&#8220;{advice.id}&#8221;</h1>
            <img className="pattern" src="./dist/images/pattern-divider-desktop.svg" alt="linebreaker" />
            <div className="dice-wrapper" onClick={handleClick} ref={button}>
                <img className="dice" src="./dist/images/icon-dice.svg" alt="dice" />
            </div>
        </div>
    )
}

export default App