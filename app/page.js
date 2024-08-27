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
import GoogleAnalytics from "./analytics";

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
    <div>
      <head><GoogleAnalytics/></head>
    <Box id="background"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={3}
      width="100vw"
      height="100vh"
      sx={{
        backgroundImage:`url('/back.jpg')`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'repeat-y',
        backgroundColor:"black"
      }}
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
          <Typography variant="h1" p={0} sx={{ textAlign:"center", fontSize: {xs:'1.8rem', md:'5rem', lg:'7rem'}}} >
            Welcome to the Team!
          </Typography>
          <Typography variant="h5" gutterBottom p={1} sx={{ textAlign:"center", fontSize: {xs:'1.2rem', md:'2rem', lg:'3rem'}}} >
            See what we&apos;re cooking next.
          </Typography>
          
          <Box 
            id="waitlist"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            border="1px solid white"
            p={2}
            sx={{
              width:{lg:"35%", xs:"80%"},
              borderRadius:"10px", 
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',  // Smooth transition for movement and shadow
              "&:hover": {
                // bgcolor: '#d32f2f',  // Darker red on hover
                boxShadow: `
                  0 0 8px rgba(239, 154, 154, 0.5),  /* 50% transparent light red glow */
                  0 0 16px rgba(244, 67, 54, 0.3),   /* 30% transparent vibrant red glow */
                  0 0 24px rgba(211, 47, 47, 0.7)    /* 70% transparent darker red glow */ `,
                transform: 'translate(0px, -5px)'  // Move 5px to the right and 5px down on hover
              }
            }}
          >
            <Stack 
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              spacing ={2}>

            <Typography variant="h5" sx={{ textAlign:"center", fontSize: {xs:'1rem', md:'2rem', lg:'3rem'}}} >
            Join the Priority Access List
            </Typography>
            <Typography variant="h5" sx={{ textAlign:"center", fontSize: {xs:'0.5rem', md:'1rem', lg:'1rem'}}} >
            Be the first to experience what&apos;s coming! Enter your details below and share any suggestions or features you&apos;d love to see. Join our waitlist now and stay ahead of the curve!
            </Typography>
              <TextField 
                id="name-field" 
                label="Name*" 
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
                label="Email*" 
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
              <Button 
                variant="contained"
                sx={{
                  fontSize:{xs:"10px", lg:'1rem'},
                  borderRadius: '10px', 
                  bgcolor: '#e57373', // Reddish background color on hover
                  color: '#ffffff',   // Brighter shade of the original background color
                  "&:hover": {
                    bgcolor: '#d32f2f',  // Darker red on hover
                    boxShadow: `
                      0 0 8px #ef9a9a,   /* Light red glow */
                      0 0 16px #ef9a9a,  /* Light red glow */
                      0 0 24px #ef9a9a   /* Light red glow */ `
                  }
               }}                
                  onClick={addItemToWaitlist}>
                Join Now
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
    </div>
  );
}
