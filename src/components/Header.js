import PropTypes from "prop-types";
import Button from "./Button";

export default function Header({title = "Task Tracker", showAddTask, toggleShow}) {
    const handleClick = () => {
          
    }

  return (
    <div className="header">
        <h1>{title}</h1>
        <Button handleClick={handleClick} color={showAddTask ? "red" : "#023535"} text ={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"} toggleShow={toggleShow}/>
        <Button handleClick={handleClick} text ="Show Add Task Bar" />
    </div>
  )
}

// Header.defaultPtops = {
//     title: "Task Tracker"
// }

//! two ways of assigning default props, inline or with .defaultProps 

Header.propTypes = {
    title: PropTypes.string.isRequired,
}