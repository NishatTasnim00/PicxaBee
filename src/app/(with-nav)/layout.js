// import PrivateRoute from "@/utils/PrivateRoute";

export default function NavLayout({ children }) {

	return (
		<section className="">
			

			{/* <PrivateRoute> */}
				<div className="px-2  lg:px-10 dark:text-white">{children}</div>
			{/* </PrivateRoute> */}

		</section>
	);
}