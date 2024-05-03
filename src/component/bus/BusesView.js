import React, { useEffect, useState } from 'react'
import axios from 'axios';

const BusesView = () => {

  const [bus,setBuses] = useState([]);

  useEffect(() =>{
    loadBuses();
  },[]);
  const loadBuses = async()=>{
    const result = await axios.get("http://localhost:8080/bus",{
        validateStatus: () =>{
            return true;
        }
    }
    )
    if(result.status===302){
        setBuses(result.data)
    }
    
  }  

  return (
    <section>
      <table className='table table-bordered table-hover'>
        <thead>
            <tr className='text-center'>
                <th>Bus_id</th>
                <th>Bus Name</th>
                <th>Seat Count</th>
                <th>Seats Available</th>
                <th>Bus Number</th>
                <th>Bus Type</th>
                <th colSpan="3">Actions</th>
            </tr>
        </thead>

        <tbody className='text-center'>
            {bus.map((bus,index)=>(
                <tr key={bus.busId}>
                    <th scope="row" key={index}>
                        {index + 1}
                    </th>
                    <td>{bus.busName}</td>
                    <td>{bus.busNumber}</td>
                    <td>{bus.seatCount}</td>
                    <td>{bus.seatAvailable}</td>
                    <td>{bus.busType}</td>
                    <td className='mx-2'>
                        <button className='btn btn-info'>
                        View
                        </button>
                        </td>
                    <td className='mx-2'>
                        <button className='btn btn-warning'>
                        Update
                        </button>
                    </td>
                    <td className='mx-2'>
                        <button className='btn btn-danger'>
                        Delete
                        </button>
                        </td>
                </tr>
            ))}
            
        </tbody>

      </table>
    </section>
  )
}

export default BusesView
