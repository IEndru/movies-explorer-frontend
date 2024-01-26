import './Portfolio.css'
import { ProjectLinks } from  '../../utils/constans';
function Portfolio() {

    return (
        <section className ='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__projects'>
                {ProjectLinks.map((project, index) => (
                    <li className='portfolio__project' key={index}>
                        <a className='portfolio__link' target={project.target} href={project.path}>
                            {project.label}
                        </a>
                        <a className='portfolio__link-arrow' target={project.target} href={project.path}>↗</a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Portfolio;

