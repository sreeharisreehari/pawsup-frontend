import React, { createContext, useState } from 'react'

 export const addpetresponsecontext=createContext()

 export const editpetresponsecontext=createContext()

 export const isauthtokencontext=createContext()

 export const isadmintokencontext=createContext()

function Contextshare({children}) {
    const[addpetresponse,setaddpetresponse]=useState({})

    const [updatepetresponse,setupdatepetresponse]=useState({})

    const [authtoken,setauthtoken]=useState(false)

    const [admin,setadmin]=useState({})
  return (
    <div>
<addpetresponsecontext.Provider value={{addpetresponse,setaddpetresponse}}>
  <editpetresponsecontext.Provider value={{updatepetresponse,setupdatepetresponse}}> <isauthtokencontext.Provider value={{authtoken,setauthtoken}}> <isadmintokencontext.Provider value={{admin,setadmin}}>{children}</isadmintokencontext.Provider></isauthtokencontext.Provider></editpetresponsecontext.Provider >
</addpetresponsecontext.Provider>

    </div>
  )
}

export default Contextshare