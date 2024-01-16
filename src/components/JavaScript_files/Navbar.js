"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function Navbar() {
    // to logout the user and clear local data from browser
    function HandleLogout() {
        // localStorage.clear();
    }
    return (<div>
            <section id='navbar'>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <react_router_dom_1.Link className="navbar-brand" to="">
                            CRUD APP
                        </react_router_dom_1.Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <react_router_dom_1.Link className="nav-link active" aria-current="page" to="/home">
                                        Home
                                    </react_router_dom_1.Link>
                                </li>
                                <li className="nav-item">
                                    <react_router_dom_1.Link className="nav-link active" to="/product">
                                        Product
                                    </react_router_dom_1.Link>
                                </li>
                                <li className="nav-item">
                                    <react_router_dom_1.Link className="nav-link active" to="/form">
                                        Form
                                    </react_router_dom_1.Link>
                                </li>
                            </ul>
                            <react_router_dom_1.Link className="nav-link active" aria-current="page" to="/">
                                <button onClick={HandleLogout} className="btn btn-outline-danger">
                                    Log Out
                                </button>
                            </react_router_dom_1.Link>
                        </div>
                    </div>
                </nav>
            </section>
        </div>);
}
export default Navbar;
