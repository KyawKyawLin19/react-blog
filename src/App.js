import './App.css';
import Navbar from './Navbar';
import Home from './Home';
function App() {

  const title = "Welcome to the new Blog";
  const likes = 50;
  const person = {
    name : 'Yoshi',
    age : 29
  };
  const link = "https://www.google.com";

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p> {person.name} is {person.age} years old. </p>
        <p>{ 1 + 2 }</p>
        <a href={link}>Google</a> */}
        <Home/>
      </div>
    </div>
  );
}

export default App;
