import React, { Component } from "react";
import PropTypes from "prop-types";
function Filter({ value, onChange }) {
  return (
    <label>
      Фильтр<input type="text" value={value} onChange={onChange}></input>
    </label>
  );
}
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
