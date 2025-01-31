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
    title: "Task 1",
    description: "Task1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Task 22",
    completed: false,
  },
  {
    id: 3,
    title: "Task 3",
    description: "Task 33",
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
