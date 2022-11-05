import { useState } from 'react';
import { send } from '@emailjs/browser';

const Contact = () => {
	const [message, setMessage] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);
	const [messageSent, setMessageSent] = useState(false);

	const contactSubmitHandler = async (event) => {
		event.preventDefault();
		setLoading(true);
		try {
			await send(
				'service_0bj63nc',
				'template_sm9bl85',
				message,
				'uBSLPHy2UWFFSH8_G'
			);
			setMessage({
				firstName: '',
				lastName: '',
				email: '',
				message: '',
			});
			setLoading(false);
			setMessageSent(true);
		} catch (err) {
			console.log(err);
			setLoading(false);
			setMessageSent(false);
		}
	};

	const changeHandler = (event) => {
		event.preventDefault();
		setMessage({ ...message, [event.target.name]: event.target.value });
	};

	return (
		<main className='container pt-28 font-Josefin_Sans overflow-x-hidden'>
			<h2 className='font-bold uppercase text-4xl mb-8 text-center font-Source_Sans_Pro'>
				Get in touch
			</h2>
			<h5 className='text-3xl mb-4 font-normal'>
				If you have a project in mind or simply interested in finding
				out more, please fill the form below.
			</h5>
			<form
				onSubmit={contactSubmitHandler}
				className='flex flex-col text-xl gap-8'
			>
				<div className='name grid gap-8'>
					<label className='flex flex-col'>
						<span>
							First Name<span className='text-[#ff4444]'>*</span>
						</span>
						<input
							type='text'
							name='firstName'
							onChange={changeHandler}
							value={message.firstName}
							placeholder='Daffa'
							className='bg-[#1c3646] opacity-60 p-4 rounded-lg'
						/>
					</label>
					<label className='flex flex-col'>
						<span>
							Last Name<span className='text-[#ff4444]'>*</span>
						</span>
						<input
							type='text'
							name='lastName'
							onChange={changeHandler}
							value={message.lastName}
							placeholder='Rafi'
							className='bg-[#1c3646] opacity-60 p-4 rounded-lg'
						/>
					</label>
				</div>
				<label className='flex flex-col'>
					<span>
						Email Address<span className='text-[#ff4444]'>*</span>
					</span>
					<input
						type='email'
						name='email'
						onChange={changeHandler}
						value={message.email}
						placeholder='youremail@example.com'
						className='bg-[#1c3646] opacity-60 p-4 rounded-lg'
					/>
				</label>
				<label className='flex flex-col'>
					<span>
						Message<span className='text-[#ff4444]'>*</span>
					</span>
					<textarea
						name='message'
						onChange={changeHandler}
						value={message.message}
						placeholder="You're the best Web Developer Ever!"
						className='bg-[#1c3646] opacity-60 p-4 rounded-lg h-36 overflow-hidden'
					/>
				</label>
				{loading ? (
					<div className='flex font-bold w-fit text-2xl '>
						<span className='block w-7 h-7 flex justify-center items-center'>
							<div className='absolute animate-spin'>
								<svg
									width='28'
									height='28'
									viewBox='0 0 28 28'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='scale-50  '
								>
									<path
										d='M25.25 14C25.25 11.775 24.5902 9.59989 23.354 7.74984C22.1179 5.89979 20.3609 4.45785 18.3052 3.60636C16.2495 2.75487 13.9875 2.53209 11.8052 2.96617C9.62295 3.40025 7.61839 4.47171 6.04505 6.04505C4.47171 7.61839 3.40025 9.62295 2.96617 11.8052C2.53209 13.9875 2.75487 16.2495 3.60636 18.3052C4.45785 20.3609 5.89979 22.1179 7.74984 23.354C9.59989 24.5902 11.775 25.25 14 25.25'
										stroke='#2EE0D0'
										stroke-width='4.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</div>
							<div className='absolute animate-[reversespin6_1s_linear_infinite]'>
								<svg
									width='46'
									height='46'
									viewBox='0 0 46 46'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='scale-50'
								>
									<path
										d='M2.75 23C2.75 28.3706 4.88348 33.5213 8.68109 37.3189C12.4787 41.1165 17.6294 43.25 23 43.25C28.3706 43.25 33.5213 41.1165 37.3189 37.3189C41.1165 33.5213 43.25 28.3706 43.25 23C43.25 17.6294 41.1165 12.4787 37.3189 8.68109C33.5213 4.88348 28.3706 2.75 23 2.75'
										stroke='#2EE0D0'
										stroke-width='4.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</div>
						</span>{' '}
						Loading{' '}
						<span className='mx-2 animate-[blink1_1s_linear_infinite]'>
							.
						</span>
						<span className='mr-2 animate-[blink2_1s_linear_infinite]'>
							.
						</span>
						<span className='animate-[blink3_1s_linear_infinite] text-[#2EE0D0]'>
							.
						</span>
					</div>
				) : (
					<button
						type='submit'
						className='font-bold w-fit text-2xl group'
					>
						Submit{' '}
						<span className='group-hover:ml-3 transition-all duration-300'>
							➜
						</span>
					</button>
				)}
			</form>
		</main>
	);
};

export default Contact;
