const Story = (props) => {
    return (
        <div className="story">
           <div className='story-image'>
            <img src={props.personImage} alt="message" />             
           </div>
           <p className={props.personClass}>{props.personName}</p>
        </div>
    )
}
 
export default Story;