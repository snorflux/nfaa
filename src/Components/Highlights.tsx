import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
    {
        icon: <SettingsSuggestRoundedIcon />,
        title: 'World-Class Instructors',
        description:
            'Learn from renowned artists and educators who bring a wealth of experience and passion to their teaching, ensuring top-quality instruction.',
    },
    {
        icon: <ConstructionRoundedIcon />,
        title: 'Comprehensive Curriculum',
        description:
            'Our diverse programs cover Indian Classical dance, Western dance styles, Cinematic dance, music, and theatre, catering to all skill levels and interests.',
    },
    {
        icon: <ThumbUpAltRoundedIcon />,
        title: 'State-of-the-Art Facilities',
        description:
            'Train in modern studios, practice rooms, and performance spaces equipped with the latest technology to enhance your learning experience.',
    },
    {
        icon: <AutoFixHighRoundedIcon />,
        title: 'Holistic Development',
        description:
            'We focus on the overall artistic growth of our students, encouraging creativity, expression, and confidence alongside technical proficiency.',
    },
    {
        icon: <SupportAgentRoundedIcon />,
        title: 'Strong Community',
        description:
            'Become part of a vibrant and supportive artistic community that fosters collaboration, inspiration, and lifelong friendships.',
    },
    {
        icon: <QueryStatsRoundedIcon />,
        title: 'Performance Opportunities',
        description:
            ' Gain real-world experience and showcase your talents through regular recitals, stage performances, and community events.',
    },
];

export default function Highlights() {
    return (
        <Box
            id='why-nfaa'
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                color: 'white',
                bgcolor: '#06090a',
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}
            >
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}
                >
                    <Typography component='h2' variant='h4'>
                        Why Choose Nadanta Academy?
                    </Typography>
                    <Typography variant='body1' sx={{ color: 'grey.400' }}>
                        Explore the key features that make Nadanta Fusion Art
                        Academy the ideal place to nurture your artistic
                        talents.
                    </Typography>
                </Box>
                <Grid container spacing={2.5}>
                    {items.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.title}>
                            <Stack
                                direction='column'
                                color='inherit'
                                component={Card}
                                spacing={1}
                                useFlexGap
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    border: '1px solid',
                                    borderColor: 'grey.800',
                                    background: 'transparent',
                                    backgroundColor: 'grey.900',
                                }}
                            >
                                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                                <div>
                                    <Typography
                                        fontWeight='medium'
                                        gutterBottom
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        sx={{ color: 'grey.400' }}
                                    >
                                        {item.description}
                                    </Typography>
                                </div>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
