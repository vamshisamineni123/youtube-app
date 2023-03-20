import React from "react";
import './App.css'

export default function AddContact(){
    return(
        <div className="addcontact">
            <h2>Add Contact</h2>
            <div>
                <form onSubmit={this}>
                    <div>
                        <label>
                        Name
                        </label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div>
                        <label>
                        Email
                        </label>
                        <input type="email" name="email" placeholder="Email"/>
                    </div>
                    <button >Add</button>
                </form>
            </div>
        </div>
    );
}