import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Trademark from "@/app/assets/svg/Trademark.svg";
import ChevronDown from "@/app/assets/svg/ChevronDown.svg";
import BellIcon from "@/app/assets/svg/BellIcon.svg";
import PrimaryButton from "../PrimaryButton";
import Logo from "@/app/assets/svg/Logo.svg";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <Box>
      <main className="!flex !flex-row !justify-between lg:!mx-16 !mx-4 !relative !top-9">
        <Box className="!flex !items-center">
          <Logo className="lg:!w-28 lg:!h-11 !w-24 !h-9" />
          <Trademark className="!relative !bottom-2 lg:!text-base !text-sm" />
        </Box>
        <Box className="!w-3/4 !hidden lg:!inline">
          <SearchBar className="!max-w-2xl md:!max-w-3xl lg:!max-w-5xl" />
        </Box>
        <Box className="!flex !items-center">
          <PrimaryButton
            title="welcome"
            subTitle="Mohammad"
            icon={<ChevronDown className="lg:!text-base !text-sm" />}
            className="!mr-2 lg:!px-6 !px-4 !text-left !gap-2 !py-[8px] lg:!ml-0"
          />
          <Box className="!hidden lg:!inline md:!inline">
            <Box className="!bg-[--secondaryColor] lg:!px-5 lg:!py-4 !px-3 !py-2 !rounded-full !flex !flex-row" sx={{ boxShadow: "10px 12px 22px 0px #144EE361 !important" }}>
              <BellIcon className="!mt-2 !text-[--text-color]" />
              <Typography className="!text-[--text-color] !text-xs !font-semibold !mb-3" >2</Typography>
            </Box>
          </Box>
        </Box>
      </main>
    </Box>
  );
};

export default Header;
