import { LegalLayout } from "@/components/legal/LegalLayout";
import { portfolioData } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Gulshan Kumar",
  description: "Privacy policy describing how your data is collected and used.",
};

export default function PrivacyPage() {
  const { name, email, location } = portfolioData.personal;

  return (
    <LegalLayout title="Privacy Policy" lastUpdated="25 May 2026">
      <p>
        This Privacy Policy explains how <strong>{name}</strong> ("I", "me", "my")
        collects, uses, and protects your personal information when you visit this
        website or engage my services. I am committed to protecting your privacy
        and complying with applicable data protection laws including the{" "}
        <strong>Information Technology Act, 2000</strong> and the{" "}
        <strong>IT (Amendment) Act, 2008</strong> of India.
      </p>

      <h2>1. Information I Collect</h2>
      <p>
        I collect only the information necessary to provide my services and respond
        to your inquiries:
      </p>
      <ul>
        <li>
          <strong>Contact Form Data:</strong> Your name, email address, and message
          when you submit the contact form on this website.
        </li>
        <li>
          <strong>Payment Information:</strong> When you make a payment through
          Razorpay, payment details such as name, email, phone number, and
          transaction ID are processed by Razorpay. I do not store your card or
          banking details on my servers.
        </li>
        <li>
          <strong>Project Communication:</strong> Information shared during project
          discussions (emails, documents, requirements) that is necessary to
          deliver services.
        </li>
        <li>
          <strong>Usage Data:</strong> Basic analytics such as pages visited and
          browser type, which may be collected automatically. No personally
          identifiable information is collected without your consent.
        </li>
      </ul>

      <h2>2. How I Use Your Information</h2>
      <p>The information collected is used solely for the following purposes:</p>
      <ul>
        <li>To respond to your inquiries and contact form submissions</li>
        <li>To deliver agreed-upon freelance services</li>
        <li>To process payments and send invoices</li>
        <li>To communicate project updates, timelines, and deliverables</li>
        <li>To comply with legal obligations</li>
      </ul>
      <p>
        I do <strong>not</strong> sell, rent, or trade your personal information
        to any third party for marketing purposes.
      </p>

      <h2>3. Cookies</h2>
      <p>
        This website may use essential cookies to ensure proper functionality.
        These cookies do not track you across other websites and do not store
        personally identifiable information. By using this website, you consent
        to the use of essential cookies.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        I use the following trusted third-party services that may process your
        data:
      </p>
      <ul>
        <li>
          <strong>Razorpay</strong> — Payment processing. Razorpay is PCI DSS
          compliant and governed by their{" "}
          <a
            href="https://razorpay.com/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>Vercel / Hosting Provider</strong> — Website hosting. Server
          logs may record IP addresses as part of standard web operations.
        </li>
      </ul>

      <h2>5. Data Storage & Security</h2>
      <p>
        Contact form submissions are sent directly to my email inbox via a secure
        server-side process. I do not maintain a database of user submissions.
        All communications are handled with reasonable technical and organisational
        measures to prevent unauthorised access, loss, or misuse.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        Project-related information is retained for as long as necessary to
        fulfil the service and meet legal/accounting obligations (typically up to
        5 years for financial records as required by Indian tax law). Contact
        form emails are retained in my inbox and deleted when no longer needed.
      </p>

      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Request access to the personal data I hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data (subject to legal obligations)</li>
        <li>Withdraw consent for data processing at any time</li>
      </ul>
      <p>
        To exercise any of these rights, please contact me at{" "}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        This website is not directed to children under the age of 13. I do not
        knowingly collect personal information from children. If you believe a
        child has provided personal information, please contact me immediately.
      </p>

      <h2>9. Links to Other Websites</h2>
      <p>
        This website may contain links to external websites (such as GitHub,
        LinkedIn, or live project demos). I am not responsible for the privacy
        practices of those websites and encourage you to review their privacy
        policies.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        I may update this Privacy Policy from time to time. Changes will be
        posted on this page with a revised &quot;Last Updated&quot; date. Your
        continued use of this website constitutes acceptance of any changes.
      </p>

      <h2>11. Contact</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy
        Policy, please reach out:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>
          <strong>Location:</strong> {location}
        </li>
      </ul>
    </LegalLayout>
  );
}
