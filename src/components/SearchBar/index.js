"use client";
import React from "react";
import SecondaryButton from "../SecondaryButton";
import {
  Box,
  Container,
  InputAdornment,
  InputBase,
  useMediaQuery,
} from "@mui/material";
import Active from "@/app/assets/svg/Active.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SearchBar = ({ className }) => {
  const isLargeScreen = useMediaQuery("(min-width: 520px)");

  return (
    <Container style={{ padding: 0 }} className={`!rounded-full !border-4 !border-[--primaryBorder] ${className}`}>
      <InputBase
        startAdornment={
          <InputAdornment position="start">
            <Active className="!text-xl !ml-5"/>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            {isLargeScreen ? (
              <SecondaryButton title="Shorten Now!" className="!mr-1 lg:!py-5 !py-3 !px-6 !font-semibold lg:!px-10"/>
            ) : (
              <div className="!bg-[--secondaryColor] !rounded-full !mr-1">
                <ArrowForwardIcon className=" !text-[--text-color] !m-3 !text-2xl" sx={{ boxShadow: "10px 9px 22px 0px #144EE361  !important"}}/>
              </div>
            )}
          </InputAdornment>
        }
        placeholder="Enter the link here "
        className="lg:!py-[18px] md:!py-[14px] !py-[10px] !border-0 !p-0 !w-full !text-[--text-color]"
      />
    </Container>
  );
};

export default SearchBar;
