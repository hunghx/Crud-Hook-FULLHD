import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { useCallback, useEffect, useState } from "react";
// App  - Form
//      - List
const initialList = JSON.parse(localStorage.getItem("list")) ?? [];

function App() {
  const [list, setList] = useState(initialList);
  const [idEdit, setIdEdit] = useState("");
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  const receiveData = (data) => {
    console.log({ data });
    setList((prevList) => [...prevList, data]);
  };

  const receiveEditId = useCallback(
    (idEdit) => {
      // console.log(idEdit);
      setIdEdit(idEdit);
    },
    [list]
  );
  const handleUpdate = (data) => {
    let newArr = [];
    list.forEach((curr) => {
      if (curr.id === data.id) {
        newArr.push(data);
      } else {
        newArr.push(curr);
      }
    });
    setList(newArr);
  };
  const handleDelete = useCallback(
    (idDel) => {
      let newList = list.filter((current, index) => current.id !== idDel);
      setList(newList);
    },
    [list]
  );
  return (
    <div className="App">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-10">
            {/* Form */}
            <Form
              handleUpdate={handleUpdate}
              receiveData={receiveData}
              list={list}
              idEdit={idEdit}
            />
            {/* Form */}

            {/* List */}
            <List
              receiveEditId={receiveEditId}
              handleDelete={handleDelete}
              list={list}
            />
            {/* List */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
