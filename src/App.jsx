
import './App.css';
import Card from './Components/Card';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [house, setHouse] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.trim().length >= 3 && !name.startsWith(' ') && house.length >= 6) {
      setShowCard(true); 
      setError(false);
    } else {
      setError(true);
      setShowCard(false);
    }
  };

  return (
    <div className="App">
      <h2>Tu casa de Hogwarts</h2>
      {showCard ? (
        <Card name={name} house={house} />
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
          <label>Casa de Hogwarts:</label>
          <input
            type="text"
            value={house}
            onChange={(e) => setHouse(e.target.value)}
            placeholder="Ingresa tu casa"
          />
          <button type="submit">Enviar</button>
          {error && (
            <p style={{ color: 'red' }}>Por favor chequea que la información sea correcta</p>
          )}
        </form>
      )}
    </div>
  );
}

export default App;

