import * as React from 'react';
import { format } from 'date-fns';

import Wave from '@/Components/Wave';

import './index.css';

export default class Hero extends React.Component {
    render() {
        var dateTime = new Date('12/31/2020 3:00:00 PM UTC');
        const localDateTime = format(dateTime, 'd MMMM HH:mm');
        return (
            <div className="hero">
                <div className="hero--info">
                    <h1>
                        Python Pizza <br></br>New Year's Party
                    </h1>
                    <h2>Remote @ 🏠 🛋️. Count down edition ⏰</h2>
                    <br />
                    <h2>{localDateTime} (your time) ⏱</h2>
                </div>

                <Wave />
            </div>
        );
    }
}
