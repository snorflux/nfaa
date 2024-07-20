import React, { useState } from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';

export default function Hero() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setPhoneNumber(event.target.value);
    };

    const handleStartNowClick = () => {
        // Redirect to WhatsApp link with the phone number
        if (phoneNumber.trim() !== '') {
            const phoneNumberDigitsOnly = phoneNumber.replace(/\D/g, ''); // Remove non-digit characters
            const whatsappLink = `https://wa.me/${phoneNumberDigitsOnly}`;
            window.location.href = whatsappLink;
        }
    };
    return (
        <Box
            id='hero'
            sx={(theme) => ({
                width: '100%',
                backgroundImage:
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                        : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
                backgroundSize: '100% 20%',
                backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Stack
                    spacing={2}
                    useFlexGap
                    sx={{ width: { xs: '100%', sm: '70%' } }}
                >
                    <Typography
                        variant='h1'
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'column' },
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 'clamp(1.5rem, 4vw, 1.5rem)',
                        }}
                    >
                        Unleash Your Artistic Potential at
                        <Typography
                            component='span'
                            variant='h1'
                            sx={{
                                fontSize: 'clamp(2rem, 6vw, 3rem)',
                                color: (theme) =>
                                    theme.palette.mode === 'light'
                                        ? 'primary.main'
                                        : 'primary.light',
                            }}
                        >
                            Nadanta Fusion Art Academy
                        </Typography>
                    </Typography>
                    <Typography
                        textAlign='center'
                        color='text.secondary'
                        sx={{
                            alignSelf: 'center',
                            width: { sm: '100%', md: '80%' },
                        }}
                    >
                        Discover a world of artistic excellence at Nadanta
                        Fusion Art Academy. With expert faculty, modern
                        facilities, and a supportive environment, we offer
                        comprehensive programs in dance, music, and theatre.
                        Join us to hone your skills, express your creativity,
                        and become part of our vibrant artistic community.
                    </Typography>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        alignSelf='center'
                        spacing={1}
                        useFlexGap
                        sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
                    >
                        <TextField
                            id='phone-number-input'
                            hiddenLabel
                            size='small'
                            variant='outlined'
                            aria-label='Enter your phone number'
                            placeholder='Your phone number'
                            inputProps={{
                                autoComplete: 'off',
                                'aria-label': 'Enter your phone number',
                            }}
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                        />
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={handleStartNowClick}
                        >
                            Start now
                        </Button>
                    </Stack>
                    <Typography
                        variant='caption'
                        textAlign='center'
                        sx={{ opacity: 0.8 }}
                    >
                        By clicking &quot;Start now&quot; you agree to our&nbsp;
                        <Link href='#' color='primary'>
                            Terms & Conditions
                        </Link>
                        .
                    </Typography>
                </Stack>
                <Carousel
                    sx={{
                        width: '100%',
                        height: { xs: 300, sm: 800 },
                    }}
                >
                    {bannerImages.map((banner) => (
                        <Box
                            id='image'
                            key={banner.id}
                            sx={(theme) => ({
                                mt: { xs: 8, sm: 10 },
                                alignSelf: 'center',
                                height: { xs: 200, sm: 700 },
                                width: '100%',
                                backgroundImage: `url(${banner.image.url})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '10px',
                                objectPosition: 'center',
                                objectFit: 'fit',
                                outline: '1px solid',
                                outlineColor:
                                    theme.palette.mode === 'light'
                                        ? 'rgba(191, 204, 217, 0.5)'
                                        : 'rgba(156, 204, 252, 0.1)',
                                boxShadow:
                                    theme.palette.mode === 'light'
                                        ? '0 0 12px 8px rgba(156, 204, 252, 0.2)'
                                        : '0 0 24px 12px rgba(3, 51, 99, 0.2)',
                            })}
                        />
                    ))}
                </Carousel>
            </Container>
        </Box>
    );
}

const bannerImages = [
    {
        id: '1',
        title: 'Discover our latest products',
        url: '#',
        image: {
            url: 'https://images.unsplash.com/photo-1522642888367-8d98750c243c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    },
    {
        id: '2',
        title: 'Experience our cutting-edge solutions',
        url: '#',
        image: {
            url: 'https://images.unsplash.com/photo-1580640613705-a47b4567941e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    },
    {
        id: '2',
        title: 'Experience our cutting-edge solutions',
        url: '#',
        image: {
            url: 'https://plus.unsplash.com/premium_photo-1681492529719-a1d3d8cc498a?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    },
];
