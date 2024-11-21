import "./App.css";

function App() {
  return (
    <>
      <h1>Tunetex</h1>
      <textarea placeholder="paste text in here" rows={20} cols={50}></textarea>
      <div className="card">
        <button>generate!</button>
      </div>
    </>
  );
}

export default App;
