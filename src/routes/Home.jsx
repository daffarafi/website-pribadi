import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<main>
			<div className='home container min-h-screen flex flex-col items-center justify-center'>
				<Link className='about  my-8'>
					<h1 className='text-6xl'>About</h1>
					<h3 className='text-xl'>Anything about me</h3>
				</Link>
				<Link className='services my-8'>
					<h1 className='text-6xl'>Services</h1>
					<h3 className='text-xl'>What i can do for you</h3>
				</Link>
				<Link className='connect my-8'>
					<h1 className='text-6xl'>Connect</h1>
					<h3 className='text-xl'>Connect with me</h3>
				</Link>
			</div>
		</main>
	);
};

export default Home;
