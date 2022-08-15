import PropTypes from "prop-types";

export default function Header({title = "Task Tracker"}) {
  return (
    <div>
        <h1>{title}</h1>
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