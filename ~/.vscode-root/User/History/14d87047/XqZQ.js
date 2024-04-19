import { useState } from "react";

const Home = () => {

    let name = useState(name);

    const handleClick = () => {
        name = "Htet Thiri Zaw";
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click</button>

        </div>
    );
}

export default Home;