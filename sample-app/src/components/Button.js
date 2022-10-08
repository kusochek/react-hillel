import { memo } from "react";

function Button({ onButtonClick, children }) {
  console.log("Button rendered");
  return <button onClick={onButtonClick}>{children}</button>;
}

export default memo(Button);
