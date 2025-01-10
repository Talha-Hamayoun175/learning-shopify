import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="app-container">
      <h1>Welcome to My React App</h1>
      
      {/* Counter Section */}
      <section className="section">
        <p>Click the button to increase the counter:</p>
        <button className="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
          Counter is {count}
        </button>
        <button className="button reset-button" onClick={() => setCount(0)}>
          Reset Counter
        </button>
      </section>

      {/* Input Section */}
      <section className="section">
        <p>Enter your name:</p>
        <input 
          className="input" 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Type your name" 
        />
        <p className="greeting">Hello, {name ? name : 'Stranger'}!</p>
      </section>

      {/* Toggle Message Section */}
      <section className="section">
        <p>Want to see a message?</p>
        <button className="button" onClick={() => setShowMessage(!showMessage)}>
          {showMessage ? 'Hide Message' : 'Show Message'}
        </button>
        {showMessage && (
          <p className="message">
            React is amazing! 🚀 Keep exploring and learning.
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Thank you for visiting my app!</p>
      </footer>
    </div>
  );
}

export default App;
