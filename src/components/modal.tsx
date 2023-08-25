import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Autocomplete, Avatar, IconButton, TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import countries from "@/utils/codes";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface RequestDemoModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}
export default function RequestDemoModal({
  isOpen,
  setIsOpen,
}: RequestDemoModal) {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleInputChange = (setState: any) => (event: any) => {
    setState(event.target.value);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {};

  return (
    <div>
      <ToastContainer />
      <Modal
        slotProps={{
          backdrop: {
            style: {
              opacity: 0.9,
              filter: "blur(2px)",
              backdropFilter: "blur(7px)",
            },
          },
        }}
        open={isOpen}
        onClose={handleClose}
      >
        <Box sx={style} className="w-[95%] md:w-2/6">
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Request A Demo
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 0.3 }}>
            Please share these details to access the Demo!
          </Typography>

          <Box mt={3}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Name"
              value={name}
              onChange={handleInputChange(setName)}
              sx={{ my: 0.5 }}
            />

            <TextField
              variant="outlined"
              fullWidth
              placeholder="Email Address"
              value={email}
              onChange={handleInputChange(setEmail)}
              sx={{ my: 0.5 }}
            />

            <Autocomplete
              id="country-select-demo"
              sx={{ my: 0.5 }}
              options={countries}
              fullWidth
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  {option.label} ({option.code}) +{option.phone}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a country"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Phone Number"
              value={phone}
              onChange={handleInputChange(setPhone)}
              sx={{ my: 0.5 }}
            />
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Message"
              value={message}
              onChange={handleInputChange(setMessage)}
              sx={{ my: 0.5 }}
              multiline
              rows={3}
            />
            <Button
              disableElevation
              onClick={handleSubmit}
              disabled={email || name || message ? false : true}
              variant="contained"
              size="large"
              sx={{ mt: 2 }}
            >
              Send Request
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
