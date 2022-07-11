import Profile from './Profile';
const Header = () => {
    return (
        <div className="header">
            <h1>Shorty</h1>
            <div className="header-icon">
                <img src={require('./images/create.png')} alt="create" />
                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384090.png" alt="message" />
                <Profile />
            </div>
        </div>
    )
}
 
export default Header;