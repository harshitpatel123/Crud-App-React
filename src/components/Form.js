"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Navbar_1 = require("./Navbar");
var index = 100; // creating index variable as a failsafe if no id is assign
function Form() {
    var location = (0, react_router_dom_1.useLocation)();
    var editData = location.state && location.state.editData;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _a = (0, react_1.useState)(editData ? editData.id : index++), id = _a[0], setid = _a[1];
    var _b = (0, react_1.useState)(editData ? editData.name : ''), name = _b[0], setname = _b[1];
    var _c = (0, react_1.useState)(editData ? editData.username : ''), username = _c[0], setusername = _c[1];
    var _d = (0, react_1.useState)(editData ? editData.email : ''), email = _d[0], setemail = _d[1];
    var _e = (0, react_1.useState)(editData ? editData.address.street : ''), street = _e[0], setstreet = _e[1];
    var _f = (0, react_1.useState)(editData ? editData.address.suite : ''), suite = _f[0], setsuite = _f[1];
    var _g = (0, react_1.useState)(editData ? editData.address.city : ''), city = _g[0], setcity = _g[1];
    var _h = (0, react_1.useState)(editData ? editData.address.zipcode : 0), zipcode = _h[0], setzipcode = _h[1];
    var _j = (0, react_1.useState)(editData ? editData.phone : 0), phone = _j[0], setphone = _j[1];
    var _k = (0, react_1.useState)(editData ? editData.website : ''), website = _k[0], setwebsite = _k[1];
    var HandleSave = function (e) {
        e.preventDefault(); // to stop reloading the page
        var formData = {
            id: id,
            name: name,
            username: username,
            email: email,
            address: {
                street: street,
                suite: suite,
                city: city,
                zipcode: zipcode,
            },
            phone: phone,
            website: website,
        };
        // Save the form data to local storage 
        if (location.state === null) {
            var existingDataStr = localStorage.getItem('AllUserData');
            var existingData = existingDataStr ? JSON.parse(existingDataStr) : [];
            var lastIndex = existingData.length;
            formData.id = lastIndex > 0 ? existingData[lastIndex - 1].id + 1 : 1;
            var newData = __spreadArray(__spreadArray([], existingData, true), [formData], false);
            localStorage.setItem('AllUserData', JSON.stringify(newData));
            navigate('/product');
        }
        else {
            var AllUserData = JSON.parse(localStorage.getItem('AllUserData') || '[]');
            var newUpdatedData = AllUserData.map(function (item) {
                if (item.id === formData.id) {
                    return formData;
                }
                return item;
            });
            localStorage.setItem('AllUserData', JSON.stringify(newUpdatedData));
            navigate('/product', { state: { updatedData: formData } });
        }
    };
    return (<div>
            <Navbar_1.default />

            <center><h1>ADD / EDIT FORM</h1></center>
            <div style={{ width: "70%", margin: "auto" }}>



                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">
                            Name
                        </label>
                        <input value={name} onChange={function (e) { return setname(e.target.value); }} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">
                            User Name
                        </label>
                        <input value={username} onChange={function (e) { return setusername(e.target.value); }} type="text" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">
                            E-Mail
                        </label>
                        <input value={email} onChange={function (e) { return setemail(e.target.value); }} type="email" className="form-control" id="inputAddress"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputAddress2" className="form-label">
                            Street
                        </label>
                        <input value={street} onChange={function (e) { return setstreet(e.target.value); }} type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">
                            Suite
                        </label>
                        <input value={suite} onChange={function (e) { return setsuite(e.target.value); }} type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">
                            City
                        </label>
                        <input value={city} onChange={function (e) { return setcity(e.target.value); }} type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">
                            Zip
                        </label>
                        <input value={zipcode} onChange={function (e) { return setzipcode(e.target.value); }} type="text" className="form-control" id="inputZip"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">
                            Phone
                        </label>
                        <input value={phone} onChange={function (e) { return setphone(e.target.value); }} type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">
                            Website
                        </label>
                        <input value={website} onChange={function (e) { return setwebsite(e.target.value); }} type="text" className="form-control" id="inputCity"/>
                    </div>

                    <div className="col-12">
                        <button onClick={HandleSave} className="btn btn-primary">
                            SAVE
                        </button>
                    </div>
                </form>


            </div>
        </div>);
}
export default Form;
