import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><Link to={"/"}>All</Link></li>
            <li><Link to={"/?todos=active"}>Active</Link></li>
            <li><Link to={"/?todos=completed"}>Completed</Link></li>
            
        </ul>
    </div>
  )
}

export default Navbar