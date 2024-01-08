import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center",color:"red"}}>TO DO</h1>
      <h3> Today</h3>
      <button>Create+</button>
      <table style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <thead>
        <tr>
          <td>Serino.</td>
          <td>Name</td>
          <td>Description</td>
          <td>Status</td>
          <td>Edit</td>
          <td>Delete</td>
          
        </tr>
        </thead>
        <tbody>
            
            </tbody>
      </table>
    </div>
  );
}

export default App;
