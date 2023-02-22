
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { ColorFormats } from "tinycolor2";
import { Avatar, Checkbox, FormLabel, Radio, radioClasses, Sheet } from "@mui/joy";
import {RadioGroup} from "@mui/joy";

type PropsTest = {
    clickFunction: (name:ColorFormats.RGB) => void;
    arrOfDict:{color:string, colorCode:ColorFormats.RGB}[];
  };

 function CustomColorSelection(propName : PropsTest) {

  const {clickFunction, arrOfDict} = propName;

    const handleInputChange = (name: ColorFormats.RGB) => {
        clickFunction(name)
      };
    return (
      <RadioGroup
        aria-label="platform"
        defaultValue="color"
        overlay
        name="platform"
        sx={{
          flexDirection: 'row',
          gap: 2,
          [`& .${radioClasses.checked}`]: {
            [`& .${radioClasses.action}`]: {
              inset: -1,
              border: '4px solid',
              borderColor: '#05ADA0',
            },
          },
          [`& .${radioClasses.radio}`]: {
            display: 'contents',
            '& > svg': {
              zIndex: 2,
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              bgcolor: 'background.body',
              borderRadius: '50%',
            },
          },
        }}
      >
        {arrOfDict.map((value) => (
          <Sheet
            key={value.color}
            sx={{
              borderRadius: 'md',
              bgcolor: value.color ?? "",
              boxShadow: 'sm',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1.5,
              p: 2,
              width: 110,
              height:150
            }}
          >
           <Radio id={value.color} value={value.color} checkedIcon={<img style={{marginLeft:'55px'}} src="/src/assets/icoChecked.png"></img>
} onChange={e => handleInputChange(value.colorCode)}/>
          </Sheet>
        ))} 
      </RadioGroup>
    );
  
 }  

export default CustomColorSelection;


  

