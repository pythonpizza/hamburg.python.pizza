import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';
import Logo from '@/Components/Logo';

import './index.css';

export default class Header extends React.Component {
    onNavClick(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();

        const target = e.target as HTMLAnchorElement;
        const destinationId = target.getAttribute('data-destination');
        const destinationDom: HTMLElement | null = window.document.querySelector(`#${destinationId}`);

        if (!destinationDom) {
            return;
        }

        window.scrollTo({
            top: destinationDom.offsetTop,
            behavior: 'smooth',
        });
    }

    render() {
        return (
            <div className="header">
                <Container size={Sizes.large}>
                    <Logo className="header--logo" />

                    <ul className="header--links">
                        <li>
                            <a onClick={this.onNavClick} href="#about" data-destination="about">
                                About 🍕
                            </a>
                        </li>

                        <li>
                            <a onClick={this.onNavClick} href="#sponsors" data-destination="sponsors">
                                Sponsors
                            </a>
                        </li>
                        {/* <li>
                            <a href="https://forms.gle/Hfdba6uCzeUrbmXM9" target="_blank" rel="noopener noreferrer">
                                Call for Proposals
                            </a>
                        </li> */}
                        <li>
                            <a href="https://pysv10.fe.rzob.gocept.net/en_GB/cfp" target="_blank">
                                Call for Proposals
                            </a>
                        </li>
                        <li>
                            <a onClick={this.onNavClick} href="#coc" data-destination="coc">
                                CoC
                            </a>
                        </li>
                        <li>
                            <a href="https://ti.to/pysv/python-pizza-new-years-party-2020" target="_blank">
                                Tickets
                            </a>
                        </li>
                    </ul>
                </Container>
            </div>
        );
    }
}

// <li>
//<a onClick={this.onNavClick} href="#schedule" data-destination="schedule">
//Schedule
//</a>
//</li>
