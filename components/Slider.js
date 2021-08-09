import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import Card from './Card';

SwiperCore.use([Pagination, Navigation]);

function Slider(params) {
  const [SlideData, setSlideData] = useState([
    {
      id: '1',
      city: 'Madrid',
      country: 'Spain',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Plaza_Mayor_de_Madrid_06.jpg/1920px-Plaza_Mayor_de_Madrid_06.jpg',
    },
    {
      id: '2',
      city: 'Barcelona',
      country: 'Spain',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/14-08-05-barcelona-RalfR-022.jpg/1920px-14-08-05-barcelona-RalfR-022.jpg',
    },
    {
      id: '3',
      city: 'Istanbul',
      country: 'Turkey',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Istanbul_Tram_%282%29.jpg/1920px-Istanbul_Tram_%282%29.jpg',
    },
    {
      id: '4',
      city: 'Milan',
      country: 'Italy',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Il_Parco_Sempione_a_Milano_e_sullo_sfondo_l%27Arco_della_Pace.jpg/1920px-Il_Parco_Sempione_a_Milano_e_sullo_sfondo_l%27Arco_della_Pace.jpg',
    },
    {
      id: '5',
      city: 'Valencia',
      country: 'Madrid',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Ayuntamiento_de_Valencia%2C_Espa%C3%B1a%2C_2014-06-30%2C_DD_121.JPG/1920px-Ayuntamiento_de_Valencia%2C_Espa%C3%B1a%2C_2014-06-30%2C_DD_121.JPG',
    },
    {
      id: '6',
      city: 'Bilbao',
      country: 'Spain',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Aeropuerto_Bilbao_Loiu_01.jpg/1920px-Aeropuerto_Bilbao_Loiu_01.jpg',
    },
    {
      id: '7',
      city: 'Amsterdam',
      country: 'Holland',
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Amsterdam_%286578772447%29.jpg',
    },
  ]);

  return (
    <>
      <Swiper
        slidesPerView={params.x}
        spaceBetween={2}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        pagination={false}
        className="mySwiper"
      >
        {SlideData?.map((s, index) => {
          return (
            <SwiperSlide key={s.id}>
              <Card s={s} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Slider;
