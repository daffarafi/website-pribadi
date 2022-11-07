import { Link } from 'react-router-dom';

const Review = () => {
	return (
		<main className='container overflow-x-hidden text-center min-h-screen flex flex-col justify-center'>
			<h5 className='text-4xl mb-4 md:text-5xl lg:text-6xl'>
				There are no reviews yet :{'('}
			</h5>
			<p className='text-xl mb-4 xl:text-2xl'>
				Be my first client and please let me know how i'm doing by
				leaving me a review! :{')'}
			</p>
			<div className='links flex gap-3 justify-center'>
				<Link
					to={'/portfolio'}
					className='w-fit border-[#2EE0D0] border-2 rounded-md bg-gradient-to-r from-[#2EE0D0] to-[#2477EC] overflow-hidden group '
				>
					<span className='block px-5 py-2 md:px-6 md:py-2.5 md:text-lg lg:px-7 lg:py-3 lg:text-xl bg-[#061223] text-[#2EE0D0]  font-Josefin_Sans group-hover:px-6 md:group-hover:px-8 lg:group-hover:px-9 group-hover:bg-transparent group-hover:text-slate-50 transition-all duration-300'>
						Portfolio
					</span>
				</Link>
				<Link
					to={'/contact'}
					className='w-fit border-[#2EE0D0] border-2 rounded-md bg-gradient-to-r from-[#2EE0D0] to-[#2477EC] overflow-hidden group '
				>
					<span className='block px-5 py-2 md:px-6 md:py-2.5 md:text-lg lg:px-7 lg:py-3 lg:text-xl bg-[#061223] text-[#2EE0D0]  font-Josefin_Sans group-hover:px-6 md:group-hover:px-8 lg:group-hover:px-9 group-hover:bg-transparent group-hover:text-slate-50 transition-all duration-300'>
						Contact
					</span>
				</Link>
			</div>
		</main>
	);
};

export default Review;
