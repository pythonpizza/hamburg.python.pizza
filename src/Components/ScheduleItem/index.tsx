import * as React from 'react';
import classnames from 'classnames';
import './index.css';
import Speaker from '@/Types/Speaker';
import Event, { Types } from '@/Types/Event';

export interface ScheduleItemProps {
    schedule: Speaker | Event;
}

export default class ScheduleItem extends React.Component<ScheduleItemProps, {}> {
    state = {
        isLoaded: false,
        isError: false,
    };

    isTalk() {
        return this.props.schedule.name != undefined;
    }

    componentDidMount() {
        const { schedule } = this.props;

        if (this.isTalk()) {
            const img = new Image();

            img.onload = () => {
                this.setState({ isLoaded: true });
            };

            img.onerror = () => {
                this.setState({ isError: true });
            };

            setTimeout(() => {
                img.src = schedule!.photo;
            }, 300 + 500 * Math.random());
        }
    }

    render() {
        const { schedule } = this.props;
        const { isLoaded, isError } = this.state;
        const isTalk = this.isTalk();

        const scheduleItemClasses = classnames('schedule-item', {
            'schedule-item--small': !isTalk,
            'schedule-item--other': schedule.type === Types.OTHER,
            'schedule-item--break': schedule.type === Types.BREAK,
            'schedule-item--lunch': schedule.type === Types.LUNCH,
        });

        const imageClasses = classnames('schedule-item--image', {
            'schedule-item--image--loaded': isLoaded,
            'schedule-item--image--error': isError,
        });

        const SpeakerNameTag = isTalk && schedule!.social ? 'a' : 'p';
        const title = isTalk ? schedule!.title : schedule.title;

        return (
            <li className={scheduleItemClasses}>
                {isTalk && <div className={imageClasses} style={{ backgroundImage: `url(${schedule!.photo})` }} />}
                <div className="schedule-item--info">
                    <h2>{title}</h2>
                    {isTalk && (
                        <SpeakerNameTag target="_blank" rel="noopener noreferrer" href={schedule!.social}>
                            {schedule!.name}
                        </SpeakerNameTag>
                    )}
                    <span className="schedule-item--time">{schedule.time}</span>
                </div>
            </li>
        );
    }
}
