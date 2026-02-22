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
