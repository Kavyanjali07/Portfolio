import EditorialHero from "./components/EditorialHero";
import AboutSection from "./components/AboutSection";
import SelectedWork from "./components/SelectedWork";
import EngineeringSection from "./components/EngineeringSection";
import SecuritySection from "./components/SecuritySection";
import AchievementBanner from "./components/AchievementBanner";
import CredentialsSection from "./components/CredentialsSection";
import JourneyEducation from "./components/JourneyEducation";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (
    <main className="w-full bg-[#F5EEE9] text-[#2C2D1F]">
      <EditorialHero />
      <AboutSection />
      <SelectedWork />
      <EngineeringSection />
      <SecuritySection />
      <AchievementBanner />
      <CredentialsSection />
      <JourneyEducation />
      <ContactFooter />
    </main>
  );
}