import DadJokes from "./components/DadJokes";
import DiceRoller from "./components/DiceRoller";
import PasswordValidator from "./components/PasswordValidator";
import QrCodeGenerator from "./components/QrCodeGenerator";
import CalculatorPage from "./pages/CalculatorPage";
import ProgrammingJokes from "./pages/ProgrammingJokes";
import QrCodeGeneatorPage from "./pages/QrCodeGeneratorPage";
import StopWatchPage from "./pages/StopWatchPage";
import TodoPage from "./pages/TodoPage";

const App = () => {
  return (
    <div>
      {/* <TodoPage /> */}
      {/* <CalculatorPage /> */}
      {/* <StopWatchPage /> */}
      {/* <ProgrammingJokes /> */}
      {/* <PasswordValidator /> */}
      {/* <DiceRoller /> */}
      <QrCodeGeneatorPage />
    </div>
  );
};

export default App;
