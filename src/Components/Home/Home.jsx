import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Invitations from "./Column1/Invitations/Invitations";
import MyProfile from "./Column1/MyProfile/MyProfile";
import SideNav from "./Column1/SideNav/SideNav";
import Post from "./Column2/Posts/Post";
import Thoughts from "./Column2/Thoughts/Thoughts";
import Contacts from "./Column3/Contacts/Contacts";
import Requests from "./Column3/Requests/Requests";
import "./style.css";
import * as Ioicons from "react-icons/io5";
import TextField from "@mui/material/TextField";
import theme from "../../theme";

function Home() {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
  }, [images]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setImages([]);
    setImageUrls([]);
  };

  const onImageChange = (e) => {
    setImages([...e.target.files]);
  };

  return (
    <div>
      <Navbar handleCreatePost={handleOpen} />
      <Dialog
        style={{ borderWidth: 20, borderColor: theme.button }}
        open={open}
      >
        <DialogTitle>Create Something</DialogTitle>
        <DialogContent>
          <input
            type='file'
            multiple
            accept='image/*'
            onChange={onImageChange}
          />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {imageUrls.map((url) => {
              return (
                <img
                  src={url}
                  alt='img'
                  style={{ width: 100, height: 100, margin: 5 }}
                />
              );
            })}
          </div>
          <label about='Description' />
          <TextField
            id='standard-basic'
            label='Description'
            multiline
            variant='standard'
            rows={3}
            style={{ width: "100%" }}
          />
          <TextField
            id='standard-basic'
            label='Add Hashtags'
            variant='standard'
            style={{ width: "100%" }}
            multiline
            // rows={2}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>
            Post
            <Ioicons.IoRocketOutline size={20} style={{ marginLeft: 5 }} />
          </Button>
        </DialogActions>
      </Dialog>

      <div className='homeBody'>
        <div className='homeCol1'>
          <MyProfile />
          <SideNav />
          <Invitations />
        </div>
        <div className='homeCol2'>
          <Thoughts />
          <Post />
        </div>
        <div className='homeCol3'>
          <Requests />
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default Home;
