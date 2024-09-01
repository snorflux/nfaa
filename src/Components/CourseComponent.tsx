import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from '@mui/system';
import { convertToTitleCase } from '@/lib/convertToTitleCase';

const ImageContainer = styled(Box)(({ theme }) => ({
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
        opacity: 0.75,
    },
}));

interface CourseProps {
    courses: {
        id: string;
        title: string;
        price: number;
        category: string;
        image: { url: string };
        slug: string;
    }[];
}

const CourseComponent = ({ courses }: CourseProps) => {
    return (
        <Container>
            <Box mt={6}>
                <Grid container sx={{ mx: 'auto', gap: '1.8rem' }}>
                    {courses?.map((course) => (
                        <Grid item key={course.id} mx={'auto'}>
                            <Box>
                                <ImageContainer maxWidth={'100%'}>
                                    <Image
                                        src={course?.image?.url}
                                        alt={course?.title}
                                        width={300}
                                        height={300}
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                            borderRadius: '1rem',
                                        }}
                                    />
                                </ImageContainer>
                                <Typography variant='h6' component='h3' mt={2}>
                                    <Link
                                        href={`/courses/${course?.slug}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Box
                                            sx={{
                                                color: 'text.primary',
                                                textDecoration: 'none',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    color: 'text.secondary',
                                                    textDecoration: 'underline',
                                                },
                                            }}
                                        >
                                            {course.title}
                                        </Box>
                                    </Link>
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    mt={1}
                                >
                                    {convertToTitleCase(course?.category)}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    mt={2}
                                    sx={{
                                        bgcolor: 'grey.700',
                                        color: 'common.white',
                                        px: 1.5,
                                        py: 0.5,
                                        borderRadius: '16px',
                                        display: 'inline-block',
                                    }}
                                >
                                    ₹{course?.price}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default CourseComponent;
