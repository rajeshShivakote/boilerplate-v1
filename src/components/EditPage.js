import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

const EditExpensePage = (props) =>{
  console.log(props);
  return (
    <div>
      This is from  Edit dashboard {props.match.params.id}
    </div>
  )
}

export default EditExpensePage;