const Navbar = () => {
    return (
        <nav className="App">
            <h1>React Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color : "red"
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;