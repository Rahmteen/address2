import React from 'react'

const url = 'https://randomuser.me/api/?results=20';

 const fetchUser = () => {
  fetch(url).then(data=>data.json())
};
export default fetchUser
