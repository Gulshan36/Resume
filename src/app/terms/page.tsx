import { LegalLayout } from "@/components/legal/LegalLayout";
import { portfolioData } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Gulshan Kumar",
  description: "Terms and conditions for services provided by Gulshan Kumar.",
};

export default function TermsPage() {
  const { name, email, location } = portfolioData.personal;

  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="25 May 2026">
      <p>
        Please read these Terms and Conditions carefully before using the services
        provided by <strong>{name}</strong> ("I", "me", or "my") available at this
        website. By engaging my services or using this website, you agree to be
        bound by these terms.
      </p>

      <h2>1. Services Offered</h2>
      <p>
        I provide freelance web development, UI/UX design, and related technology
        consulting services including but not limited to:
      </p>
      <ul>
        <li>Custom website and web application development</li>
        <li>Frontend development (React, Next.js, Tailwind CSS)</li>
        <li>Backend development (Node.js, MongoDB, PostgreSQL)</li>
        <li>UI/UX design and prototyping</li>
        <li>Technical consulting and code reviews</li>
      </ul>

      <h2>2. Project Engagement</h2>
      <p>
        All projects commence after mutual agreement on scope, timeline, and
        pricing. A formal project proposal or statement of work (SOW) will be
        shared before work begins. Any changes to the agreed scope may result in
        revised timelines and pricing.
      </p>

      <h2>3. Payment Terms</h2>
      <p>
        Payments are processed securely through <strong>Razorpay</strong>, a
        licensed payment gateway. The following payment schedule typically applies:
      </p>
      <ul>
        <li>
          <strong>50% advance</strong> — due before project work commences
        </li>
        <li>
          <strong>50% balance</strong> — due upon project completion and delivery
        </li>
      </ul>
      <p>
        For short-duration projects (under ₹5,000 or under 3 days), full payment
        may be required upfront. All prices are quoted in Indian Rupees (INR) and
        are inclusive of applicable taxes unless stated otherwise.
      </p>

      <h2>4. Revisions & Deliverables</h2>
      <p>
        Each project includes a reasonable number of revisions as agreed upon in
        the project proposal. Revisions beyond the agreed limit will be billed at
        an hourly rate. Final deliverables will be provided upon receipt of full
        payment.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        Upon receipt of full payment, the client receives full ownership of the
        custom code and designs developed specifically for their project. I retain
        the right to display the work in my portfolio unless otherwise agreed in
        writing.
      </p>
      <p>
        Third-party libraries, frameworks, or assets used in the project are
        subject to their respective open-source or commercial licenses.
      </p>

      <h2>6. Confidentiality</h2>
      <p>
        I treat all client information, business data, and project details as
        strictly confidential and will not disclose them to any third party without
        prior written consent, except as required by law.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        My total liability for any claim arising from services provided shall not
        exceed the total amount paid by the client for the specific project. I am
        not liable for indirect, incidental, or consequential damages including
        loss of profits or business interruption.
      </p>

      <h2>8. Termination</h2>
      <p>
        Either party may terminate the project agreement with 7 days written
        notice. In such cases, payment is due for all work completed up to the
        termination date. The advance payment is non-refundable if termination is
        initiated by the client after work has commenced.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These terms are governed by and construed in accordance with the laws of
        India. Any disputes shall be subject to the exclusive jurisdiction of the
        courts in <strong>{location}</strong>.
      </p>

      <h2>10. Changes to Terms</h2>
      <p>
        I reserve the right to modify these Terms & Conditions at any time.
        Changes will be effective immediately upon posting to this website. Your
        continued use of my services constitutes acceptance of the updated terms.
      </p>

      <h2>11. Contact</h2>
      <p>
        For any questions regarding these Terms & Conditions, please contact me at:{" "}
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </LegalLayout>
  );
}
