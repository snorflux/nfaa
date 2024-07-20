import { Box } from '@mui/material';
import { NextPage } from 'next';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Hero from '@/Components/Hero';
import Highlights from '@/Components/Highlights';
import Features from '@/Components/Features';
import Testimonials from '@/Components/Testimonials';
import Faq from '@/Components/FAQ';
import Footer from '@/Components/Footer';
import Courses from '@/Components/Courses';

const Home: NextPage = () => {
    return (
        <>
            <Hero />
            <Box sx={{ bgcolor: 'background.default' }}>
                <Features />
                <Divider />
                <Testimonials />
                <Divider />
                <Courses />
                <Divider />
                <Highlights />
                <Divider />
                <Faq />
            </Box>
        </>
    );
};

export default Home;
