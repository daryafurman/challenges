import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1327,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1317,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1357,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 1347,
      name: "🍇 Grape",
      color: "purple",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} {...fruit} />;
      })}
    </div>
  );
}
