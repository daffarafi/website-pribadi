import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<main className='container overflow-x-hidden text-center min-h-screen flex flex-col gap-4 justify-center'>
			<h1 className='font-bold text-3xl'>Oops!</h1>
			<h2 className='uppercase text-5xl'>Page not found</h2>
			<p className='text-xl'>
				Sorry, the page you're looking for doesn't exist.
				<br />
				If you think something is broken, report a problem.
			</p>
			<div className='links flex gap-3 justify-center mt-4'>
				<Link
					to={'/'}
					className='w-fit border-[#2EE0D0] border-2 rounded-md bg-gradient-to-r from-[#2EE0D0] to-[#2477EC] overflow-hidden group '
				>
					<span className='block px-5 py-2 bg-[#061223] text-[#2EE0D0] group-hover:px-6 group-hover:bg-transparent group-hover:text-slate-50 transition-all duration-300'>
						Home
					</span>
				</Link>
				<Link
					to={'/contact'}
					className='w-fit border-[#2EE0D0] border-2 rounded-md bg-gradient-to-r from-[#2EE0D0] to-[#2477EC] overflow-hidden group '
				>
					<span className='block px-5 py-2  bg-[#061223] text-[#2EE0D0] group-hover:px-6 group-hover:bg-transparent group-hover:text-slate-50 transition-all duration-300'>
						Contact us
					</span>
				</Link>
			</div>
		</main>
	);
};

export default ErrorPage;
