import React from 'react';
import './Lecture.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark} from '@fortawesome/free-solid-svg-icons'


const Lecture = (props) => {
    const{BlogCoverPicture, AuthorImages, AuthorName, BlogTitle, PublishDate, ReadTime} = props.tutorial;
    const handleAddToBookMark = props.handleAddToBookMark;
    const handleReadTime = props.handleReadTime;
   
    
    
    return (
        <div className='tutorial'>
            <img src={BlogCoverPicture} alt="" />
            <div className='tutorial-info'>   
                <div>
                    <h4>{AuthorName}</h4>
                    <p>{PublishDate}</p>
                </div>
                <div>
                    <p>{ReadTime}min Read<button onClick={() => handleAddToBookMark(props.tutorial)}><FontAwesomeIcon icon={faBookBookmark}/></button></p>
                </div>
            </div>
            <h3 >{BlogTitle}</h3>
            <a><button onClick={() => handleReadTime(ReadTime)}>Mark as a Read</button></a>
            

        </div>
    );
};

export default Lecture;