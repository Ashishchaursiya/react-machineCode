import { useState } from "react";

export default function Modal() {
  const [show, setShow] = useState(false);
  const overClickHandler = (e) => {
    if (e?.target?.className === "modalContainer") {
      setShow(false);
    }
  };
  const ModalBody = () => {
    return (
      <div className="modalContainer" onClick={overClickHandler}>
        <div className="modalContent">
          <h1>Modal</h1>
          <p>This is modal conntent</p>
          <button onClick={() => setShow(false)}>Close</button>
        </div>
      </div>
    );
  };
  return (
    <>
      <button onClick={() => setShow(true)}>Show Modal</button>
      {show && <ModalBody />}
    </>
  );
}
