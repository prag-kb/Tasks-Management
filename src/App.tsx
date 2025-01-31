import "./App.css";
import Tasks from "./components";

export interface DataType {
  id: number;
  title: string;
  description: string;
  completed: Boolean;
}

export const SampleJSON: DataType[] = [
  {
    id: 1,
    title: "a",
    description: "a",
    completed: false,
  },
  {
    id: 2,
    title: "b",
    description: "bb",
    completed: false,
  },
  {
    id: 3,
    title: "c",
    description: "cc",
    completed: false,
  },
];

function App() {
  return (
    <div className="App">
      <h2>Task Management</h2>
      <Tasks />
    </div>
  );
}

export default App;
