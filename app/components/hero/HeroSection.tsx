import Hero from "../sections/Hero";
import { getHomepage } from "../../lib/api";

export default async function HeroSection() {
  const data = await getHomepage();

  if (!data) return null;

  const {
    heroTitle,
    heroSubtitle,
    about,
    secondaryParagraph,
    role,
    stack,
    ctaText,
    ctaLink,
  } = data;

  return (
    <Hero
      role={role ?? "Full-Stack Developer"}
      title={heroTitle}
      subtitle={heroSubtitle}
      paragraph1={about}
      paragraph2={secondaryParagraph}
      ctaText={ctaText}
      ctaLink={ctaLink}
      stack={stack}
    />
  );
}
