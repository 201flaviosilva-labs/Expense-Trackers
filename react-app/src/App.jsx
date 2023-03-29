/**
 * @typedef Task
 * @type {object}
 * @property {number} id - The task identifier.
 * @property {string} value - The task value/title.
 * @property {boolean} isCompleted - Indicates if the task is completed.
 */

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const LOCAL_NAME_SPACE = "tasks";

export default function App() {
  const localTasks = JSON.parse(localStorage.getItem(LOCAL_NAME_SPACE)) || []; // Load from the local storage
  /**
   * @type {Task[]}
   */
  const [tasks, setTasks] = useState(localTasks);
  const [searchTask, setSearchTask] = useState("");

  // Update local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_NAME_SPACE, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Header searchTask={searchTask} setSearchTask={setSearchTask} />
      <Main searchTask={searchTask} tasks={tasks} setTasks={setTasks} />
      <Footer />
    </div>
  );
}
