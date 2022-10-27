import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='m-10'>
                <div className="navbar bg-neutral text-neutral-content justify-between rounded-lg">
                    <Link to='/' className="btn btn-ghost normal-case text-xl text-3xl font-bold hover:text-lime-300 hover:text-4xl">Home</Link>
                    <div className='mr-6'>
                        <Link className='m-4 text-slate-300 font-bold hover:text-cyan-600' to='/'>Home</Link>
                        <Link className='m-4 text-slate-300 font-bold hover:text-cyan-600' to='/courses'>Courses</Link>
                        <Link className='m-4 text-slate-300 font-bold hover:text-cyan-600' to='/faq'>FAQ</Link>
                        <Link className='m-4 text-slate-300 font-bold hover:text-cyan-600' to='/about'>About</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;