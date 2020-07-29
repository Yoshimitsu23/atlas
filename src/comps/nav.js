import React from 'react';


function Navbar() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand text-primary" href="#">Countries Encyclopedia</div>

                <div className="collapse navbar-collapse bg-light" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <div className="nav-link">Israel</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">USA</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">Thailand</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">France</div>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;