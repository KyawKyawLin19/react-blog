const Home = () => {

    const handleClick = () => {
        window.alert('hu');
    };

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default Home;