/* eslint-disable react/no-danger */
import { interpolate, useCurrentFrame } from 'remotion';

export const Formula: React.FC<{
	equation: string;
	values: {
		x: number;
		y: number;
		startTime: number;
	};
	margin?: number;
	fadeTime?: number;
	showLength?: number;
}> = ({ equation, values, margin = 100, fadeTime = 20, showLength = 50 }) => {
	const frame = useCurrentFrame();

	const { x, y, startTime } = values;
	const t = startTime * 100;

	const op = interpolate(
		frame,
		[t, t + fadeTime, t + showLength, t + showLength + fadeTime],
		[0, 1, 1, 0]
	);
  
	const sc = interpolate(frame, [t + fadeTime, t + showLength], [1, 1.5]);

	return (
		<div
			dangerouslySetInnerHTML={{ __html: equation }}
			style={{
				transform: `scale(${sc})`,
				opacity: op,
				position: 'absolute',
				left: x * (1920 - margin),
				top: y * (1080 - margin),
			}}
		/>
	);
};
