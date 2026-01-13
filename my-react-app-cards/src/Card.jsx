import profilePic from './assets/profilepic.jpg'

function Card() {
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2>william</h2>
            <p>computer science student and play video games</p>
        </div>
    );
}

export default Card