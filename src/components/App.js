import "bootstrap/dist/css/bootstrap.min.css";
import Greeting from "./Greeting.js";
import Profile from "./Profile.js";
import ToDoList from "./ToDoList";
import EmotionMeter from "./EmotionMeter.js";

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      <small>Interpolação de variáveis</small>
      <Greeting />
      <small>Imagens</small>
      <hr />
      <Profile />
      <small>Renderização de listas</small>
      <hr />
      <ToDoList />
      <small>Renderização condicional</small>
      <hr />
      <EmotionMeter />
    </div>
  );
}

export default App;
