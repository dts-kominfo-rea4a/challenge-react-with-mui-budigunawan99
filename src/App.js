import contactsJSON from "./data/contacts.json";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import { useState } from "react";

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON);

  const handleInput = ({ name, phone, email, photo }) => {
    setContacts((contacts) => [
      ...contacts,
      {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        photo: photo.trim(),
      },
    ]);
  };

  return (
    <>
      <Header />
      <Grid container direction="row" spacing={4}>
        <Grid item xs={12} sm={6}>
          <ContactForm handleInput={handleInput} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Contact data={contacts} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
