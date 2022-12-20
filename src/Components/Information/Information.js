import React from 'react'
import { useSelector } from 'react-redux';


const Information = () => {
    const { infa } = useSelector(state => state.ProductReduser)
    console.log('infa>>>',infa)

    return (
        <div>
            Information
            {/* {
                infa.map((elem)=>{

                })
            } */}
            
        </div>
    )
}

export default Information
