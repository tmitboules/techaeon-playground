
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { ColorFormats } from "tinycolor2";

type Props = {
    name: string | undefined;
    clickFunction: (name:String) => void;
    

  };

 function CustomColorSelection({name,clickFunction }: Props) {

    const handleInputChange = (name: any) => {
        clickFunction(name ?? "")
      };
    return (
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
           <view  name={name} style={{backgroundColor: name ,margin:'10px', borderRadius:10, height:"80px",width:'150px', padding:'10px'}} onClick={e => handleInputChange(name)}>
            <input type="radio" id="logo1" name="logo1" value="logo1" />
            </view>
    </div>
    );
 }  

export default CustomColorSelection;


  