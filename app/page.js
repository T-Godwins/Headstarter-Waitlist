'use client';

import Image from "next/image";
import {
  Box, 
  Stack, 
  Typography, 
  Button,
  TextField
} from "@mui/material";
import { useState, useEffect } from "react";
import { firestore } from "@/firebase";
import {
  collection,
  doc,
  setDoc,
} from 'firebase/firestore';

export default function Home() {
  const [inventory, setInventory] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [suggestion, setSuggestion] = useState('')

  
  // Function to handle adding an item to the waitlist
  const addItemToWaitlist = async () => {
    try {
      const docRef = doc(collection(firestore, 'Waitlist'), name); // Document ID is the user's name
      await setDoc(docRef, {
        name: name,
        email: email,
        suggestion: suggestion,
      });
      alert('You have been added to the waitlist!');
    } catch (error) {
      console.error("Error adding to waitlist: ", error);
      alert('There was an error adding you to the waitlist.');
    }
  };

  return (
    <Box id="background"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={2}
      width="100vw"
      height="100vh"
    >
      <Stack>
        <Stack id="landing"
          width="100vw"
          sx={{
            height:{md:"40vh", xs:"20vh"},
            // paddingTop:{xs:20}
          }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h1" p={0} sx={{ textAlign:"center", fontSize: {xs:'2rem', md:'5rem', lg:'7rem'}}} >
            Welcome to the Team!
          </Typography>
          <Typography variant="h5" gutterBottom p={1} sx={{ textAlign:"center", fontSize: {xs:'1rem', md:'2rem', lg:'3rem'}}} >
            See what we&apos;re cooking next.
          </Typography>
          
          <Button variant="contained"
            sx={{
              fontSize:'1rem',
              borderRadius: '50px', 
              bgcolor:"blue", 
              color:"white",
              "&:hover": {
                bgcolor: 'rgba(2, 2, 2, 0.7)',
                color: 'white',
              }
            }}
          >
            Get Priority Access
          </Button>
          <Box 
            id="waitlist"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            border="1px solid white"
            p={2}
          >
            <Stack spacing ={2}>
              <TextField 
                id="name-field" 
                label="Name" 
                variant="outlined" 
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  borderRadius:"10px",
                  bgcolor:"white"
                }}
              />
              <TextField 
                id="email-field" 
                label="Email" 
                variant="outlined" 
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  borderRadius:"10px",
                  bgcolor:"white"
                }}
              />
              <TextField 
                id="suggestion-field" 
                label="Suggestions" 
                variant="outlined" 
                fullWidth
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                sx={{
                  borderRadius:"10px",
                  bgcolor:"white"
                }}
              />
              <Button variant="contained" onClick={addItemToWaitlist}>
                Join
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
