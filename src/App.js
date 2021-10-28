import './App.css';
import Form from './components/Form'
import Notes from './components/Notes'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">NotesApp</header>
        <Search />
        <Form />
        <Notes />
      </div>
    </div>
  );
}

export default App;
