import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box className=" !container !max-w-8xl !mx-auto !fixed !bottom-0 !py-10" sx={{
      background: "linear-gradient(180deg, rgba(11, 16, 27, 0) 15.74%, rgba(11, 16, 27, 0.57) 20.38%)"
    }}>
      <Typography className="!text-center !font-light !text-sm !text-[--text-color]">
        <span className="!underline !text-[--secondaryColor] !cursor-pointer">Register Now</span>{" "}
        to enjoy Unlimited History
      </Typography>
    </Box>
  );
};

export default Footer;
