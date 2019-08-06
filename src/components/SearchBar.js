import React, { useState } from "react";

import { Paper, TextField } from "@material-ui/core";

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { onFormSubmit } = props;
    onFormSubmit(searchTerm);
  }

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
    </Paper>
  );
}

export default SearchBar;
