import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<main>
			<div className='home container min-h-screen flex flex-col items-center justify-center'>
				<Link className='about h-20 my-8 text-center relative group '>
					<h1 className='text-6xl font-extralight group-hover:text-7xl transition-all duration-300 select-none'>
						About
					</h1>
					<h3 className='text-md font-bold uppercase select-none'>
						Anything about me <span className='text-2xl'>.</span>
					</h3>
					<div className='absolute -right-9 top-2 w-8 group-hover:-right-16 group-hover:w-12 group-hover:animate-spin transition-all duration-300'>
						<svg
							viewBox='0 0 54 54'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M40.4167 24.6667H29.3333V13.5833C29.3333 13.2625 29.0708 13 28.75 13H25.25C24.9292 13 24.6667 13.2625 24.6667 13.5833V24.6667H13.5833C13.2625 24.6667 13 24.9292 13 25.25V28.75C13 29.0708 13.2625 29.3333 13.5833 29.3333H24.6667V40.4167C24.6667 40.7375 24.9292 41 25.25 41H28.75C29.0708 41 29.3333 40.7375 29.3333 40.4167V29.3333H40.4167C40.7375 29.3333 41 29.0708 41 28.75V25.25C41 24.9292 40.7375 24.6667 40.4167 24.6667Z'
								className='fill-[#2EE0D0] group-hover:fill-[#FF4444] transition-all duration-300'
							/>
							<path
								d='M27 3.375C13.9535 3.375 3.375 13.9535 3.375 27C3.375 40.0465 13.9535 50.625 27 50.625C40.0465 50.625 50.625 40.0465 50.625 27C50.625 13.9535 40.0465 3.375 27 3.375ZM27 46.6172C16.1684 46.6172 7.38281 37.8316 7.38281 27C7.38281 16.1684 16.1684 7.38281 27 7.38281C37.8316 7.38281 46.6172 16.1684 46.6172 27C46.6172 37.8316 37.8316 46.6172 27 46.6172Z'
								className='fill-[#2EE0D0] group-hover:fill-[#FF4444] transition-all duration-300'
							/>
						</svg>
					</div>
				</Link>
				<Link className='services h-20 my-8 text-center relative group'>
					<h1 className='text-6xl font-extralight group-hover:text-7xl transition-all duration-300 select-none'>
						Services
					</h1>
					<h3 className='text-md font-bold uppercase select-none'>
						What i can do for you{' '}
						<span className='text-2xl'>.</span>
					</h3>
					<div className='absolute -right-9 top-2 w-8 group-hover:-right-16 group-hover:w-12 group-hover:animate-[clocking_0.5s_ease-out_infinite] transition-all duration-300'>
						<svg
							viewBox='0 0 54 54'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M40.4167 24.6667H29.3333V13.5833C29.3333 13.2625 29.0708 13 28.75 13H25.25C24.9292 13 24.6667 13.2625 24.6667 13.5833V24.6667H13.5833C13.2625 24.6667 13 24.9292 13 25.25V28.75C13 29.0708 13.2625 29.3333 13.5833 29.3333H24.6667V40.4167C24.6667 40.7375 24.9292 41 25.25 41H28.75C29.0708 41 29.3333 40.7375 29.3333 40.4167V29.3333H40.4167C40.7375 29.3333 41 29.0708 41 28.75V25.25C41 24.9292 40.7375 24.6667 40.4167 24.6667Z'
								className='fill-[#2EE0D0] group-hover:fill-[#FF4444] transition-all duration-300'
							/>
							<path
								d='M27 3.375C13.9535 3.375 3.375 13.9535 3.375 27C3.375 40.0465 13.9535 50.625 27 50.625C40.0465 50.625 50.625 40.0465 50.625 27C50.625 13.9535 40.0465 3.375 27 3.375ZM27 46.6172C16.1684 46.6172 7.38281 37.8316 7.38281 27C7.38281 16.1684 16.1684 7.38281 27 7.38281C37.8316 7.38281 46.6172 16.1684 46.6172 27C46.6172 37.8316 37.8316 46.6172 27 46.6172Z'
								className='fill-[#2EE0D0] group-hover:fill-[#FF4444] transition-all duration-300'
							/>
						</svg>
					</div>
				</Link>
				<Link className='connect h-20 my-8 text-center relative group'>
					<h1 className='text-6xl font-extralight group-hover:text-7xl transition-all duration-300 select-none'>
						Connect
					</h1>
					<h3 className='text-md font-bold uppercase select-none'>
						Connect with me <span className='text-2xl'>.</span>
					</h3>
					<div className='absolute -right-11 top-2 w-8 group-hover:-right-16 group-hover:w-12 group-hover:animate-[wiggle_1s_ease-in-out_infinite] transition-all duration-300'>
						<svg
							viewBox='0 0 54 54'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M40.4167 24.6667H29.3333V13.5833C29.3333 13.2625 29.0708 13 28.75 13H25.25C24.9292 13 24.6667 13.2625 24.6667 13.5833V24.6667H13.5833C13.2625 24.6667 13 24.9292 13 25.25V28.75C13 29.0708 13.2625 29.3333 13.5833 29.3333H24.6667V40.4167C24.6667 40.7375 24.9292 41 25.25 41H28.75C29.0708 41 29.3333 40.7375 29.3333 40.4167V29.3333H40.4167C40.7375 29.3333 41 29.0708 41 28.75V25.25C41 24.9292 40.7375 24.6667 40.4167 24.6667Z'
								className='fill-[#2EE0D0] group-hover:fill-[#FF4444] transition-all duration-300'
							/>
							<path
								d='M27 3.375C13.9535 3.375 3.375 13.9535 3.375 27C3.375 40.0465 13.9535 50.625 27 50.625C40.0465 50.625 50.625 40.0465 50.625 27C50.625 13.9535 40.0465 3.375 27 3.375ZM27 46.6172C16.1684 46.6172 7.38281 37.8316 7.38281 27C7.38281 16.1684 16.1684 7.38281 27 7.38281C37.8316 7.38281 46.6172 16.1684 46.6172 27C46.6172 37.8316 37.8316 46.6172 27 46.6172Z'
								className='fill-[#2EE0D0] group-hover:fill-[#FF4444] transition-all duration-300'
							/>
						</svg>
					</div>
				</Link>
			</div>
		</main>
	);
};

export default Home;
