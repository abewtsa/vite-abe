const ProfileCard = ({ name, place, role, bio, imageUrl, socialIcons }) => {
    return (
      <div className="profile-card">
        <img src={imageUrl} alt={`${name}'s profile`} className="profile-image" />
        <h2>{name}</h2>
        <p>{place}</p>

        <div style={{display:'flex',flexDirection:'row',margin:'auto'}}>
        {socialIcons &&
        socialIcons.map((socialIcon, index) => (
          <a
            key={index}
            href={socialIcon.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={socialIcon.icon}
              alt={`${name}'s social ${index + 1}`}
              className="profile-social-icon"
            />
          </a>
        ))}
        </div>

        <p>{role}</p>
        <p>{bio}</p>

      </div>
    );
  };

  export default ProfileCard;
