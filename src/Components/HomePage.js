import React, { useState } from "react";

function Palindrome() {
  let [name, setName] = useState({ fname: "" });

  let ChangeFont = event => {
    setName({ ...name, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <h1>Please enter your string</h1>
      <input
        type="text"
        name="fname"
        value={name.fname}
        onChange={ChangeFont}
      />
      <h1>{name.fname}</h1>
    </div>
  );
}

export default Palindrome;
