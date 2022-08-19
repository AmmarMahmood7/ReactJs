import React, { useState } from "react";
import List from "./List";
import Alert from "./Alert";
import { useEffect } from "react";

function getLocalStorage() {
  let list = localStorage.getItem("list");

  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
}
function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    msg: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  function deleteList(id) {
    showAlert(true, "danger", "Item Removed");
    setList((prevItem) => {
      return prevItem.filter((item) => {
        return item.id !== id;
      });
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!item) {
      showAlert(true, "danger", "Please enter value");

      //if we have only one alert to show no need of a function
      //setAlert({ show: true, msg: "Please enter a value", type: "danger" });
    } else if (item && isEditing) {
      setList(
        list.map((singleItem) => {
          if (singleItem.id === editID) {
            return { ...singleItem, title: item };
          }
          return singleItem;
        })
      );
      setItem("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "Item Editted");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: item };
      showAlert(true, "success", "item added to the list");
      setList((prevItem) => {
        return [...prevItem, newItem];
      });
      //setAlert(true);
      setItem("");
    }
  }

  function showAlert(show = false, type = "", msg = "") {
    setAlert({ show, type, msg });
  }
  function clearList() {
    showAlert(true, "danger", "List Cleared");
    setList([]);
  }

  function editItem(id) {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setItem(specificItem.title);
  }
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <h3>Grocery List</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g bread"
              value={item}
              onChange={(e) => {
                setItem(e.target.value);
              }}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>

        {list.length > 0 && (
          <div className="grocery-container">
            <div className="grocery-list">
              {list.map((singleItem, index) => {
                return (
                  <List
                    editItem={editItem}
                    key={index}
                    id={singleItem.id}
                    title={singleItem.title}
                    deleteList={deleteList}
                  />
                );
              })}
            </div>
            {list.length > 1 && (
              <button
                className="clear-btn"
                onClick={() => {
                  clearList();
                }}
              >
                clear Items
              </button>
            )}
          </div>
        )}
      </section>
    </>
  );
}

export default App;
