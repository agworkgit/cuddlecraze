import React, { useState } from 'react';
import AccountInfo from './AccountInfo.json'; // Import the JSON file
import './account-head.css';

function AccountHead() {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState(AccountInfo); // State to manage profile data
    const [formData, setFormData] = useState({}); // State to manage form data
    const [previewImage, setPreviewImage] = useState(null); // State to manage preview image

    // Function to handle edit profile button click
    const handleEditProfile = () => {
        setIsEditing(true);
        setFormData({ ...profileData }); // Initialize form data with current profile data
    };

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Function to handle adding a new interest field
    const handleAddInterestField = () => {
        const updatedInterests = [...(formData.interests || []), ''];
        setFormData(prevData => ({
            ...prevData,
            interests: updatedInterests,
        }));
    };

    // Function to handle removing an interest field
    const handleRemoveInterestField = (index) => {
        const updatedInterests = [...(formData.interests || [])];
        updatedInterests.splice(index, 1);
        setFormData(prevData => ({
            ...prevData,
            interests: updatedInterests,
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setProfileData(formData); // Update profile data with form data
        setIsEditing(false); // Exit edit mode
        // You can add code here to save the updated profile data to the JSON file or any backend/database
        // For simplicity, let's just log the updated data in this example
        console.log('Updated Profile Data:', formData);
    };

    // Function to handle cancel edit
    const handleCancelEdit = () => {
        setIsEditing(false); // Exit edit mode
        setFormData({}); // Clear form data
        setPreviewImage(null); // Clear preview image
    };

    // Function to handle file input change
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData(prevData => ({
                ...prevData,
                profile_picture: reader.result, // Update profile picture URL
            }));
            setPreviewImage(reader.result); // Set preview image
        };
        if (file) {
            reader.readAsDataURL(file); // Read file as Data URL
        }
    };

    return (
        <div className="account-head-container">
            <div className="profile-section">
                <div className="profile-picture" onClick={() => isEditing && document.getElementById('profile-picture-upload').click()}>
                    <img src={isEditing ? (previewImage || profileData.profile_picture) : profileData.profile_picture} alt="Profile Picture" />
                    {isEditing && (
                        <>
                            <input
                                type="file"
                                id="profile-picture-upload"
                                accept="image/*"
                                onChange={handleFileInputChange}
                                style={{ display: 'none' }} // Hide the input field
                            />
                            <label htmlFor="profile-picture-upload">Change Picture</label>
                        </>
                    )}
                </div>
                {isEditing && (
                    <button className="edit-btn" onClick={() => document.getElementById('profile-picture-upload').click()}>Edit Picture</button>
                )}
                <div className="profile-details">
                    <h2>Name: <span id="name">{isEditing ? (
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name || ''}
                            onChange={handleInputChange}
                            className="profile-input"
                        />
                    ) : (
                        profileData.name
                    )}</span></h2>
                    <h3>Location: <span id="location">{isEditing ? (
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location || ''}
                            onChange={handleInputChange}
                            className="profile-input"
                        />
                    ) : (
                        profileData.location
                    )}</span></h3>
                    <h3>Interests:</h3>
                    <div className="interests">
                        {isEditing ? (
                            formData.interests.map((interest, index) => (
                                <div key={index} className="interest-field">
                                    <input
                                        type="text"
                                        value={interest}
                                        onChange={(e) => handleInputChange({
                                            target: { name: 'interests', value: [
                                                ...(formData.interests || []).slice(0, index),
                                                e.target.value,
                                                ...(formData.interests || []).slice(index + 1)
                                            ]}
                                        })}
                                        className="profile-input"
                                    />
                                    <button type="button" className="remove-btn" onClick={() => handleRemoveInterestField(index)}>X</button>
                                </div>
                            ))
                        ) : (
                            profileData.interests.map((interest, index) => (
                                <span key={index} className="interest-btn">{interest}</span>
                            ))
                        )}
                        {isEditing && (
                            <button type="button" className="add-btn" onClick={handleAddInterestField}>Add Interest</button>
                        )}
                    </div>
                </div>
                {isEditing ? (
                    <div>
                        <button className="edit-btn" onClick={handleSubmit}>
                            Save Profile
                        </button>
                        <button className="edit-btn" onClick={handleCancelEdit}>
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button className="edit-btn" onClick={handleEditProfile}>
                        Edit Profile
                    </button>
                )}
            </div>
        </div>
    );
}

export default AccountHead;
