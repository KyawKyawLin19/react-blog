import './App.css';

function App() {

  const title = "Welcome to the new Blog";
  const likes = 50;
  const person = {
    name : 'yoshi',
    age : 29
  };

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
      </div>
    </div>
  );
}

export default App;
