import { Post } from "./Post";

function App() {
  return (
    <div>
      <Post
        author="Marcus Davanço"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin. Mauris augue neque gravida in fermentum et."
      />

      <Post
        author="Arthur Carvalho"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin. Mauris augue neque gravida in fermentum et."
      />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
