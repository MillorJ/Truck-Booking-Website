import { useState } from "react";
import PasswordTab from "../../components/user/PasswordTab";
import PersonalInfoTab from "../../components/user/PersonalInfoTab";

const TAB = {
  left: "PERSONAL_INFORMATION",
  right: "ACCOUNT_PASSWORD",
};
const Settings = ({user}) => {
  const [tab, setTab] = useState(TAB.left);

  return (
    <>
      <h2 className="py-4">Settings</h2>
      <div className="d-flex justify-content-center">
        <div className="card text-bg-dark" style={{ width: "500px" }}>
          <div className="card-header px-0 py-0">
            <div className="d-flex justify-content-between">
              <div
                className={`tab w-100 h-100 text-center py-3 ${
                  tab !== TAB.left ? "inactive" : ""
                }`}
                style={{ borderTopLeftRadius: "0.375rem" }}
                role="button"
                onClick={() => setTab(TAB.left)}
              >
                Personal Information
              </div>
              <div
                className={`tab w-100 h-100 text-center py-3  ${
                  tab !== TAB.right ? "inactive" : ""
                }`}
                style={{ borderTopRightRadius: "0.375rem" }}
                role="button"
                onClick={() => setTab(TAB.right)}
              >
                Account Password
              </div>
            </div>
          </div>
          <div className="card-body p-4">
            {tab === TAB.left ? (
              <PersonalInfoTab user={user}></PersonalInfoTab>
            ) : (
              <PasswordTab user={user}></PasswordTab>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
