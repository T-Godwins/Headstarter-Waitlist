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
import Head from 'next/head';


export default function Home() {
  const [inventory, setInventory] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [suggestion, setSuggestion] = useState('')

  
  // Function to handle adding an item to the waitlist
  const addItemToWaitlist = async () => {
    try {
      const docRef = doc(collection(firestore, 'Waitlist'), email); // Document ID is the user's email
      await setDoc(docRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        suggestion: suggestion,
      });
      alert('You have been added to the waitlist!');

      // Clear the input fields after submission
      setFirstName('');
      setLastName('');
      setEmail('');
      setSuggestion('')
    } catch (error) {
      console.error("Error adding to waitlist: ", error);
      alert('There was an error adding you to the waitlist.');
    }
  };

  return (
    <div>
      <Head><GoogleAnalytics/></Head>
    <Box id="background"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={2}
      width="100vw"
      height="100vh"
      sx={{
        backgroundImage:`url('/back.jpg')`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'repeat-y',
      }}
    >
      <Stack>
        <Stack id="landing"
          width="100vw"
          sx={{
            height:"100vh",
            p:{xs:0, md:10, lg:5}
          }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          bgcolor="#00000095"
         
        >
            <Typography 
              variant="h1" 
              p={0} 
              sx={{ 
                textAlign: "center", 
                color:"white",
                fontSize: { xs: '1.8rem', sm: '3rem', md: '5rem', lg: '7rem' },
                transition: 'transform 0.3s ease, text-shadow 0.3s ease',
                "&:hover": {
                  transform: 'translate(0px, -5px)',  // Move the text slightly up on hover
                  textShadow: `
                    0 0 8px rgba(239, 154, 154, 0.5),  /* Soft red glow */
                    0 0 16px rgba(244, 67, 54, 0.3),   /* Medium red glow */
                    0 0 24px rgba(211, 47, 47, 0.7)    /* Intense red glow */
                  `
                }
              }}
            >
              Welcome to the Team!
            </Typography>
          <Typography 
            variant="h5" 
            gutterBottom 
            p={1} 
            sx={{ 
              color:"white",
              textAlign:"center", fontSize: {xs:'1.2rem', sm:'1.8rem', md:'2rem', lg:'3rem',
              transition: 'transform 0.3s ease, text-shadow 0.3s ease',
                "&:hover": {
                  transform: 'translate(0px, -5px)',  // Move the text slightly up on hover
                  textShadow: `
                    0 0 8px rgba(239, 154, 154, 0.5),  /* Soft red glow */
                    0 0 16px rgba(244, 67, 54, 0.3),   /* Medium red glow */
                    0 0 24px rgba(211, 47, 47, 0.7)    /* Intense red glow */
                  `
                }
          }}} >
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
              color:"white",
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

            <Typography variant="h5" sx={{ textAlign:"center", fontSize: {xs:'1rem', sm:'2rem', md:'2rem', lg:'2rem'}}} >
            Join the Priority Access List
            </Typography>
            <Typography variant="h5" sx={{ textAlign:"center", fontSize: {xs:'0.8rem', sm:'1rem', md:'1rem', lg:'1rem'}}} >
            Be the first to experience what&apos;s coming! Enter your details below and share any suggestions or features you&apos;d love to see. Join our waitlist now and stay ahead of the curve!
            </Typography>
            <Stack
              display="flex"
              width="100%"
              flexDirection={{ xs: "column", sm: "row", lg: "row" }}  // Column layout on small screens, row on larger screens
              justifyContent="space-between"
              alignItems={{ xs: "stretch", sm: "center" }} // Stretch fields to full width on small screens
              gap={3}
            >
              <TextField 
                id="name-field" 
                label="First Name*" 
                variant="outlined" 
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                sx={{
                  borderRadius:"10px",
                  bgcolor:"white"
                }}
              />
              <TextField 
                id="name-field" 
                label="Last Name*" 
                variant="outlined" 
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                sx={{
                  borderRadius:"10px",
                  bgcolor:"white"
                }}
              />
            </Stack>
            
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
                  bgcolor:"white",
                  transition:'box-shadow 0.3s ease',
                  border:"none",
                }}
              />
              <Button 
                variant="contained"
                sx={{
                  fontSize:{xs:"10px", lg:'1rem'},
                  borderRadius: '10px', 
                  bgcolor: '#e57373', // Reddish background color on hover
                  color: '#ffffff',   
                  transition: 'font-size 0.3s ease',
                  "&:hover": {
                    bgcolor: '#d32f2f',  // Darker red on hover
                    boxShadow: `
                      0 0 8px #ef9a9a,   /* Light red glow */
                      0 0 16px #ef9a9a,  /* Light red glow */
                      0 0 24px #ef9a9a   /* Light red glow */ `,
                      fontSize:{xs:"15px", lg:'1.5rem'}
                  }
               }}                
                  onClick={addItemToWaitlist}>
                Join Now
              </Button>
            </Stack>
          </Box>
          <Typography variant="h5" sx={{fontSize:"1px"}}>
          Image by <a href="https://www.freepik.com/free-vector/halftone-background-with-circles_13295064.htm#query=abstract%20background&position=1&from_view=keyword&track=ais_hybrid&uuid=a162774f-e523-4f14-be20-cb38b9af490a">Freepik</a>
        </Typography>
        </Stack>
      </Stack>
    </Box>
    </div>
  );
}
