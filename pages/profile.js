import React, { useContext } from "react";
import Tab from './tab';
import {profileContext} from './main';

export default function profile () {
    const profile = useContext(profileContext)

    console.log('profile in profile:>> ', profile);
    return (
            <div style={{ textAlign: "center" }}>
                    <Tab />
                    <h4>Profile</h4>
                    <p>
                    Shayan
                    {profile.name}
                    </p>
                    <p>
                    Zeinali
                    </p>
            </div>
    )};
