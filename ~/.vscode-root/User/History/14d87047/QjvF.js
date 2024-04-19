const Home = () => {

    const handleClick = () => {
        window.alert('hi');
    };

    const handleClickName = (name) => {
        window.alert('Hello' + name);
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click</button>
            <button onClick={(e)=> handleClickName(e) }>Click</button>
        </div>
    );
}

export default Home;