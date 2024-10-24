import React from 'react'
import {useParams} from "react-router-dom";

const Post = () => {

    const params = useParams();


    const headerStyles = {
        backgroundColor : 'rgba(0,0,0,0.4)' ,
        color: '#045abc'
    }

    return (
            <div>
                <h1>Post: {params.id}</h1>
            </div>
    )
}

export default Post