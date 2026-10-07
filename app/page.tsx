import EditorialHero from "./components/EditorialHero";
import AboutSection from "./components/AboutSection";
import BuildBreakFix from "./components/BuildBreakFix";
import SystemConstellation from "./components/SystemConstellation";
import TypographicInterlude from "./components/TypographicInterlude";
import SelectedWork from "./components/SelectedWork";
import SecuritySection from "./components/SecuritySection";
import AchievementBanner from "./components/AchievementBanner";
import CredentialsSection from "./components/CredentialsSection";
import CurrentlyExploring from "./components/CurrentlyExploring";
import NeverFinished from "./components/NeverFinished";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (
    <main className="w-full bg-[#F5EEE9] text-[#2C2D1F] overflow-x-hidden selection:bg-[#5C6E21] selection:text-[#F5EEE9]">
      {/* 1. IDENTITY */}
      <EditorialHero />

      {/* 2. THINKING */}
      <AboutSection />

      {/* 3. SIGNATURE METHODOLOGY */}
      <BuildBreakFix />

      {/* 4. SYSTEMS & STACK MAP */}
      <SystemConstellation />

      {/* 5. TYPOGRAPHIC BREATHING INTERLUDE */}
      <TypographicInterlude
        statement="EVERY SYSTEM HAS A FAILURE MODE. THEN YOU FIX IT."
        sub="ENGINEERING LESSON"
      />

      {/* 6. BUILDING — ENGINEERING STORIES */}
      <SelectedWork />

      {/* 7. SECURITY & BOUNDARIES */}
      <SecuritySection />

      {/* 8. COMPETITIVE ACHIEVEMENT NODE */}
      <AchievementBanner />

      {/* 9. CREDENTIAL ARCHIVE */}
      <CredentialsSection />

      {/* 10. GROWTH VECTOR */}
      <CurrentlyExploring />

      {/* 11. SIGNATURE ENDING */}
      <NeverFinished />

      {/* 12. CONTACT */}
      <ContactFooter />
    </main>
  );
}