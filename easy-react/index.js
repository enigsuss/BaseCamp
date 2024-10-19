import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';

const App = () => {
    return <h1>Hello, React without CRA or Vite!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
