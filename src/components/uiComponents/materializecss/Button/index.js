import React from "react";

const Button=({spec,children})=>
{
  return (
    <a {...spec}>{children}</a>
  )
}

export default Button;
