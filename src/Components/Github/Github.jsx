import {useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'

//Normal API call

export default function Github(){
    const data = useLoaderData()

    // const [data,setData] = useState([])
    // useEffect(
    //     ()=>{
    //     fetch(' https://api.github.com/users/hiteshchoudhary ')
    //     .then(response=>response.json())
    //     .then(noresponse=>setData(noresponse))
    //     },[])
    
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    )
}

export const getInfoInLoader = async () => {
    const res = await fetch(' https://api.github.com/users/hiteshchoudhary')
    
    return( 
        res.json()
    )
    
}