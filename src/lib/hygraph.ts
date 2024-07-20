import { ApolloClient, InMemoryCache } from '@apollo/client';

const hygraph = new ApolloClient({
    uri: process.env.NEXT_PRIVATE_HYGRAPH_URL,
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PRIVATE_HYGRAPH_TOKEN}`,
    },
});

export default hygraph;
