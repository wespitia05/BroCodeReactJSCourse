import profilePic from './assets/profilepic.jpg'

function Card() {
    return(
        <div className="card">
            <img className="cardImg" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">william</h2>
            <p className="card-text">computer science student and play video games</p>
        </div>
    );
}

export default Card