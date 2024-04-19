import './App.css';
import Navbar from './Navbar';
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
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p> {person.name} is {person.age} years old. </p>
        <p>{ 1 + 2 }</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
