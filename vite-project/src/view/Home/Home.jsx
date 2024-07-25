import Navbar from '../../components/Navbar/Navbar';
import './Home.css';

const Home = () => {
    return (
        <div>
          
            <div className="content">
                <section id="home">Contenido de Inicio</section>
                <section id="about">Contenido de Acerca de</section>
                <section id="services">Contenido de Servicios</section>
                <section id="contact">Contenido de Contacto</section>
            </div>
        </div>
    );
}

export default Home;