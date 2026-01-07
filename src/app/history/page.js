"use client";
import Header from "@/components/Header";
import TableData from "@/components/TableData";
import TabsTable from "@/components/TabsTable";
import { Box, Button, Snackbar, Typography, Alert } from "@mui/material";
import React, { useState } from "react";
import BulkEditIcon from "@/app/assets/svg/BulkEditIcon.svg";
import FilterIcon from "@/app/assets/svg/FilterIcon.svg";
import Switch from "../../components/Switch";
import ToggleButton from "@/components/ToggleButton";
import CopyIcon from "@/app/assets/svg/CopyIcon.svg";
import Inactive from "@/app/assets/svg/Inactive.svg"
import Active from "@/app/assets/svg/Active.svg"
import { Delete, Edit } from "@mui/icons-material";
import Image from "next/image";
import { tableData } from "@/app/history/MobileData";
import UnFoldLess from "@/app/assets/svg/UnFoldLess.svg"
import classNames from "classnames";
import Modal from "@/components/Modal";
import { data } from "./Data";


const History = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsAlertOpen(true);
      })
      .catch((error) => {
        console.error('Unable to copy text to clipboard:', error);
      });
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsAlertOpen(false);
  };

  const columns = [
    {
      header: "Short Link",
      accessorKey: "shortLink",
      cell: (props) => {
        const shortLink = props.cell.row.original.shortLink;
        const handleCopyClick = () => {
          handleCopyToClipboard(shortLink);
        };
        return (
          <Box className="!flex !flex-row !gap-2">
            <Box className="!mt-2">{shortLink}</Box>
            <Box
              className="!bg-[--primaryBgColor] !p-3 !rounded-full !mr-3 !border-2 !border-[--primaryBorder]"
              onClick={handleCopyClick}
              style={{ cursor: 'pointer' }}
            >
              <CopyIcon className="!w-4 !h-4 !text-[--icons-color]" />
            </Box>
          </Box>
        );
      },
    }, {
      header: "Original Link",
      accessorKey: "originalLink",
      cell: (props) => {
        const { src, alt, label } = props.cell.row.original.originalLink;
        return (
          <Box className="!flex !flex-row !gap-2 !items-center">
            <a href={label} target="_blank" rel="noopener noreferrer">
              <Image src={src} alt={alt} width={36} height={36} className="" />
            </a>
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
        const status = props.cell.row.original.status
        return (
          <Box className="!flex !flex-row !items-center !justify-end">
            <Box className={classNames('!mr-3', { '!text-[--active-color]': status === 'Active', '!text-[--inactive-color]': status !== 'Active' })}>{status}</Box>
            <Box className={classNames('!p-2', '!rounded-full', {
              '!bg-[--active-bg]': status === 'Active',
              '!bg-[--inactive-bg]': status !== 'Active',
            })}>
              {status === 'Active' ? <Active className="w-5 h-5" /> : <Inactive className="w-5 h-5" />}
            </Box>
          </Box>
        );
      },
    },
    {
      header: "Date",
      icon: <UnFoldLess />,
      accessorKey: "date",
      cell: (props) => {
        return <Box>{props.cell.row.original.date}</Box>;
      },
    },
    {
      header: "Action",
      accessorKey: "action",
      cell: (props) => {
        return <Box className="!flex !flex-row">
          <Box className="!bg-[--primaryBgColor] !p-3 !rounded-full !mr-3 !border-2 !border-[--primaryBorder]">
            <Edit className="!text-lg " />
          </Box>
          <Box className="!bg-[--primaryBgColor] !p-3 !rounded-full !mr-3 !border-2 !border-[--primaryBorder]" onClick={handleOpenModal}>
            <Delete className="!text-lg " />
          </Box>
        </Box>
      }
    }
  ]

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
          <Box className="!flex !flex-row !gap-3 !items-center">
            <Box>{shortenNow}</Box>
            <Box
              className="!bg-[--primaryBgColor] !p-3 !rounded-full !border-2 !border-[--primaryBorder] !cursor-pointer"
              onClick={handleCopyClick}
            >
              <CopyIcon className="!w-4 !h-4" />
            </Box>
            <Box className="!ml-12"><Box className="!bg-[--primaryBgColor] !p-3 !rounded-full !border-2 !border-[--primaryBorder] !cursor-pointer" >{props.cell.row.original.chevronICon}</Box></Box>
          </Box>
        );
      },
    },
  ];

  const buttonsData = [
    { id: 1, title: "Bulk Edit", icon: <BulkEditIcon /> },
    { id: 2, title: "Filter", icon: <FilterIcon /> },
  ];
  return (
    <>
      <Box>
        <Header />
        <Box className="!flex !flex-row !mt-16">
          <ToggleButton
            className="!flex !items-center !justify-center"
            label="Auto Paste from Clipboard"
          />
        </Box>
        <Box className="!mt-8 !bg-[--primaryBgColor]">
          <TabsTable />
        </Box>
        <Box className=" !bg-[--history-bg-color]">
          <Box className="!container !max-w-8xl !px-2 !mx-auto !flex !justify-between">
            <Typography className=" !text-lg !text-[--text-color] !py-10 lg:!ml-0 !ml-3 !font-bold">
              History (143)
            </Typography>
            <Box className="!flex !gap-4 lg:!mr-0 !mr-3">
              {buttonsData.map((button) => (
                <Button
                  key={button.id}
                  className="!text-[--text-color] !capitalize !bg-[--primaryBgColor] !text-base !my-7 !rounded-full !px-4 lg:!px-6"
                  style={{ boxShadow: "0px 4px 10px 0px #0000001A !important", border: "1px solid rgba(53, 60, 74, 1) !important" }}
                >
                  <span className="!mr-2 !hidden lg:!inline">
                    {button.icon}
                  </span>
                  <span className="">{button.title}</span>
                </Button>
              ))}
            </Box>
          </Box>
          <Box className="!container !max-w-8xl !mx-auto">
            <Box className="!hidden lg:!inline md:!inline" >
              <TableData
                columns={columns}
                data={data}
              />
            </Box>
          </Box>
          <Box className='!mx-4'>
            <Box className="!inline lg:!hidden md:!hidden">
              <TableData columns={MobileColumns} data={tableData} />
            </Box>
          </Box>
        </Box>
      </Box>
      {isOpenModal && (
        <Modal
          title="Delete"
          subTitle="Are you sure you want to delete this item?"
          onYesClick={handleCloseModal}
          onNoClick={handleCloseModal}
          handleClose={handleCloseModal}
        />
      )}
      <Snackbar
        open={isAlertOpen}
        autoHideDuration={3000}
        onClose={handleAlertClose}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >Copied to clipboard</Alert>
      </Snackbar>
    </>
  );
};

export default History;
