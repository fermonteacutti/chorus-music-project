import { useSEO } from "@/hooks/useSEO";
import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import ManifestoSection from "@/components/ManifestoSection";
import EventRoomSection from "@/components/EventRoomSection";
import SocialProjectSection from "@/components/SocialProjectSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeachersSection from "@/components/TeachersSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import ContactMapSection from "@/components/ContactMapSection";

export default function Home() {
  useSEO({
    title: "Chorus Escola de Música | Desde 1993 em Campinas",
    description: "Escola de música em Campinas desde 1993. Cursos de piano, violão, canto, bateria, musicalização infantil e mais. Agende sua aula experimental.",
    canonical: "https://chorus-music-project.pages.dev/",
  });

  return (
    <div className="min-h-screen">
      <HeroSection />
      <HistorySection />
      <ManifestoSection />
      <EventRoomSection />
      <SocialProjectSection />
      <TestimonialsSection />
      <TeachersSection />
      <ExperiencesSection />
      <BlogPreviewSection />
      <ContactMapSection />
    </div>
  );
}
  );
}
