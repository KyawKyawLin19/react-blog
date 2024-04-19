const Home = () => {

    const handleClickName = (name) => {
        window.alert('Hello' + name);
    }

    const handleClick = () use name => {
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