
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { ColorFormats } from "tinycolor2";
import { Avatar, Checkbox, FormLabel, Radio, radioClasses, Sheet } from "@mui/joy";
import {RadioGroup} from "@mui/joy";
import { Shape } from "konva/lib/Shape";
import { Shapes } from "./components/TechaeonCoin";

// CustomSelectionButton.propTypes = {
//     text: PropTypes.node.isRequired,
//     onChange: PropTypes.func.isRequired,
//     selected: PropTypes.string.isRequired,
//     value: PropTypes.string.isRequired
//   };
  
type Props = {
    clickFunction: (name:Shapes) => void;
    arrOfDict:{image:string, name:Shapes}[];
  };

 function CustomSelectionButton({ arrOfDict,clickFunction }: Props) {
    const handleInputChange = (name: Shapes) => {
        clickFunction(name ?? "")
      };
    return (
         <RadioGroup
      aria-label="platform"
      defaultValue="Website"
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
            bgcolor: '#404040',
            borderRadius: '50%',
          },
        },
      }}
    >
      {arrOfDict.map((value) => (
        <Sheet
          key={value.image}
          sx={{
            borderRadius: 'md',
            bgcolor: '#404040',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'center',
            width: 150,
            height:90,
          }}
        >
           <img style={{position:'fixed'}} src={value.image}></img>
           <Radio id={value.image} value={value.image} checkedIcon={<img style={{marginLeft:'100px', marginBottom:'50px'}} src="/src/assets/icoChecked.png"></img>
} onChange={e => handleInputChange(value.name)}/>

        </Sheet>
      ))} 
    </RadioGroup>

  );

    
 }  

export default CustomSelectionButton;


  