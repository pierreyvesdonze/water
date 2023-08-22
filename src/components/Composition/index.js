import useScrollFadeIn from '../../functions/useScrollFadeIn';

export default function Composition() {
    const isVisible = useScrollFadeIn();
    return (
        <section className={`composition-section fadeIn ${isVisible ? 'active' : ''}`}>
            <h1>Composition</h1>
            <div className="flex-left-right">
                <div className="flex-left">
                    <h2>2 atomes Hydrogène</h2>
                    <h2>1 atome Oxygène</h2>
                    <div id="composition-bg"></div>
                </div>
                <div className="flex-right" id="composition-text">
                    <p>
                        L'eau est une molécule chimique essentielle à la vie telle que nous la connaissons. Sa composition chimique est relativement simple : une molécule d'eau est composée de deux atomes d'hydrogène (H) liés à un atome d'oxygène (O), ce qui donne la formule chimique H₂O.

                        La structure moléculaire de l'eau est basée sur des liaisons covalentes, où les atomes d'hydrogène partagent leurs électrons avec l'atome d'oxygène. Les électrons sont partagés de manière inégale, ce qui confère à la molécule d'eau une polarité. En d'autres termes, une extrémité de la molécule est légèrement chargée positivement (l'hydrogène) tandis que l'autre extrémité est légèrement chargée négativement (l'oxygène). Cette polarité crée des forces d'attraction intermoléculaires, appelées liaisons hydrogène, qui sont responsables de nombreuses propriétés uniques de l'eau.
                    </p>
                </div>
            </div>
        </section>
    )
}