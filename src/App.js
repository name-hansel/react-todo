import React, { useEffect } from 'react'
import { Provider } from 'react-redux';

import store from './store'
import './App.css';
import Tags from './components/Tags'
import TaskForm from './components/TaskForm'
import Tasks from './components/Tasks'
import { getTasks, loadTags } from './actions/task';

function App() {
  useEffect(() => {
    const tasks = localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.tasks) : []

    if (tasks.length > 0)
      store.dispatch(getTasks(tasks))
    store.dispatch(loadTags())
  }, [])

  return (
    <Provider store={store}>
      <h1 className="main-heading">TO-DO</h1>
      <section className="body">
        <Tags />
        <main class="section main">
          <TaskForm /><Tasks />
        </main>
      </section>
    </Provider>
  );
}

export default App;
