import React, { useState, useEffect } from "react";
import axios from "axios";
import "./List.css";
function List(props) {
  const [state, setstate] = useState();
  useEffect(() => {
    (async () => {
      const result = await axios.post("http://localhost:5000/studentList", {
        name: props.location.data,
      });
      console.log("d", result.data.data);
      setstate(result.data.data.data);
    })();
  }, [props.location.data]);
  console.log("props", props.location.data, state);

  return (
    <div className="myProfilePage">
      <div className="myList">
        <h2>List of Student under {props.location.data}</h2>
        {state?.map((item) => {
          return (
            <div className="listCard">
              <h1>{item.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
