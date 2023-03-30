import React from 'react';
import './Lecture.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark} from '@fortawesome/free-solid-svg-icons'


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
                    <p>{ReadTime} <button><FontAwesomeIcon icon={faBookBookmark} /> </button></p>
                </div>
            </div>
            <h3 >{BlogTitle}</h3>
            <a href="/mark as read">Mark as a Read</a>

        </div>
    );
};

export default Lecture;