import React, { useState } from 'react';
import styledComponents from 'styled-components';
import logo from '../assets/logo.png';
import flag from '../assets/flag.png';
import {FiLock} from 'react-icons/fi';
import {BsToggleOn, BsToggleOff} from 'react-icons/bs';

export default function Navbar() {
	const [navState, setNavState] = useState(false);
	return (
		<Nav>
			<div className="brand">
				<div className="logo">
					<img src={logo} alt="Brand Logo" />
				</div>
				<div className="toggle">
					{navState ? (
						<BsToggleOn 
							onClick={() => setNavState(false)} />
						) : (

						<BsToggleOff 
							onClick={() => setNavState(true)} />)
					}
				</div>
			</div>		
			<div className={`links ${navState ? "show" : "hide"}`}>
				<ul>
					<li>
						<a href="#home">
							Home
						</a>
					</li>		
					<li>
						<a href="#map">
							Map
						</a>
					</li>		
					<li>
						<a href="#contact">
							Home
						</a>
					</li>		
					<li>
						<a href="#news">
							News
						</a>
					</li>
				</ul>
				<div className="login-btn">
					<div className="flag">
						<img src={flag} alt="Flag" />
						<span>English</span>
					</div>
					<button>
						<FiLock /> Login & Registration
					</button>
				</div>
			</div>
		</Nav>
	)
}

const Nav = styledComponents.nav`
	display: flex;
	justify-content: space-between;
	margin: 3rem 6rem;
		.brand {
			display: flex;
			align-items: center;
			.logo {
				img {
					height: 5vh;
				}
			}
			.toggle {
				display: none;
			}
		}
		.links {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 60%;
				ul {
					display: flex;
					list-style-type: none;
					gap: 2rem;

					li {
						padding: 0%, 5rem 1rem;
					}
				}
		}
`;

