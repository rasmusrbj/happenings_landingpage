'use client';

import React, { useState } from 'react';
import NavHeaderDark from "@/app/(components)/universal/navigation/header/nav_bar_dark";
import Footer from "@/app/(components)/universal/navigation/footer/footer";

const TabButton = ({ active, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 font-medium text-sm rounded-t-lg transition-colors ${
                active
                    ? "bg-white text-slate-900 border-b-2 border-blue-500"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
        >
            {children}
        </button>
    );
};

const TermsComponent = () => {
    const [activeLanguage, setActiveLanguage] = useState('danish'); // Default to Danish

    return (
        <>
            <NavHeaderDark />
            <div className="container mx-auto max-w-4xl py-8 pt-40 px-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tight mb-2">
                        {activeLanguage === 'danish' ? 'Handelsbetingelser' : 'Terms of Service'}
                    </h1>
                    <p className="text-slate-600">
                        {activeLanguage === 'danish' ? 'Senest opdateret: 28. oktober 2022' : 'Last updated: October 28th, 2022'}
                    </p>
                </div>

                <div className="flex justify-center mb-8 space-x-2">
                    <TabButton
                        active={activeLanguage === 'danish'}
                        onClick={() => setActiveLanguage('danish')}
                    >
                        🇩🇰 Dansk
                    </TabButton>
                    <TabButton
                        active={activeLanguage === 'english'}
                        onClick={() => setActiveLanguage('english')}
                    >
                        🇬🇧 English
                    </TabButton>
                </div>

                {activeLanguage === 'danish' ? (
                    <DanishTerms />
                ) : (
                    <EnglishTerms />
                )}
            </div>
            <Footer />
        </>
    );
};

const DanishTerms = () => (
    <div className="space-y-8">
        <section>
            <h2 className="text-xl font-semibold mb-4">1. GENERELLE OPLYSNINGER</h2>
            <p>
                Happenings Group A/S<br />
                Klostergade 56 B, St.<br />
                8000 Aarhus C, Danmark<br />
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
                Happenings Group A/S formidler udelukkende salg af medlemsskaber, produkter og tjenester, samt billetter mellem billetkøberen og den ansvarlige arrangør. Forholdet består således mellem køberen (brugeren) og arrangøren og/eller udgiveren, f.eks. studenterforeningen.
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
                Der faktureres et gebyr på 2,5%, min. kr 5,00 ex. moms ved salg af adgangsbilletter, medlemsskaber, produkter og tjenester solgt gennem Platformen. Dette gebyr gælder alle typer af adgangsbilletter,
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
);

const EnglishTerms = () => (
    <div className="space-y-8">
        <section>
            <h2 className="text-xl font-semibold mb-4">1. GENERAL INFORMATION</h2>
            <p>
                Happenings Group A/S<br />
                Klostergade 56 B, St.<br />
                8000 Aarhus C, Denmark<br />
                VAT No.: DK40979956<br />
                Email: legal@happenings.dk
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">2. DEFINITIONS</h2>
            <p>
                Events refer to all occasions for which tickets can be purchased through the Happenings Group A/S application "Happenings."
                The organizer refers to the party that created the event.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">3. PAYMENT</h2>
            <p>
                Happenings Group A/S accepts payments via MobilePay, Apple Pay, ViaBill, Google Pay, and regular card payments. Payment will only be charged to your account once the item is shipped.
                By using MobilePay, you accept MobilePay's terms. All amounts are in DKK, Danish kroner, and include VAT. We reserve the right for pricing errors and sold-out/discontinued items.
                When using Apple Pay, Google Pay, or regular card payments, you accept Reepay's terms. All prices include VAT and other charges unless otherwise explicitly stated.
                Payment is net cash. The price of the ticket, service, or product is charged to the ticket buyer's account when the order is completed and confirmed.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">4. RELATIONSHIP BETWEEN HAPPENINGS GROUP A/S AND THE TICKET BUYER</h2>
            <p>
                Happenings Group A/S solely facilitates ticket sales between the ticket buyer and the responsible organizer. The relationship is thus between the ticket buyer and the organizer.
                According to "The Danish Consumer Contracts Act §17, section 2 cf. §9, section 2 no. 2a," ticket purchases are not subject to the right of withdrawal.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">5. DELIVERY</h2>
            <p>
                Happenings Group A/S delivers only the ticket to the ticket buyer. The organizer delivers the actual event. Responsibility for the event thus lies with the organizer.
                Tickets are delivered as eTickets. They are provided to the ticket buyer via the mobile application "Happenings" or on the Happenings web application, "https://app.happenings.dk".
                It is the ticket buyer's responsibility to use the ticket correctly and according to the guidelines specified in the mobile application. If the ticket is used incorrectly, Happenings Group A/S is not responsible for the ticket buyer being denied access to the event.
            </p>
            <p className="mt-2">
                If the ticket buyer does not receive their ticket immediately after purchase, they should contact Happenings Group A/S at support@happenings.dk or via the following link: https://m.me/happeningsgroup.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">6. RIGHT TO COMPLAIN</h2>
            <p>
                As Happenings Group A/S solely facilitates the sale between the ticket buyer and the organizer, no complaints can be directed at Happenings Group A/S.
                All complaints must be made to the organizer. Happenings Group A/S can assist by providing contact information for the organizer.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">7. REFUNDS</h2>
            <p>
                Whether you are entitled to a refund is solely a matter between you as the ticket buyer and the organizer. Happenings Group A/S does not refund tickets without the organizer's consent.
                If a refund is approved and Happenings Group A/S still holds the purchase amount, Happenings Group A/S will refund the amount on behalf of the organizer.
                In such cases, you must provide banking details (reg. no. and account no.) so the agreed amount can be transferred. These details can be safely sent via email or other electronic means, as they are not sensitive and will only be used to process the refund. If the event has already occurred and the funds have been transferred to the organizer, it is the organizer's responsibility to refund any owed amount.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">8. RETURN & RIGHT OF WITHDRAWAL</h2>
            <p>
                According to "The Danish Consumer Contracts Act §17, section 2 cf. §9, section 2 no. 2a," ticket purchases are not subject to the right of withdrawal.
                Thus, the ticket buyer generally cannot cancel their purchase. There may be a right of withdrawal if the purchase includes add-ons/supplements to the event. This will be explicitly stated when purchasing such additions.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">9. EXERCISING THE RIGHT TO COMPLAIN AND/OR WITHDRAW</h2>
            <p>
                If you wish to exercise your right to complain and/or withdraw from a purchase with the organizer, you must contact the organizer directly and return the item to them.
                The organizer will then refund the purchase amount to you. If Happenings Group A/S still holds the purchase amount, the refund may be processed by Happenings Group A/S on behalf of the organizer.
                In your inquiry, it's important to include the following:
            </p>
            <ol className="list-decimal pl-8 mt-2">
                <li>Order ID</li>
                <li>Receipt</li>
                <li>In some cases, UNI-login username</li>
            </ol>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">10. PRICES</h2>
            <p>
                Happenings Group A/S reserves the right for potential errors in listed prices. Furthermore, we reserve the right to change prices without prior notice.
                We also reserve the right for sold-out items. Organizers set the price for the event itself.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">11. FEES</h2>
            <p>
                A fee of 2.5%, minimum DKK 5.00 excl. VAT, is charged for the sale of admission tickets to events. This fee applies to all types of admission tickets, memberships, products and services sold through the Platform, except for those tickets that are free to download for the ticket buyer, as these are always free for the organizer.
            </p>
            <p className="mt-2">
                For products sold through the Happenings app with redemption, a fee of 5%, minimum DKK 2.00 excl. VAT, is charged.
            </p>
            <p className="mt-2">
                For allocated tickets, a fee of DKK 5.00 excl. VAT is charged.
                For refunds, a fee of 2.5%, minimum DKK 5.00 excl. VAT, is charged.
                The institution may choose to refund the admission ticket excluding the fee to the ticket buyer, and this will always be a matter between the ticket buyer and the organizer.
                Fees are charged to the organizer and deducted from the total payout.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">12. GENERAL TERMS</h2>
            <p>
                The purchase agreement is subject to the general rules of Danish law. Happenings Group A/S reserves the right to change these terms without prior notice.
                Changes apply to subsequent orders. It is your responsibility to check for changes in the terms.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">13. COMPLAINT OPTIONS</h2>
            <p>
                A complaint about a product or service can be submitted to the Center for Complaint Resolution, Nævnenes Hus, Toldboden 2, 8800 Viborg.
                You can submit a complaint via the Complaint Portal of Nævnenes Hus. Link: Complaint Portal for Nævnenes Hus.
                If you are a consumer residing in another EU country, you can submit your complaint via the EU Commission's online complaint platform.
                The platform is available here: <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:underline">https://ec.europa.eu/consumers/odr/</a>.
                When submitting a complaint here, you must provide our email address: <a href="mailto:legal@happenings.dk" className="text-blue-600 hover:underline">legal@happenings.dk</a>.
            </p>
        </section>
    </div>
);

export default TermsComponent;
