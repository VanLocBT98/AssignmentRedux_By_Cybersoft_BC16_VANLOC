   import {DAT_GHE,HUY_GHE,DA_DAT} from '../type/TypeBooking'

   
   
   
   export const ActionBooking = (chair)=>{
       return {
           type:DAT_GHE,
           chair
       }
   }
   export const ActionHuyGhe = (soGhe)=>{
    return {
        type:HUY_GHE,
        soGhe
    }
}
export const ActionDaDat = ()=>{
    return {
        type:DA_DAT
    }
}