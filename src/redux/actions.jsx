export const AddPassword=(password)=>{
    return {
        type: 'ADD_PASSWORD',
        payload:password
    }
}
export const SetPassLength=(length)=>{
    return {
        type: 'SET_PASS_LENGTH',
        payload:length
    }
}

export const ResetPassword=()=>{
    return {
        type: 'RESET_PASSWORD',
    }
}
