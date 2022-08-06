import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
	return (
		<div className='flex flex-col'>
			<Header />
			<main>{children}</main>
			{/* <Footer /> */}
		</div>
	);
}

export default Layout;
