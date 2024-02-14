import { SendOutlined } from "@mui/icons-material";
import { Box, Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";

export default function Form() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/contact", {
        name,
        email,
        message,
      });
      toast.success("Message sent successfully!");
      console.log(response.data);
    } catch (error) {
      toast.error("Unable to send message. Please try again later.");
    }
  };

  return (
    <Box className="px-2 py-5 md:py-10 md:px-6 bg-white rounded-md border-r-4 border-red-500">
      <form onSubmit={handleFormSubmit}>
        <Stack spacing={2}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            label="Name"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            label="Email Address"
          />
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            multiline
            rows={3}
            name="message"
            label="Message"
          />
          <Button
            size="large"
            endIcon={<SendOutlined />}
            variant="contained"
            type="submit"
          >
            Send
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
