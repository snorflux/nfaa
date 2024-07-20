import * as React from 'react';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import Image from 'next/image';
import Link from 'next/link';

const logoStyle = {
    width: '140px',
    height: 'auto',
    cursor: 'pointer',
};

interface AppAppBarProps {
    mode: PaletteMode;
    toggleColorMode: () => void;
}

function AppAppBar({ mode, toggleColorMode }: Readonly<AppAppBarProps>) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <AppBar
                position='fixed'
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}
            >
                <Container maxWidth='lg'>
                    <Toolbar
                        variant='regular'
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '999px',
                            bgcolor:
                                theme.palette.mode === 'light'
                                    ? 'rgba(255, 255, 255, 0.4)'
                                    : 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow:
                                theme.palette.mode === 'light'
                                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                    : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 0,
                            }}
                        >
                            <Link href={'/'}>
                                <Image
                                    src={
                                        'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                                    }
                                    style={logoStyle}
                                    alt='logo of sitemark'
                                    width={140}
                                    height={40}
                                />
                            </Link>
                            <Box
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    gap: '2rem',
                                }}
                            >
                                {menuLinks.map((menuLink) => (
                                    <Link
                                        key={menuLink.id}
                                        href={menuLink.url}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Typography
                                            variant='body2'
                                            color='text.primary'
                                            sx={{
                                                color: 'text.primary',
                                                fontWeight: 500,
                                                textTransform: 'none',
                                                '&:hover': {
                                                    color: 'text.secondary',
                                                },
                                            }}
                                        >
                                            {menuLink.name}
                                        </Typography>
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                            }}
                        >
                            <ToggleColorMode
                                mode={mode}
                                toggleColorMode={toggleColorMode}
                            />
                            <Link href={'tel:9900990099'} target='_blank'>
                                <Button
                                    color='primary'
                                    variant='contained'
                                    size='medium'
                                    sx={{
                                        borderRadius: '999px',
                                        fontWeight: 600,
                                        padding: '0.05rem 2rem',
                                    }}
                                >
                                    Call Us
                                </Button>
                            </Link>
                        </Box>
                        <Box sx={{ display: { sm: '', md: 'none' } }}>
                            <Button
                                variant='text'
                                color='primary'
                                aria-label='menu'
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer
                                anchor='right'
                                open={open}
                                onClose={toggleDrawer(false)}
                            >
                                <Box
                                    sx={{
                                        minWidth: '60dvw',
                                        p: 2,
                                        backgroundColor: 'background.paper',
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            flexGrow: 1,
                                            mb: 6,
                                        }}
                                    >
                                        <ToggleColorMode
                                            mode={mode}
                                            toggleColorMode={toggleColorMode}
                                        />
                                        <Link
                                            href={'tel:9900990099'}
                                            target='_blank'
                                        >
                                            <Button
                                                color='primary'
                                                variant='contained'
                                                size='medium'
                                                sx={{
                                                    borderRadius: '999px',
                                                    fontWeight: 600,
                                                    padding: '0.05rem 2rem',
                                                }}
                                            >
                                                Call Us
                                            </Button>
                                        </Link>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '1rem',
                                        }}
                                    >
                                        {menuLinks.map((menuLink) => (
                                            <Link
                                                key={menuLink.id}
                                                href={menuLink.url}
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                <Typography
                                                    variant='body2'
                                                    color='text.primary'
                                                    sx={{
                                                        color: 'text.primary',
                                                        fontWeight: 500,
                                                        width: '100%',
                                                        px: '1rem',
                                                        borderRadius: '999px',
                                                        py: '0.5rem',
                                                        textTransform: 'none',
                                                        '&:hover': {
                                                            color: 'text.primary',
                                                            backgroundColor: (
                                                                theme,
                                                            ) =>
                                                                theme.palette
                                                                    .mode ===
                                                                'dark'
                                                                    ? 'primary.dark'
                                                                    : 'primary.light',
                                                        },
                                                    }}
                                                >
                                                    {menuLink.name}
                                                </Typography>
                                            </Link>
                                        ))}
                                    </Box>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default AppAppBar;

const menuLinks = [
    {
        id: 1,
        name: 'Why NFAA',
        url: '/#why-nfaa',
    },
    {
        id: 2,
        name: 'Testimonials',
        url: '/#testimonials',
    },
    {
        id: 3,
        name: 'Highlights',
        url: '/#highlights',
    },
    {
        id: 4,
        name: 'Blogs',
        url: '/blogs/page/1',
    },
    {
        id: 5,
        name: 'Courses',
        url: '/courses',
    },
];
