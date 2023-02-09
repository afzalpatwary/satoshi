import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import SideBar from "./components/SideBar/SideBar";
import Login from "./components/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Configaration from "./pages/Configaration/Configaration";
import ForgetPass from "./components/ForgetPass/ForgetPass";
import ConfirmPass from "./components/ConfirmPass/ConfirmPass";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Documantation from "./components/Documantation/Documantation";
import MultiStepForm from "./components/AccountSetup/MultiStepForm/MultiStepForm";
import Settings from "./components/Settings/Settings";
import StepFinal from "./components/AccountSetup/Step/SuccessStep/StepFinal";
import FailedStep from "./components/AccountSetup/Step/FailedStep/FailedStep";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Browse from "./pages/Dashboard/Bowse";
import Playlist from "./pages/Dashboard/Playlist";
import LibraryPanel from "./pages/Dashboard/LibraryPanel";
import Snapshort from "./pages/Dashboard/Snapshort";
import { Alert } from "bootstrap";
import AlertGroup from "./pages/Alert/AlertGroup";
import Alertrule from "./pages/Alert/Alertrule";
import Silence from "./pages/Alert/Silence";
import AdminControl from "./components/AdminControl/AdminControl";
import AuthProvider from "./context/AuthProvider";

function App() {
    //  basename="/satoshi"

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <AuthProvider>
            <BrowserRouter basename="/satoshiClientSide">
            <div className="main-container">
                <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <div className={"main-wrapper " + (menuOpen && "overLay")}>
                    <NavigationBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    <Routes>
                        <Route path={"/"} element={<Dashboard menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}></Route>
                        <Route path={"/dashboard"} element={<Dashboard menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}></Route>
                        {/*<Route path={"/admincontrol"} element={<AdminControl/>}/>*/}
                        <Route path={"/configaration"} element={<Configaration />}></Route>
                        <Route path={"/documantation"} element={<Documantation />}></Route>
                        <Route path={"/login"} element={<Login />}></Route>
                        <Route path={"/setting"} element={<Settings />}></Route>
                        <Route path={"/create_account"} element={<CreateAccount></CreateAccount>}></Route>
                        <Route path={"/forget_password"} element={<ForgetPass />}></Route>
                        <Route path={"/confirm_password"} element={<ConfirmPass></ConfirmPass>}></Route>
                        <Route path={"/multi_step_form"} element={<MultiStepForm />} />
                        <Route path={"/final_step"} element={<StepFinal />} />
                        <Route path={"/failed_step"} element={<FailedStep />} />
                        <Route path={"/browse"} element={<Browse />} />
                        <Route path={"/playlist"} element={<Playlist />} />
                        <Route path={"/libraryPanel"} element={<LibraryPanel />} />
                        <Route path={"/snapshots"} element={<Snapshort />} />
                        <Route path={"/alert"} element={<Alert />} />
                        <Route path={"/alertgroup"} element={<AlertGroup />} />
                        <Route path={"/alertrule"} element={<Alertrule />} />
                        <Route path={"/silence"} element={<Silence />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </AuthProvider>
    );
}

export default App;
