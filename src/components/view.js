import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs';

export const View = ({datas,deleteData}) => {
    
    return datas.map(info=>(
        
        <tr key={info.rollno}>
            <td>{info.name}</td>
            <td>{info.rollno}</td>
            <td>{info.email}</td>
            <td>{info.rating}</td>
            <td className='delete-btn' onClick={()=>deleteData(info.rollno)}>
                <BsFillTrashFill />
            </td>           
        </tr>            
    
))
}