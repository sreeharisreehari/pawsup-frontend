// register api

import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

export const registerAPI=async(user)=>{
  return  await commonAPI('POST',`${BASE_URL}/user/register`,user,"")


}


// login api
export const loginAPI=async(user)=>{
  return  await commonAPI('POST',`${BASE_URL}/user/login`,user,"")


}

// add  api
export const addAPI=async(reqbody,reqheader)=>{
  return  await commonAPI('POST',`${BASE_URL}/petdata/add`,reqbody,reqheader)


}

// /adopt pet
export const adoptAPI=async(petsearch,reqheader)=>{
  // query parameter
  return  await commonAPI('GET',`${BASE_URL}/petdata/adopt?search=${petsearch}`,"",reqheader)


}

// /edit pet
export const editAPI=async(reqheader)=>{
  return  await commonAPI('GET',`${BASE_URL}/petdata/edit`,"",reqheader)


}

// /edit pet
export const updateAPI=async(petid,reqbody,reqheader)=>{
  return  await commonAPI('PUT',`${BASE_URL}/petdata/update/${petid}`,reqbody,reqheader)


}

// /delete pet
export const deleteAPI=async(petid,reqheader)=>{
  return  await commonAPI('DELETE',`${BASE_URL}/petdata/remove/${petid}`,{},reqheader)


}

// edit profile
export const proAPI=async(reqbody,reqheader)=>{
  return  await commonAPI('PUT',`${BASE_URL}/user/uprofile/`,reqbody,reqheader)


}

// get users
export const usersAPI=async()=>{
  return  await commonAPI('GET',`${BASE_URL}/user/length/`,"","")


}






