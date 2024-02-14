import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Autocomplete, TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import PhoneInput from "react-phone-number-input";
import countries from "@/utils/codes";
import "react-phone-number-input/style.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface RequestDemoModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RequestDemoModal({
  isOpen,
  setIsOpen,
}: RequestDemoModalProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async () => {
    // Validation logic here
    if (!name || !email || !message || !phone) {
      toast.error("Please fill all the fields.");
      return;
    }

    try {
      const response = await axios.post("/api/demo", {
        name,
        email,
        message,
        phone,
      });
      toast.success("Demo successfully requested!");
      console.log(response.data);
      handleClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send request.");
    }
  };

  const isButtonDisabled = !email || !name || !message || !phone;

  return (
    <div>
      <ToastContainer />
      <Modal open={isOpen} onClose={handleClose}>
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
              onChange={(e) => setName(e.target.value)}
              sx={{ my: 0.5 }}
            />

            <TextField
              variant="outlined"
              fullWidth
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

            <PhoneInput
              placeholder="Enter phone number"
              value={phone}
              onChange={setPhone}
              className="phone-input"
              sx={{ my: 0.5 }}
            />

            <TextField
              variant="outlined"
              fullWidth
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ my: 0.5 }}
              multiline
              rows={3}
            />

            <Button
              disableElevation
              onClick={handleSubmit}
              disabled={isButtonDisabled}
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
