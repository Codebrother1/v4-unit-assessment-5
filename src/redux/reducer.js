const initialState = {
  username: {},
  profile_pic: {}
}

export function updateUser(){
  return{
    type: UPDATE_USER,
    payload: profile_pic
  }
}
export function logout(){
  return {
      type: LOGOUT,
      payload: initialState
  }
}






export default function reducer(state = initialState, action){
switch(action.type){
  case UPDATE_USER:
    return{...state, user: action.payload};
  case LOGOUT:
      return initialState;
}

}