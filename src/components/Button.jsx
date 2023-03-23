import React from 'react'
import styled from 'styled-components';
import { BsArrowRightShort } from 'react-icons/bs';

export default function Button(props) {
	let {icon, text} = props;
	if(icon === undefined) icon = <BsArrowRightShort />
	return (
		<div>
			<Btn>
				{icon}
				{text}
			</Btn>
		</div>
	)
}


const Btn = styled.button`
	
`;