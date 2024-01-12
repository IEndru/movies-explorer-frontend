import './AboutProject.css'

function AboutProject() {
    return (
        <section className='project' id='aboutProject'>
            <h2 className='project__title'>О проекте</h2>
            <div className="project__description-blocks">
                <div className="project__description-block">
                    <h3 className='project__description-title'>Дипломный проект включал 5 этапов</h3>
                    <span className='project__description-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</span>
                </div>
                <div className="project__description-block">
                    <h3 className='project__description-title'>На выполнение диплома ушло 5 недель</h3>
                    <span className='project__description-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</span>
                </div>
            </div>
            <div className='project__deadline'>
                <div className="project__deadline-backend">1 неделя</div>
                <div className="project__deadline-frontend">4 недели</div>
            </div>
            <div className='project__parts-project'>
                <div className="project__part-backend">Back-end</div>
                <div className="project__part-frontend">Front-end</div>
            </div>
        </section>
    );
}

export default AboutProject;
