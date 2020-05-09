import React from 'react';
import './App.css';
import Form from './Form.js'

function App() {

  const [data, setData] = useState({
    id: "",
    name: "",
    type: "",
  });

  const handleSubmit = (note) => {
    setData([...data, note]);
  };


  return (
    <div className="App">
      <header className="App-header">
        <Form onSubmit={handleSubmit} />
      </header>
    </div>
  );
}

export default App;
