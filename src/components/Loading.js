import React from 'react'
import "./Loading.css"

const LoadingCard = () => (
    <div className="PostCard">
        <div className="top">
            <div className="profile">
                <div className="load profPicture"/>
                <div className="user">
                    <div className="bar short"></div>
                    <div className="bar shortH"></div>
                </div>
            </div>
        </div>
        <div className="body">
            <div className="bar long"></div>
            <div className="bar long"></div>
        </div>
        <div className="bar short bottom"></div>
    </div>
)

function Loading() {
    return (
        <div className="Loading">
            <LoadingCard/>
            <LoadingCard/>
            <LoadingCard/>
        </div>
    )
}

export default Loading
