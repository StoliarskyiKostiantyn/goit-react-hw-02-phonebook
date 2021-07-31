import React, { Component } from "react";
function Filter({ value, onChange }) {
  return (
    <label>
      Фильтр<input type="text" value={value} onChange={onChange}></input>
    </label>
  );
}
export default Filter;
