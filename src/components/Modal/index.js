import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ title, subTitle, onYesClick, onNoClick, handleClose }) => {
    return (
        <>
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 9998,
                }}
                onClick={handleClose}
            ></Box>
            <Box
                sx={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#e6e6e6",
                    padding: 3,
                    zIndex: 9999,
                    boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)",
                    borderRadius: 3,
                }}
                className="!w-96"
            >
                <Box className="!flex !flex-row-reverse">
                    <CloseIcon className='!text-lg' onClick={handleClose} />
                </Box>
                <Typography className='!text-red-700 !text-xl !font-bold !text-left !mb-4'>
                    {title}
                </Typography>
                <div className='!border !border-gray-300'></div>
                <Typography className='!text-gray-800 !text-sm !text-center !font-semibold !mt-4'>
                    {subTitle}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Button color='error' onClick={onYesClick} className='!text-base !font-semibold'>Yes</Button>
                    <Button onClick={onNoClick} className='!text-base !font-semibold'>No</Button>
                </Box>
            </Box>
        </>
    );
};

export default Modal;
