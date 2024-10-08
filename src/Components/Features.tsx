import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

const items = [
    {
        icon: <ViewQuiltRoundedIcon />,
        title: 'Expert Faculty',
        description:
            'Description: Learn from the best in the industry. Our faculty includes renowned artists and experienced educators who are passionate about imparting their knowledge and skills.',
        image: 'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        icon: <EdgesensorHighRoundedIcon />,
        title: 'Diverse Programs',
        description:
            'Explore a wide range of classes in Indian Classical dance, Western dance styles, Cinematic dance, music, and theatre. There’s something for everyone at Nadanta Fusion Art Academy',
        image: 'https://images.pexels.com/photos/8752654/pexels-photo-8752654.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
        icon: <DevicesRoundedIcon />,
        title: 'Performance Opportunities',
        description:
            'Showcase your talent through regular recitals, stage performances, and community events. Gain the confidence and experience you need to shine.',
        image: 'https://images.pexels.com/photos/6896312/pexels-photo-6896312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
];

export default function Features() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    const handleItemClick = (index: number) => {
        setSelectedItemIndex(index);
    };

    const selectedFeature = items[selectedItemIndex];

    return (
        <Container id='highlights' sx={{ py: { xs: 8, md: 16 } }}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <div>
                        <Typography
                            component='h2'
                            variant='h4'
                            color='text.primary'
                        >
                            Discover Our Unique Offerings
                        </Typography>
                        <Typography
                            variant='body1'
                            color='text.secondary'
                            sx={{ mb: { xs: 2, sm: 4 } }}
                        >
                            Explore the exceptional features that set Nadanta
                            Fusion Art Academy apart. From expert faculty to
                            diverse programs and exciting performance
                            opportunities, we provide everything you need to
                            thrive as an artist.
                        </Typography>
                    </div>
                    <Grid
                        container
                        item
                        gap={1}
                        sx={{ display: { xs: 'auto', sm: 'none' } }}
                    >
                        {items.map(({ title }, index) => (
                            <Chip
                                key={title}
                                label={title}
                                onClick={() => handleItemClick(index)}
                                sx={{
                                    borderColor: (theme) => {
                                        if (theme.palette.mode === 'light') {
                                            return selectedItemIndex === index
                                                ? 'primary.light'
                                                : '';
                                        }
                                        return selectedItemIndex === index
                                            ? 'primary.light'
                                            : '';
                                    },
                                    background: (theme) => {
                                        if (theme.palette.mode === 'light') {
                                            return selectedItemIndex === index
                                                ? 'none'
                                                : '';
                                        }
                                        return selectedItemIndex === index
                                            ? 'none'
                                            : '';
                                    },
                                    backgroundColor:
                                        selectedItemIndex === index
                                            ? 'primary.main'
                                            : '',
                                    '& .MuiChip-label': {
                                        color:
                                            selectedItemIndex === index
                                                ? '#fff'
                                                : '',
                                    },
                                }}
                            />
                        ))}
                    </Grid>
                    <Box
                        component={Card}
                        variant='outlined'
                        sx={{
                            display: { xs: 'auto', sm: 'none' },
                            mt: 4,
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: `url(${selectedFeature.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                minHeight: 280,
                            }}
                        />
                        <Box sx={{ px: 2, pb: 2 }}>
                            <Typography
                                color='text.primary'
                                variant='body2'
                                fontWeight='bold'
                            >
                                {selectedFeature.title}
                            </Typography>
                            <Typography
                                color='text.secondary'
                                variant='body2'
                                sx={{ my: 0.5 }}
                            >
                                {selectedFeature.description}
                            </Typography>
                            <Link
                                color='primary'
                                variant='body2'
                                fontWeight='bold'
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    '& > svg': { transition: '0.2s' },
                                    '&:hover > svg': {
                                        transform: 'translateX(2px)',
                                    },
                                }}
                            >
                                <span>Learn more</span>
                                <ChevronRightRoundedIcon
                                    fontSize='small'
                                    sx={{ mt: '1px', ml: '2px' }}
                                />
                            </Link>
                        </Box>
                    </Box>
                    <Stack
                        direction='column'
                        justifyContent='center'
                        alignItems='flex-start'
                        spacing={2}
                        useFlexGap
                        sx={{
                            width: '100%',
                            display: { xs: 'none', sm: 'flex' },
                        }}
                    >
                        {items.map(({ icon, title, description }, index) => (
                            <Card
                                key={title}
                                variant='outlined'
                                component={Button}
                                onClick={() => handleItemClick(index)}
                                sx={{
                                    p: 3,
                                    height: 'fit-content',
                                    width: '100%',
                                    background: 'none',
                                    backgroundColor:
                                        selectedItemIndex === index
                                            ? 'action.selected'
                                            : undefined,
                                    borderColor: (theme) => {
                                        if (theme.palette.mode === 'light') {
                                            return selectedItemIndex === index
                                                ? 'primary.light'
                                                : 'grey.200';
                                        }
                                        return selectedItemIndex === index
                                            ? 'primary.dark'
                                            : 'grey.800';
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        textAlign: 'left',
                                        flexDirection: {
                                            xs: 'column',
                                            md: 'row',
                                        },
                                        alignItems: { md: 'center' },
                                        gap: 2.5,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: (theme) => {
                                                if (
                                                    theme.palette.mode ===
                                                    'light'
                                                ) {
                                                    return selectedItemIndex ===
                                                        index
                                                        ? 'primary.main'
                                                        : 'grey.300';
                                                }
                                                return selectedItemIndex ===
                                                    index
                                                    ? 'primary.main'
                                                    : 'grey.700';
                                            },
                                        }}
                                    >
                                        {icon}
                                    </Box>
                                    <Box sx={{ textTransform: 'none' }}>
                                        <Typography
                                            color='text.primary'
                                            variant='body2'
                                            fontWeight='bold'
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            color='text.secondary'
                                            variant='body2'
                                            sx={{ my: 0.5 }}
                                        >
                                            {description}
                                        </Typography>
                                        <Link
                                            color='primary'
                                            variant='body2'
                                            fontWeight='bold'
                                            sx={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                '& > svg': {
                                                    transition: '0.2s',
                                                },
                                                '&:hover > svg': {
                                                    transform:
                                                        'translateX(2px)',
                                                },
                                            }}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                            }}
                                        >
                                            <span>Learn more</span>
                                            <ChevronRightRoundedIcon
                                                fontSize='small'
                                                sx={{ mt: '1px', ml: '2px' }}
                                            />
                                        </Link>
                                    </Box>
                                </Box>
                            </Card>
                        ))}
                    </Stack>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
                >
                    <Card
                        variant='outlined'
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: { xs: 'none', sm: 'flex' },
                            pointerEvents: 'none',
                        }}
                    >
                        <Box
                            sx={{
                                m: 'auto',
                                width: '100%',
                                height: '100%',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage: `url(${selectedFeature.image})`,
                            }}
                        />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
