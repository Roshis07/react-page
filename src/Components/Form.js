import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import { FormControl, FormLabel } from "@mui/material";
import TextField from "@mui/material/TextField";

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

const BasicModal = ({
  open,
  handleClose,
  handleSubmit,
  handleChange,
  name,
  age,
}) => (
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <FormLabel>Enter Name</FormLabel>
          <TextField
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
          <FormLabel>Enter Age</FormLabel>
          <TextField name="age" value={age} onChange={handleChange} required />
          <Button type="submit">Submit</Button>
        </FormControl>
      </form>
    </Box>
  </Modal>
);

export default function Form() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: "", age: "" });
  const [formArray, setFormArray] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormArray((prevArray) => [...prevArray, formData]);
    handleClose();
  };

  return (
    <Stack direction="column" spacing={8}>
      <Box sx={{ backgroundColor: "green", p: 2 }}>
        <Stack spacing={2}>
          <Button onClick={handleOpen}>Open modal</Button>
          <BasicModal
            open={open}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            name={formData.name}
            age={formData.age}
          />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Button sx={{ backgroundColor: "black" }}>Live Video</Button>
            <Button sx={{ backgroundColor: "black" }}>Activity</Button>
            <Button sx={{ backgroundColor: "black" }}>Photo</Button>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ maxHeight: "70vh", overflowY: "auto" }}>
        {formArray.map((data, index) => (
          <Box
            key={index}
            sx={{ backgroundColor: "#ffb3b3", p: 2, marginBottom: 2 }}
          >
            <Stack
              direction="row"
              display="flex"
              justifyContent="space-between"
            >
              <Typography>Name: {data.name}</Typography>
              <Typography>Age: {data.age}</Typography>
            </Stack>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
