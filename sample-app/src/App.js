import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import DetailedInfo from "./components/DetailedInfo";

function App() {
  function countInitialState() {
    // now this function is execured once, because we use initialization for useState
    return 0;
  }
  const [counter, setCounter] = useState(() => countInitialState());
  const [value, setValue] = useState(0); // example of additional state value
  console.log(counter);

  // useMemo()
  // recalculate value only if counter changed
  const myComplexValue = useMemo(() => {
    // big complex function
    // calculate value
    console.log("running use Memo callback");
    const result = counter * counter; // tables 100000 ms
    return result;
  }, [counter]);

  console.log("myComplexValue = ", myComplexValue);

  const handlePlusButtonClick = useCallback(() => {
    setCounter(counter + 1);
  }, [counter, setCounter]);

  const handleMinusButtonClick = useCallback(() => {
    setCounter(counter - 1);
  }, [counter, setCounter]);

  const handleInfoClick = useCallback(() => setValue("test"), []);

  return (
    <div className="App">
      <p>{counter}</p>
      <Button onButtonClick={handlePlusButtonClick}>+</Button>
      <Button onButtonClick={handleMinusButtonClick}>-</Button>
      <DetailedInfo title={"Hello Hillel!!!"} onClick={handleInfoClick} />
    </div>
  );
}

export default App;
