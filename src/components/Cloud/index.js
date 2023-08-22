import useScrollFadeIn from '../../functions/useScrollFadeIn';

export default function Damage() {
    const isVisible = useScrollFadeIn();

    return (
        <section className={`cloud-section fadeIn ${isVisible ? 'active' : ''}`}>
            <h1>Un cumulus peut conternir entre 1 et 2 millions de litres d'eau.</h1>
        </section>
    );
}