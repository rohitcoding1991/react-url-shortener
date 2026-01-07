import * as React from "react";
import Button from "@mui/material/Button";

export default function SecondaryButton({
  title,
  className,
  icon
}) {
  return (
    <Button
      className={`${className} !bg-[--secondaryColor] !text-sm !hover:bg-[--secondaryColor] !py-4 !capitalize !text-[--primaryColor] !rounded-full !px-5`}
      sx={{ boxShadow: "10px 9px 22px 0px #144EE361  !important"}}
    >
      {title}
      {icon}
    </Button>
  );
}