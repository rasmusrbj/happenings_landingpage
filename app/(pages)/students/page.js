import Footer from "@/app/(components)/navigation/footer/footer";
import StudentsBenefits from "@/app/(components)/students/students_benefits";
import StudentsHero from "@/app/(components)/students/students_hero";
import StudentInclusivity from "@/app/(components)/students/students_inclusivity";

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
