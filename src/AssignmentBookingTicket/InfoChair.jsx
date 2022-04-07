import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionDaDat, ActionHuyGhe } from '../redux/action/ActionBooking'
import Swal from 'sweetalert2'

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
                            <tr className="text-light" style={{ fontSize: 25 }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.DanhSachGheDangDat.map((ChairBooking, index) => {
                                if (ChairBooking.daDat) {
                                    return ''
                                }
                                return (

                                    <tr key={index} className="text-light">
                                        <td>{ChairBooking.soGhe}</td>
                                        <td>{ChairBooking.gia.toLocaleString()}</td>
                                        <td><button className="btn btn-danger" onClick={() => {
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

                                    {this.props.DanhSachGheDangDat.reduce((total, chair, index) => {

                                        if (chair.daDat) {
                                            return total
                                        }
                                        return total += chair.gia
                                    }, 0).toLocaleString()}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                {this.props.DanhSachGheDangDat.length >= 1 ? <button onClick={() => {
                    this.props.dispatch(ActionDaDat(),

                        Swal.fire({
                            title: `Cho xin tiền vé bạn ê  ${(this.props.DanhSachGheDangDat.reduce((total, chair, index) => {
                                if (chair.daDat) {
                                    return total
                                }

                                return total += chair.gia
                            }, 0).toLocaleString())}VND`,
                            imageUrl: './img/meomeomeo.webp',
                            imageHeight: 300,
                            imageAlt: 'A tall image',
                            width: 600,
                            padding: '3em',
                            color: '#716add',
                            background: '#fff url(/images/trees.png)',
                            backdrop: `
                          rgba(255,20,147,0.2)
                          url("./img/nyan-cat.gif")
                          left top
                          no-repeat
                        `
                        })
                    )
                }}
                    className="btn btn-warning">Đặt Vé</button> : ''}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        DanhSachGheDangDat: state.BookingTickietReducer.DanhSachGheDangDat
    }
}

export default connect(mapStateToProps)(InfoChair)