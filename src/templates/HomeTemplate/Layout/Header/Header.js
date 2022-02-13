import _ from 'lodash';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { TOKEN, USER_LOGIN } from '../../../../util/settings/config';
import { history } from './../../../../App';
import logoBlack from './../../../../imgRap/LOGO/Logo11.png';
import { UserOutlined } from '@ant-design/icons';

import './Header.css';

export default function Header(props) {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <button onClick={() => {
                    history.push('/login')
                }} className="self-center px-4 py-2 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900">Đăng ký</button>
                <button onClick={() => {
                    history.push('/login')
                }} className="self-center px-8 py-2 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900">Đăng nhập</button>
            </Fragment>
        }
        return <Fragment> <button onClick={() => {
            history.push('/profile')
        }} className="self-center px-8 py-3 rounded"><UserOutlined style={{ fontSize: '20px' }} />Xin chào!  {userLogin.hoTen}</button>

            <button onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                history.push('/home');
                window.location.reload();
            }} className="self-center px-8 py-3 rounded">Đăng xuất</button></Fragment>


    }

    const renderLoginMB = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <button onClick={() => {
                    history.push('/login')
                }} className="self-center px-4 py-2 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900">Đăng ký</button>
                <button onClick={() => {
                    history.push('/login')
                }} className="self-center px-4 py-2 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900">Đăng nhập</button>
            </Fragment>
        }
        return <Fragment> <button onClick={() => {
            history.push('/profile')
        }} className="self-center px-4 py-2 rounded"><UserOutlined style={{ fontSize: '20px' }} />{userLogin.taiKhoan}</button>

            <button onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(TOKEN);
                history.push('/home');
                window.location.reload();
            }} className="self-center px-4 py-2 rounded">Đăng xuất</button></Fragment>


    }

    return (
        <header id="myP" style={{ position: 'fixed' }} className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100 bg-opacity-0 bg-black text-black fixed w-screen z-10 ">
            <div className="container-fuild flex justify-between h-16 mx-auto">
                <div className="flex justify-center items-center font-base ">
                    <NavLink to='/' aria-label="Back to homepage" className="flex items-center py-2 pr-2 mr-7">
                        <img className="logo" src={logoBlack} alt="cyberlearn.vn" />
                    </NavLink>
                    <ul className="items-stretch hidden space-x-3 lg:flex pt-1 ">
                        <li className="flex ">
                            <a href="#" className="flex items-center -mb-1 border-b-2 px-3 border-transparent text-violet-400 border-violet-400 text-black font-semibold" activeClassName="border-b-1 border-black font-bold" onClick={()=>{
                                history.push(`/`)
                            }}>Trang chủ</a>
                        </li>
                        <li className="flex ">
                            <a href="#lichChieu" className="flex items-center px-3 -mb-1 dark:border-transparent text-black font-semibold" activeClassName="border-b-1 border-black font-bold" onClick={()=>{
                                history.push(`/`)
                            }}>Phim</a>
                        </li>
                        <li className="flex ">
                            <a href="#cumRap" className="flex items-center px-3 -mb-1 dark:border-transparent text-black font-semibold" activeClassName="border-b-1 border-black font-bold" onClick={()=>{
                                history.push(`/`)
                            }}>Cụm rạp</a>
                        </li>
                        <li className="flex ">
                            <a href="#News" className="flex items-center px-3 -mb-1 dark:border-transparent text-black font-semibold" activeClassName="border-b-1 border-black font-bold" onClick={()=>{
                                history.push(`/`)
                            }}>Tin tức</a>
                        </li>

                    </ul>
                </div>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {renderLogin()}

                </div>
                <label htmlFor="nav-mobile-input" className="p-4 lg:hidden menuHeader">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-coolGray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label >
                    <input hidden className="nav-input" type="checkbox" id="nav-mobile-input" />

                    <label htmlFor="nav-mobile-input" className="overPlay"></label>
                    <div className="navMobile">
                    <label htmlFor="nav-mobile-input" className="fas fa-times"></label>
                    
                        
                    
                    <ul className="navMobile-list">
                        <li className="flex">
                        {renderLoginMB()}
                        </li>
                        <li className="flex ">
                            <a href="#" className="navMobile-link" activeClassName="border-b-1 border-black font-bold" onClick={()=>{
                                history.push(`/`)
                            }}>Trang chủ</a>
                        </li>
                        <li className="flex ">
                            <a href="#lichChieu" className="navMobile-link" activeClassName="border-b-1 border-black font-bold">Phim</a>
                        </li>
                        <li className="flex ">
                            <a href="#cumRap" className="navMobile-link" activeClassName="border-b-1 border-black font-bold">Cụm rạp</a>
                        </li>
                    </ul>
                    </div>

            </div>
        </header>


    )
}
