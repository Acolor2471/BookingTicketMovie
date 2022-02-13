import React, { Fragment, useEffect } from 'react';


//hinh avatar
import Avatar from './../../../imgRap/ACTOR PNG/istockphoto-654224782-170667a (1).jpg'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

export default function Dashboard(props) {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
    console.log('userLogin: ', userLogin);
    
    return (
        <div className="grid grid-cols-9 m-5">
                        <div className="profileBG col-span-3 bg-gradient-to-r from-gray-100 to-gray-300">
                            <div>
                                <img className="imgAvatar text-center mb-3" src={Avatar} alt="" />
                                <h1 className="text-xl text-center">{userLogin.hoTen}</h1>
                                <h1 className="text-l text-center">{userLogin.maLoaiNguoiDung}</h1>
                            </div>

                        </div>
                        <div className="col-span-6 infoProfile">
                            <h1 className="text-2xl">INFORMATION</h1>
                            <hr />
                            <div className="grid grid-cols-8">
                                <div className="col-span-4">
                                    <h5>Họ Tên: <br /><span> {userLogin.hoTen}</span></h5>
                                    <h5>Tài khoản: <br /><span>{userLogin.taiKhoan}</span></h5>
                                </div>
                                <div className="col-span-4">
                                    <h5>Email: <br /><span>{userLogin.email}</span> </h5>
                                    <h5>Số điện thoại: <br /><span>{userLogin.soDT}</span></h5>
                                </div>
                            </div>
                            <h1 className="text-2xl">CONTACTS</h1>
                            <hr />
                            <div className="grid grid-cols-8">
                                <div className="col-span-4 iconSocial">
                                    <h5>Mạng xã hội: </h5>
                                    <div>
                                        <i className="fab fa-facebook-square hover:text-blue-600" />
                                        <i className="fab fa-instagram" />
                                        <i className="fab fa-twitter hover:text-blue-400" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
    )
}
