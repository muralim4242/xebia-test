import React from "react";
import PropTypes from "prop-types";

const TextField=({spec,onHandleChange})=>
{
  let {label,placeholder,id,inputType,className,inputClassName,jsonPath,input={}}=spec;
  return (
    <div className={`input-field ${className}`}>
      <input placeholder={placeholder} id={id} type={inputType} className={className} onChange={(e)=>{onHandleChange && onHandleChange(e.target.value,jsonPath)}} {...input}/>
      <label forhtml="first_name">{label}</label>
    </div>
  )
}

TextField.propTypes={
  spec:PropTypes.object,
  onHandleChange:PropTypes.func
}

export default TextField;
