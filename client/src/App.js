
import './App.css';

const App = () => {
  

  return (
    <div>
      <center>
      <h1>Movie List</h1>

      <select name="genres" id="genres">
      <option value="All">All</option>
      <option value="Drama">Drama</option>
      <option value="Action">Action</option>
      <option value="Historical">Historical</option>
      </select>

      <br></br> <br></br> 
      <h2>Godfather</h2>
      <h4>Drama</h4>
      <h4>Released 1972</h4>
      <button>Select</button>
      <br></br> <br></br> <br></br> 
      <h2>Terminator</h2>
      <h4>Action</h4>
      <h4>Released 1984</h4>
      <button>Select</button>
      <br></br> <br></br> <br></br> 
      <h2>Schindler's List</h2>
      <h4>Historical</h4>
      <h4>Released 1994</h4>
      <button>Select</button>
      </center>
    </div>  
  );
};

export default App;