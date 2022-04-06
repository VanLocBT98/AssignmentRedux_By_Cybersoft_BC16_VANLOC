import {DAT_GHE,HUY_GHE,DA_DAT} from '../type/TypeBooking'

const stateDefaults = {
    DanhSachGheDangDat :[
    ]
}
const BookingTickietReducer = (state=stateDefaults,action)=>{
    switch(action.type){
        case DAT_GHE:{
            let listUpdates = [...state.DanhSachGheDangDat]
            let index = listUpdates.findIndex(chairBooking => chairBooking.soGhe === action.chair.soGhe)
            // khi click vào ghế đã có trong mãng thì remove đi
            if(index !== -1){
                listUpdates.splice(index, 1)
            }else{ // khi click vào không có thì push vào
                listUpdates.push(action.chair)
            }
            console.log({...state,DanhSachGheDangDat:listUpdates})
            return {...state,DanhSachGheDangDat:listUpdates}
        }
        case HUY_GHE:{
            let listUpdates = [...state.DanhSachGheDangDat]
            let index = listUpdates.findIndex(chairBooking => chairBooking.soGhe === action.soGhe)
            // khi click vào ghế đã có trong mãng thì remove đi
            if(index !== -1){
                listUpdates.splice(index, 1)
            }
            console.log({...state,DanhSachGheDangDat:listUpdates})
            return {...state,DanhSachGheDangDat:listUpdates}

        }
        case DA_DAT:{
            let listUpdates = [...state.DanhSachGheDangDat]
            listUpdates = listUpdates.map((chair,index)=>{
                return {soGhe:chair.soGhe,
                        gia:chair.gia,
                        daDat:true}
            })
            console.log({...state,DanhSachGheDangDat:[...listUpdates]})
        //    let index = listUpdates.findIndex(chair=>chair.daDat === false);
        //     if(index !== -1){
        //         listUpdates[index].daDat = true
        //         listUpdates.splice(index, 1)
        //     } 
            return {...state,DanhSachGheDangDat:[...listUpdates]}
        }

      default: return {...state}
    }
}
export default BookingTickietReducer
