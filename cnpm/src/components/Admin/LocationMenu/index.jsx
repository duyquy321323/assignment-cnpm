import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlaceIcon from "@mui/icons-material/Place";

const LocationMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Typography variant="h6">Vị Trí</Typography>
      <Button
        sx={{ color: "gray", padding: "0px", fontSize: "1.2rem" }}
        id="btn-select-location"
        aria-controls={open ? "menu-select-location" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
      >
        Chọn vị trí
      </Button>
      <Menu
        id="menu-select-location"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "btn-select-location",
        }}
        sx={{ "&:hover .MuiButtonBase-root": { color: "black" } }}
      >
        <MenuItem>
          <ListItemIcon>
            <PlaceIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh, Việt
            Nam
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PlaceIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>VRJ4+65C, Đông Hòa, Dĩ An, Bình Dương</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default LocationMenu;
