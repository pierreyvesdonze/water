import useScrollFadeIn from '../../functions/useScrollFadeIn';

export default function Damage() {
    const isVisible = useScrollFadeIn();

    return (
        <section className={`steak-section fadeIn ${isVisible ? 'active' : ''}`}>
            <h1>Un steak....</h1>
            <div className="flex-left-right">
                <div className="flex-left"></div>
                <div className="flex-right">
                    <h2 className='title-steak'>
                        5000 à 20000 Litres d'eau sont nécéssaires pour produire un steak.
                    </h2>
                </div>
            </div>
        </section>
    );
}