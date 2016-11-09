import React from 'react';
import VideoListItem from './video_list_item';

//Functional component since video_list just displays data
const VideoList = (props) => {

  //mapping over videos
  const VideoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        handleVideoSelect= { props.handleVideoSelect }
        video={ video }
        key={ video.etag } />
    )
  });

  return (
    <ul className='col-md-4 list-group'>
      { VideoItems }
    </ul>
  )
}

export default VideoList;
