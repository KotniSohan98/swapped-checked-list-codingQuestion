import "./styles.css";
import { useState } from "react";

export default function App() {
  const [list1, setList1] = useState([
    { name: "Item 1", checked: false },
    { name: "Item 2", checked: false },
    { name: "Item 3", checked: false },
  ]);
  const [list2, setList2] = useState([
    { name: "Item A", checked: false },
    { name: "Item B", checked: false },
    { name: "Item C", checked: false },
  ]);

  const handleCheckedChange = (idx) => {
    const updatedList1 = [...list1];
    updatedList1[idx].checked = !updatedList1[idx].checked;
    setList1(updatedList1);
  };

  const handleSwap = () => {
    const updatedList1 = [...list1];
    const updatedList2 = [...list2];
    list1.forEach((item, idx) => {
      if (item.checked) {
        [updatedList2[idx].name, updatedList1[idx].name] = [
          updatedList1[idx].name,
          updatedList2[idx].name,
        ];
      }
      updatedList1[idx].checked = false;
    });

    setList1(updatedList1);
    setList2(updatedList2);
  };
  return (
    <div className="App">
      <div>
        <h3>List 1</h3>
        <ul>
          {list1.map((ele, idx) => (
            <li key={idx}>
              <input
                type="checkbox"
                name=""
                id=""
                checked={ele.checked}
                onChange={() => handleCheckedChange(idx)}
              />
              {ele.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>List 2</h3>
        <ul>
          {list2.map((ele, idx) => (
            <li key={idx}>{ele.name}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleSwap}>Swap Checked Items</button>
    </div>
  );
}
