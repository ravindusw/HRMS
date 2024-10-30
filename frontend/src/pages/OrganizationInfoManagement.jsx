import { useState, useEffect } from 'react';
import axiosInstance from '../utils/AxiosInstance';
import "./OrganizationInfoManagement.css";
import organizationImg from "../assets/organization-cover.png";

const OrganizationInfoManagement = () => {
    const [organizationDetails, setOrganizationDetails] = useState({ name: "", address: "", reg_number: "" }); // DONE
    const [otherBranches, setOtherBranches] = useState([]); // DONE

    const [branchInfo, setBranchInfo] = useState({ branch_id: "", branch_name: "", country: "", address: "", phone_number: "", organization_id: "" });
    const [originalBranchInfo, setOriginalBranchInfo] = useState({ branch_id: "", branch_name: "", country: "", address: "", phone_number: "", organization_id: "" });

    const [isEditing, setIsEditing] = useState(false);
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        // Fetch organization details
        const fetchOrganizationDetails = async () => {
            try {
                const response = await axiosInstance.get("/organization-info/fetch-organization-details");
                setOrganizationDetails(response.data[0]);
            } catch (err) {
                console.error("Error fetching organization details:", err);
            }
        };

        fetchOrganizationDetails();
    }, []);

    const fetchBranchDetails = async () => {
        try {
            const response = await axiosInstance.get("/organization-info/fetch-branch-details");
            setOtherBranches(response.data);
        } catch (err) {
            console.error("Error fetching branch details:", err);
        }
    };

    useEffect(() => {
        fetchBranchDetails();
    }, []);

    useEffect(() => {
        // Set the branch info for Sri Lanka branch
        const sriLankaBranch = otherBranches.find((branch) => branch.country == "Sri Lanka");
        if (sriLankaBranch) {
            setOriginalBranchInfo({ ...sriLankaBranch });
            setBranchInfo({ ...sriLankaBranch });
        }
    }, [otherBranches]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBranchInfo({ ...branchInfo, [name]: value });
        setIsChanged(
            value !== originalBranchInfo[name]
        );
    };

    const handleEditClick = () => {
        if (isEditing) {
            setIsEditing(false);
            setBranchInfo(originalBranchInfo);
            setIsChanged(false);
        }
        else {
            setIsEditing(true);
        }
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        setIsChanged(false);

        // Update the branch info
        const updateBranchInfo = async () => {
            try {
                const response = await axiosInstance.post("/organization-info/update-branch-details", branchInfo);
                fetchBranchDetails();
            } catch (err) {
                console.error("Error updating branch info:", err);
            }
        };
        updateBranchInfo();
    };

    return (
        <div className="organization-info-management">

            <h1 className="title">Organization Infomation Management</h1>
            <img src={organizationImg} alt="Organization" className="organization-img" />

            <div className="organization-details">
                <h2 className="section-title">Organization Details</h2>
                {organizationDetails ?
                    <>
                        <p className="organization-name">Name: {organizationDetails.name}</p>
                        <p className="registration-no">Registration No: {organizationDetails.reg_number}</p>
                        <p className="organization-address">Address: {organizationDetails.address}</p>
                    </>
                    : <p>Seems like there is an error fetching data </p>
                }
            </div>


            <div className="branch-info">
                <h2 className="section-title">Branch Details</h2>

                <form className="branch-form">
                    <label className="form-label">
                        Name:
                        <input type="text" name="branch_name" value={branchInfo.branch_name} onChange={handleInputChange} className="form-input" disabled={!isEditing} />
                    </label>
                    <br />
                    <label className="form-label">
                        Country:
                        <input type="text" name="country" value={branchInfo.country} onChange={handleInputChange} className="form-input" disabled />
                    </label>
                    <br />
                    <label className="form-label">
                        Address:
                        <input type="text" name="address" value={branchInfo.address} onChange={handleInputChange} className="form-input" disabled={!isEditing} />
                    </label>
                    <br />
                    <label className="form-label">
                        Contact Info:
                        <input type="text" name="phone_number" value={branchInfo.phone_number} onChange={handleInputChange} className="form-input" disabled={!isEditing} />
                    </label>
                    <br />
                    <button type="button" onClick={handleEditClick} className="btn-edit">{isEditing ? "Cancel" : "Edit"}</button>
                    <button type="button" onClick={handleSaveClick} className="btn-save" disabled={!isChanged}>Save</button>
                </form>

            </div>


            <div className="other-branches">
                <h2 className="section-title">All Branches Details</h2>

                <ul className="branch-list">
                    {otherBranches.map((branch, index) => (
                        <li key={index} className="branch-item">
                            <p className="branch-country">Name: {branch.branch_name}</p>
                            <p className="branch-country">Country: {branch.country}</p>
                            <p className="branch-address">Address: {branch.address}</p>
                            <p className="branch-contact">Contact Info: {branch.phone_number}</p>
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    );
};

export default OrganizationInfoManagement;