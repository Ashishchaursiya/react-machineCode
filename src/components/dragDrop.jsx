import { useRef, useState } from "react";
import { dragData } from "../utils/data";

export default function DragDrop() {
  const [data, setdata] = useState(dragData);
  const dragItem = useRef(null);
  const dragContainer = useRef(null);
  const dragStartHandler = (item, container) => {
    dragItem.current = item;
    dragContainer.current = container;
  };
  const dropHandler = (container) => {
    const prevdata = { ...data };
    prevdata[dragContainer.current] = data[dragContainer.current].filter(
      (item) => item.id !== dragItem.current.id
    );
    prevdata[container] = [...data[container], dragItem.current];
    setdata(prevdata);
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {Object?.keys(data).map((item, idx) => {
          return (
            <div
              key={idx}
              style={{
                border: "3px solid grey",
                margin: "10px",
                padding: "30px",
              }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => dropHandler(item)}
            >
              <h2>{item}</h2>
              {data[item].map((child) => {
                return (
                  <div
                    key={child.id}
                    style={{
                      border: "1px solid black",
                      margin: "10px",
                      padding: "10px",
                    }}
                    onDragStart={(e) => dragStartHandler(child, item)}
                    draggable="true"
                  >
                    {child.task}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
