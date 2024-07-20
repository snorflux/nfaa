import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '@/Components/Typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('md')]: {
        width: '100% !important',
        height: 100,
    },
    '&:hover': {
        zIndex: 1,
    },
    '&:hover .imageBackdrop': {
        opacity: 0.15,
    },
    '&:hover .imageMarked': {
        opacity: 0,
    },
    '&:hover .imageTitle': {
        border: '4px solid currentColor',
    },
    '& .imageTitle': {
        position: 'relative',
        padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    '& .imageMarked': {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

const images = [
    {
        url: 'https://images.unsplash.com/photo-1688820661462-a44e4b2770e8?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Bharatanatyam',
        width: '40%',
    },
    {
        url: 'https://images.unsplash.com/photo-1680204832081-6769d42b7a53?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Kathak',
        width: '20%',
    },
    {
        url: 'https://img.freepik.com/free-vector/beautiful-indian-women-dance-india-independence-card-background_1035-24134.jpg?t=st=1721468346~exp=1721471946~hmac=3863a05bdabb9d684a859474fb3bcf0e9a50ed46e1fd687f3048e4effa3289bd&w=1800',
        title: 'Odissi',
        width: '40%',
    },
    {
        url: 'https://images.pexels.com/photos/270789/pexels-photo-270789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Salsa',
        width: '38%',
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Jive_Suvorovs_Bazokina_9348.JPG/1200px-Jive_Suvorovs_Bazokina_9348.JPG',
        title: 'Jive',
        width: '38%',
    },
    {
        url: 'https://images.squarespace-cdn.com/content/v1/5f10a7f0e4041a480cbbf0be/44551ca6-7d3f-476b-8a3f-5dad75eea277/396251658_713494054148510_516598321369949835_n.jpeg',
        title: 'Mohiniyattam',
        width: '24%',
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kuchipudi_Performer_DS.jpg/1200px-Kuchipudi_Performer_DS.jpg',
        title: 'Kuchipudi',
        width: '40%',
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dDHxj7Zm969all9buxQ-MMadelGyKAdZNg&s',
        title: 'Bollywood',
        width: '20%',
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-0iXZOVvr8t-TJAgaRLIExQGePZP3RTF0g&s',
        title: 'Contemporary',
        width: '40%',
    },
];

export default function Courses() {
    return (
        <Container component='section' sx={{ mt: 8, mb: 4 }}>
            <Typography
                variant='h4'
                marked='center'
                align='center'
                component='h2'
            >
                Our Courses
            </Typography>
            <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
                {images.map((image) => (
                    <ImageIconButton
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center 40%',
                                backgroundImage: `url(${image.url})`,
                            }}
                        />
                        <ImageBackdrop className='imageBackdrop' />
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'common.white',
                            }}
                        >
                            <Typography
                                component='h3'
                                variant='h5'
                                sx={{ textDecoration: 'strikethrough' }}
                                color='inherit'
                                className='imageTitle'
                            >
                                {image.title}
                                <div className='imageMarked' />
                            </Typography>
                        </Box>
                    </ImageIconButton>
                ))}
            </Box>
        </Container>
    );
}
