/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import { Rate } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import '@tsamantanis/react-glassmorphism/dist/index.css'
import '../../assets/styles/circlePercent.scss'
import './Detail.scss'
// Tabs
import { Tabs } from 'antd';
import { layThongTinChiTietPhim } from '../../redux/acitons/QuanLyRapAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { Modal, Button } from 'antd';
import Swal from 'sweetalert2';
import { history } from '../../App';
import { USER_LOGIN } from '../../util/settings/config';



const { TabPane } = Tabs;
export default function Detail(props) {

    const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail);
    console.log()
    console.log({ filmDetail })
    const dispatch = useDispatch()
    useEffect(() => {
        // lấy thông tin param từ url
        let { id } = props.match.params;

        dispatch(layThongTinChiTietPhim(id))

    }, [dispatch])

    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true)
    }
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const getId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url?.match(regExp);

        return (match && match[2].length === 11)
            ? match[2]
            : null;
    }
    const convertLink = (url) => {
        return `https://www.youtube.com/embed/${getId(url)}`
    }
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window
        return { width, height }
    }

    const useWindowDimensions = () => {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

        useEffect(() => {
            const handleResize = () => setWindowDimensions(getWindowDimensions())

            window.addEventListener('resize', handleResize)

            return () => window.removeEventListener('resize', handleResize)

        }, [])

        return windowDimensions
    }
    const clickMovie = () => {
        Swal.fire({
            icon: 'warning',
            text: 'Bạn chưa đăng nhập! Hãy đăng nhập để tiếp tục',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng Ý!'
        }).then((result) => {
            if (result.isConfirmed) {
                history.push('/login');
            }
        })
    }
    const { width } = useWindowDimensions();
    return (
        // <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
        <div>
            <div className="backgroundDetail"></div>
            <CustomCard
                className="detailFilm"
                style={{ minHeight: '100vh' }}
                effectColor="rgba(0, 0, 0,0)" // required

                color="#000" // default color is white
                blur={0} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <div className="grid grid-cols-12">
                    <div className="col-span-2"></div>
                    <div className="col-span-6 col-start-3">
                        <div className="grid grid-cols-6 infoDetail">
                            <div className="afterImg col-span-2">
                                <img className=" imgDetail" src={filmDetail.hinhAnh} alt={filmDetail.hinhAnh} />
                                <div className="afterImg1" onClick={() => {
                                    showModal()
                                }}><CaretRightOutlined className="playIcon" /></div>
                            </div>
                            <div className="col-span-4">
                                <p className="text-3xl leading-3 font-semibold pt-3 tenFilm">{filmDetail.tenPhim}</p>
                                <p className="text-base"><span className="font-semibold">Ngày chiếu: </span>{moment(filmDetail.ngayKhoiChieu).format('DD/MM/YYYY')}</p>
                                <p className="text-base"><span className="font-semibold">Mô tả: </span>{filmDetail.moTa}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2  text-center rateFilm flex flex-col items-center justify-center">
                        <h1 className="text-2xl text-white font-semibold">Đánh giá</h1>
                        <h1 className="text-2xl font-semibold text-yellow-600"><Rate allowHalf value={filmDetail.danhGia / 2} style={{ color: '#3d3d3d' }} /></h1>
                        <div className={`c100 p${filmDetail.danhGia * 10} trungBinh black dark`}>
                            <span className="text-white">{filmDetail.danhGia * 10}%</span>
                            <div className="slice">
                                <div className="bar" />
                                <div className="fill" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2"></div>

                </div>


                <div className="mt-10 container bg-white" id="tabsFilm">
                    <Tabs defaultActiveKey="1" centered>
                        <TabPane className="tab_header" tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
                            <div >
                                <Tabs tabPosition={'left'}>
                                    {filmDetail.heThongRapChieu?.map((hThongRap, index) => {
                                        return <TabPane
                                            tab={<div className="flex flex-row items-center justify-center"><img src={hThongRap.logo} className="rounded-full w-full" style={{ width: 50 }} />
                                                <div className="text-center ml-4 font-medium">
                                                    {hThongRap.tenHeThongRap}
                                                </div>
                                            </div>}
                                            key={index} >
                                            {hThongRap.cumRapChieu?.slice(0, 3).map((cumRap, index) => {
                                                return <div className="mt-10" key={index}>
                                                    <div className="flex">
                                                        <img style={{ width: 50, height: 50 }} src={cumRap.hinhAnh} />
                                                        <div className="ml-2">
                                                            <p style={{ lineHeight: 1 }} className="text-base font-bold">{cumRap.tenCumRap}</p>
                                                            <p style={{ marginTop: 0 }} className="text-sm font-medium">{cumRap.diaChi}</p>
                                                        </div>
                                                    </div>
                                                    <div className="thong_tin_lich_chieu grid grid-cols-9 gap-3">
                                                        {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                            if (localStorage.getItem(USER_LOGIN)) {
                                                                return <NavLink className="w-20 px-2 py-2 bg-white text-center hover:bg-gray-600 text-gray-800 font-semibold border border-gray-400 rounded shadow hover:text-black" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                                    {moment(lichChieu.ngayChieuGioChieu).format('HH:MM')}
                                                                </NavLink>
                                                            } else {
                                                                return <a onClick={clickMovie} className="w-20 px-1 py-2 bg-white text-center hover:bg-gray-600 text-gray-800 font-semibold border border-gray-400 rounded shadow hover:text-black" key={index}>
                                                                    {moment(lichChieu.ngayChieuGioChieu).format('HH:MM')}
                                                                </a>
                                                            }
                                                        })}

                                                    </div>
                                                </div>
                                            })}
                                        </TabPane>
                                    })}
                                </Tabs>
                            </div>
                        </TabPane>

                        <TabPane className="tab_header" tab="Đánh giá" key="3">
                            Content of Tab Pane 3

                        </TabPane>
                    </Tabs>
                </div>


            </CustomCard>

            <Modal visible={isModalVisible} centered width={1000} height={500}
                style={{ width: (width / 100) }} footer onOk={handleOk} onCancel={handleCancel}>
                <iframe style={{ width: '100%' }} height="500px" src={convertLink(filmDetail?.trailer)}></iframe>
            </Modal>
        </div>
    )
}
