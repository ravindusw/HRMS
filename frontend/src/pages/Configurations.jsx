import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/AxiosInstance';
import './Configurations.css';
import configurationImg from '../assets/configurations.png';

const Configurations = () => {
    const [jobTitles, setJobTitles] = useState([]);
    const [jobTitle, setJobTitle] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [originalPayLeaveLimits, setOriginalPayLeaveLimits] = useState([]);
    const [payLeaveLimits, setPayLeaveLimits] = useState([]);

    const fetchData = async () => {
        try {
            const jobTitlesResponse = await axiosInstance.get('/configuration/fetch-job-titles');
            setJobTitles(jobTitlesResponse.data);

            const payLeaveLimitsResponse = await axiosInstance.get('/configuration/fetch-max-leave-count');
            setOriginalPayLeaveLimits(JSON.parse(JSON.stringify(payLeaveLimitsResponse.data))); // Deep copy
            setPayLeaveLimits(JSON.parse(JSON.stringify(payLeaveLimitsResponse.data))); // Deep copy
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        // Fetch existing job titles and leave types
        fetchData();
    }, []);

    const handleJobTitleChange = (e) => {
        setJobTitle(e.target.value);
    };

    const handleLeaveCountChange = (e, _index) => {
        setPayLeaveLimits((prev) => {
            const newPayLeaveLimits = [...prev];
            newPayLeaveLimits[_index].max_leave_count = e.target.value;
            return newPayLeaveLimits;
        });
    };

    const handleAddJobTitle = async () => {
        if (!jobTitle) {
            alert('Job title cannot be empty');
            return;
        }

        try {
            setIsLoading(true);
            const response = await axiosInstance.post('/configuration/add-job-title', { "jobTitle": jobTitle });
            console.log(response.data);
            fetchData();
            setJobTitle('');
            setIsLoading(false);
        } catch (error) {
            console.error('Error adding job title:', error);
            setIsLoading(false);
        }
    };

    const handleSaveLeaveCounts = async (_index) => {
        const changedItem = {
            name: payLeaveLimits[_index].name,
            type: payLeaveLimits[_index].type,
            max_leave_count: payLeaveLimits[_index].max_leave_count
        }

        try {
            setIsLoading(true);
            const response = await axiosInstance.post('/configuration/update-max-leave-count', changedItem);
            console.log(response.data);
            fetchData();
            setIsLoading(false);
        } catch (error) {
            console.error('Error updating leave counts:', error);
            setIsLoading(false);
        }
    };

    const handleCancelChanges = () => {
        setPayLeaveLimits(JSON.parse(JSON.stringify(originalPayLeaveLimits))); // Deep copy
    };

    return (
        <div className="configurations">
            <h1>Job & Leave Configurations</h1>

            <img src={configurationImg} alt="Configuration" />

            <div className="existing-job-titles">
                <h2>Existing Job Titles</h2>
                <ul>
                    {jobTitles.map((job) => (
                        <li key={job.job_title_id}>{job.title}</li>
                    ))}
                </ul>
            </div>

            <div className="add-job-title">
                <h2>Add New Job Title</h2>
                <input
                    type="text"
                    placeholder="Job Title"
                    value={jobTitle}
                    onChange={handleJobTitleChange}
                />
                <button onClick={handleAddJobTitle} disabled={isLoading}>Add Job Title</button>
            </div>

            <div className="adjust-leave-counts">
                <h2>Adjust Maximum Leave Count</h2>

                <table className="leave-count-table">
                    <thead>
                        <tr>
                            <th>Pay Grade</th>
                            <th>Leave Type</th>
                            <th>Maximum Leave Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payLeaveLimits.map((item, index) => (
                            <tr key={index}>
                                <td className={originalPayLeaveLimits[index].max_leave_count !== item.max_leave_count ? 'changed' : ''}>{item.name}</td>
                                <td className={originalPayLeaveLimits[index].max_leave_count !== item.max_leave_count ? 'changed' : ''}>{item.type}</td>
                                <td className={originalPayLeaveLimits[index].max_leave_count !== item.max_leave_count ? 'changed' : ''}>
                                    <input

                                        type="number"
                                        placeholder="Enter max leave count"
                                        value={item.max_leave_count}
                                        onChange={(e) => handleLeaveCountChange(e, index)}
                                    />
                                    <button
                                        onClick={handleCancelChanges}
                                        disabled={originalPayLeaveLimits[index].max_leave_count === item.max_leave_count}>
                                        Cancel
                                    </button>
                                    <button
                                        className="save"
                                        onClick={() => handleSaveLeaveCounts(index)}
                                        disabled={originalPayLeaveLimits[index].max_leave_count === item.max_leave_count}>
                                        Save
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Configurations;
