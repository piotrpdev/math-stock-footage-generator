import {Composition} from 'remotion';
import {MathStockFootage} from './MathStockFootage';

const listOfEquations = [
	"\\cos (2\\theta) = \\cos^2 \\theta - \\sin^2 \\theta",
	"\\sin (2\\theta) = 2 \\cos \\theta \\sin \\theta",
	"\\sin^2 \\theta + \\cos^2 \\theta = 1",
	"k_{n+1} = n^2 + k_n^2 - k_{n-1}",
	"f(n) = n^5 + 4n^2 + 2 |_{n=17}",
	"\\sqrt[n]{1+x+x^2+x^3+\\dots+x^n}",
	"\\int y\\, \\mathrm{d}x",
	"\\alpha, \\Alpha, \\beta, \\Beta, \\gamma, \\Gamma, \\pi, \\Pi, \\phi, \\varphi, \\mu, \\Phi",
	"a \\bmod b",
	"\\frac{n!}{k!(n-k)!} = \\binom{n}{k}",
	"\\frac{\\frac{1}{x}+\\frac{1}{y}}{y-z}",
]

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="MathStockFootage"
				component={MathStockFootage}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					listOfEquations
				}}
			/>
		</>
	);
};
