const Setting = ({data, setData}) => {
  const {theme} = data;

  const handleDataChange = (e) =>{
    setData((prevState) => ({
      ...prevState,
      theme: e.target.value // Use the value instead of the name
    }));
  }

  return (
    <>
      <div>
        <label>
          <input 
            type="radio" 
            name="theme" // Same name for both radios (you can use the same group name)
            value="dark" // Set value as dark
            checked={theme === "dark"}
            onChange={handleDataChange}
          /> 
          Dark Theme
        </label>
      </div>
    
      <div>
        <label>
          <input 
            type="radio" 
            name="theme" // Same name for both radios
            value="light" // Set value as light
            checked={theme === "light"}
            onChange={handleDataChange}
          /> 
          Light Theme
        </label>
      </div>
    </>
  );
}

export default Setting;
