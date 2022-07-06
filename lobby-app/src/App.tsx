import type { Component } from 'solid-js';

import styles from './App.module.css';
import Header from './components/header'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      hello
    </div>
  );
};

export default App;
