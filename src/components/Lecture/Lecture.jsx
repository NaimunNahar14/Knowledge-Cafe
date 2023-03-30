import React from 'react';
import './Lecture.css';

const Lecture = (props) => {
    const{BlogCoverPicture, AuthorImages, AuthorName, BlogTitle, PublishDate, ReadTime} = props.tutorial;
    return (
        <div className='tutorial'>
            <img src={BlogCoverPicture} alt="" />
            <div className='tutorial-info'>
                
                <div>
                    <h4>{AuthorName}</h4>
                    <p>{PublishDate}</p>
                </div>
                <div>
                    <p>{ReadTime}</p>
                </div>
            </div>
            <h3 >{BlogTitle}</h3>
            <a href="/mark as read">Mark as a Read</a>

        </div>
    );
};

export default Lecture;