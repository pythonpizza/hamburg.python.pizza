import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';
import ScheduleItem from '@/Components/ScheduleItem';
import { SPEAKERS, EVENTS } from '@/dataset';
import { format } from 'date-fns';

export default class Schedule extends React.Component {
    generateSchedule() {
        var schedule = [];
        var eventOrders = EVENTS.map((event) => event.order);
        var numSpeakers = SPEAKERS.length;
        for (var i = 0; i < numSpeakers; i++) {
            if (eventOrders.includes(i) && EVENTS.length > 0) {
                schedule.push(EVENTS.shift());
            }
            schedule.push(SPEAKERS.shift());
        }
        // Inserting closing event
        if (EVENTS.length > 0) {
            schedule.push(EVENTS.shift());
        }
        return schedule;
    }
    render() {
        var dateTime = new Date('12/31/2020 3:00:00 PM UTC');

        return (
            <section id="schedule" className="schedule">
                <Container size={Sizes.large}>
                    <Container size={Sizes.small}>
                        <h1>Speakers</h1>
                    </Container>
                    <Container size={Sizes.medium}>
                        <p>
                            The schedule is displayed in <b>your timezone ({format(dateTime, 'OOOO')}</b>).
                        </p>
                    </Container>
                    <ul>
                        {this.generateSchedule().map((schedule) => (
                            <ScheduleItem key={schedule.title} schedule={schedule} />
                        ))}
                    </ul>
                </Container>
            </section>
        );
    }
}
