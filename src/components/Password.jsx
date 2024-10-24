import React, { useEffect, useState,useRef } from 'react'
import '../css/Password.css'
import { IoLogoGithub } from "react-icons/io5";
import PasswordTable from './PasswordTable';
import {getData, setData} from '../utilities/storeData'
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

function Password() {
    let [url,setUrl] = useState('')
    let [userName,setUsername] = useState('')
    let [password,setPassword] = useState('')
    let [formData,setFormData] = useState([])
    let [eyeToggle,setEyeToggle] = useState(false)
    let ref = useRef('')

    let updateUrl = (e)=>{
        // console.log(e.target.value)
        setUrl(e.target.value)
    }
    let updateUserName = (e)=>{
        // console.log(e.target.value)
        setUsername(e.target.value)
    }
    let updatePassword = (e)=>{
        // console.log(e.target.value)
        setPassword(e.target.value)
    }
    let handleFormData = (e)=>{
        e.preventDefault();
        if(url && password && userName){
            let id = formData.length
            // console.log(id)
            let newUser = {id,url,userName,password}
            setFormData((prev)=>{
                let updatedData = [...prev,newUser]
                setData(updatedData)
                return updatedData
            })
            setUrl('')
            setPassword('')
            setUsername('')
            alert("Details Added !")
        }else{
            alert("Cannot insert empty !")
        }
    }

    let updateToggle = ()=>{
        if(eyeToggle){
            ref.current.type = "password"
        }else{
            ref.current.type = "text"
        }
        setEyeToggle(!eyeToggle)
    }

    let handleEditData 
    useEffect(()=>{
        if(getData){
            setFormData(getData)
        }
    },[])
  return (
    <>
        <section className='passwordsection'>
            <nav className='passwordnav'>
                <div className='passwordnavcontainer'>
                    <div className='navcontainerone'>
                        <h1>&lt;PpassM<span>/</span>&gt;</h1>
                    </div>
                    <div className='navcontainertwo'>
                        <button  className='containertwobutton'><IoLogoGithub />  Github</button>
                    </div>
                </div>
            </nav>
            <div className='passwordsectionpartone'>
                <form className='partoneform' onSubmit={handleFormData}>
                    <h1>Personalized Password Manager </h1>
                    <input onChange={updateUrl} className='urlinput' value={url} type='text' minLength={10} maxLength={50} placeholder='Enter URL'/>
                    <div className='namepasscontainer'>
                        <input onChange={updateUserName} className='nameinput' value={userName} type='text' minLength={5} maxLength={25} placeholder='Enter User Name'/>
                        <input ref={ref} onChange={updatePassword} className='passwordinput' value={password} type='password' minLength={8} maxLength={30} placeholder='Enter Password'/>
                        <h1 className='eyeicon' onClick={updateToggle} >{eyeToggle?<FaEyeSlash className='icon'/>:<IoEye className='icon' />}</h1>
                    </div>
                    <button type='submit' className='savebutton'>Save</button>
                </form>
            </div>
            <PasswordTable formData={formData}/>
        </section>
    </>
  )
}

export default Password