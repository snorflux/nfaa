import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

const logoStyle = {
    width: '140px',
    height: 'auto',
};

function Copyright() {
    return (
        <Typography variant='body2' color='text.secondary' mt={1}>
            {'Copyright © '}
            <Link href='/' style={{ textDecoration: 'none' }}>
                NFAA&nbsp;
            </Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 8, sm: 10 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 4, sm: 8 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box display={'flex'} gap={'0.5rem'}>
                        <Link
                            color='text.secondary'
                            href='#'
                            style={{ textDecoration: 'none' }}
                        >
                            <Typography color='text.secondary'>
                                Privacy Policy
                            </Typography>{' '}
                        </Link>
                        <Typography
                            display='inline'
                            sx={{ mx: 0.5, opacity: 0.5 }}
                        >
                            &nbsp;•&nbsp;
                        </Typography>
                        <Link href='#' style={{ textDecoration: 'none' }}>
                            <Typography color='text.secondary'>
                                Terms of Service
                            </Typography>{' '}
                        </Link>
                    </Box>
                    <Copyright />
                </Box>
                <Stack
                    direction='row'
                    justifyContent='left'
                    spacing={1}
                    useFlexGap
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    <IconButton
                        color='inherit'
                        href='https://github.com/mui'
                        aria-label='GitHub'
                        sx={{ alignSelf: 'center' }}
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        color='inherit'
                        href='https://x.com/MaterialUI'
                        aria-label='X'
                        sx={{ alignSelf: 'center' }}
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        color='inherit'
                        href='https://www.linkedin.com/company/mui/'
                        aria-label='LinkedIn'
                        sx={{ alignSelf: 'center' }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    );
}
