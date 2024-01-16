"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Navbar_1 = require("./Navbar");
var react_router_dom_1 = require("react-router-dom");
function Home() {
    return (<>
      <div>
        <Navbar_1.default />
        <center> 
          <div className='m-5'>
            <h1>Welcome To CRUD App </h1><br /><br /><br />
            <h2>In the product page you can see the data of users and perform CRUD operations on it</h2>
            
            <br /><br /><br /><br />
            <h1>Go To Product Page</h1>
          </div>
          <react_router_dom_1.Link to='/product'>
            <button className='btn btn-success btn-lg'>GO</button>
          </react_router_dom_1.Link>
        </center>
      </div>
    </>);
}
export default Home;
