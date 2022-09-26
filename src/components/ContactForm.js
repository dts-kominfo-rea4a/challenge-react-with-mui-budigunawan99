import {
  Card,
  CardActions,
  CardContent,
  Button,
  Box,
  TextField,
} from "@mui/material";
import { useState } from "react";
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = ({ handleInput }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setInputs((previousInputs) => ({
      ...previousInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleInput({
      name: inputs.name,
      phone: inputs.phone,
      email: inputs.email,
      photo: inputs.photo,
    });
    setInputs({});
  };

  return (
    <>
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Box
            component="form"
            sx={{
              paddingRight: "16px",
              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="name"
              label="Name"
              onChange={handleChange}
              value={inputs.name || ""}
            />
            <TextField
              required
              id="phone"
              label="Phone"
              onChange={handleChange}
              value={inputs.phone || ""}
            />
            <TextField
              required
              id="email"
              label="Email"
              onChange={handleChange}
              value={inputs.email || ""}
            />
            <TextField
              required
              id="photo"
              label="Photo URL"
              onChange={handleChange}
              value={inputs.photo || ""}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleSubmit}>
            Add New
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ContactForm;
