"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import Trademark from "@/app/assets/svg/Trademark.svg"
import SignIn from "@/app/assets/svg/SignIn.svg"
import SecondaryButton from "../SecondaryButton";
import PrimaryButton from "../PrimaryButton";
import Logo from "@/app/assets/svg/Logo.svg"
import Link from "next/link";

const Navbar = () => {
  return (
    <main className="!relative !top-10 !flex !flex-row !justify-between lg:!mx-[52px] !mx-4">
      <Box className="!flex !flex-row">
        <Logo className="lg:!w-28 lg:!h-11 !w-24 !h-9 !mt-2" />
        <Trademark className="!relative !top-2 !invisible lg:!visible md:!visible" />
      </Box>
      <Box className="gap-3">
        <Link href="/history" passHref>
          <PrimaryButton
            subTitle="Login"
            icon={<SignIn className="!text-xl !ml-2" />}
            className="!py-[18px]"
          /></Link>
        <Link href="/" passHref>
          <SecondaryButton
            title="Register Now"
            className="!mx-4 !hidden lg:!inline !text-center !font-semibold !py-5"
          /></Link>
      </Box>
    </main>
  );
};

export default Navbar;
