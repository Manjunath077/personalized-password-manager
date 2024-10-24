import React, { memo,useState,useEffect } from 'react'
import "../css/PasswordTable.css"
import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { setData } from '../utilities/storeData';

function PasswordTable({ formData }) {

    let [newData,setNewData] = useState(formData)

    useEffect(() => {
        setNewData(formData);
    }, [formData]);

    let handleEdit = (id)=>{
        // console.log("index of edit icon cliked is ",index)
        let result = newData?.filter((ele)=>{
            return ele.id == id
        })
        console.log(result)
    }

    let handleDelete = (id)=>{
        let result = newData?.filter((ele)=>{
            return ele.id !== id
        })
        setNewData(result)
        setData(result)
    }
    return (
        <section className='passwordtablesection'>
            {newData.length !== 0 ?
                <table className='sectiontable' >
                    <thead className='tablehead'>
                        <tr>
                            <th>url</th>
                            <th>username</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    <tbody className='tableBody'>
                        {newData?.map(({ id,url, userName, password }) => {
                            return (
                                <tr key={id}>
                                    <td>{url}</td>
                                    <td>{userName}</td>
                                    <td>
                                        <div className='passwordsectiontable'>
                                            <input className='passwordinputtable' disabled readOnly type='password' value={password} />
                                            <FiEdit3 onClick={()=>{
                                                handleEdit(id)
                                            }} />
                                            <MdDelete onClick={()=>{
                                                handleDelete(id)
                                            }}/>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                :
                <h1>No data to load</h1>
            }
        </section>
    )
}

export default memo(PasswordTable)
