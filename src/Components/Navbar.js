import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className={'flex justify-between items-center bg-black'}>
            <img src={'https://www.designhill.com/design-blog/wp-content/uploads/2019/04/14-1.jpg'} alt={'Company logo'} width={'150'} height="300" />
            <div>
                <Link to="/" className={'mr-4 p-6 text-white hover:text-gray-400'}>Home</Link>
                <Link to="/about-me" className={'mr-4 p-6 text-white hover:text-gray-400'}>About Me</Link>
                <Link to="/contact" className={'mr-4 p-6 text-white hover:text-gray-400'}>Contact</Link>
            </div>
        </nav>
    )
}


export default Navbar;