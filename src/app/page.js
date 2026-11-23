"use client";
import { Box, Typography, Snackbar, Alert } from "@mui/material";
import SearchBar from "@/components/SearchBar";
import ToggleButton from "@/components/ToggleButton";
import TableData from "@/components/TableData";
import Footer from "@/components/Footer";
import Switch from "@/components/Switch";
import QuestionCircle from "@/app/assets/svg/QuestionCircle.svg";
import Navbar from "@/components/Navbar";
import { tableData } from "@/app/history/MobileData";
import CopyIcon from "../app/assets/svg/CopyIcon.svg";
import Inactive from "@/app/assets/svg/Inactive.svg";
import Active from "@/app/assets/svg/Active.svg";
import UnFoldLess from "@/app/assets/svg/UnFoldLess.svg";
import Image from "next/image";
import classNames from "classnames";
import { useState } from "react";
import { data } from "./history/Data";

const Dashboard = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setIsAlertOpen(true);
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  const dynamicColumns = [
    {
      header: "Short Link",
      accessorKey: "shortLink",
      cell: (props) => {
        const shortLink = props.cell.row.original.shortLink;
        const handleCopyClick = () => {
          handleCopyToClipboard(shortLink);
        };
        return (
          <Box className="!flex !gap-2">
            <Box className="!mt-2">{shortLink}</Box>
            <Box
              className="!bg-[--primaryBgColor] !p-3 !rounded-full !mr-3 !border-2 !border-[--primaryBorder]"
              onClick={handleCopyClick}
              style={{ cursor: "pointer" }}
            >
              <CopyIcon className="!w-4 !h-4" />
            </Box>
          </Box>
        );
      },
    },
    {
      header: "Original Link",
      accessorKey: "originalLink",
      cell: (props) => {
        const { src, alt, label } = props.cell.row.original.originalLink;
        return (
          <Box className="!flex !gap-2">
            <Image src={src} alt={alt} width={36} height={36} className="" />
            <a href={label} target="_blank" rel="noopener noreferrer">
              <Box className="!mt-2">{label}</Box>
            </a>
          </Box>
        );
      },
    },
    {
      header: "QR Code",
      accessorKey: "qrCode",
      cell: (props) => {
        return <Box>{props.cell.row.original.qrCode}</Box>;
      },
    },
    {
      header: "Clicks",
      accessorKey: "clicks",
      cell: (props) => {
        return <Box>{props.cell.row.original.clicks}</Box>;
      },
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (props) => {
        const status = props.cell.row.original.status;
        return (
          <Box className="!flex !items-center">
            <Box
              className={classNames("!mr-3", {
                "!text-[--active-color]": status === "Active",
                "!text-[--inactive-color]": status !== "Active",
              })}
            >
              {status}
            </Box>
            <Box
              className={classNames("!p-2", "!rounded-full", {
                "!bg-[--active-bg]": status === "Active",
                "!bg-[--inactive-bg]": status !== "Active",
              })}
            >
              {status === "Active" ? (
                <Active className="w-5 h-5" />
              ) : (
                <Inactive className="w-5 h-5" />
              )}
            </Box>
          </Box>
        );
      },
    },
    {
      header: "Date",
      icon: <UnFoldLess className="!text-[--icons-color]" />,
      accessorKey: "date",
      cell: (props) => {
        return <Box>{props.cell.row.original.date}</Box>;
      },
    },
  ];

  const MobileColumns = [
    {
      header: "Shorten Now",
      accessorKey: "shorten",
      cell: (props) => {
        const shortenNow = props.cell.row.original.value;
        const handleCopyClick = () => {
          handleCopyToClipboard(shortenNow);
        };
        return (
          <Box className="!flex !gap-3 !items-center">
            <Box>{shortenNow}</Box>
            <Box
              className="!bg-[--primaryBgColor] !p-3 !rounded-full !border-2 !border-[--primaryBorder] !cursor-pointer"
              onClick={handleCopyClick}
            >
              <CopyIcon className="!w-4 !h-4" />
            </Box>
            <Box className="!ml-[10vw]"><Box className="!bg-[--primaryBgColor] !p-3 !rounded-full !border-2 !border-[--primaryBorder] !cursor-pointer" >{props.cell.row.original.chevronICon}</Box></Box>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Navbar />
      <Box className="!relative !container lg:!max-w-8xl md:!max-w-3xl !mx-auto">
        <Box>
          <Box className="lg:!mt-44 md:!mt-40 !mt-24 !text-center">
            <Typography
              className="!font-extrabold lg:!text-6xl lg:!leading-snug !text-4xl text-transparent !bg-clip-text"
              style={{
                background:
                  "linear-gradient(to right, #144EE3, #144EE3, #144EE3 19%, rgba(235, 86, 142, 1), rgba(163, 83, 170, 1), rgba(163, 83, 170, 1), rgba(235, 86, 142, 1),#144EE3 , #144EE3, #144EE3)",
              }}
            >
              Shorten Your Loooong Links :)
            </Typography>
            <Box>
              <Typography className="!container !max-w-xl !mx-auto !text-center !text-[--text-color] !font-light !text-base !mt-5 !mb-10">
                Linkly is an efficient and easy-to-use URL shortening service
                that streamlines your online experience.
              </Typography>
            </Box>
          </Box>
         <Box className="!mx-4">
          <SearchBar className="!max-w-xl lg:!max-w-2xl" />
          </Box>
        </Box>
        <Box className="!flex !flex-row !my-5">
          <ToggleButton
            className="!flex !items-center !justify-center"
            label="Auto Paste from Clipboard"
          />
        </Box>
        <Box className="!mb-10 !items-center !justify-center !mx-4 !flex !flex-row">
          <Typography className="!text-[--text-color] !text-center !font-light !text-sm ">
            You can create<span className="text-[--pink]"> 05 </span>more
            links. Register Now to enjoy Unlimited usage
          </Typography>
          <QuestionCircle className="!ml-2 !hidden lg:!inline" />
        </Box>
        <Box className=" !mx-4">
        <Box className="!hidden lg:!inline md:!inline">
          <TableData columns={dynamicColumns} data={data} />
        </Box>
        </Box>
        <Box className='!mx-4'>
          <Box className="!inline lg:!hidden md:!hidden">
            <TableData columns={MobileColumns} data={tableData} />
          </Box>
        </Box>
        <Footer />
      </Box>
      <Snackbar
        open={isAlertOpen}
        autoHideDuration={1000}
        onClose={handleAlertClose}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Copied to clipboard
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Dashboard;
