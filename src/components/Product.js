"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var Navbar_1 = require("./Navbar");
var react_router_dom_1 = require("react-router-dom");
function Product() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var location = (0, react_router_dom_1.useLocation)();
    var updatedData = location.state && location.state.updatedData;
    var existingData = JSON.parse(localStorage.getItem('AllUserData') || 'null');
    var _a = (0, react_1.useState)([]), userData = _a[0], setUserData = _a[1];
    var _b = (0, react_1.useState)(-1), deleteId = _b[0], setDeleteId = _b[1];
    (0, react_1.useEffect)(function () {
        // fetching the data from the api
        function fetchData() {
            return __awaiter(this, void 0, void 0, function () {
                var response, data, tempData, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, fetch('https://jsonplaceholder.typicode.com/users')];
                        case 1:
                            response = _a.sent();
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = _a.sent();
                            tempData = __spreadArray(__spreadArray([], data, true), existingData, true);
                            setUserData(tempData);
                            localStorage.setItem('AllUserData', JSON.stringify(tempData));
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            console.error('Error fetching data:', error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        // this is implemented to stop the useEffect from running twice
        var checkData = JSON.parse(localStorage.getItem('AllUserData') || 'null');
        if (checkData === null) {
            fetchData();
        }
        else {
            setUserData(checkData);
        }
    }, []);
    (0, react_1.useEffect)(function () {
        setTimeout(function () {
            if (location.state !== null) {
                var allUserData = JSON.parse(localStorage.getItem('AllUserData') || 'null') || [];
                setUserData(allUserData);
            }
        }, 1000);
    }, [location.state]);
    // to remove the user data 
    function handleRemoveTask() {
        var tempArr = userData.filter(function (item) { return item.id !== deleteId; });
        setDeleteId(-1);
        setUserData(tempArr);
        localStorage.setItem('AllUserData', JSON.stringify(tempArr));
    }
    // to add new data
    function handleAddTask() {
        navigate('/form');
    }
    //to change userdata
    function handleEditTask(editItem) {
        localStorage.setItem('AllUserData', JSON.stringify(userData));
        navigate('/form', { state: { editData: editItem } });
    }
    return (<div>
      <Navbar_1.default />

      <br />
      <br />
      <center>
        <h2>User Data</h2>
      </center>

      <button type="button" className="btn btn-success" onClick={handleAddTask} style={{ float: 'right', marginRight: '50px' }}>
        ADD
      </button>

      <br />
      <br />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Details</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>
          {userData &&
            userData.map(function (item) { return (<tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <button type="button" className="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target={"#extraDetails-".concat(item.id)}>
                    <b>Show</b>
                  </button>
                </td>
                <td>
                  <button onClick={function () { return handleEditTask(item); }} type="button" className="btn btn-light btn-sm">
                    <b> Edit</b>
                  </button>
                </td>
                <td>
                  <button onClick={function () { return setDeleteId(item.id); }} type="button" className="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#deleteconfirmation">
                    <b>Delete</b>
                  </button>
                </td>

                {/* extra details pop up code */}
                <section id="extra-details-box">
                  {/* Modal */}
                  <div className="modal fade" id={"extraDetails-".concat(item.id)} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            {item.name}
                          </h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                          <b>Name : </b>
                          {item.name}
                          <br />
                          <b>User Name : </b>
                          {item.username}
                          <br />
                          <b>E-mail : </b>
                          {item.email}
                          <br />
                          <b>Address : </b> {item.address.street} , {item.address.suite} , {item.address.city} ,{' '}
                          {item.address.zipcode} <br />
                          <b>Phone : </b>
                          {item.phone}
                          <br />
                          <b>Website : </b>
                          {item.website}
                          <br />
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </tr>); })}
        </tbody>
      </table>

      {/* Pop-up Box jsx code */}
      <section id="pop-up-box">
        {/* Modal */}
        <div className="modal fade" id="deleteconfirmation" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Confirm!
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
              </div>
              <div className="modal-body">Are you sure you want to delete this record?</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  No
                </button>
                <button onClick={handleRemoveTask} type="button" className="btn btn-primary" data-bs-dismiss="modal">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);
}
export default Product;
