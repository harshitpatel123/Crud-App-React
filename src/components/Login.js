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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function Login(_a) {
    var onDataFromChild = _a.onDataFromChild;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _b = (0, react_1.useState)(""), username = _b[0], setusername = _b[1];
    var _c = (0, react_1.useState)(""), password = _c[0], setpassword = _c[1];
    var _d = (0, react_1.useState)(""), status = _d[0], setstatus = _d[1];
    var _e = (0, react_1.useState)(''), err = _e[0], seterr = _e[1];
    if (status === "success") {
        onDataFromChild(true);
        // Redirect to the home page if successfully login
        navigate('/home');
        return <></>;
    }
    function HandleSubmit(e) {
        return __awaiter(this, void 0, void 0, function () {
            var err1_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault(); // to prevent page reload when submit
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, checkCredential(username, password)];
                    case 2:
                        _a.sent();
                        setstatus("success");
                        seterr("");
                        return [3 /*break*/, 4];
                    case 3:
                        err1_1 = _a.sent();
                        seterr(err1_1.message);
                        console.log(err1_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    return (<div>
      <center>
        <br /><br /><br /><br />
        <h1>CRUD APP</h1>
        <br />
        <form onSubmit={HandleSubmit}>
        <div style={{ width: "40%", margin: "30px" }}>
          <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-sm">USER NAME</span>
            <input value={username} onChange={function (e) { return setusername(e.target.value); }} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
          </div>
            <br />
          <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-sm">PASSWORD</span>
            <input value={password} onChange={function (e) { return setpassword(e.target.value); }} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
          </div>


          
          <br /><br />
          <button className="btn btn-success" disabled={username.length === 0 || password.length === 0}>Log In</button>
          <br /><br />
          <h2>{err}</h2>
          </div>
        </form>
      </center>
    </div>);
}
export default Login;
// function to check username and passwrod
function checkCredential(username, password) {
    var credentials = [
        { uname: 'aceinfoway', pwd: 'abc' },
        { uname: 'a', pwd: 'a' },
        { uname: 'harshit', pwd: 'abc' },
        { uname: 'parth', pwd: 'abc' },
        { uname: 'kirtan', pwd: 'abc' },
        { uname: 'sagar', pwd: 'abc' },
        { uname: 'meet', pwd: 'abc' }
    ];
    return new Promise(function (resolve, reject) {
        var isUser = credentials.findIndex(function (value) { return value.uname === username && value.pwd === password; });
        if (isUser > -1) {
            resolve();
        }
        else {
            reject(new Error("Username or password does not match !!!"));
        }
    });
}
