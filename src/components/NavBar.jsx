import { Link } from "react-router-dom";


export default function NavBar(){
	return (
		<>
			<nav className="flex items-center justify-between lg:h-20 sm:h-12 max-w-full p-8">
				<Link to={'/'}>
					<div className="ml-5">
						<h1 className="text-red-500 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer -tracking-wide">
							SHOPPING CART
						</h1>
					</div>
				</Link>
				<ul className="flex list-none items-center space-x-6 text-gray-700 font-semibold">
					<Link to={'/'}>
						<li className="cursor-pointer">Home</li>
					</Link>
					<Link to={'/cart'}>
						<li className="cursor-pointer">Cart</li>
					</Link>
				</ul>
			</nav>
		</>
	);
}