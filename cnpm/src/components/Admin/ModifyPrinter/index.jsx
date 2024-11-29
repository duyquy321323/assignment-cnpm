import React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DoneIcon from "@mui/icons-material/Done";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

const status = [
  {
    value: "Hoạt động",
    label: "Hoạt động",
  },
  {
    value: "Bảo trì",
    label: "Bảo trì",
  },
  {
    value: "Mất kết nối",
    label: "Mất kết nối",
  },
];

const ModifyPrinter = ({ open, handleClose, printer, handleSave }) => {
  const [selectedStatus, setSelectedStatus] = React.useState(printer.status);
  const handleChangeStatus = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleDialogSave = () => {
    handleSave({
      ...printer,
      status: selectedStatus,
      pagesLeft: `${document.getElementById("outlined-pagesLeft").value} trang`,
      lastMaintenance: document.getElementById("outlined-lastMaintenance").value,
    });
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{
        ".css-10d30g3-MuiPaper-root-MuiDialog-paper": {
          borderRadius: "10px",
          maxWidth: "800px",
          height: "500px",
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Cập Nhật Máy In
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: "grey",
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Box sx={{ mt: 1 }}>
          <Typography gutterBottom>STT: {printer.id}</Typography>
          <Typography gutterBottom>Vị trí: {printer.address}</Typography>
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "200px" },
            ".MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#09bcff" },
              "&:hover fieldset": { borderColor: "#09bcff" },
              "&.Mui-focused fieldset": { borderColor: "#09bcff" },
            },

            display: "flex",
            gap: "20px",
            mt: 4,
          }}
          autoComplete="off"
        >
          <Box>
            <Typography gutterBottom>Trạng thái</Typography>
            <TextField
              id="outlined-select-status"
              select
              defaultValue={printer.status}
              value={selectedStatus}
              onChange={handleChangeStatus}
            >
              {status.map((option) => (
                <MenuItem
                  sx={{
                    "&.MuiMenuItem-root.Mui-selected": {
                      bgcolor: "#09bcff",
                    },
                    "&:hover.MuiMenuItem-root": {
                      color: "black",
                    },
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box>
            <Typography gutterBottom>Số trang còn lại</Typography>
            <TextField
              id="outlined-pagesLeft"
              type="number"
              defaultValue={parseInt(printer.pagesLeft, 10)}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
          </Box>
          <Box>
            <Typography gutterBottom>Ngày bảo trì cuối cùng</Typography>
            <TextField required id="outlined-lastMaintenance" defaultValue={printer.lastMaintenance} />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleDialogSave}
          startIcon={<DoneIcon sx={{ color: "white" }} />}
          variant="contained"
          sx={{
            textTransform: "none",
            bgcolor: "#09bcff",
            borderRadius: "10px",
            width: "100px",
            color: "white",
          }}
        >
          Lưu
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModifyPrinter;
