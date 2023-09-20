import React, { useEffect, useState } from 'react';
import './ProfileIcon.css';

function ProfileIcon() {
  const [profileUrl, setProfileUrl] = useState('');

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/id/${randomId}/info`)
      .then((response) => response.json())
      .then((data) => setProfileUrl(data.download_url))
      .catch((error) => console.error('Error fetching profile icon', error));
  }, []);

  return (
    <div className='profile-icon-container'>
      <h2>Profile Icon</h2>
      <img  src={profileUrl}
        alt="Profile Img"
        style={{  width: '250px', height: '250px' }} className='profile-image' />
    </div>
  );
}

export default ProfileIcon;
