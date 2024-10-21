import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { user, notification } from "../assets/icon";
import Image from "next/image";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { logoPoltek, logoHidropol } from "../assets/assets";
import axios from "axios";
import Swal from "sweetalert2";
import { Dangerous } from "@mui/icons-material";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

const Cookies = require("js-cookie");
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function LoginModal() {
  const router = useRouter();
  const url = "https://eyjlbmrwb2ludci6imhpzhjvcg9slwdhdgv3yxkifq.vercel.app/auth/login";
  const [open, setOpen] = React.useState(false);
  const [validateErr, setValidateErr] = React.useState();
  const [userErr, setUserErr] = React.useState();
  const [passErr, setPassErr] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setValidateErr();
  };
  const [formData, setFormData] = React.useState({
    id: "",
    password: "",
  });

  const onChange = (e) => {
    console.log(e.target.value);
    setFormData({ [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const login = await axios.post(url, {
        id: formData.id,
        password: formData.password,
      });

      console.log(login);

      handleClose();
      setFormData({
        id: "",
        password: "",
      });

      let timerInterval;
      Swal.fire({
        icon: "success",
        title: "Authentication Success!",
        html: "You'll be directed to Dashboard in <b></b> seconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft() / 1000;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          Cookies.set("isAuth", login.data.logged_in);
          Cookies.set("jwtToken", login.data.bearer_token);

          router.push("/dashboard/home");
        }
      });
    } catch (error) {
      const err = error.response.data;
      const errs = error.response.data.message.errors;

      //validation error
      if (errs) {
        if (!errs.length) {
          handleClose();
          setFormData({
            id: "",
            password: "",
          });
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Request timed out! Try again later!",
          });
        } else {
          errs.map((er) => {
            if (er.path === "id") {
              let eru = [];
              eru.push(er.msg);
              setUserErr(eru);
            }

            if (er.path === "password") {
              let erp = [];
              erp.push(er.msg);
              setPassErr(erp);
            }
          });
        }
        //authentication error
      } else if (err) {
        handleClose();
        setFormData({
          id: "",
          password: "",
        });
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message.toUpperCase(),
        });
      }
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <Image src={user} width={42} height={42} alt="user" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Dialog open={open} onClose={handleClose} margin={3}>
          <center>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ marginTop: 4 }}>
                <Image src={logoPoltek} width={72} height={72} alt="poltek" />
                <Image
                  src={logoHidropol}
                  style={{ marginLeft: 15 }}
                  width={72}
                  height={72}
                  alt="hidropol"
                />
              </Grid>
            </Grid>
          </center>
          <DialogTitle
            sx={{
              fontWeight: "bold",
              fontSize: 36,
              textAlign: "center",
            }}
            className="bold"
          >
            Login
          </DialogTitle>
          <form
            method="post"
            onSubmit={handleSubmit}
            style={{ marginTop: "-20px" }}
          >
            <DialogContent>
              <DialogContentText>
                To access this website, please enter your registered identity
                below. We will redirect you to dashboard if your identity
                matches.
              </DialogContentText>
              <TextField
                onChange={(e) => {
                  setFormData({ ...formData, id: e.target.value });
                  setUserErr();
                }}
                margin="dense"
                id="id"
                label="Username/Email Address"
                type="text"
                fullWidth
                variant="standard"
                value={formData.id}
                sx={{ marginTop: 4 }}
                placeholder="e.g adam.firdaus@gmail.com"
              />
              {userErr ? (
                <>
                  <br />
                  <List sx={{ marginTop: "-10px", m: "-10px" }}>
                    {userErr.map((i) => {
                      return (
                        <ListItem>
                          <ListItemIcon>
                            <Dangerous color="error" />
                          </ListItemIcon>
                          <ListItemText primary={i} />
                        </ListItem>
                      );
                    })}
                  </List>
                </>
              ) : (
                ""
              )}
              <TextField
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  setPassErr();
                }}
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
                value={formData.password}
                placeholder="***************"
              />
              {passErr ? (
                <>
                  <br />
                  <List sx={{ marginTop: "-10px", m: "-10px" }}>
                    {passErr.map((i) => {
                      return (
                        <ListItem>
                          <ListItemIcon>
                            <Dangerous color="error" />
                          </ListItemIcon>
                          <ListItemText primary={i} />
                        </ListItem>
                      );
                    })}
                  </List>
                </>
              ) : (
                ""
              )}
            </DialogContent>
            <DialogActions sx={{ paddingBottom: 7, paddingInline: 3 }}>
              <Button variant="outlined" color="error" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="outlined"
                sx={{ paddingInline: 3 }}
                color="primary"
                onClick={handleSubmit}
                type="submit"
              >
                Login
              </Button>
            </DialogActions>
          </form>
        </Dialog>
        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login Modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
      </Modal>
    </div>
  );
}

export function NotifModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <Image src={notification} width={42} height={42} alt="notif" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Notification Modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
