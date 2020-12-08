import * as React from 'react';

import Wave from '@/Components/Wave';

import './index.css';

export default class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <div className="hero--info">
                    <h1>
                        Python Pizza <br></br>New Year's Party
                    </h1>
                    <h2>Remote @ your couch 🛋️. Count down edition ⏰</h2>
                    <br />
                    <h2>Join the fun 🥳🎉 on 31 December 2020</h2>
                </div>

                <Wave />
            </div>
        );
    }
}
