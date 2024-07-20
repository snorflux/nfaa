import { Container, Box } from '@mui/material';
import React from 'react';
import Markdown from 'react-markdown';
import { gql } from '@apollo/client';
import hygraph from '@/lib/hygraph';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { convertToTitleCase } from '@/lib/convertToTitleCase';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

interface BlogProps {
    blog: {
        title: string;
        date: string;
        description: string;
        slug: string;
        content: string;
        image: { url: string };
        blogCategory: string;
        author: string;
        id: string;
        metaTitle: string;
        metaDescription: string;
        metaKeywords: string;
    };
}

const GradientBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '-80px',
    left: 'max(10rem, 45%)',
    zIndex: -10,
    transform: 'translateY(0) blur(3rem)',
    width: '50.0625rem',
    height: 'auto',
    background: 'linear-gradient(to top right, #ff80b5, #9089fc)',
    opacity: 0.3,
    clipPath:
        'polygon(63.1% 29.6%, 100%  17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
    [theme.breakpoints.up('sm')]: {
        left: '50%',
    },
    [theme.breakpoints.up('md')]: {
        top: '20px',
    },
    [theme.breakpoints.up('xl')]: {
        top: '3px',
        marginLeft: '56px',
    },
}));

export const getStaticProps = async ({
    params,
}: {
    params: { slug: string };
}) => {
    const { data } = await hygraph.query({
        query: gql`
            query ($slug: String!) {
                blog(where: { slug: $slug }) {
                    id
                    title
                    date
                    description
                    slug
                    content
                    author
                    metaTitle
                    metaDescription
                    metaDescription
                    image {
                        url
                    }
                    blogCategory
                }
            }
        `,
        variables: {
            slug: params.slug,
        },
    });

    return {
        props: {
            blog: data.blog,
        },
        revalidate: 180,
    };
};

export const getStaticPaths = async () => {
    const { data } = await hygraph.query({
        query: gql`
            query {
                blogs {
                    slug
                }
            }
        `,
    });
    return {
        paths: data.blogs.map((blog: { slug: string }) => ({
            params: {
                slug: blog.slug,
            },
        })),
        fallback: true,
    };
};

const IndexPage = ({ blog }: BlogProps) => {
    const title = `${blog?.title} | NFAA`;
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={blog?.description} />
                <meta name='keywords' content={blog?.metaKeywords} />
                <meta name='author' content={blog?.author} />
                <meta name='robots' content='index, follow' />
                <meta property='og:title' content={blog?.metaTitle} />
                <meta
                    property='og:description'
                    content={blog?.metaDescription}
                />
                <meta property='og:image' content={blog?.image.url} />
                <meta
                    property='og:url'
                    content={`https://nfaa.in/blogs/${blog?.slug}`}
                />
                <meta property='og:type' content='article' />
                <meta property='og:site_name' content='NFAA' />
                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:site' content='@nfaa' />
                <meta name='twitter:creator' content='@nfaa' />
                <meta name='twitter:title' content={blog?.metaTitle} />
                <meta
                    name='twitter:description'
                    content={blog?.metaDescription}
                />
                <meta name='twitter:image' content={blog?.image.url} />
                <meta name='twitter:image:alt' content={blog?.title} />
                <meta name='twitter:label1' content='Written by' />
                <meta name='twitter:data1' content={blog?.author} />
                <meta name='twitter:label2' content='Filed under' />
                <meta name='twitter:data2' content={blog?.blogCategory} />
            </Head>
            <Container>
                <Box
                    component='div'
                    position='relative'
                    py={6}
                    sx={{ py: '8rem' }}
                    overflow='hidden'
                >
                    <GradientBox aria-hidden='true' />
                    <Container maxWidth='lg' sx={{ px: { xs: 2, lg: 3 } }}>
                        <Box mx='auto'>
                            <Typography
                                variant='subtitle1'
                                component='p'
                                textAlign='center'
                                fontWeight='bold'
                                color='teal'
                                sx={{ mb: 2 }}
                            >
                                {convertToTitleCase(blog?.blogCategory)}
                            </Typography>
                            <Typography
                                variant='h3'
                                component='h3'
                                textAlign='center'
                                fontWeight='bold'
                                color='zinc'
                                sx={{
                                    mb: 2,
                                    mt: 1,
                                    maxWidth: '56rem',
                                    mx: 'auto',
                                }}
                            >
                                {blog?.title}
                            </Typography>
                            <Box
                                py={5}
                                component={'div'}
                                maxWidth='100%'
                                borderRadius={'1rem'}
                                overflow={'hidden'}
                            >
                                <Image
                                    src={blog?.image?.url}
                                    alt={blog?.title}
                                    layout='responsive'
                                    width={1200}
                                    height={600}
                                    className='blog-image'
                                ></Image>
                            </Box>
                            <Box
                                sx={{
                                    typography: 'body1',
                                    mx: 'auto',
                                    color: 'text.primary',
                                }}
                            >
                                <Markdown>{blog?.content}</Markdown>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Container>
        </>
    );
};

export default IndexPage;
