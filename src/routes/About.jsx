import { Link } from 'react-router-dom';

const About = () => {
	return (
		<main className='container pt-28 font-Source_Sans_Pro overflow-x-hidden'>
			<section className='about'>
				<h2 className='font-bold text-2xl mb-4'>About Me.</h2>
				<div className='porofile-img flex justify-center items-center'>
					<figure className='shape w-80 mx-auto mb-4'>
						<img src='/assets/images/profile.jpeg' alt='Profile' />
					</figure>
					<div className='bg absolute -z-10 flex justify-center items-center'>
						<svg
							width='421'
							height='572'
							viewBox='0 0 421 572'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='scale-90 -rotate-3 opacity-60'
						>
							<path
								d='M261.153 2L2 79.5186L41.5797 523.019L240.42 570L346.908 542.281L419 453.487L404.864 98.311L373.766 37.7055L261.153 2Z'
								className='stroke-[#4FB4F5] opacity-80'
								stroke-width='2'
							/>
						</svg>
						<svg
							width='421'
							height='572'
							viewBox='0 0 421 572'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='absolute'
						>
							<path
								d='M261.153 2L2 79.5186L41.5797 523.019L240.42 570L346.908 542.281L419 453.487L404.864 98.311L373.766 37.7055L261.153 2Z'
								className='stroke-[#4FB4F5] opacity-20'
								stroke-width='2'
							/>
						</svg>
					</div>
				</div>
				<h5 className='text-4xl mb-4'>
					I'm Daffa Rafi a Freelance Website Designer from Indonesia.
				</h5>
				<p className='text-xl mb-4'>
					Hi! My name Muhammad Daffa Rafi, 18 years old. I'm a Web
					Designer, based in Jakarta, Indonesia.
				</p>
				<p className='text-xl mb-4'>
					I love creating Interactive and Responsive Website with some
					Animation using technology such as Javascript and Bootstrap.
				</p>
				<p className='text-xl mb-4'>
					My number one priority is to help your project to grow and
					achieving, this is always making me happy.
				</p>
			</section>
			<section className='services relative text-center min-h-screen flex flex-col justify-center items-center'>
				<h1 className='uppercase text-5xl mb-4'>
					What can i do for you?
				</h1>
				<Link className='w-fit border-[#2EE0D0] border-2 rounded-md bg-gradient-to-r from-[#2EE0D0] to-[#2477EC] overflow-hidden group '>
					<span className='block px-5 py-2 bg-[#061223] text-[#2EE0D0] group-hover:px-6 group-hover:bg-transparent group-hover:text-slate-50 transition-all duration-300'>
						Web Design
					</span>
				</Link>
				<div className='bg absolute -z-10 flex justify-center items-center'>
					<svg
						width='334'
						height='528'
						viewBox='0 0 447 528'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='scale-110'
					>
						<path
							d='M277.311 2L2 73.5136L44.0475 482.658L255.286 526L368.414 500.428L445 418.513L429.983 90.8503L396.946 34.9396L277.311 2Z'
							className='stroke-[#4FB4F5]'
							stroke-width='1.5'
						/>
					</svg>
					<svg
						width='334'
						height='528'
						viewBox='0 0 447 528'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='absolute scale-[1.35] rotate-6'
					>
						<path
							d='M277.311 2L2 73.5136L44.0475 482.658L255.286 526L368.414 500.428L445 418.513L429.983 90.8503L396.946 34.9396L277.311 2Z'
							className='stroke-[#4FB4F5] opacity-60'
							stroke-width='1.5'
						/>
					</svg>
					<svg
						width='334'
						height='528'
						viewBox='0 0 447 528'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='absolute scale-[1.55] rotate-12'
					>
						<path
							d='M277.311 2L2 73.5136L44.0475 482.658L255.286 526L368.414 500.428L445 418.513L429.983 90.8503L396.946 34.9396L277.311 2Z'
							className='stroke-[#4FB4F5] opacity-40'
							stroke-width='1.5'
						/>
					</svg>
					<svg
						width='334'
						height='528'
						viewBox='0 0 447 528'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='absolute scale-[1.75] rotate-6'
					>
						<path
							d='M277.311 2L2 73.5136L44.0475 482.658L255.286 526L368.414 500.428L445 418.513L429.983 90.8503L396.946 34.9396L277.311 2Z'
							className='stroke-[#4FB4F5] opacity-25'
							stroke-width='1.5'
						/>
					</svg>
				</div>
			</section>
			<section className='portfolio flex flex-col'>
				<h2 className='font-bold text-2xl mb-4'>My Portfolio.</h2>
				<h5 className='text-4xl mb-8'>
					These are some of the projects that I've worked on to
					completion with some of the technologies.
				</h5>
				<Link className='w-fit border-[#2EE0D0] border-2 rounded-md bg-gradient-to-r from-[#2EE0D0] to-[#2477EC] overflow-hidden group '>
					<span className='block px-5 py-2 bg-[#061223] text-[#2EE0D0] group-hover:px-6 group-hover:bg-transparent group-hover:text-slate-50 transition-all duration-300'>
						Portfolio
					</span>
				</Link>
			</section>
			<section className='contact text-center min-h-screen flex flex-col justify-center items-center'>
				<h5 className='text-4xl uppercase mb-2'>Don't be shy!</h5>
				<h1 className='uppercase text-5xl mb-4'>
					Get in touch with me!
				</h1>
				<div className='link flex gap-3'>
					<Link className='w-fit border-[#2EE0D0] border-2 rounded-md bg-gradient-to-r from-[#2EE0D0] to-[#2477EC] overflow-hidden group '>
						<span className='block px-5 py-2 bg-[#061223] text-[#2EE0D0] group-hover:px-6 group-hover:bg-transparent group-hover:text-slate-50 transition-all duration-300'>
							Review
						</span>
					</Link>
					<Link className='w-fit border-[#2EE0D0] border-2 rounded-md bg-gradient-to-r from-[#2EE0D0] to-[#2477EC] overflow-hidden group '>
						<span className='block px-5 py-2 bg-[#061223] text-[#2EE0D0] group-hover:px-6 group-hover:bg-transparent group-hover:text-slate-50 transition-all duration-300'>
							Contact
						</span>
					</Link>
				</div>
				<div className='bg absolute -z-10 flex justify-center items-center'>
					<svg
						width='334'
						height='528'
						viewBox='0 0 447 528'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='scale-90'
					>
						<path
							d='M277.311 2L2 73.5136L44.0475 482.658L255.286 526L368.414 500.428L445 418.513L429.983 90.8503L396.946 34.9396L277.311 2Z'
							className='stroke-[#4FB4F5]'
							stroke-width='1.5'
						/>
					</svg>
					<svg
						width='334'
						height='528'
						viewBox='0 0 447 528'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='absolute rotate-6'
					>
						<path
							d='M277.311 2L2 73.5136L44.0475 482.658L255.286 526L368.414 500.428L445 418.513L429.983 90.8503L396.946 34.9396L277.311 2Z'
							className='stroke-[#4FB4F5] opacity-60'
							stroke-width='1.5'
						/>
					</svg>
					<svg
						width='334'
						height='528'
						viewBox='0 0 447 528'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='absolute scale-110 rotate-12'
					>
						<path
							d='M277.311 2L2 73.5136L44.0475 482.658L255.286 526L368.414 500.428L445 418.513L429.983 90.8503L396.946 34.9396L277.311 2Z'
							className='stroke-[#4FB4F5] opacity-40'
							stroke-width='1.5'
						/>
					</svg>
					<svg
						width='334'
						height='528'
						viewBox='0 0 447 528'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='absolute scale-125 rotate-6'
					>
						<path
							d='M277.311 2L2 73.5136L44.0475 482.658L255.286 526L368.414 500.428L445 418.513L429.983 90.8503L396.946 34.9396L277.311 2Z'
							className='stroke-[#4FB4F5] opacity-25'
							stroke-width='1.5'
						/>
					</svg>
				</div>
			</section>
		</main>
	);
};

export default About;
