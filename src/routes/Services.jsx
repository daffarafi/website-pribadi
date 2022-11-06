import { Link } from 'react-router-dom';

const Services = () => {
	return (
		<main className='container pt-28 font-Source_Sans_Pro overflow-x-hidden'>
			<section className='front-end'>
				<h2 className='font-bold text-2xl mb-4'>Front-End Developer</h2>
				<img
					src='/assets/images/frontend.svg'
					alt='HTML - CSS - JAVASCRIPT'
					className='w-4/5 mb-4'
				/>
				<h5 className='text-4xl mb-20'>
					I'm ready to be Front-End Developer and built your website
					using
					<span className='text-orange-400'> HTML</span>,{' '}
					<span className='text-blue-300'>CSS</span>, and
					<span className='text-yellow-200'> JavaScript</span>.
				</h5>
				<div className='relative text-xl font-light mb-24 border-2 border-[#2EE0D0] px-6 py-10 text-center rounded-xl'>
					<div className='absolute h-[90%] w-14 bg-[#061223] -top-1 -left-1'></div>{' '}
					<span className='absolute -left-2 -top-10 text-9xl '>
						“
					</span>
					<blockquote className='relative z-20 mb-1'>
						<span className='text-orange-400'>HTML</span> or
						<span className='text-orange-400'>
							{' '}
							Hypertext Markup Language{' '}
						</span>
						is the standard markup language for documents designed
						to be displayed in a web browser. It can be assisted by
						technologies such as
						<span className='text-blue-300'>
							{' '}
							Cascading Style Sheets (CSS){' '}
						</span>
						and scripting languages such as
						<span className='text-yellow-200'> JavaScript</span>.
					</blockquote>
					<span className='font-normal text-2xl'>
						-wikipedia.com-
					</span>
					<div className='absolute h-[90%] w-14 bg-[#061223] -bottom-1 -right-1'></div>{' '}
					<span className='absolute -right-2 -bottom-5 text-9xl'>
						„
					</span>
				</div>
				<div className='relative text-xl font-light mb-24 border-2 border-[#2EE0D0] px-6 py-10 text-center rounded-xl'>
					<div className='absolute h-[90%] w-14 bg-[#061223] -top-1 -left-1'></div>{' '}
					<span className='absolute -left-2 -top-10 text-9xl '>
						“
					</span>
					<blockquote className='relative z-20 mb-1'>
						<span className='text-blue-300'>CSS </span> stands for
						<span className='text-blue-300'>
							{' '}
							Cascading Style Sheets{' '}
						</span>
						. It is the language for describing the presentation of
						Web pages, including
						<span className='text-cyan-300'>
							{' '}
							colours, layout, and fonts{' '}
						</span>
						, thus making our web pages
						<span className='text-cyan-300'> presentable </span> to
						the users.
					</blockquote>
					<span className='font-normal text-2xl'>
						-www.mygreatlearning.com-
					</span>
					<div className='absolute h-[90%] w-14 bg-[#061223] -bottom-1 -right-1'></div>{' '}
					<span className='absolute -right-2 -bottom-5 text-9xl'>
						„
					</span>
				</div>
				<div className='relative text-xl font-light mb-24 border-2 border-[#2EE0D0] px-6 py-10 text-center rounded-xl'>
					<div className='absolute h-[90%] w-14 bg-[#061223] -top-1 -left-1'></div>{' '}
					<span className='absolute -left-2 -top-10 text-9xl '>
						“
					</span>
					<blockquote className='relative z-20 mb-1'>
						<span className='text-yellow-200'>JavaScript</span> is
						commonly used for
						<span className='text-cyan-300'>
							{' '}
							creating web pages
						</span>
						. It allows us to add
						<span className='text-cyan-300'>
							{' '}
							dynamic behavior
						</span>{' '}
						to the webpage and add
						<span className='text-cyan-300'>
							{' '}
							special effects
						</span>{' '}
						to the webpage.
					</blockquote>
					<span className='font-normal text-2xl'>
						-www.javatpoint.com-
					</span>
					<div className='absolute h-[90%] w-14 bg-[#061223] -bottom-1 -right-1'></div>{' '}
					<span className='absolute -right-2 -bottom-5 text-9xl'>
						„
					</span>
				</div>
				<h5 className='uppercase text-4xl mb-20'>
					Other technologies and frameworks
				</h5>
			</section>
			<section className='web-design'>
				<h2 className='font-bold text-2xl mb-4'>Web Design</h2>
			</section>
			<section className='contact text-center min-h-screen flex flex-col justify-center items-center'>
				<h5 className='text-4xl mb-2'>Any Questions?</h5>
				<h1 className='uppercase text-5xl mb-4'>Contact me now!</h1>
				<div className='link flex gap-3'>
					<Link
						to={'/review'}
						className='w-fit border-[#2EE0D0] border-2 rounded-md bg-gradient-to-r from-[#2EE0D0] to-[#2477EC] overflow-hidden group '
					>
						<span className='block px-5 py-2 bg-[#061223] text-[#2EE0D0] group-hover:px-6 group-hover:bg-transparent group-hover:text-slate-50 transition-all duration-300'>
							Review
						</span>
					</Link>
					<Link
						to={'/contact'}
						className='w-fit border-[#2EE0D0] border-2 rounded-md bg-gradient-to-r from-[#2EE0D0] to-[#2477EC] overflow-hidden group '
					>
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
							strokeWidth='1.5'
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
							strokeWidth='1.5'
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
							strokeWidth='1.5'
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
							strokeWidth='1.5'
						/>
					</svg>
				</div>
			</section>
		</main>
	);
};

export default Services;
