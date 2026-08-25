"use client";

import React from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutWhoWeAre } from "@/components/about/AboutWhoWeAre";
import { AboutTechnologyExpertise } from "@/components/about/AboutTechnologyExpertise";
import { AboutVisionMission } from "@/components/about/AboutVisionMission";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutCTA } from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWhoWeAre />
      <AboutTechnologyExpertise />
      <AboutVisionMission />
      <AboutStats />
      <AboutCTA />
    </>
  );
}
