"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import HistoryIcon from "@/app/assets/svg/HistoryIcon.svg";
import StatisticsIcon from "@/app/assets/svg/StatisticsIcon.svg";
import SettingIcon from "@/app/assets/svg/SettingIcon.svg";
import ClickStreamIcon from "@/app/assets/svg/ClickStreamIcon.svg";

export default function TabsTable() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const data = [
    { id: 0, label: "History", icon: <HistoryIcon /> },
    { id: 1, label: "Statistics", icon: <StatisticsIcon /> },
    { id: 2, label: "Click Stream", icon: <ClickStreamIcon /> },
    { id: 3, label: "Settings", icon: <SettingIcon /> },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label=""
        selectionFollowsFocus
      >
        {data.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            icon={tab?.icon}
            iconPosition="start"
            className="!capitalize !text-base !text-[--text-color]"
            sx={{
              "&.Mui-selected": {
                boxShadow: "inset 0px 34px 20px -19.5px #144EE361",
              },
              paddingY: 0,
              minHeight: 70,
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
