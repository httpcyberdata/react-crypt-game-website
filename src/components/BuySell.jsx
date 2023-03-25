import React from 'react'
import styled from 'styled-components';
import buySell1 from '../assets/buy-sell-1.png';
import buySell2 from '../assets/buy-sell-2.png';
import buySell3 from '../assets/buy-sell-3.png';

export default function BuySell() {
	return (
		<Section>
			<div className="row">
				<div className="col" id="buySell1">
					<img src={buySell1} alt="Buy Sell"/>
					<div class="text">
						<h2>
							Buy and Sell Virtual <span>Lands</span> and
							<span>Properties</span>
						</h2>
					</div>
				</div>		
				<div className="col" id="buySell2">
					<div class="text">
						<h2>
							Buy and Sell Virtual 
							<span>Virtual Resources</span>
							and Businesses
						</h2>
					</div>
					<img src={buySell2} alt="Buy Sell"/>
				</div>		
				<div className="col" id="buySell2">
				<img src={buySell3} alt="Buy Sell"/>
					<div class="text">
						<h2>
							Earn <span>REKK</span>,  a new kind of reality-backed cryptocurrency
						</h2>
					</div>
				</div>
			</div>
		</Section>
	)
}

const Section = styled.section`
	margin: 6rem 10rem;
	.row {
		display: flex;
		gap: 8rem;
		flex-direction: column;
		.col {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 2rem;
			img {
				height: 60vh;
			}
			h2 {
				font-size: 3rem;
				span {
					color: var(--primary-color);
				}
			}
		}
	}
	@media screen and (min-width: 280px) and (max-width: 1080px) {
		display: none;
	}
`;