import { Link, Outlet } from 'react-router-dom';

const Root = () => {
	return (
		<div className='w-full h-screen'>
			<div className='bg fixed -z-50 w-full h-full flex justify-center items-center'>
				<div className='shape absolute w-60 animate-[spin-6_18s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20'></div>
				<div className='shape absolute w-[17.25rem] animate-[spin-12_20s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20'></div>
				<div className='shape absolute w-[18.75rem] animate-[reverse-spin-6_22s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20'></div>
				<div className='shape absolute w-[21rem] animate-[reverse-spin-12_24s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20'></div>
				<div className='shape absolute w-[22.5rem] animate-[spin-6_24s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20'></div>
				<div className='shape absolute w-[26.5] animate-[spin-12_24s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20'></div>
				<div className='shape absolute w-[28rem] animate-[reverse-spin-6_24s_linear_infinite] aspect-square bg-gradient-to-b from-[#2d49ff] to-[#0DCCFF] opacity-20'></div>
			</div>
			<nav className='fixed top-0 w-full flex justify-between'>
				<Link>Menu</Link>
				<Link>Daffa Rafi</Link>
				<Link>Portfolio</Link>
			</nav>
			<Outlet />
			<div className='fixed bottom-0 w-full undernav flex justify-between'>
				<Link>Review</Link>
				<Link>★</Link>
			</div>
		</div>
	);
};

export default Root;
