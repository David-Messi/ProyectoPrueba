
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar, Box, Grid } from '@mui/material';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from "swiper/modules";







export const Carrusel = () => {

    const conteo = [1,2,3,4,5,6,7,8,9,10];


    return (

        <Grid container sx={{width:'100%', display:'flex', justifyContent:'center', background:'#0C1726', pb:7}}>
            <Grid container sx={{width:'100%', px:2}}>

                <Box sx={{width:'100%', minHeight:'100px'}}>
                    <div>
                        <Swiper
                            // slidesPerView={3}
                            // spaceBetween={20}
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            pagination={{ clickable: true }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            breakpoints={{
                            450: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                            }}
                            className="mySwiper"
                        >
                            {conteo.map( t => (
                                <SwiperSlide className="card-carrusel" key={t}>
                                    <div className="container-carrusel">
                                        <div className="imagen-carrusel" >
                                            <Avatar sx={{ width:150, height:150 }}>N</Avatar>
                                        </div>
                                        <div className="nombre-carrusel">Lorem ipsum</div>
                                        <div className="texto-carrusel">
                                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                            }
                        </Swiper>   
                    </div>         
                </Box>
            </Grid>
        </Grid>

    )
    
}
