import React from "react";


//data
import user from './Data/user.json'
import data from './Data/data.json'
import friends from './Data/friends.json'

//components
import Profile from './Components/Profile/Profile'
import StatisticsSecition from "./Components/Statistics/Statistics";
import StatisticsList from "./Components/Statistics.list/Statistics.list";
import FriendList from "./Components/FriendList/FriendList";

//style
import './App.css';


function App() {
  return (
    <div>
    
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      >
      </Profile>
      
      <StatisticsSecition title="Upload stats">
        <StatisticsList items={data}/>
      </StatisticsSecition>

      <FriendList items={friends}/>;




    </div>
  );
}

export default App;
