import React from "react";

const Youtube = (props) => {
  return (
    <div>
      <h5>Youtube</h5>
      <hr />
      <p>Judul: {props.judul}</p>
      <p>Kategori: {props.kategori}</p>
      <p>Durasi: {props.durasi}</p>
    </div>
  );
};

Youtube.defaultProps = {
  judul: "Judul",
  kategori: "Kategori",
  durasi: "00.00",
};

export default Youtube;
