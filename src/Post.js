const Post = (props) => {
    return ( 
        <div className="post">
           <div className="post-heading">
              <div className="post-avatar">
                 <img src={props.personImage} alt="avatar" />
              </div>
              <span>{props.personName}</span>
              <img className='three-dot' src={require('./images/three-dots.png')} alt="three dots" />
           </div>
           <div className="post-image">
             <img src={props.postImage} alt="post image" />
           </div>
           <div className="user-interaction">
              <div>
              <img src={require('./images/like.png')} alt="like" />
              <img id='comment' src={require('./images/comment.png')} alt="comment" />
              <img src={require('./images/share.png')} alt="share" />
              </div>
              <img id='save' src={require('./images/save.png')} alt="save" />
           </div>
           <div className="post-content">
              <span>{props.likesCount + " likes"}</span>
              <p>
              <span>{props.personName}</span>
              {props.caption}
              </p>
           </div>
        </div>
    )
}
 
export default Post;