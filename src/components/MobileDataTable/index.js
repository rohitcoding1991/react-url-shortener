import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const MobileDataTable = ({ data, linkLabel, copyIcon, icon }) => {
  return (
    <TableContainer component={Paper} className="!bg-transparent">
      <Table aria-label="dynamic table" className="!table-auto">
        <TableHead className="!bg-[--table-head]">
          <TableRow>
            <TableCell className="!text-[--text-color] !font-bold !text-base">
              {linkLabel}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="!bg-[--table-body]">
          {data?.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="!flex !flex-row !text-[--text-color] !gap-3">
                <Box className="!pt-2">{item.value}</Box>
                <Box className="!flex !flex-row">
                  <span className="!pt-2 !text-base !p-3 !bg-[--primary-bg-color] !rounded-full">{copyIcon}</span>
                  <Box className=" !p-3 !bg-[--primary-bg-color] !rounded-full !ml-14">
                    {icon}
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MobileDataTable;
