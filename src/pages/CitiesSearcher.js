import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import CitiesTable from '../components/CitiesTable';
import { useParams } from "react-router-dom";

const CitiesSearcher = () => {
    // on recupere l'id depuis l'url
    let { id } = useParams();

    return (
        <div>
            <Logo />
            <Navbar />
            <CitiesTable id={id} />
        </div >
    );
};

export default CitiesSearcher;