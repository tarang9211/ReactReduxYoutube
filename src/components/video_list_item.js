import React from 'react';

//extracting video prop from props argument.
const VideoListItem = ({ video, handleVideoSelect }) => {
  const imageURL = video.snippet.thumbnails.default.url;


  return (
    <li onClick={() => handleVideoSelect(video) }className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={ imageURL }/>
        </div>

        <div className='media-body'>
          <div className='media-heading'>
            { video.snippet.title }
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
