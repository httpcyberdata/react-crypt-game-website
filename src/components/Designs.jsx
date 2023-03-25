import React from 'react'
import styled from 'styled-components';

import design1 from '../assets/design1.png';
import design2 from '../assets/design2.png';
import design3 from '../assets/design3.png';
import design4 from '../assets/design4.png';
import design5 from '../assets/design5.png';
import design6 from '../assets/design6.png';
import design7 from '../assets/design7.png';
import design8 from '../assets/design8.png';

export default function Designs() {
	return (
		<Div>
			<img src={design1} alt="design1" className="design1" />
			<img src={design2} alt="design2" className="design2" />
			<img src={design3} alt="design3" className="design3" />
			<img src={design4} alt="design4" className="design4" />
			<img src={design5} alt="design5" className="design5" />
			<img src={design6} alt="design6" className="design6" />
			<img src={design7} alt="design7" className="design7" />
			<img src={design8} alt="design8" className="design8" />
		</Div>
	)
}


const Div = styled.div`
	
`;