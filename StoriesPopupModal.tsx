import React = require('react');
import Stories from 'react-insta-stories';

import './style.css';

const StoriesPopupModal = (): JSX.Element => {
  const stories: Story[] = [
    {
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video',
    },
    {
      url: ' http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      type: 'video',
    },
  ];

  return (
    <div className="storyContainer">
      <Stories
        stories={stories}
        defaultInterval={1500}
        width={432}
        height={768}
      />
    </div>
  );
};

export interface Story {
  url?: string;
  type?: string;
}

export { StoriesPopupModal };
