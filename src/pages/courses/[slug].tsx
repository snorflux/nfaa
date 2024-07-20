import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Markdown from 'react-markdown';
import Image from 'next/image';
import hygraph from '@/lib/hygraph';
import { gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { styled } from '@mui/system';
import { convertToTitleCase } from '@/lib/convertToTitleCase';

interface courseProps {
    course: {
        title: string;
        description: string;
        price: number;
        category: string;
        image: { url: string };
        slug: string;
        content: string;
    };
}

// Custom styled Box for image container
const ImageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
}));

const CoursePage = ({ course }: courseProps) => {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading</div>;
    }
    return (
        <Container>
            <Box mx='auto' maxWidth='lg' py='8rem'>
                {/* Product details */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        alignItems: 'center',
                        justifyContent: 'start',
                        gap: '2rem',
                    }}
                >
                    <Box
                        flex='1'
                        maxWidth={{ lg: 'lg' }}
                        alignSelf={{ lg: 'center' }}
                    >
                        <Box
                            component='nav'
                            aria-label='Breadcrumb'
                            fontFamily={'Lexend'}
                        >
                            Courses / {convertToTitleCase(course?.category)} /{' '}
                            {course?.title}
                        </Box>

                        <Typography
                            variant='h3'
                            component='h1'
                            mt={2}
                            fontWeight='bold'
                            color='text.primary'
                        >
                            {course?.title}
                        </Typography>

                        <Box aria-labelledby='information-heading' mt={2}>
                            <Typography id='information-heading'>
                                Course information
                            </Typography>

                            <Typography
                                variant='h6'
                                color='text.primary'
                                mt={1}
                            >
                                ₹{course?.price}
                            </Typography>

                            <Typography
                                variant='body1'
                                color='text.secondary'
                                mt={2}
                            >
                                {course?.description}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Product image */}
                    <Box
                        mt={{ xs: 5, lg: 0 }}
                        flex='1'
                        display='flex'
                        justifyContent='center'
                    >
                        <ImageContainer>
                            <Image
                                src={course?.image?.url}
                                alt={course?.title}
                                layout='responsive'
                                width={500}
                                height={500}
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    borderRadius: '1rem',
                                }}
                            />
                        </ImageContainer>
                    </Box>
                </Box>

                {/* Product form */}
                <Box mt={5} maxWidth={{ lg: 'lg' }} alignSelf={{ lg: 'start' }}>
                    <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                        size='large'
                        sx={{
                            backgroundColor: 'teal.600',
                            '&:hover': {
                                backgroundColor: 'teal.700',
                            },
                            mt: 3,
                        }}
                    >
                        Contact Us!
                    </Button>
                </Box>

                {/* Course content */}
                <Box mt={5} mx='auto' maxWidth='md'>
                    <Box
                        component='div'
                        fontFamily={'Lexend'}
                        color='text.primary'
                    >
                        <Markdown>{course?.content}</Markdown>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default CoursePage;

export const getStaticProps = async ({
    params,
}: {
    params: { slug: string };
}) => {
    const { data } = await hygraph.query({
        query: gql`
            query ($slug: String!) {
                course(where: { slug: $slug }) {
                    title
                    description
                    image {
                        url
                    }
                    price
                    content
                    category
                    slug
                }
            }
        `,
        variables: {
            slug: params.slug,
        },
    });
    return {
        props: {
            course: data.course,
        },
        revalidate: 180,
    };
};

export const getStaticPaths = async () => {
    const { data } = await hygraph.query({
        query: gql`
            query {
                courses {
                    slug
                }
            }
        `,
    });
    return {
        paths: data.courses.map((course: { slug: string }) => ({
            params: { slug: course.slug },
        })),
        fallback: true,
    };
};
