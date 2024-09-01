import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import CourseComponent from '@/Components/CourseComponent';
import hygraph from '@/lib/hygraph';
import { gql } from '@apollo/client';

const StyledContainer = styled(Container)(({ theme }) => ({
    maxWidth: '2xl',
    padding: theme.spacing(4, 0),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(6, 0),
    },
    [theme.breakpoints.up('lg')]: {
        maxWidth: '7xl',
        padding: theme.spacing(8, 0),
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

const CoursesSection = ({ courses }: CourseProps) => (
    <StyledContainer>
        <Box component='div' mx='auto' py={'6rem'}>
            <Box
                display='flex'
                flexDirection={{ xs: 'column', md: 'row' }}
                alignItems={{ md: 'center' }}
                justifyContent={{ md: 'space-between' }}
            >
                <Typography
                    variant='h2'
                    component='h2'
                    py={3}
                    mx='auto'
                    fontWeight='bold'
                    textAlign={'center'}
                    color='text.primary'
                >
                    Our courses
                </Typography>
            </Box>
            <CourseComponent courses={courses} />
        </Box>
    </StyledContainer>
);

export default CoursesSection;

export const getStaticProps = async () => {
    const { data } = await hygraph.query({
        query: gql`
            query {
                courses {
                    title
                    image {
                        url
                    }
                    price
                    category
                    slug
                }
            }
        `,
    });
    return {
        props: {
            courses: data.courses,
        },
        revalidate: 180,
    };
};
