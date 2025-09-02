import Routing from "./routes/routes";
import { MuiThemeProvider } from "./components";
import "./App.css"
function App() {
  return (
    <MuiThemeProvider>
      <Routing />
    </MuiThemeProvider>
  );
}

export default App;
