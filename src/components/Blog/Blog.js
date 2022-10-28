import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 px-5'>
            <div className="card w-96 bg-base-100 shadow-xl mb-5">
                <figure className="px-10 pt-10">
                    <img src="https://img.freepik.com/free-vector/online-kids_24877-51998.jpg?size=626&ext=jpg&ga=GA1.2.1908891225.1665030381&semt=ais" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What Is CORS</h2>
                    <p>CORS Stands For Cross Origin Resource Sharing One Website or a port Does not allow another port or another website to use it's data or any resourse so by installing a node package name cors in express app we can share a website's data to another website</p>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-blog">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mb-5">
                <figure className="px-10 pt-10">
                    <img src="https://img.freepik.com/free-vector/programmer-working-with-computer_23-2148232687.jpg?size=338&ext=jpg&ga=GA1.2.1908891225.1665030381&semt=ais" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Why we are using FireBase ? what are other options we have to implement authentication</h2>
                    <p>Apart From Firebase we have other options like Oauth,Octa,Aws and many more the reason behind using firebase beacuse it is trusted and many experienced developers of google made it so it is pretty sure that it  trustworthy to handle our app user's credentials like emails and passwords.To authenricate our User we use firebase so that the uses of apps can be restricted to some extent</p>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-blog">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mb-5">
                <figure className="px-10 pt-10">
                    <img src="https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-752.jpg?size=338&ext=jpg&ga=GA1.2.1908891225.1665030381&semt=ais" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">How does the Private Routes Word</h2>
                    <p>Fisrt of all we puth that route for example "checkout" route inside of a component when this "checkout" route is requested the component it is inside of will check some condition if it is the authentic user or not if it is then it will allow the user to "checkout" otherwise it will navigate us to login page</p>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-blog">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mb-5">
                <figure className="px-10 pt-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEdG2J7ykN_Im7QUN2oLPPzATYL4ZSsV2M24fjNoH6ilt4utKuU1NkJrwfclGZecfNDI&usqp=CAU" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What is Node ? How does it word</h2>
                    <p>  Node is a Javascript Runtime it is used to Run Javascript in server ,for a long time Javascript was used in the server side but a creative programmer decided to use it use it on the server side he took the the V8 engine of chrome and added some C++ code and boom it is the new Node js it is consist of  call stack,queue,memory,Event loop ,Thread pool
                        event loop is a very complicated thing call stack takes the code and runs it immedietely then it calls the queue if any code is incomplete to run the event is resposible to  call the fisrt one from queue to call stack
                    </p>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-blog">Learn More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog; 