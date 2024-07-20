import hygraph from '@/lib/hygraph';
import { gql } from '@apollo/client';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { formatDate } from '@/lib/formatDate';
import { Container } from '@mui/material';
import { convertToTitleCase } from '@/lib/convertToTitleCase';
import { AccountCircle } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const limit = 6;

interface BlogProps {
    blogs: {
        node: {
            title: string;
            description: string;
            author: string;
            slug: string;
            excerpt: string;
            date: string;
            readTime: string;
            image: { url: string };
            blogCategory: string;
        };
    }[];
}

const StyledLink = styled(Link)<{ theme: any }>((props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: props.theme.shape.borderRadius,
    border: `1px solid ${props.theme.palette.divider}`,
    padding: props.theme.spacing(2),
    boxShadow: props.theme.shadows[1],
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
        boxShadow: props.theme.shadows[4],
    },
    textDecoration: 'none',
    color: 'inherit',
}));

const IndexPage = ({ blogs }: BlogProps) => {
    return (
        <>
            <Head>
                {/* Primary Tags */}

                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <title>Blogs | Linkedin For Her</title>
                <meta name='title' content='Blogs | Linkedin For Her' />
                <meta
                    name='description'
                    content='Empowering women to achieve their financial goals through education and community.'
                />

                {/* Open Graph / Facebook */}

                <meta property='og:title' content='Blogs | Linkedin For Her' />
                <meta property='og:site_name' content='Linkedin For Her' />
                <meta property='og:url' content='https://linkedinforher.com' />
                <meta
                    property='og:description'
                    content='Empowering women to achieve their financial goals through education and community.'
                />
                <meta property='og:type' content='website' />
                {/* <meta property='og:image' content={SeoImage} /> */}

                {/* Twitter*/}

                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:site' content='@linkedinforher' />
                <meta name='twitter:title' content='Blogs | Linkedin For Her' />
                <meta
                    name='twitter:description'
                    content='Empowering women to achieve their financial goals through education and community.'
                />
                {/* <meta name='twitter:image' content={SeoImage} /> */}
            </Head>
            <Container>
                <Box mx='auto' maxWidth='lg' py={6} sx={{ py: '8rem' }}>
                    <Box textAlign='center'>
                        <Typography
                            variant='h2'
                            component='h2'
                            fontWeight='bold'
                            gutterBottom
                        >
                            Recent Blogs
                        </Typography>
                        <Typography variant='h6' color='textSecondary'>
                            Our latest articles on personal finance, investing,
                            and career
                        </Typography>
                    </Box>
                    <Box
                        mx='auto'
                        display='grid'
                        gridTemplateColumns={{
                            xs: '1fr',
                            lg: 'repeat(3, 1fr)',
                        }}
                        gap={4}
                        py={6}
                    >
                        {blogs?.map((post) => (
                            <StyledLink
                                href={`/blogs/${post.node.slug}`}
                                key={post.node.title}
                                theme={undefined}
                            >
                                <Box>
                                    <Box mb={2}>
                                        <Typography
                                            variant='subtitle2'
                                            component='span'
                                            bgcolor='teal.100'
                                            color='teal.900'
                                            px={2}
                                            borderRadius='16px'
                                            fontWeight='bold'
                                        >
                                            {convertToTitleCase(
                                                post.node.blogCategory,
                                            )}
                                        </Typography>
                                    </Box>
                                    <Box
                                        component={'img'}
                                        src={post.node.image.url}
                                        alt={post.node.title}
                                        maxWidth={'100%'}
                                    ></Box>
                                    <Box mt={2}>
                                        <Typography
                                            variant='h6'
                                            component='p'
                                            fontWeight='bold'
                                        >
                                            {post.node.title}
                                        </Typography>
                                        <Typography
                                            variant='body2'
                                            color='textSecondary'
                                            mt={1}
                                        >
                                            {post.node.description.slice(
                                                0,
                                                100,
                                            )}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box mt={2}>
                                    <Box display='flex' alignItems='center'>
                                        <AccountCircle fontSize='large' />
                                        <Box ml={1}>
                                            <Typography
                                                variant='body2'
                                                fontWeight='medium'
                                            >
                                                {post.node.author}
                                            </Typography>
                                            <Box
                                                display='flex'
                                                alignItems='center'
                                                mt={0.5}
                                            >
                                                <time dateTime={post.node.date}>
                                                    {formatDate(post.node.date)}
                                                </time>
                                                <span
                                                    aria-hidden='true'
                                                    style={{ margin: '0 8px' }}
                                                >
                                                    &middot;
                                                </span>
                                                <span>
                                                    {post.node.readTime}
                                                </span>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </StyledLink>
                        ))}
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default IndexPage;

export const getStaticProps = async ({
    params,
}: {
    params: { page: number };
}) => {
    const { data } = await hygraph.query({
        query: gql`
            query BlogsPageQuery($limit: Int!, $offset: Int!) {
                blogsConnection(
                    first: $limit
                    skip: $offset
                    orderBy: date_DESC
                ) {
                    blogs: edges {
                        node {
                            id
                            title
                            description
                            date
                            slug
                            blogCategory
                            author
                            readTime
                            image {
                                url
                            }
                        }
                    }
                    pageInfo {
                        hasNextPage
                        hasPreviousPage
                        pageSize
                    }
                    aggregate {
                        count
                    }
                }
            }
        `,
        variables: {
            limit,
            offset: (params.page - 1) * limit,
        },
    });

    return {
        props: {
            blogs: data.blogsConnection.blogs,
        },
        revalidate: 180,
    };
};

export const getStaticPaths = async () => {
    const { data } = await hygraph.query({
        query: gql`
            query {
                blogsConnection {
                    aggregate {
                        count
                    }
                }
            }
        `,
    });
    function* numberOfPages({
        total,
        limit,
    }: {
        total: number;
        limit: number;
    }) {
        let page = 1;
        let offset = 0;
        while (offset < total) {
            yield page;
            page++;
            offset += limit;
        }
    }

    const paths = [
        ...numberOfPages({
            total: data.blogsConnection.aggregate.count,
            limit,
        }),
    ].map((page) => ({
        params: { page: String(page) },
    }));

    return {
        paths,
        fallback: true,
    };
};
