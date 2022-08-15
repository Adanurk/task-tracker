

const Button = ({color, text, handleClick}) => {
    // fonksiyonu props olarak aliyoruz headerdan
    
  return (
    <div>
        <button className="btn" onClick={handleClick} style={{backgroundColor: color}}>{text}</button>
    </div>
  )
}

export default Button