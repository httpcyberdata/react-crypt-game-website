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
							Contact
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
						padding: 0.5rem 1rem;
						transition: .3s ease-in-out;
						border-radius: 0.3rem;

						&:first-of-type, &:hover {
							background-color: var(--primary-color);
							a {
								color: black;
							}
						}
 						a {
							text-decoration: none;
							color: white;
							font-weight: bold;
							transition: .3s ease-in-out;
						}
					}
				}
				.login-btn {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 2rem;
					.flag {
						display: flex;
						justify-content: center;
						gap: 0.3rem;
						align-items: center;
						font-weight: bold;
					}
					button {
						border: 1px solid var(--primary-color);
						background-color: transparent;
						color: white;
						border-radius: 0.3rem;
						padding: 0.8rem;
						display: flex;
						justify-content: center;
						align-items: center;
						gap: 0.7rem;
						font-weight: bold;
						cursor: pointer;
						svg {
							font-weight: bold;
							font-size: 1.1rem;
						}
					}
				}
		}
`;

