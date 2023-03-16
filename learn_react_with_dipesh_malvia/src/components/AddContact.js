import React from "react";
class AddContact extends React.Component{
render(){
    return(
        <div>
            <h2>Add Contact</h2>
            <div className="bg-slate-200 w-fit rounded-md flex">
            <form>
                
                <div className="p-3">
                <label className="name" for="name">Name: </label> <br />
                <input type="text" className="border" placeholder="Enter your name" id="name" /> <br /></div>
                <div className="p-3">
                <label className="name">Email: </label> <br />
                <input type="email" className="border" placeholder="someone@gmail.com"  /></div>
                <div className="p-3">
                <label className="name">Phone Number: </label> <br />
                <input type="number" className="border" placeholder="Phone Number"  /></div>
                <button className="bg-blue-300 hover:bg-blue-500 rounded-md p-3 m-2">Submit</button>
            </form>
            </div>
        </div>
    );
}
}
export default AddContact;