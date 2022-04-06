import React, { Component } from 'react'
import {connect} from 'react-redux'
import {ActionDaDat, ActionHuyGhe} from '../redux/action/ActionBooking'

 class InfoChair extends Component {
    render() {
        return (
            <div className='mt-2'>
                <div>
                    <button className="gheDuocChon"></button><span className="text-light" style={{ fontSize: '30px' }}>Ghế Đã Chọn</span> <br />
                    <button className="gheDangChon"></button><span className="text-light" style={{ fontSize: '30px' }}>Ghế Đã Chọn</span> <br />
                    <button style={{ marginLeft: 0 }} className="ghe"></button><span className="text-light" style={{ fontSize: '30px' }}>Ghế Đã Chọn</span>
                </div>
                <div className='mt-1'>
                    <table className="table" border='2'>
                        <thead>
                            <tr className="text-light" style={{ fontSize:25}}>
                               <th>Số ghế</th>
                               <th>Giá</th>
                               <th></th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.props.DanhSachGheDangDat.map((ChairBooking, index)=>{
                               return (
                                   <tr key={index} className="text-light">
                                       <td>{ChairBooking.soGhe}</td>
                                       <td>{ChairBooking.gia.toLocaleString()}</td>
                                       <td><button className="btn btn-danger"  onClick={()=>{
                                           this.props.dispatch(ActionHuyGhe(ChairBooking.soGhe))
                                       }}>X</button></td>
                                   </tr>
                               )
                           })}
                        </tbody>
                        <tfoot>
                            <tr className='text-light'>
                                <td >
                                    Total
                                </td>
                                <td colSpan="2">
                                    {this.props.DanhSachGheDangDat.reduce((total,chair,index)=>{
                                        return total+=chair.gia
                                    },0).toLocaleString()}
                                </td>
                            </tr>
                        </tfoot>
                    </table>     
                </div>
                {this.props.DanhSachGheDangDat.length >=1 ? <button onClick={()=>{
                    this.props.dispatch(ActionDaDat())
                }}
                 className="btn btn-warning">Đặt Vé</button> :''}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        DanhSachGheDangDat :state.BookingTickietReducer.DanhSachGheDangDat
    }
}

export default connect(mapStateToProps)(InfoChair)