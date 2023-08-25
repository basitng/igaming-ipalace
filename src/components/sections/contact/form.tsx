import { Send, SendOutlined } from "@mui/icons-material";
import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";

export default function Form() {
  return (
    <Box className="px-2 py-5 md:py-10 md:px-6 bg-white rounded-md border-r-4 border-r-red  -500">
      <Stack spacing={2}>
        <TextField name="name" label="Name" />
        <TextField name="email" label="Email Address" />
        <TextField multiline rows={3} name="message" label="Message" />
        <Button size="large" endIcon={<SendOutlined />} variant="contained">
          Send
        </Button>
      </Stack>
    </Box>
  );
}
