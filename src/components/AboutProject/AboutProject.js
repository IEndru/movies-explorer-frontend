import './AboutProject.css'
function AboutProject() {
    return (
        <section className='aboutProject' id='aboutProject'>
            <h2 className='aboutProject__title'>О проекте</h2>
            <div className="aboutProject__description-blocks">
                <div className="aboutProject__description-block">
                    <h3 className='aboutProject__description-blockTitle'>Дипломный проект включал 5 этапов</h3>
                    <span className='aboutProject__description-blockText'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</span>
                </div>
                <div className="aboutProject__description-block">
                    <h3 className='aboutProject__description-blockTitle'>На выполнение диплома ушло 5 недель</h3>
                    <span className='aboutProject__description-blockText'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</span>
                </div>
            </div>
            <div className='aboutProject__deadline'>
                <div className="aboutProject__deadlineBackend">1 неделя</div>
                <div className="aboutProject__deadlineFrontend">4 недели</div>
            </div>
            <div className='aboutProject__partsProject'>
                <div className="aboutProject__partBackend">Back-end</div>
                <div className="aboutProject__partFrontend">Front-end</div>
            </div>
        </section>
    );
}

export default AboutProject;
