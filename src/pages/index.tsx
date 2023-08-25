import {
  AboutSection,
  AppNav,
  BlogSection,
  ContactSections,
  FeatureSection,
  FooterSection,
  MarketingSection,
  PartnersSection,
  TemplateSections,
} from "@/components";
import Banner from "@/components/Banner";
import React from "react";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <AppNav />
      <Banner />
      <PartnersSection />
      <AboutSection />
      <TemplateSections />
      <FeatureSection />
      <MarketingSection />
      <BlogSection />
      <ContactSections />
      <FooterSection />
    </div>
  );
}
