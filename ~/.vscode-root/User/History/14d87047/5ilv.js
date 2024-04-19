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
            <button onClick={()=>{
                handleClickName('KKL')
            }}>Click</button>
        </div>
    );
}

export default Home;