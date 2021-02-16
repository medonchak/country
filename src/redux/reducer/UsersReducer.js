import {getUsers} from '../../api/api';


let _state={
   users:[],
   searchUsers:[]
}

const UsersReducer =(state=_state,action)=>{

     switch (action.type) {

            case "users":{
          
                let copyState={...state}
                copyState.users=action.users;

            return copyState}
            case "usersAdd":{
          
                let copyState={...state}
                copyState.users.push(action.NewUser);

            return copyState}
            case "deleteUser":{
          
                let copyState={...state}
                copyState.users=[...state.users]

                for(var q=0;q<copyState.users.length;q++)
                {
                    if ( copyState.users[q].id===action.iduser)
                    copyState.users.splice(q, 1);
                }

            return copyState}    
            case "editUser":{
          
                let copyState={...state}
                copyState.users=[...state.users]

                for(var i=0; i<copyState.users.length; i++)
                {
                 
                    if ( copyState.users[i].id===action.editUser.id)
                    {
                        let user={
                            id:action.editUser.id,
                            name:action.editUser.name,
                            email:action.editUser.email,
                            website:action.editUser.website,
                            company:{
                                name:action.editUser.company
                            }
                        }
                        copyState.users[i]=user;
                    }
                   
                }

            return copyState}
            case "search":{
          
                let copyState={...state}
                copyState.users=[...state.users]
                copyState.searchUsers=[]
                for(var i=0; i<copyState.users.length; i++)
                {
                 
                    if ( copyState.users[i].name.indexOf(action.searchText)!=-1)
                    {
                  
                        copyState.searchUsers.push(copyState.users[i])
                    }
                   
                }

            return copyState}
         
            default: return state
    }

}


 ///Create Action


const getUsersContent=(mas)=>({type:"users",users:mas})
export const AddUser=(user)=>({type:"usersAdd",NewUser:user})
export const DeleteUser=(id)=>({type:"deleteUser",iduser:id})
export const EditUser=(user)=>({type:"editUser",editUser:user})
export const Search=(text)=>({type:"search",searchText:text})

/// Thunk

export const getUsersThunk =()=>{
    return (dispatch)=>{
        getUsers().then(data=>{
         
            dispatch(getUsersContent(data))
        })
    }
}

export default UsersReducer;