import "./App.css";
import Graph from "./components/Graph";
function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-sm text-gray-900">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
          Expanse Tracker
        </h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Chart */}
          <Graph />
          {/* Form */}
        </div>
      </div>
    </div>
  );
}

export default App;
