"use client";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import classNames from "classnames";

export default function Switch() {
  const data = [
    { value: "light", label: "Light", icon: <Brightness5OutlinedIcon className="!text-xl" /> },
    { value: "dark", label: "Dark Theme", icon: <NightlightOutlinedIcon className="!text-xl" /> },
  ];

  const [value, setValue] = useState("dark");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <Box className="!border-2 !border-[--primaryBorder] !rounded-full">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label=""
        indicatorColor="secondary"
        sx={{ "& .MuiTabs-indicator": { backgroundColor: "transparent" } }}
        className="!rounded-full !bg-[--primaryBgColor]"
      >
        {data.map((tab) => (
          <Tab
            key={tab.value}
            value={tab.value}
            label={tab.label}
            icon={tab.icon}
            iconPosition="start"
            className={classNames(
              '!capitalize',
              '!text-base',
              '!rounded-full',
              {
                '!font-semibold': value === tab.value,
                '!bg-[--secondaryColor] !m-1': value === tab.value,
                '!font-light': value !== tab.value,
                '!bg-[--primaryBgColor] !text-[--text-color]': value !== tab.value,
                '!text-center': true,
                '!px-2': tab.value === 'dark',
                '!px-4': tab.value !== 'dark'
              }
            )}
            sx={{
              color: "#D9D9D9",
              "&.Mui-selected": {
                color: "#D9D9D9",
                boxShadow: "0px 4px 14px 0px rgba(20, 78, 227, 0.69)",
              },
              paddingY: 0,
              minHeight: 48,
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
