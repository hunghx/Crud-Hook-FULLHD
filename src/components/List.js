import React from "react";
import { memo } from "react";

function List(props) {
  const handleDelete = (idDelete) => {
    props.handleDelete(idDelete);
  };
  const handleEdit = (id) => {
    props.receiveEditId(id);
  };
  return (
    <table className="table table-striped text-center">
      <thead className="thead-inverse">
        <tr>
          <th>STT</th>
          <th>ID</th>
          <th>Content</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((current, index) => {
          return (
            <tr key={current.id}>
              <td>{index + 1}</td>
              <td>{current.id}</td>
              <td>{current.content}</td>
              <td>
                <input
                  type="button"
                  className="btn btn-warning mx-2"
                  defaultValue="Edit"
                  onClick={() => handleEdit(current)}
                />
                <input
                  type="button"
                  className="btn btn-danger mx-2"
                  defaultValue="Delete"
                  onClick={() => {
                    handleDelete(current.id);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default memo(List);
