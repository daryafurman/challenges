import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Marcell" />
    </div>
  );
}

function Greeting({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}
