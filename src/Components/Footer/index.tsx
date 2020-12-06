import * as React from 'react';

import './index.css';

import Wave from '@/Components/Wave';
import Container, { Sizes } from '@/Components/Container';
import { SOCIALS } from '@/dataset';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Wave />
                <Container size={Sizes.large}>
                    <div className="footer--socials">
                        {SOCIALS.map((social) => (
                            <a
                                key={social.name}
                                id={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img alt={social.name} src={social.icon} />
                            </a>
                        ))}
                    </div>
                </Container>
            </div>
        );
    }
}
