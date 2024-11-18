import logo from "./logo.svg";
import "./App.css";
import { databases, Query } from "./utils/Appwrite";

function App() {
  // Reference - https://appwrite.io/docs/products/databases/quick-start
  const getProjects = async () => {
    let response = await databases.listDocuments(
      "673b90850028d0990653",
      "673b90cf000d8ee81eda"
    );
    console.log("-->", response);
  };

  getProjects();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
