import useScrollFadeIn from '../../functions/useScrollFadeIn';

export default function Damage() {
    const isVisible = useScrollFadeIn();

    return (
        <section className={`survive-section fadeIn ${isVisible ? 'active' : ''}`}>
            <h1>Survivre</h1>
                <p className='survive-p'>
                    Pour survivre, il faut boire idéalement 2 à 3 Litres d'eau par jour.
                </p>
        </section>
    );
}