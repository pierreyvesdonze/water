import useScrollFadeIn from '../../functions/useScrollFadeIn';

export default function Intro() {
    const isVisible = useScrollFadeIn();

    return (
        <section id="intro-section" className={`fadeIn ${isVisible ? 'active' : ''}`}>


        </section>
    )
}