import { Link } from 'react-router-dom';

const About = () => {
	return (
		<main className='container pt-28 font-Source_Sans_Pro'>
			<section className='about'>
				<h2 className='font-bold text-2xl mb-4'>About Me.</h2>
				<figure className='shape w-80 mx-auto mb-4'>
					<img src='/assets/images/profile.jpeg' alt='Profile' />
				</figure>
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
			<section className='services text-center min-h-screen flex flex-col justify-center items-center'>
				<h1 className='uppercase text-5xl mb-4'>
					What can i do for you?
				</h1>
				<Link className='w-fit border-[#2EE0D0] border-2 rounded-md bg-gradient-to-r from-[#2EE0D0] to-[#2477EC] overflow-hidden group '>
					<span className='block px-5 py-2 bg-[#061223] text-[#2EE0D0] group-hover:px-6 group-hover:bg-transparent group-hover:text-slate-50 transition-all duration-300'>
						Web Design
					</span>
				</Link>
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
			</section>
		</main>
	);
};

export default About;
