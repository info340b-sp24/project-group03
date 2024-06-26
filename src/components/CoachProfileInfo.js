import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ProfileTable } from './profileTable'
import Image from '../img/coach-example.jpg'


export function ProfileInfo() {
  return (
    <div className="container-fluid border-white profile-div">
      <h1 className="mt-3 text-Kaushan text-white">Update Trainer Profile</h1>
      <div className="text-center my-4">
        <div className="d-flex flex-column justify-content-center align-items-center" >
          <div className="mb-3">
            <img className="img-fluid rounded-circle profile-photo" src = {Image} alt="Profile Picture" />
          </div>
          <button className="btn btn-primary ml-5 btn-orange">add profile photo</button>
        </div>
      </div>
      <ProfileTable />
    </div>

  )
}

