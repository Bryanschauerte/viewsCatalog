export function forwardIndex(){
  return{
    type:'CHANGE_INDEX_FORWARD'
  }
}
export function backwardIndex(){
  return{
    type:'CHANGE_INDEX_BACKWARD'
  }
}
export function activateIndex(){
  return{
    type:'TOGGLE_INDEX_ACTIVE'
  }
}
export function imageChangeInitiate(){
  return{
    type:'CHANGE_INITIATED'
  }
}
export function imageChangeComplete(){
  return{
    type:'CHANGE_COMPLETE'
  }
}
export function toggleDetailsReady(){
  return{
    type:'TOGGLE_DETAILS_READY'
  }
}
