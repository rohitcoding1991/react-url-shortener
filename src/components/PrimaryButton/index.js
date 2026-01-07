import * as React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

export default function PrimaryButton({
  title,
  className,
  icon,
  subTitle,
}) {
  return (
    <Button
      className={`${className} !bg-[--primaryBgColor] !hover:bg-[--primaryBgColor] !capitalize !text-[--text-color] !rounded-full !px-5 `}
    style={{boxShadow: "0px 4px 10px 0px #0000001A !important"}}
    >
      <Box>
        <Typography className="!text-sm">{title}</Typography>
        <Typography className="!font-semibold lg:!text-base !text-sm !leading-5">{subTitle}</Typography>
      </Box>
      <Box>
        {icon}
      </Box>
    </Button>
  );
}
