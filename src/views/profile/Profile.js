import React, { useEffect, useState } from "react";
import "./Profile.css";
import Button from "../../components/button/Button";

const Profile = (props) => {
  const [profileData, setProfileData] = useState();
  useEffect(() => {
    setProfileData(props.location.data);
  }, []);
  console.log("props, ", props.location.data, profileData);

  return (
    <div className="myProfilePage">
      <div className="myProfile">
        <div className="myProfileDiv">
          <form className="ProfileInfoForm">
            <div className="head">
              <h2>Profile Page</h2>
            </div>
            <div className="rowFormInput">
              <div className="formInput col-lg-6 ">
                <label htmlFor="firstName">First name</label>
                <input
                  disabled={true}
                  id="name"
                  type="text"
                  value={profileData?.name}
                  name="name"
                  placeholder="name"
                />
              </div>
            </div>
            <div className="rowFormInput">
              <div className="formInput col-lg-6">
                <label htmlFor="email">Email</label>
                <input
                  disabled={true}
                  id="email"
                  type="email"
                  value={profileData?.email}
                  name="email"
                  placeholder="email"
                  readOnly="true"
                />
              </div>
              <div className="formInput col-lg-6">
                <label htmlFor="Phone">Phone</label>
                <input
                  disabled={true}
                  id="Phone"
                  type="text"
                  value={profileData?.phone}
                  name="phone"
                  placeholder="phone"
                />
              </div>
            </div>

            <div className="formInput col-lg-12">
              <label htmlFor="CountryRegion">Country </label>
              <input
                disabled={true}
                id="CountryRegion"
                type="text"
                value={profileData?.country}
                name="country"
                placeholder="Country"
              />
            </div>
            <div className="formInput col-lg-12">
              <label htmlFor="StreetAddress">School Name</label>
              <input
                disabled={true}
                id="schoolName"
                value={profileData?.schoolName}
                type="text"
                name="schoolName"
                placeholder="School Name"
              />
            </div>
            <div className="formInput col-lg-12">
              <label htmlFor="StreetAddress">Sports</label>
              <input
                disabled={true}
                id="Sports"
                value={profileData?.Sports}
                type="text"
                name="Sports"
                placeholder="Sports"
              />
            </div>
            <div className="rowFormInput">
              <div className="formInput col-lg-4">
                <label htmlFor="City">age</label>
                <input
                  disabled={true}
                  id="age"
                  type="text"
                  value={profileData?.age}
                  name="age"
                  placeholder="age"
                />
              </div>
              <div className="formInput col-lg-4">
                <label htmlFor="State">fatherName</label>
                <input
                  disabled={true}
                  id="fatherName"
                  type="text"
                  value={profileData?.fatherName}
                  name="fatherName"
                  placeholder="fatherName"
                />
              </div>
              <div className="formInput col-lg-4">
                <label htmlFor="ZipCode">Mother Name</label>
                <input
                  disabled={true}
                  id="motherName"
                  type="text"
                  value={profileData?.motherName}
                  name="motherName"
                  placeholder="motherName"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
