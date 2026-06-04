/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { CLINIC_INFO } from "../data";

export default function SchemaMarkup() {
  useEffect(() => {
    // Generate JSON-LD schemas
    const medicalOrgSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": CLINIC_INFO.name,
      "alternateName": "Sydney Doctor Biohealth",
      "url": "https://www.sydneydoctor.org",
      "logo": "https://www.sydneydoctor.org/assets/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": CLINIC_INFO.phoneFormatted,
        "contactType": "customer service",
        "email": CLINIC_INFO.email,
        "areaServed": "IN",
        "availableLanguage": "en"
      }
    };

    const physicianSchema = {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Arun Maji",
      "image": "https://www.sydneydoctor.org" + CLINIC_INFO.phone,
      "telephone": CLINIC_INFO.phoneFormatted,
      "email": CLINIC_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CLINIC_INFO.clinicAddress.line2,
        "addressLocality": CLINIC_INFO.clinicAddress.line1,
        "addressRegion": "West Bengal",
        "postalCode": CLINIC_INFO.clinicAddress.pincode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": CLINIC_INFO.mapsCoords.lat,
        "longitude": CLINIC_INFO.mapsCoords.lng
      },
      "url": "https://www.sydneydoctor.org/about",
      "medicalSpecialty": [
        "Metabolic Health",
        "Longevity Medicine",
        "Sports Injury Assessment"
      ],
      "knowsAbout": [
        "Performance Medicine",
        "Endocrine Health & Vitality Support",
        "Medical Weight Management"
      ]
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": CLINIC_INFO.name,
      "image": "https://www.sydneydoctor.org/assets/clinic.jpg",
      "@id": "https://www.sydneydoctor.org/#localbusiness",
      "url": "https://www.sydneydoctor.org",
      "telephone": CLINIC_INFO.phoneFormatted,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CLINIC_INFO.clinicAddress.line2,
        "addressLocality": "Kasba, Kolkata",
        "addressRegion": "WB",
        "postalCode": CLINIC_INFO.clinicAddress.pincode,
        "addressCountry": "IN"
      },
      "priceRange": "$$$$"
    };

    // Inject scripts to head
    const createScript = (id: string, obj: object) => {
      let script = document.getElementById(id);
      if (script) {
        script.remove();
      }
      script = document.createElement("script");
      script.id = id;
      script.setAttribute("type", "application/ld+json");
      script.innerHTML = JSON.stringify(obj);
      document.head.appendChild(script);
    };

    createScript("schema-org", medicalOrgSchema);
    createScript("schema-physician", physicianSchema);
    createScript("schema-local", localBusinessSchema);

    return () => {
      document.getElementById("schema-org")?.remove();
      document.getElementById("schema-physician")?.remove();
      document.getElementById("schema-local")?.remove();
    };
  }, []);

  return null;
}
