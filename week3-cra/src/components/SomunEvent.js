import React from "react";
import Title from "./Title";
import SomunInput from "./SomunInput";
import SomunList from "./SomunList";

const SomunEvent = () => {
  React.useEffect(() => {
    fetch("../../public/event-list.json")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, []);

  const submitDate =
    new Date().getMonth() < 9
      ? new Date().getFullYear().toString() +
        "-0" +
        (new Date().getMonth() + 1).toString() +
        "-" +
        new Date().getDate().toString()
      : new Date().getFullYear().toString() +
        "-" +
        (new Date().getMonth() + 1).toString() +
        "-" +
        new Date().getDate().toString();

  const [list, setList] = React.useState([]);
  const [value, setValue] = React.useState("");

  function updateList() {
    setList([...list, { url: value, regDate: submitDate }]);
  }
  return (
    <div>
      <Title>소문내기 이벤트</Title>
      <SomunInput value={value} setValue={setValue} updateList={updateList} />
      <SomunList list={list} />
    </div>
  );
};

export default SomunEvent;
