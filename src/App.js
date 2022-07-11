import BottomNavbar from './BottomNavbar.js';
import Header from './Header.js' ;
import Post from './Post.js' ;
import Story from './Story.js' ;
import StoryData from './StoryData.js';
import PostData from './PostData.js';

const App = () => {
  return (
    <div id= "app">
        <Header />
        <div className="story-container">
          {StoryData.map((data) =>{
            if(data.personName.length > 7){
              return(
                <Story 
                  personImage = {data.personImage} 
                  personName = {data.personName.substring(0,7) + "..."} 
                  // personClass = "text-left"
                />
              )
            }
            else{
              return(
                <Story 
                  personImage = {data.personImage} 
                  personName = {data.personName} 
                />
              )
            }
            
          })}
        </div>
        <div className="post-container">
          {PostData.map((data) =>{
            return(
              <Post 
                personImage = {data.personImage}
                personName = {data.personName}
                postImage = {data.postImage}
                likesCount = {data.likesCount}
                caption = {data.caption}
              />
            )
          })}
        </div>
        <BottomNavbar />
    </div>
  )
}
 
export default App;