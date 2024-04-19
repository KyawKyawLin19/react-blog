const Home = () => {

    let name = "Kyaw Kyaw Lin";

    const handleClickName = (name) => {
        window.alert('Hello' + name);
    }

    const handleClick = () => {
        name = "Htet Thiri Zaw";
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={()=> handleClickName('KKL') }>Click</button>
            <button onClick={handleClick}>Click</button>

        </div>
    );
}

export default Home;