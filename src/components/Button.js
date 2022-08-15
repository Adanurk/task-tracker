

const Button = ({color, text, toggleShow}) => {
    // fonksiyonu props olarak aliyoruz headerdan
    
  return (
    <div>
        <button className="btn" onClick={toggleShow} style={{backgroundColor: color}}>{text}</button>
    </div>
  )
}

export default Button