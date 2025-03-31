'use client';

import React from 'react';
import NavHeaderDark from "@/app/(components)/universal/navigation/header/nav_bar_dark";
import Footer from "@/app/(components)/universal/navigation/footer/footer";

const TermsComponent = () => {
    return (
        <>
            <NavHeaderDark />
            <div className="container mx-auto max-w-4xl py-8 pt-40 px-4">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Handelsbetingelser</h1>
                    <p className="text-slate-600">Senest opdateret: 28. oktober 2022</p>
                </div>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold mb-4">1. GENERELLE OPLYSNINGER</h2>
                        <p>
                            Happenings Group A/S<br />
                            Klostergade 56 B<br />
                            8000 Aarhus C<br />
                            CVR nr.: 40979956<br />
                            E-mail: legal@happenings.dk
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">2. BEGREBSFORKLARING</h2>
                        <p>
                            Ved arrangementer forstås alle begivenheder, der kan købes billetter til gennem Happenings Group A/S' applikation ''Happenings''.
                            Ved arrangøren forstås den part, der har oprettet begivenheden.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">3. BETALING</h2>
                        <p>
                            Happenings Group A/S modtager betaling med MobilePay, Apple Pay, ViaBill, Google Pay og alm. kortbetalinger. Betalingen vil først blive trukket på din konto, når varen afsendes.
                            Ved brug af MobilePay accepterer du MobilePays betingelser. Alle beløb er i DKK, Danske kroner og incl. moms. Der tages forbehold for prisfejl og udsolgte/udgåede varer.
                            Ved brug af Apple Pay, Google Pay eller alm. kortbetalinger accepterer du Reepay's betingelser. Alle priser er inkl. moms og andre afgifter med mindre andet eksplicit fremgår.
                            Betaling er netto kontant. Prisen for billetten, ydelsen eller produktet trækkes på billetkøberens konto, når ordren gennemføres og bekræftes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">4. FORHOLDET MELLEM HAPPENINGS GROUP A/S OG BILLETKØBEREN</h2>
                        <p>
                            Happenings Group A/S formidler udelukkende salg af billetter mellem billetkøberen og den ansvarlige arrangør. Forholdet består således mellem billetkøberen og arrangøren.
                            I henhold til "Lov om visse forbrugeraftaler § 17 stk. 2 jf. § 9 stk. 2 nr. 2a" er køb af billetter ikke omfattet af fortrydelsesretten.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">5. LEVERING</h2>
                        <p>
                            Happenings Group A/S leverer udelukkende billetten til billetkøberen. Arrangøren leverer selve arrangementet. Ansvaret for arrangementet tilfalder således også arrangøren.
                            Billetten leveres som eTicket. Billetten leveres herefter til billetkøberen i mobilapplikationen ''Happenings'' eller på Happenings web-applikation, "https://app.happenings.dk".
                            Det er billetkøberens ansvar at billetten bruges korrekt og efter de i mobilapplikationen angivne retningslinjer. Benyttes billetten forkert er det ikke Happenings Group A/S' ansvar,
                            hvis billetkøberen ikke kan få adgang til arrangementet.
                        </p>
                        <p className="mt-2">
                            Modtager billetkøberen ikke sin billet umiddelbart efter købet, skal billetkøberen kontakte Happenings Group A/S på support@happenings.dk eller via følgende link:
                            https://m.me/happeningsgroup.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">6. REKLAMATIONSRET</h2>
                        <p>
                            Idet Happenings Group A/S udelukkende formidler salget mellem billetkøberen og arrangøren kan der på intet tidspunkt reklameres overfor Happenings Group A/S.
                            Al reklamation vil således ske til arrangøren. Happenings Group A/S kan være behjælpelig med kontaktoplysninger på arrangøren.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">7. REFUSION</h2>
                        <p>
                            Hvorvidt du er berettiget til refusion, er udelukkende et anliggende mellem dig som billetkøber og arrangøren. Happenings Group A/S refunderer ikke billetter uden arrangørens samtykke.
                            Hvis der er tale om refusion, og Happenings Group A/S stadig er i besiddelse af købesummen, vil Happenings Group A/S tilbagebetale købesummen på vegne af arrangøren.
                            I så fald bedes du medsende bankoplysninger i form af reg.nr. og kontonr, så det aftalte beløb kan overføres. Oplysningerne kan uden risiko oplyses pr. mail eller anden elektronisk form,
                            da det ikke er følsomme oplysninger og kun vil blive anvendt til vores opfyldelse af refusionen. Såfremt arrangementet er afholdt og pengene er udbetalt til arrangøren,
                            vil det være arrangørens ansvar at refundere et eventuelt skyldigt beløb.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">8. RETUR- & FORTRYDELSESRET</h2>
                        <p>
                            I henhold til "Lov om visse forbrugeraftaler § 17 stk. 2 jf. § 9 stk. 2 nr. 2a" er køb af billetter ikke omfattet af fortrydelsesretten.
                            Billetkøberen kan således som udgangspunkt ikke fortryde sit køb. Der kan være fortrydelsesret i det tilfælde, at der er tale om et tilkøb/tilføjelser til et arrangement.
                            Dette vil fremgå særskilt ved køb af disse tilføjelser.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">9. UDØVELSE AF REKLAMATIONS- OG/ELLER FORTRYDELSESRET</h2>
                        <p>
                            Hvis du ønsker at gøre brug af din reklamations- og/eller fortrydelsesret over for arrangøren, skal du tage direkte kontakt til vedkommende og derefter returnere varen til ham.
                            Arrangøren vil derefter tilbagebetale købesummen til dig. Såfremt Happenings Group A/S stadig er i besiddelse af købesummen, vil tilbagebetaling muligvis ske af Happenings Group A/S
                            på vegne af arrangøren. I sin henvendelse er det vigtigt at man informerer om følgende:
                        </p>
                        <ol className="list-decimal pl-8 mt-2">
                            <li>Ordre id</li>
                            <li>Kvittering</li>
                            <li>I visse tilfælde UNI-Login brugernavn.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">10. PRISER</h2>
                        <p>
                            Hos Happenings Group A/S tager vi forbehold for eventuelle fejl i vores angivne priser. Endvidere forbeholder vi os ret til at ændre i priserne uden forudgående samtykke.
                            Der tages samtidig forbehold for udsolgte varer. Arrangørerne fastsætter prisen for selve arrangementet.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">11. GEBYRER</h2>
                        <p>
                            Der faktureres et gebyr på 2,5%, min. kr 5,00 ex. moms ved salg af adgangsbilletter til arrangementer. Dette gebyr gælder alle typer af adgangsbilletter,
                            med undtagelse af de billetter som er gratis at hente for billetkøbere, da disse altid er helt gratis for arrangøren.
                        </p>
                        <p className="mt-2">
                            For produkter som sælges gennem Happenings appen med indløsning, faktureres 5%, min kr 2,00 ex moms.
                        </p>
                        <p className="mt-2">
                            For tildelte billetter faktureres kr 5,00 ex moms.
                            For refunderinger faktureres 2,5%, min. kr 5,00 ex moms.
                            Institutionen har mulighed for at vælge at refundere adgangsbillet ex. gebyr retur til billetkøberen, og vil altid være et anliggende mellem billetkøber og arrangør.
                            Gebyrer faktureres til arrangøren, og fratrækkes den samlede udbetaling.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">12. GENERELLE VILKÅR</h2>
                        <p>
                            Købsaftalen er omfattet af dansk rets almindelige regler. Happenings Group A/S forbeholder sig retten til, uden forudgående varsel, at ændre disse betingelser.
                            Ændringer gælder herefter efterfølgende ordrer. Det er dit ansvar at tjekke op på, om der er sket ændringer i betingelserne.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">13. KLAGEMULIGHEDER</h2>
                        <p>
                            En klage over en vare eller tjenesteydelse kan indgives til Center for Klageløsning, Nævnenes Hus, Toldboden 2, 8800 Viborg.
                            Du kan klage til Center for Klageløsning via Klageportalen for Nævnenes Hus. Link: Klageportal for Nævnenes Hus.
                            Hvis du er forbruger med bopæl i et andet EU-land, kan du angive din klage i EU Kommissionens online klageplatform.
                            Platformen findes her: <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:underline">https://ec.europa.eu/consumers/odr/</a>.
                            Angiver du en klage her, skal du oplyse vores e-mail adresse: <a href="mailto:legal@happenings.dk" className="text-blue-600 hover:underline">legal@happenings.dk</a>.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TermsComponent;
