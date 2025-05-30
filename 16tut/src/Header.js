import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from './hooks/useWindowSize';

const Header = ({ title }) => {
    const { width } = useWindowSize();

    return (
        <header className="Header">
            <h1>{title}</h1>
            {width < 768 ? <FaMobileAlt title="Mobile" />
                : width < 992 ? <FaTabletAlt title="Tablet" />
                    : <FaLaptop title="Laptop" />}
        </header>
    )
}

export default Header