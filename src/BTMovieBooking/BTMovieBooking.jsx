import React from 'react'
import ChairList from './ChairList'
import Result from './Result'
import data from './data.json'

const BTMovieBooking = () => {
    return (
        <div className="container pb-5">
            <h1>Đặt Vé Xem Phim CYBERLEARN.VN</h1>
            <div className="row mt-5 pb-5">
                <div className="col-8">
                    <div className="p-2 fs-4 bg-dark text-white text-center mb-3" style={{ borderTopLeftRadius: '50px', borderTopRightRadius: '50px', boxShadow: '0 25px 27px rgba(255, 255, 255, 0.5)' }}>Màn hình</div>
                    <ChairList data={data} />
                </div>
                <div className="col-4">
                    <Result />
                </div>
            </div>
        </div>
    )
}

export default BTMovieBooking