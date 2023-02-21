
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

// CustomSelectionButton.propTypes = {
//     text: PropTypes.node.isRequired,
//     onChange: PropTypes.func.isRequired,
//     selected: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired
//   };
  

type Props = {
    imgName: string | undefined;
    name: string | undefined;
    clickFunction: (name:String) => void;
  };
  

 function CustomSelectionButton({  imgName, name,clickFunction }: Props) {

    const handleInputChange = (name: any) => {
        clickFunction(name ?? "")
      };
    return (
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
           <view type="radio" className="image-container-selected" name={name} style={{backgroundColor:'#363737' ,margin:'10px', borderRadius:10}} onClick={e => handleInputChange(name)}>
            <img src={imgName} alt="Square Logo" />
            <input style={{alignSelf:'flex-start'}} type="radio" id="logo" name="logo" value="logo" />

            </view>
    </div>
    );
 }  

export default CustomSelectionButton;


  