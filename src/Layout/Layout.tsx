import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/styles/theme';
import AppAppBar from '@/Components/AppAppBar';
import { PaletteMode } from '@mui/material';
import { Roboto, Inter } from 'next/font/google';
import Footer from '@/Components/Footer';

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});
export const inter = Inter({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const LPtheme = createTheme(theme(mode));

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='initial-scale=1, width=device-width'
                />
            </Head>
            <ThemeProvider theme={LPtheme}>
                <main className={inter.className}>
                    <CssBaseline />
                    <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
                    {children}
                    <Footer />
                </main>
            </ThemeProvider>
        </>
    );
};

export default Layout;
