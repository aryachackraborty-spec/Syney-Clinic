/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = "home" | "about" | "services" | "supplements" | "testimonials" | "contact";

export interface Service {
  id: string;
  title: string;
  shorthand: string;
  subtitle: string;
  body: string;
  assessments: string[];
  ctaText: string;
}

export interface SupplementProduct {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  science: string;
  benefits: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  category: string;
  pullQuote: string;
  expandedQuote: string;
  location: string;
  resultSummary?: string;
  keyLesson?: string;
}

export interface LeadSubmission {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
}

export interface AppointmentInquiry {
  name: string;
  phone: string;
  email: string;
  preferredService: string;
  preferredDate: string;
  notes?: string;
}
