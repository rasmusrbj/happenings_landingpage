import Footer from "@/app/(components)/pages/navigation/footer/footer";
import StudentsBenefits from "@/app/(components)/pages/students/students_benefits";
import StudentsHero from "@/app/(components)/pages/students/students_hero";
import StudentInclusivity from "@/app/(components)/pages/students/students_inclusivity";

export default function Leaders() {
  return (
    <main>
      <StudentsHero />
      <StudentsBenefits />
      <StudentInclusivity />
      <Footer />
    </main>
  );
}
