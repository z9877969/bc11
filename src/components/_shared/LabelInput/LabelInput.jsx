const LabelInput = ({type = "text", title, placeholder, name, defaultValue}) => {
  return (
    <label>
      {title && 
        <p>
          {title}
        </p> }
      <input name={name} type={type} placeholder={placeholder} value={defaultValue}/>

    </label>


  )
}

export default LabelInput;