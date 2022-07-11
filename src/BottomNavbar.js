import Profile from './Profile';
const BottomNavbar = () => {
    return (
        <div className='bottom-navbar'>
            <img src={require('./images/home.png')} alt="like" />
            <img src={require('./images/search.png')} alt="like" />
            <img src={require('./images/reel.png')} alt="like" />
            <img src={require('./images/like.png')} alt="like" />
            <Profile />
            {/* <img src={require('./images/a.jpg')} alt="like" /> */}
            
        </div>
    );
}
 
export default BottomNavbar;