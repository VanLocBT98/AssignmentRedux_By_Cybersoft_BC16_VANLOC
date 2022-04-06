import React, { Component } from 'react';
import {connect} from 'react-redux'
import {ActionBooking,ActionHuyGhe} from '../redux/action/ActionBooking'


 class RowChair extends Component {
    renderChair =()=>{
        return this.props.rowChair.danhSachGhe.map((chair,index)=>{
            let cssChair='';
            let disabled= false;
            // trạng thái đã được đặt
            if(chair.daDat){
                cssChair ='gheDuocChon'
                disabled= true;
            }
            // trạng thái đang đặt
            let cssGheDangDat =''
            let indexGhe = this.props.DanhSachGheDangDat.findIndex(chairIndex=> chairIndex.soGhe === chair.soGhe)
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
    renderFisrtRow =()=>{
        return this.props.rowChair.danhSachGhe.map((row,index)=>{
            return(
                <button className='rowNumber' key={index}>
                    {row.soGhe}
                </button>)
        })
    }
    renderRow =()=>{
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