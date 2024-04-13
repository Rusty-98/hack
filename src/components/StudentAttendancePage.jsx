import React, { useState } from 'react';
import '../styles/stud.css'; // Import CSS file for styling
import atten from '../Data/atten';

const StudentAttendancePage = () => {
    const auth  = localStorage.getItem('auth');
    if(!auth){
        window.location.href = '/login';
    }
    const [rollNumber, setRollNumber] = useState('');
    const [attendanceData, setAttendanceData] = useState(null);

    const calculateAttendanceMetrics = (attendance) => {
        const totalClasses = 20; // Total number of classes in a month
        const attendedClasses = attendance.filter(day => day.status === 'present').length;
        const absentClasses = totalClasses - attendedClasses;
        const attendancePercentage = (attendedClasses / totalClasses) * 100;
        let leaveNeeded;

        if (attendancePercentage >= 75) {
            // If current attendance percentage is already 75% or higher
            leaveNeeded = 0; // No additional leave needed to maintain 75%
        } else {
            // If current attendance percentage is less than 75%
            leaveNeeded = Math.ceil((75 * totalClasses - 100 * attendedClasses) / (100 - 75));
        }

        return { totalClasses, attendedClasses, absentClasses, attendancePercentage, leaveNeeded };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Find the student data by roll number
        const studentData = atten.find(student => student.roll === parseInt(rollNumber));
        if (!studentData) {
            // If the roll number is not found, show an alert
            alert('Invalid roll number');
            return;
        }
        // Generate attendance metrics for the student
        const attendanceMetrics = calculateAttendanceMetrics(studentData.attendance);
        // If the roll number is valid, set the attendance data along with metrics
        setAttendanceData({ ...studentData, ...attendanceMetrics });
    };

    return (
        <div className="mt-[35vw] md:mt-[10vw] mx-auto bg-[hsl(0, 0%, 64%)]">
            <h1 className="text-center font-serif text-4xl">Student Attendance Report</h1>
            <form onSubmit={handleSubmit} className="form mt-5">
                <label className="form-label text-xl">
                    Enter your roll number:
                    <input type="text" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} className="form-input ml-3 text-xl mt-4 md:mt-0" placeholder='Roll Number' />
                </label>
                <button type="submit" className="form-button">Submit</button>
            </form>
            {attendanceData && (
                <div className="border-2 md:w-[60vw] md:mx-auto border-white backdrop:blur-xl bg-[#dfdfdf8d] mt-10 text-xl rounded-xl overflow-hidden text-left px-4 shadow-md shadow-blue-400">
                    <h2 className="font-bold text-2xl text-center tracking-wide mb-3 mt-3">Attendance Report</h2>
                    <p className='mb-2'><strong>Name:</strong> {attendanceData.name}</p>
                    <p className='mb-2'><strong>Branch:</strong> {attendanceData.branch}</p>
                    <p className='mb-2'><strong>Year:</strong> {attendanceData.year}</p>
                    <p className='mb-2'><strong>Total Classes:</strong> {attendanceData.totalClasses}</p>
                    <p className='mb-2'><strong>Attended Classes:</strong> {attendanceData.attendedClasses}</p>
                    <p className='mb-2'><strong>Absent Classes:</strong> {attendanceData.absentClasses}</p>
                    <p className='mb-2'><strong>Attendance Percentage:</strong> {attendanceData.attendancePercentage.toFixed(2)}%</p>
                </div>
            )}
        </div>
    );
};

export default StudentAttendancePage;
