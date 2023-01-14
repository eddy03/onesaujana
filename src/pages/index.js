import {useState} from "react";

import Head from 'next/head'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const theme = createTheme();

export default function Home() {

  const [cards] = useState([{
    img: 'https://source.unsplash.com/random',
    title: 'Projek A',
    description: 'bla bla bla bla'
  }, {
    img: 'https://source.unsplash.com/random',
    title: 'Projek A',
    description: 'bla bla bla bla'
  }, {
    img: 'https://source.unsplash.com/random',
    title: 'Projek A',
    description: 'bla bla bla bla'
  }, {
    img: 'https://source.unsplash.com/random',
    title: 'Projek A',
    description: 'bla bla bla bla'
  }, {
    img: 'https://source.unsplash.com/random',
    title: 'Projek A',
    description: 'bla bla bla bla'
  }, {
    img: 'https://source.unsplash.com/random',
    title: 'Projek A',
    description: 'bla bla bla bla'
  }])

  return (
    <>
      <Head>
        <title>One Saujana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar color={"default"} position="sticky">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              One Saujana
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                One Saujana
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Something short and leading about the collection below—its contents,
                the creator, etc. Make it short and sweet, but not too short so folks
                don&apos;t simply skip over it entirely.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">
                  Whatsapp saya
                </Button>
              </Stack>
            </Container>
          </Box>
          <Container sx={{ py: 8, minHeight: 'calc(100vh - 630px)' }} maxWidth="md">

            {/* End hero unit */}
            <Grid container spacing={4}>
              {
                cards.map((card, i) => (
                  <Grid item key={i} xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardMedia
                        component="img"
                        image={card.img}
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h6" component="h2">
                          {card.title}
                        </Typography>
                        <Typography variant={"caption"}>
                          {card.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              }
            </Grid>

          </Container>

          <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              Something here to give the footer a purpose!
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {'Copyright © '}
              <Link color="inherit" href="/">
                OneSaujana
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Box>
        </main>
      </ThemeProvider>
    </>
  )
}
