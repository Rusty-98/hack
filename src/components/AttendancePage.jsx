import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/attendance.css';
import { useNavigate } from 'react-router-dom';
import students from '../Data/students';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as XLSX from 'xlsx';

const AttendancePage = () => {
    const navigate = useNavigate();
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
    const [attendanceRecords, setAttendanceRecords] = useState([]);

    const auth = localStorage.getItem('auth');
    if (!auth) {
        navigate('/login');
    }
    const notify = () => toast.success('✅️ Attendance Submission Success!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    const err = () => toast.error('❌ Submission Failed!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    // Filter students based on selected year and branch
    useEffect(() => {
        if (selectedYear && selectedBranch) {
            const filteredStudents = students.filter(student => student.year.toString() === selectedYear && student.branch === selectedBranch);
            // Map filtered students to attendanceRecords format
            const attendanceData = filteredStudents.map(student => ({
                roll: student.roll,
                studentName: student.name,
                status: 'Absent' // Default status
            }));
            setAttendanceRecords(attendanceData);
        }
    }, [selectedYear, selectedBranch]);

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const handleBranchChange = (event) => {
        setSelectedBranch(event.target.value);
    };

    const markAttendance = (name, status) => {
        const updatedRecords = attendanceRecords.map(record => {
            if (record.studentName === name) {
                return { ...record, status };
            }
            return record;
        });
        setAttendanceRecords(updatedRecords);
    };

    const submitAttendance = async () => {
        try {
            const response = await axios.post('https://hackserver-1llx.onrender.com/api/markAttendance', { attendanceRecords });
            console.log(response.data);
            // alert("Attendance Submission Success");
            notify();
            // navigate('/');
        } catch (error) {
            console.error('Error submitting attendance:', error);
            err();
        }
    };

    const exportToExcel = () => {
        const formattedData = attendanceRecords.map(record => ({
            'Roll No.': record.roll,
            'Student Name': record.studentName,
            'Status': record.status
        }));

        const ws = XLSX.utils.json_to_sheet(formattedData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Attendance');
        XLSX.writeFile(wb, 'Attendance.xlsx');
    };

    return (
        <div className="text-center mt-28 pt-5 w-[95%] md:w-[90%] mx-auto">
            <h2 className='text-3xl md:text-4xl font-bold tracking-wide mt-5'>Attendance Tracking</h2>
            <div className="md:w-full bg-blue-500 mt-5 h-28 md:h-16 flex flex-col md:flex-row items-center justify-center md:text-2xl md:gap-5 rounded-t-xl">
                <div className='text-xl flex items-center gap-5 md:gap-0 md:text-2xl'>
                    <label htmlFor="year">Select Year:</label>
                    <select id="year" value={selectedYear} onChange={handleYearChange}>
                        <option value="">Select Year</option>
                        <option value="1">First Year</option>
                        <option value="2">Second Year</option>
                        <option value="3">Third Year</option>
                        <option value="4">Fourth Year</option>
                    </select>
                </div>
                <label htmlFor="branch" className='text-xl mt-2 md:mt-0 md:text-2xl'>Select Branch:</label>
                <select id="branch" value={selectedBranch} onChange={handleBranchChange}>
                    <option value="">Select Branch</option>
                    <option value="CSE">Computer Science & Engineering</option>
                    <option value="ECE">Electronics & Communication Engineering</option>
                    <option value="ME">Mechanical Engineering</option>
                    <option value="IT">Information Technology</option>
                    {/* Add more branch options if needed */}
                </select>

            </div>

            <table className="attendance-table border-2 border-black">
                <thead className='border-2 border-black'>
                    <tr>
                        <th>Roll No.</th>
                        <th>Student Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceRecords.map(record => (
                        <tr key={record.studentName}>
                            <td>{record.roll}</td>
                            <td>{record.studentName}</td>
                            <td className={record.status === 'Present' ? 'present' : 'absent'}>{record.status}</td>
                            <td>
                                <button onClick={() => markAttendance(record.studentName, 'Present')} className="present-btn mb-3 md:mb-0">Present</button>
                                <button onClick={() => markAttendance(record.studentName, 'Absent')} className="absent-btn">Absent</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex gap-2 items-center justify-center'>
                <button onClick={submitAttendance} className="submit-btn">Submit Attendance</button>
                <button onClick={exportToExcel} className="submit-btn">Export to Excel</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AttendancePage;
