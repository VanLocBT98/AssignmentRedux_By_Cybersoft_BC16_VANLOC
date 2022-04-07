import React, { Component } from 'react';
import {connect} from 'react-redux'
import {ActionBooking,ActionHuyGhe} from '../redux/action/ActionBooking'


 class RowChair extends Component {
    renderChair =()=>{
        return this.props.rowChair.danhSachGhe.map((chair,index)=>{ //! rowchair lấy từ state bên BookingTicket.jsx
            let cssChair='';
            let disabled= false;
            //! trạng thái đã được đặt
            if(chair.daDat){
                cssChair ='gheDuocChon'
                disabled= true;
            }
            //! trạng thái đang đặt
            let cssGheDangDat =''
            let indexGhe = this.props.DanhSachGheDangDat.findIndex(chairIndex=> {
                // ! duyệt qua mảng xem đã được đặt chưa nếu được đặt rồi thì trả về -1 nếu chưa tiếp tục trạng thái đang đặt
                if( chairIndex.daDat && chairIndex.soGhe === chair.soGhe){
                    cssChair ='gheDuocChon'
                disabled= true;
                return -1;
                }
                return chairIndex.soGhe === chair.soGhe
               })
            if(indexGhe !== -1){
                cssGheDangDat ='gheDangChon'
            }
            return(
                <button onClick={()=>{
                    this.props.dispatch(ActionBooking(chair))
                }} disabled={disabled}
                 className={`ghe ${cssChair} ${cssGheDangDat} `}
                  key={index}>
                    {chair.soGhe}
                </button>
            )
        })
    }
    renderFisrtRow =()=>{ //* render hàng  thứ nhất ra giao diện
        return this.props.rowChair.danhSachGhe.map((row,index)=>{
            return(
                <button className='rowNumber' key={index}>
                    {row.soGhe}
                </button>)
        })
    }
    renderRow =()=>{ //* render các hàng ra giao diện
        if(this.props.NumberRow===0){
            return (
                <div className="ml-3"> 
              {this.props.rowChair.hang}{this.renderFisrtRow()}
                </div>
            )
        }else{
            return (
                <div>
              {this.props.rowChair.hang}{this.renderChair()}
                </div>
            )
        }
      
    }
  render() {
    return (
      <div className='text-light text-left ml-5 mt-1' style={{fontSize:30}}>
          {this.renderRow()}
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
    return {
        DanhSachGheDangDat: state.BookingTickietReducer.DanhSachGheDangDat
    }
}

export default connect(mapStateToProps)(RowChair)