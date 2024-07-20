import * as React from 'react';
import { AppProps } from 'next/app';
import Layout from '@/Layout/Layout';
import '@/styles/globals.css';

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
