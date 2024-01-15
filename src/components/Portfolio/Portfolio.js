import './Portfolio.css'
function Portfolio() {

    const projectLinks = [
        {
            path: "https://github.com/IEndru/how-to-learn",
            label: "Статичный сайт",
            target: "_blank",
        },
        {
            path: "https://github.com/IEndru/russian-travel",
            label: "Адаптивный сайт",
            target: "_blank",
        },
        {
            path: "https://github.com/IEndru/react-mesto-api-full-gha",
            label: "Одностраничное приложение",
            target: "_blank",
        },
    ];

    return (
        <section className ='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__projects'>
                {projectLinks.map((project, index) => (
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

