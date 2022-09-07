import React from "react";
import MyPragraph from "./MyPragraph";
const DemoOutput = props =>{
    console.log("Demo Output running")
    return <MyPragraph>{props.show ? 'This is new' : ''}</MyPragraph>
   
}

export default React.memo(DemoOutput);