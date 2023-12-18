const ProfileCard = ({ name, place, role, skills, bio, imageUrl }) => {
    return (
      <div className="profile-card">
        <img src={imageUrl} alt={`${name}'s profile`} className="profile-image" />
        <h2>{name}</h2>
        <p>{place}</p>
        <p>{role}</p>
        {/* <p>Skills: {skills.join(', ')}</p> */}
        <p>{bio}</p>
      </div>
    );
  };
  
  export default ProfileCard;