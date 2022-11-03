import { Link } from 'react-router-dom';

const Root = () => {
	return (
		<div className='w-full h-screen bg-[#061223] '>
			<nav className='w-full '>
				<Link>Menu</Link>
				<Link>Daffa Rafi</Link>
				<Link>Portfolio</Link>
			</nav>
			<h1>Hello Root!</h1>
		</div>
	);
};

export default Root;
