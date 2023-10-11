import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "Surabaya", "Tokyo", "London", "Paris"];
  //   items = [];

  //   const message = items.length === 0 ? <p>No item found</p> : null;

  //event handler
  const handeClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {/* {message} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handeClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
