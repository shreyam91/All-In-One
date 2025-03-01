
const Profile = ({data, setData, errors}) => {
  const {name,email,age} = data;

  const handleDataChange = (e, item) =>{
    setData((prevState) =>({
      ...prevState,
      [item]: e.target.value,

    }));
  }
  return (
    <div className="profile">
    <div className="profile-data">
    <label >Name :</label>
    <input type="text" value={name} onChange={(e) => handleDataChange(e,"name")}/>
    {errors.name && <span className="error">{errors.name}</span>}
    </div>
    
    <div className="profile-data">
    <label >Age :</label>
    <input type="number" value={age} onChange={(e) => handleDataChange(e,"age")}/>
    {errors.age && <span className="error">{errors.age}</span>}
    </div>
    
    <div className="profile-data">
    <label >Email :</label>
    <input type="email" value={email} onChange={(e) => handleDataChange(e,"email")}/>
    {errors.email && <span className="error">{errors.email}</span>}
    </div>
    </div>
  )
}

export default Profile