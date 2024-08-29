import StudentsBenefits from "@/app/(components)/pages/students/students_benefits";
import StudentsHero from "@/app/(components)/pages/students/students_hero";
import StudentInclusivity from "@/app/(components)/pages/students/students_inclusivity";
import Footer from "@/app/(components)/universal/navigation/footer/footer";

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
