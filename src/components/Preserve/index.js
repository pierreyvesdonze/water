import useScrollFadeIn from '../../functions/useScrollFadeIn';

export default function Damage() {
    const isVisible = useScrollFadeIn();

    return (
        <section className={`preserve-section fadeIn ${isVisible ? 'active' : ''}`}>
            <h1>Préserver l'eau !</h1>
            <ul>
                <li><span className='preserve-span'>Réduisez les gaspillages :</span> Fermez les robinets lorsqu'ils ne sont pas utilisés et réparez rapidement les fuites d'eau pour éviter le gaspillage.</li>
                <li><span className='preserve-span'>Privilégiez les douches courtes :</span> Optez pour des douches courtes plutôt que des bains pour économiser de l'eau.</li>
                <li><span className='preserve-span'>Collectez l'eau de pluie :</span> Utilisez des réservoirs de collecte d'eau de pluie pour arroser vos plantes et jardins.</li>
                <li><span className='preserve-span'>Utilisez un arrosoir au lieu d'un tuyau :</span> Utilisez un arrosoir pour arroser vos plantes plutôt qu'un tuyau, afin de contrôler la quantité d'eau utilisée.</li>
                <li><span className='preserve-span'>Choisissez des appareils efficaces :</span> Optez pour des lave-linge, lave-vaisselle et toilettes à faible consommation d'eau.</li>
                <li><span className='preserve-span'>Évitez l'eau courante :</span> Lorsque vous vous brossez les dents ou faites la vaisselle, fermez le robinet plutôt que de laisser l'eau couler inutilement.</li>
                <li><span className='preserve-span'>Réduisez la consommation de viande :</span> Réduisez votre consommation de viande, car la production de viande nécessite une grande quantité d'eau.</li>
                <li><span className='preserve-span'>Privilégiez l'irrigation efficace :</span> Utilisez des systèmes d'irrigation goutte à goutte ou à basse pression pour minimiser le gaspillage d'eau lors de l'arrosage des plantes.</li>
                <li><span className='preserve-span'>Évitez les produits jetables :</span> Réduisez l'utilisation de produits jetables, car leur fabrication et leur élimination nécessitent des ressources en eau.</li>
                <li><span className='preserve-span'>Soutenez la protection des sources d'eau :</span> Contribuez aux efforts locaux pour protéger les sources d'eau douce, les rivières et les zones humides en participant à des initiatives de nettoyage et de préservation.</li>
            </ul>
        </section>
    );
}