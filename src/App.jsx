import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Card from "./Components/Card.jsx";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="container">
      <Navbar />
      <div className="cards--wrapper">{cards}</div>
    </div>
  );
}

export default App;
