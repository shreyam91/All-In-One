const Interest = ({data,setData, errors}) => {
  const {interest} = data;

  const handleDataChange = (e, name) =>{
    setData((prevState) =>({
      ...prevState,
      interest: e.target.checked ? 
      [...prevState.interest, e.target.name] : 
      prevState.interest.filter((i) => i !== e.target.name)

    }));
  }

  return (
  <div>
    <div>
      <label >
        <input type="checkbox" name="coding" 
        checked={interest.includes("coding")}
        onChange={handleDataChange}
        /> 
        Coding
      </label>
    </div>

    <div>
      <label >
        <input type="checkbox" name="music" 
        checked={interest.includes("music")}
        onChange={handleDataChange}
        /> 
        Music
      </label>
    </div>

    <div>
      <label >
        <input type="checkbox" name="javascript" 
        checked={interest.includes("javascript")}
        onChange={handleDataChange}
        />
        Javascript
      </label>
    </div>

    <div>
      <label >
        <input type="checkbox" name="travel" 
        checked={interest.includes("travel")}
        onChange={handleDataChange}
        /> 
        Travel
      </label>
    </div>
    {errors.interest && <span className="error">{errors.interest}</span>}
  </div>
  )
}

export default Interest