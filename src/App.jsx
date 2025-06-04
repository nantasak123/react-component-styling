import "./App.css";
import { Button } from "./components/Button.jsx";


function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button color="#074EE8"/>
        <br></br>
        <Button color="#07A4E8"/>
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
      </div>
    </div>
  );
}

export default App;
