import { useState } from "react";

const Home = () => {

    let [name, setName] = useState('Kyaw Kyaw Lin');
    let [age, setAge] = useState(29);
    let [person, setPerson] = useState([

    ]);

    const handleClick = () => {
        setName('Htet Thiri Zaw');
        setAge(27);
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click</button>

        </div>
    );
}

export default Home;