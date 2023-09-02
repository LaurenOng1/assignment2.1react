import './App.css';
import Component from './Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Cat.jpeg" className="App-logo" alt="logo" />
       
        <h1>Lauren</h1>
        <p>Business Analyst</p>

        <Component title='About me' para='The picture is not me, but of a friendly neighbourhood cat which I took just this morning. Using this picture because it makes me happy just looking at the adorable cat :)'/>
        <Component title='Contact me' para='Email: Lauren@CatMail.com | LinkedIn: https://www.linkedin.com/'/>
      </header>



    </div>
  );
}

export default App;
