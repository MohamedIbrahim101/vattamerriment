import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Switch  ,ListItemIcon,ListItemText, IconButton, Menu, MenuItem} from '@mui/material';
import img1 from '../../Assets/img(1).jpg';
import img2 from '../../Assets/img(2).jpg';
import img3 from '../../Assets/img(3).jpg';
import './AdminDashboard.scss';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Settings from '@mui/icons-material/Settings';

const AdminDashboard = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSettingsClick = () => {
    // handleMenuClose();
  };

  const initialRooms = [
    { sno: 1, roomNo: 101, img: img1, price: 100, status: 'Pending' },
    { sno: 2, roomNo: 102, img: img2, price: 150, status: 'Pending' },
    { sno: 3, roomNo: 103, img: img3, price: 200, status: 'Pending' },
  ];

  const [rooms, setRooms] = useState(initialRooms);

  const tableheadStyle = { textAlign: 'center', color: "white", fontWeight: "bolder" };
  const tableCellStyle = { textAlign: 'center' ,color: "black", fontWeight: "bolder"};
  const rowStyle1 = { backgroundColor: '' };
  const rowStyle2 = { backgroundColor: '' };
  const borderStyle = { border: '2px solid black' };

  const handleToggleStatus = (index) => {
    setRooms(prevRooms => 
      prevRooms.map((room, i) => 
        i === index ? { ...room, status: room.status === 'Pending' ? 'Booked' : 'Pending' } : room
      )
    );
  };

  return (
    <>
   <AppBar position="static" style={{ backgroundColor: "rgb(236, 87, 87)" }}>
      <Toolbar>
        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
           <MenuItem onClick={handleSettingsClick}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>

      <Container>
        <TableContainer component={Paper} style={{ marginTop: '20px', border: '1px solid white' }}>
          <Table sx={{ borderCollapse: 'collapse' }}>
            <TableHead style={{ backgroundColor: 'rgb(236, 87, 87)' }}>
              <TableRow>
                <TableCell style={{ ...tableheadStyle, ...borderStyle }}>S.No</TableCell>
                <TableCell style={{ ...tableheadStyle, ...borderStyle }}>Room No</TableCell>
                <TableCell style={{ ...tableheadStyle, ...borderStyle }}>Image</TableCell>
                <TableCell style={{ ...tableheadStyle, ...borderStyle }}>Price</TableCell>
                <TableCell style={{ ...tableheadStyle, ...borderStyle }}>Status</TableCell>
                <TableCell style={{ ...tableheadStyle, ...borderStyle }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rooms.map((room, index) => (
                <TableRow key={room.sno} style={index % 2 === 0 ? rowStyle1 : rowStyle2}>
                  <TableCell style={{ ...tableCellStyle, ...borderStyle }}>{room.sno}</TableCell>
                  <TableCell style={{ ...tableCellStyle, ...borderStyle }}>{room.roomNo}</TableCell>
                  <TableCell style={{ ...tableCellStyle, ...borderStyle }}>
                    <img style={{ height: "100px", width: "100px", borderRadius: "20px" }} src={room.img} alt={`Room ${room.roomNo}`} />
                  </TableCell>
                  <TableCell style={{ ...tableCellStyle, ...borderStyle }}>{room.price}</TableCell>
                  <TableCell style={{ ...tableCellStyle, ...borderStyle }}>
                  <span

                      className={
                        room.status === "Pending" ? "blink" : ""
                      }
                      style={{
                        color:
                          room.status === "Pending"
                            ? "red"
                            : "#008000",
                      }}
                    >
                      {room.status}
                    </span>
                  </TableCell>
                  <TableCell style={{ ...tableCellStyle, ...borderStyle }}>
                    <Switch 
                      checked={room.status == 'Booked'}
                      onChange={() => handleToggleStatus(index)}
                      color="primary"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default AdminDashboard;
