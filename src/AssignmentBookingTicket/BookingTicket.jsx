import React, { Component } from 'react';
import '../assets/BookingTicketStyle.css'
import InfoChair from './InfoChair';
import RowChair from './RowChair'
import ChairData from '../data/danhSachGhe.json'




export default class BookingTicket extends Component {
  renderRowChair= ()=>{
    return ChairData.map((rowChair,index)=>{
      return (
        <div key={index} >
          <RowChair rowChair ={rowChair} NumberRow ={index}/>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="bookingMovie" style={{ backgroundImage: "url('./img/bgmovie.jpg')", position: "fixed", height: '100%', width: '100%', backgroundSize: 'cover' }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', position: "fixed", height: '100%', width: '100%' }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-danger display-4"> Assignment Booking Ticket By Cybersoft</div>
                  <p className="text-light mt-3" style={{fontSize:'25px'}}>Màn Hình</p>
                <div className="mt-2 d-flex justify-content-center" style={{flexDirection:'column'}}>
                <div className="screen"></div>
                {this.renderRowChair()}
                </div>
              </div>
              <div className="col-4">
              <div className="text-warning display-4 mt-5 text-center"> Thông Tin Chọn Ghế</div>
              <InfoChair />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
