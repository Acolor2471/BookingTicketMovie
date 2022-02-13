import React from 'react';
import './News.scss'



export default function News() {
    return (
        <div className="container newsCss">
            <div className="newsTitle text-center">
                <h3 className="text-4xl">Tin tức</h3>
            </div>
            <div className="newsItems flex mt-4">
                <div className="itemLeft">
                    <div className="topItemLeft flex items-center">
                        <div className="poster mr-4"></div>
                        <div className="content">
                            <div className="content_title text-2xl">
                                <h3 className="font-bold">[NEWS] The Cojuring 3 Nỗi ám tận cùng</h3>
                            </div>
                            <div className="text text-lg">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit rhoncus pellentesque mattis sit elit pharetra. Nibh neque pellentesque pellentesque amet, aliquet nunc maecenas. Non lectus praesent purus vel leo, nec. Interdum sit.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bottomItemLeft flex mt-5 items-center">
                        <div className="poster mr-4"></div>
                        <div className="content">
                            <div className="content_title text-2xl">
                                <h3 className="font-bold" >[NEWS] Bàn tay diệt quỷ khi anh trai quốc dân hóa thành linh mục trừ tà</h3>
                            </div>
                            <div className="text text-lg">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit rhoncus pellentesque mattis sit elit pharetra. Nibh neque pellentesque pellentesque amet, aliquet nunc maecenas. Non lectus praesent purus vel leo, nec. Interdum sit.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="itemRight">
                   <div className="topItemRight flex items-center">
                        <div className="poster mr-4"></div>
                        <div className="content">
                            <div className="content_title text-2xl">
                                <h3 className="font-bold">[NEWS] Cùng phiêu lưu cùng chú ngựa Spirit</h3>
                            </div>
                            <div className="text text-lg ">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit rhoncus pellentesque mattis sit elit pharetra. Nibh neque pellentesque pellentesque amet, aliquet nunc maecenas. Non lectus praesent purus vel leo, nec. Interdum sit.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bottomItemRight flex mt-5 items-center">
                        <div className="poster mr-4"></div>
                        <div className="content">
                            <div className="content_title text-2xl">
                                <h3 className="font-bold">[NEWS] Cruella những bộ cánh khiến dân tình mê mẫn</h3>
                            </div>
                            <div className="text text-lg">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit rhoncus pellentesque mattis sit elit pharetra. Nibh neque pellentesque pellentesque amet, aliquet nunc maecenas. Non lectus praesent purus vel leo, nec. Interdum sit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
