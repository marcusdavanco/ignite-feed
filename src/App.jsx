import { Header } from "./Components/Header";
import { Post } from "./Post";
import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./Components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Marcus Davanço"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin. Mauris augue neque gravida in fermentum et."
          />

          <Post
            author="Arthur Carvalho"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin. Mauris augue neque gravida in fermentum et."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
