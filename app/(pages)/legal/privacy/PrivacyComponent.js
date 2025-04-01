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

const PrivacyComponent = () => {
    const [activeLanguage, setActiveLanguage] = useState('danish'); // Default to Danish

    return (
        <>
            <NavHeaderDark />
            <div className="container mx-auto max-w-4xl py-8 pt-40 px-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tight mb-2">
                        {activeLanguage === 'danish' ? 'Privatlivspolitik' : 'Privacy Policy'}
                    </h1>
                    <p className="text-slate-600">
                        {activeLanguage === 'danish' ? 'Senest opdateret: 25. marts 2024' : 'Last updated: March 25, 2024'}
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
                    <DanishPrivacy />
                ) : (
                    <EnglishPrivacy />
                )}
            </div>
            <Footer />
        </>
    );
};

const DanishPrivacy = () => (
    <div className="space-y-8">
        <section>
            <p>
                Denne persondatapolitik beskriver, hvordan vi behandler dine personoplysninger. Retningslinjerne for vores behandling af personoplysninger findes i EU's Databeskyttelsesforordning ("GDPR" - 2016/679) og den danske Databeskyttelseslov, som begge trådte i kraft den 25. maj 2018. Inden denne dato var behandlingen reguleret i den danske Persondatalov. Denne persondatapolitik henvender sig til såvel vores kunder/brugere (der vil blive brugt som synonyme udtryk) og samarbejdspartnere, som f.eks. gymnasier og studenterforeninger.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Om virksomheden</h2>
            <p>
                Websitet og appen ejes og publiceres af den juridiske enhed, som ligeledes er ansvarlig for behandlingen af dine personoplysninger:<br />
                Happenings Group A/S<br />
                CVR-nr.: 40979956<br />
                Moms-nr.: DK40979956<br />
                Adresse: Klostergade 56b, ST., 8000 Aarhus C<br />
                E-mail: legal@happenings.dk<br />
                Tlf.: +45 31 45 09 14
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Formål med behandling af persondata</h2>
            <p>
                Vi anvender dine personoplysninger til følgende formål:
            </p>
            <ul className="list-disc pl-8 mt-2">
                <li>Relationer. Vi behandler dine personoplysninger som led i kunderelation og/eller i kraft af vores samarbejde.</li>
                <li>Tilgængelighed. Vi har behov for dine personoplysninger til at kunne gemme din profil.</li>
                <li>Forbedring. Vi arbejder på altid at tilbyde dig det bedst mulige produkt.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Kategorier af personoplysninger</h2>
            <p>
                Vi behandler følgende kategorier af personoplysninger om dig:<br />
                Vi behandler ingen følsomme personoplysninger.
            </p>
            <ul className="list-disc pl-8 mt-2">
                <li>Almindelige personoplysninger. Det er primært almindelige oplysninger såsom navn, adresse, kontaktdata, CVR.nr., P-nr., oplysninger om virksomhedens eller foreningens drift, produktionsforhold, ejerforhold, økonomi, kontonummer mv., som vi behandler. Almindelige oplysninger med højere beskyttelsesniveau i form af CPR.nr. og oplysninger om straffelovsovertrædelser kan også blive behandlet.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Behandlingsgrundlag</h2>
            <p>
                Vi behandler dine personoplysninger som beskrevet ovenfor baseret på følgende behandlingsgrundlag:
            </p>
            <ul className="list-disc pl-8 mt-2">
                <li>For at kunne opfylde vores kontrakt, samarbejdsaftale mv.</li>
                <li>For at kunne tilbyde vores produkt.</li>
                <li>For at kunne overholde gældende lovgivning.</li>
                <li>Hvis det følger af en tilstrækkelig legitim interesse.</li>
                <li>Hvis vi har fået samtykke til at behandle oplysningerne.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Opbevaring af personoplysninger</h2>
            <p>
                De personoplysninger, vi indsamler i forbindelse med kunde- og/eller samarbejdsforholdet, vil blive opbevaret fysisk og elektronisk i samarbejde med europæiske underleverandører.
                Dine oplysninger vil blive opbevaret sikkert og fortroligt. Det er alene personer med et sagligt behov, som har lovlig adgang til dine personoplysninger.
                Ved ophør af kunde- eller samarbejdsforholdet tager vi stilling til, i hvilket omfang dine oplysninger skal slettes.
                Som udgangspunkt vil dine personoplysninger blive opbevaret i 5 år efter ophør, hvorefter de slettes uden unødigt ophold ved årets udgang, medmindre lovgivning kræver længere opbevaring.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Kilder</h2>
            <p>
                Vi indsamler personoplysninger fra følgende kilder:
            </p>
            <ul className="list-disc pl-8 mt-2">
                <li>Direkte fra dig. Oplysninger, som du selv afgiver til os, f.eks. ved oprettelse af kundeforhold.</li>
                <li>Fra offentlige myndigheder. Oplysninger vi modtager fra offentlige myndigheder som SKAT og CVR.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Videregivelse af dine personlige oplysninger</h2>
            <p>
                Vi kan videregive dine personoplysninger til tredjepart, som bistår os med administration, f.eks. lønadministration, bogholderi, hosting af IT-systemer m.v.
                Ligeledes videregiver vi dine personoplysninger til relevante myndigheder, hvor vi er forpligtede hertil.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Dine rettigheder</h2>
            <p>
                Du kan kontakte Happenings Group A/S' juridiske afdeling på legal@happenings.dk for at udøve dine rettigheder. Der kan være begrænsninger:
            </p>
            <ul className="list-disc pl-8 mt-2">
                <li>Anmodninger. Ret til indsigt, rettelse eller sletning af dine data.</li>
                <li>Indsigelser. Ret til at modsætte dig eller begrænse behandling.</li>
                <li>Samtykke. Hvis behandlingen er baseret på samtykke, kan dette trækkes tilbage.</li>
                <li>Dataportabilitet. Ret til at modtage dine oplysninger i et struktureret, maskinlæsbart format.</li>
                <li>Klage. Du kan klage til en databeskyttelsesmyndighed, f.eks. Datatilsynet.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Senest opdateret</h2>
            <p>
                Denne privatlivspolitik er sidst opdateret den 25. marts 2024.
            </p>
        </section>
    </div>
);

const EnglishPrivacy = () => (
    <div className="space-y-8">
        <section>
            <p>
                This privacy policy describes how we process your personal data. The guidelines for our processing of personal data are based on the EU General Data Protection Regulation (GDPR – 2016/679) and the Danish Data Protection Act, both of which entered into force on May 25, 2018. Prior to this date, the processing was regulated by the Danish Personal Data Act. This privacy policy is directed at both our customers/users (used synonymously) and partners, such as high schools and student associations.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">About the Company</h2>
            <p>
                The website and app are owned and published by the legal entity that is also responsible for processing your personal data:<br />
                Happenings Group A/S<br />
                CVR no.: 40979956<br />
                VAT no.: DK40979956<br />
                Address: Klostergade 56b, Ground Floor, 8000 Aarhus C<br />
                Email: legal@happenings.dk<br />
                Phone: +45 31 45 09 14
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Purpose of Processing Personal Data</h2>
            <p>
                We use your personal data for the following purposes:
            </p>
            <ul className="list-disc pl-8 mt-2">
                <li>Relationships. We process your personal data as part of a customer relationship and/or through our cooperation.</li>
                <li>Accessibility. We need your personal data to store your profile.</li>
                <li>Improvement. We strive to always offer you the best possible product.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Categories of Personal Data</h2>
            <p>
                We process the following categories of personal data about you:<br />
                We do not process any sensitive personal data.
            </p>
            <ul className="list-disc pl-8 mt-2">
                <li>General personal data. This primarily includes ordinary information such as name, address, contact information, CVR no., P no., information about the operation of a business or association, production conditions, ownership, finances, account numbers, etc. General data with a higher level of protection, such as CPR numbers and information about criminal offenses, may also be processed.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Legal Basis for Processing</h2>
            <p>
                We process your personal data as described above based on the following legal grounds:
            </p>
            <ul className="list-disc pl-8 mt-2">
                <li>To fulfill our contract, cooperation agreement, etc.</li>
                <li>To provide our product.</li>
                <li>To comply with applicable law.</li>
                <li>If justified by a legitimate interest.</li>
                <li>If we have obtained your consent to process the data.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Storage of Personal Data</h2>
            <p>
                The personal data we collect in relation to customer and/or partnership relationships will be stored physically and electronically in collaboration with European subcontractors.
                Your information will be stored securely and confidentially. Only individuals with a legitimate need have legal access to your data.
                When the customer or cooperation relationship ends, we will assess to what extent your data should be deleted.
                As a general rule, your personal data will be stored for five years after the end of the relationship, and then deleted without undue delay by the end of that year — unless the law requires a longer retention period.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Sources</h2>
            <p>
                We collect personal data from the following sources:
            </p>
            <ul className="list-disc pl-8 mt-2">
                <li>Directly from you. This includes information you provide to us, e.g. when establishing a customer relationship.</li>
                <li>From public authorities. Information we receive from authorities such as SKAT and the CVR register.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Disclosure of Your Personal Data</h2>
            <p>
                We may disclose your personal data to third parties who assist us with administration, such as payroll, bookkeeping, IT system hosting, etc.
                We may also share your data with relevant public authorities where we are legally obligated to do so.
            </p>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
            <p>
                You may contact Happenings Group A/S' legal department at legal@happenings.dk to exercise your rights. Note that conditions or limitations may apply:
            </p>
            <ul className="list-disc pl-8 mt-2">
                <li>Requests. You have the right to request access, rectification, or deletion of your data.</li>
                <li>Objections. You have the right to object to or restrict processing of your data.</li>
                <li>Consent. If processing is based on your consent, you may withdraw it at any time.</li>
                <li>Data portability. You have the right to receive the data you provided in a structured, commonly used, machine-readable format.</li>
                <li>Complaint. You can file a complaint with a data protection authority, e.g., the Danish Data Protection Agency.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-xl font-semibold mb-4">Last Updated</h2>
            <p>
                This privacy policy was last updated on March 25, 2024.
            </p>
        </section>
    </div>
);

export default PrivacyComponent;
