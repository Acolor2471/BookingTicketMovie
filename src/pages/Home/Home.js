import React, { useEffect, useState } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
// kết nối redux
import { useSelector, useDispatch } from 'react-redux';
import MultipleRows from '../../components/ReactSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from './../../redux/acitons/QuanLyPhimActions'
import { layDanhSachHeThongRapAction } from '../../redux/acitons/QuanLyRapAction';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
import bgSlick from './../../imgRap/bg.jpg'
import './Home.css'
import News from './News/News';

export default function Home(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const action = layDanhSachPhimAction();
        dispatch(action);
        dispatch(layDanhSachHeThongRapAction());
    }, [])



    return (
        <div>
            <HomeCarousel />
            <section className="text-gray-600 body-font">
                    <div className="BG_carausel"></div>
                    <div className="carouselBG container px-0 py-20 mx-auto" id="lichChieu" >
                        <MultipleRows arrFilm={arrFilm} />
                        </div>
            </section>


            <div className=" cumRapcss max-w-max max-h-full mb-5" id="cumRap">
                <HomeMenu heThongRapChieu={heThongRapChieu} />
            </div>

            <div id="News" style={{marginTop: '10rem'}}>
                <News />
            </div>
        </div>
    )
}
