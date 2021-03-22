import React from 'react';
const NavBar = (props) => {
    return ( 
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                Navbar <span class="badge bg-secondary">{props.totalCounters}</span>
            </a>
            
        </div>
    </nav>
     );
}
 
export default NavBar;
