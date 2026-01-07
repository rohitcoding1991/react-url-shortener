"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Container } from "@mui/material";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 44,
  height: 30,
  padding: 0,
  border:"2px solid rgba(53, 60, 74, 1)",
  borderRadius:24,
  boxShadow: "0px 4px 10px 0px #0000001A",
  "& .MuiSwitch-switchBase": {
    padding: 1,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#181E29" : "#181E29",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 20,
    height: 20,
    color:"#144EE3",
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#A1A1A1" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function ToggleButton({ label, className }) {
  return (
    <Container>
    <FormGroup>
      <FormControlLabel
        control={<IOSSwitch sx={{ ml: 0 }} defaultChecked />}
        label={
          <span
          className="!text-[--text-color] !font-light !text-sm"
            style={
              label
                ? { marginLeft: "4px" }
                : { display: "none" }
            }
          >
            {label}
          </span>
        }
        className={`${className} !flex md:!flex-row !gap-2`}
      />
    </FormGroup>
    </Container>
  );
}
