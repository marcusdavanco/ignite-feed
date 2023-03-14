import { Header } from "./Components/Header";
import { Post } from "./Components/Post";
import { Sidebar } from "./Components/Sidebar";
import "./global.css";

/* author: { avatar_url: "", name: '', role: "" }
 * publishedAt: Date
 * content: String
 */

// TODO: Replace for something more realistic
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://gitub.com/marcusdavanco.png",
      name: "Marcus Davanco",
      role: "CEO @ Serendip Software",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-02-15 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://gitub.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-02-25 20:00:00"),
  },
];

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
