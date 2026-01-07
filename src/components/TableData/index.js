import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Box,
} from "@mui/material";

const TableData = ({ columns, data, className, loading }) => {
  return (
    <TableContainer component={Paper} className={`!w-full !bg-transparent !border-none !shadow-none ${className}`}>
      <Table aria-label="dynamic table">
        <TableHead className="!bg-[--table-head]">
          <TableRow>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                className={`!text-[--table-head-color] md:!text-sm !text-base !border-b-[--background] !border-b-2 !font-semibold ${column.header === "ACTION" ? "action-heading" : ""
                  }`}
              >
                <Box className="!flex !flex-row !gap-2 !py-[5px] !items-center">
                  {column.header}
                  {column.icon && <span className="!mt-1">{column.icon}</span>}
                </Box>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody  className="!bg-[--table-body]">
          {loading ? (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                <CircularProgress size={24} color="inherit" />
              </TableCell>
            </TableRow>
          ) : data && data.length > 0 ? (
            data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex} className={
                    "!text-[--text-color] !font-normal md:!text-[14px] !text-sm !whitespace-nowrap !border-b-[--background] !border-b-2 !p-[9px]"
                  } >
                    {column.accessorKey &&
                      column.cell &&
                      column.cell({ cell: { row: { original: row } } })}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                No data found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
