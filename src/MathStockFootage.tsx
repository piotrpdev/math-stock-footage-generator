/* eslint-disable react/no-danger */
import { useState, useRef, useEffect } from 'react';
import {
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	random
} from 'remotion';

import katex from 'katex';
import 'katex/dist/katex.min.css';
import { Formula } from './Formula';

export const MathStockFootage: React.FC<{
	listOfEquations: string[];
}> = ({ listOfEquations }) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const videoSeed = useRef((new Date()).toISOString()); // Optional random seed

	const opacity = interpolate(
		frame,
		[0, 20, videoConfig.durationInFrames - 20, videoConfig.durationInFrames],
		[0, 1, 1, 0]
	);

	const equations = useRef<string[]>([]);

	const [randomValues] = useState(() =>
		new Array(listOfEquations.length).fill(true).map((a, i) => {
			return {
				x: random(`x-${i}${videoSeed.current}`),
				y: random(`y-${i}${videoSeed.current}`),
				startTime: random(`startTime-${i}${videoSeed.current}`),
			};
		})
	);

	useEffect(() => {
		equations.current = listOfEquations.map((equation) =>
			katex.renderToString(equation)
		);
	}, [listOfEquations]);

	return (
		<div style={{ flex: 1, backgroundColor: 'white' }}>
			<div style={{ opacity }}>
				<Sequence from={0}>
					<div
						style={{
							fontFamily: 'Helvetica, Arial',
							fontSize: 40,
							width: '100%',
						}}
					>
						{equations.current.map((eq, i) => (
							<Formula
								key={randomValues[i].x}
								equation={eq}
								values={randomValues[i]}
							/>
						))}
					</div>
				</Sequence>
			</div>
		</div>
	);
};
