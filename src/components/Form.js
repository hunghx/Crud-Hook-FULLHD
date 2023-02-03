import React, { useEffect, useReducer, useState } from "react";

export default function Form(props) {
  const [newwork, setNewWork] = useState({ id: "", content: "" });
  useEffect(() => {
    if (props.idEdit) {
      setNewWork(props.idEdit);
    }
  }, [props.idEdit]);
  const handleChange = (e, name) => {
    switch (name) {
      case "id":
        setNewWork((prev) => ({ ...prev, id: e.target.value }));
        break;
      case "content":
        setNewWork((prev) => ({ ...prev, content: e.target.value }));
        break;
      default:
        break;
    }
  };
  const checkValidate = () => {
    if (newwork.id.trim() === "" || newwork.content.trim() === "") {
      alert("Không được để trống");
      return false;
    } else {
      let check = false;
      props.list.forEach((curr, index) => {
        if (curr.id === newwork.id) {
          check = true;
          return;
        }
      });
      if (check) {
        alert("ID đã tồn tại , nhập id khác");
        return false;
      }
    }
    return true;
  };
  const handleSubmit = (e) => {
    if (checkValidate()) {
      props.receiveData(newwork);
      setNewWork({ id: "", content: "" });
    }
  };

  const handleUpdate = () => {
    props.handleUpdate(newwork);
  };

  return (
    <form className="form-inline justify-content-center my-3">
      <div className="form-group gap-3">
        <label htmlFor="work">Work</label>
        <input
          type="text"
          name=""
          value={newwork.content}
          id="work"
          className="form-control mx-2"
          placeholder="newwork"
          aria-describedby="helpId"
          onChange={(e) => {
            handleChange(e, "content");
          }}
        />
        {props.idEdit === "" ? (
          <>
            <input
              type={"text"}
              id="id"
              value={newwork.id}
              placeholder="nhập id"
              className="form-control mx-2"
              onChange={(e) => {
                handleChange(e, "id");
              }}
            ></input>
            <input
              className="btn btn-info mx-2"
              type="button"
              value="Add"
              onClick={handleSubmit}
            />
          </>
        ) : (
          <>
            <input
              className="btn btn-info mx-2"
              type="button"
              value="Update"
              onClick={handleUpdate}
            />
          </>
        )}
      </div>
    </form>
  );
}
