import React from 'react';
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const CheckOut = () => {
    const course = useLoaderData();
    return (
        <div className="bg-white my-10 flex">
            <LineChart width={500} height={500} data={course.data} margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="purchase" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Tooltip />
            </LineChart>
            <div>
                <h1 className="text-2xl text-slate-800 bg-yellow-400 rounded p-1 my-5">This Chart Shows How many People Bought  {course.course_name} This Year</h1>
                <button onClick={() => {
                    toast.success("Purchased SuccessFully")
                }} className="btn btn-info">Click To Purchase</button>
            </div>


        </div>
    );
};

export default CheckOut;