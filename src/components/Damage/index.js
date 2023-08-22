import useScrollFadeIn from '../../functions/useScrollFadeIn';

export default function Damage() {
    const isVisible = useScrollFadeIn();

    return (
        <section className={`damage-section fadeIn ${isVisible ? 'active' : ''}`}>
            <h1>Dégâts</h1>
            <div className="flex-left-right">
                <div className="flex-left"></div>
                <div className="flex-right">
                    <ul>
                        <li>Pénurie d'eau potable : Environ 2,2 milliards de personnes dans le monde n'ont pas accès à de l'eau potable propre et salubre.</li>
                        <li>Pollution de l'eau : Chaque année, environ 1,2 million de personnes meurent en raison de maladies liées à la consommation d'eau polluée.</li>
                        <li>Déforestation et érosion : La déforestation contribue à l'érosion de plus de 24 milliards de tonnes de sol chaque année.</li>
                        <li>Marées noires : La marée noire de l'Exxon Valdez en 1989 a déversé environ 260 000 barils de pétrole brut dans les eaux d'Alaska.</li>
                        <li>Surcharges d'eaux usées : Environ 80% des eaux usées mondiales sont rejetées dans l'environnement sans traitement approprié.</li>
                        <li>Destruction des habitats aquatiques : Plus de 50% des zones humides mondiales ont disparu depuis le début du 20e siècle.</li>
                        <li>Déclin des ressources halieutiques : Plus d'un tiers des stocks de poissons mondiaux sont surexploités et en déclin.</li>
                        <li>Changement climatique : D'ici 2050, plus de 50% de la population mondiale pourrait être exposée au stress hydrique en raison du changement climatique.</li>
                        <li>Inondations : Les inondations touchent plus de 250 millions de personnes chaque année, causant des pertes économiques de l'ordre de 100 milliards de dollars.</li>
                        <li>Sécheresses : Les sécheresses ont touché près de 2 milliards de personnes au cours des deux dernières décennies.</li>
                        <li>Eutrophisation : L'eutrophisation des eaux côtières menace les économies de pêche et peut coûter des milliards de dollars en dommages.</li>
                        <li>Dégradation des récifs coralliens : Environ 50% des récifs coralliens du monde ont déjà été perdus ou gravement endommagés.</li>
                        <li>Destruction des mangroves : Les taux actuels de perte de mangroves sont estimés entre 1% et 3% par an.</li>
                        <li>Altération des flux d'eau : Près de 60% des rivières dans le monde ont été modifiées ou perturbées par des barrages et d'autres infrastructures.</li>
                        <li>Besoins croissants en eau : D'ici 2050, la demande mondiale en eau pourrait augmenter de 20 à 30% par rapport aux niveaux actuels.</li>
                        <li>Intrusion d'eau salée : Dans certaines régions côtières, l'intrusion d'eau salée peut rendre jusqu'à 60% des terres agricoles inutilisables.</li>
                        <li>Destruction des cours d'eau : Plus de 50 000 grands barrages dans le monde perturbent les cours d'eau et les habitats aquatiques.</li>
                        <li>Altération des écosystèmes humides : Environ 64% des zones humides mondiales ont été perdues depuis 1900.</li>
                        <li>Contamination des nappes phréatiques : Dans certaines régions, jusqu'à 90% des eaux souterraines sont contaminées par des activités humaines.</li>
                        <li>Déchets plastiques : Plus de 8 millions de tonnes de plastique sont déversées dans les océans chaque année, menaçant la faune marine et les écosystèmes marins.</li>
                    </ul>
                </div>
            </div>

        </section>
    );
}