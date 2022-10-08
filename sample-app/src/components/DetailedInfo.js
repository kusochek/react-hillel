import { memo } from "react";

function DetailedInfo({ title, onClick }) {
  console.log("Rendered DetailedInfo");
  return (
    <div onClick={onClick}>
      <div>
        <h1>{title}</h1>
        <img />
        <p>lorem... lorem... lorem... lorem...</p>
      </div>
    </div>
  );
}
export default memo(DetailedInfo);
