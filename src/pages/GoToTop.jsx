
import { FaAngleUp } from 'react-icons/fa';


export default function GotoTop() {
	window.onscroll = () => {
		scrollFunction();
	};

	const scrollTopFunction = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const scrollFunction = () => {
		var mybutton = document.getElementById('topBtn');
		if (
			document.body.scrollTop > 760 ||
			document.documentElement.scrollTop > 760
		) {
			if (mybutton) {
				mybutton.style.display = 'block';
			}
		} else {
			if (mybutton) {
				mybutton.style.display = 'none';
			}
		}
	};

	return (
		<div>
			<button id="topBtn" title="Go to top" onClick={scrollTopFunction} className='back-to-top'>
				<FaAngleUp size="1.5em" />
			</button>
		</div>
	);
}