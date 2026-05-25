import { LegalLayout } from "@/components/legal/LegalLayout";
import { portfolioData } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy — Gulshan Kumar",
  description: "Refund and cancellation policy for services provided by Gulshan Kumar.",
};

export default function RefundPage() {
  const { name, email } = portfolioData.personal;

  return (
    <LegalLayout title="Refund & Cancellation Policy" lastUpdated="25 May 2026">
      <p>
        This Refund & Cancellation Policy outlines the terms under which refunds
        are issued for services provided by <strong>{name}</strong>. By making a
        payment for my services, you acknowledge that you have read and agreed to
        this policy.
      </p>
      <p>
        Payments are processed through <strong>Razorpay</strong>, a secure and
        RBI-authorised payment gateway. All transactions are in Indian Rupees
        (INR).
      </p>

      <h2>1. Project Cancellation by Client</h2>
      <p>
        If you wish to cancel a project after payment has been made, the following
        refund structure applies based on the stage of work:
      </p>
      <ul>
        <li>
          <strong>Before work begins (within 24 hours of payment):</strong> Full
          refund of the advance payment, minus any Razorpay transaction fees
          (typically 2–3%).
        </li>
        <li>
          <strong>After work has commenced (25%–50% completed):</strong> 50% of
          the advance payment will be refunded. No refund on the work-in-progress
          portion.
        </li>
        <li>
          <strong>After significant work (more than 50% completed):</strong> No
          refund on the advance payment. You will receive all completed work and
          assets up to the cancellation date.
        </li>
        <li>
          <strong>After project delivery:</strong> No refund once the final
          deliverables have been delivered and approved by the client.
        </li>
      </ul>

      <h2>2. Project Cancellation by Service Provider</h2>
      <p>
        In the unlikely event that I am unable to complete a project due to
        unforeseen circumstances:
      </p>
      <ul>
        <li>
          You will receive a <strong>full refund</strong> of all amounts paid if
          no substantial work has been delivered.
        </li>
        <li>
          If partial work has been delivered, a proportional refund will be
          calculated based on the percentage of work completed, and all
          work-in-progress files will be handed over to you.
        </li>
      </ul>

      <h2>3. Non-Refundable Situations</h2>
      <p>Refunds will <strong>not</strong> be issued in the following cases:</p>
      <ul>
        <li>
          The client changes the project requirements significantly after work
          has commenced, and then requests cancellation.
        </li>
        <li>
          The project has been completed, delivered, and approved by the client.
        </li>
        <li>
          Delays caused by the client (e.g., delayed feedback, failure to provide
          required content or credentials).
        </li>
        <li>
          Dissatisfaction with the final product that falls within the originally
          agreed scope of work and revisions.
        </li>
        <li>
          Change of mind after significant work has been completed (more than 50%).
        </li>
      </ul>

      <h2>4. Refund Process</h2>
      <p>To request a refund, please follow these steps:</p>
      <ul>
        <li>
          Send an email to <a href={`mailto:${email}`}>{email}</a> with the
          subject line: <strong>Refund Request — [Your Name / Project Name]</strong>
        </li>
        <li>
          Include your Razorpay Payment ID (found in your payment receipt), the
          reason for cancellation, and the amount paid.
        </li>
        <li>
          I will acknowledge your request within <strong>2 business days</strong>.
        </li>
        <li>
          If the refund is approved, it will be processed through Razorpay back
          to your original payment method within{" "}
          <strong>5–7 business days</strong>.
        </li>
      </ul>

      <h2>5. Refund Timeline</h2>
      <p>
        Approved refunds are processed via Razorpay and typically reflect in your
        account within:
      </p>
      <ul>
        <li>
          <strong>UPI / Net Banking / Wallets:</strong> 3–5 business days
        </li>
        <li>
          <strong>Credit / Debit Cards:</strong> 5–7 business days (depending on
          your bank)
        </li>
      </ul>
      <p>
        Transaction fees charged by Razorpay are non-refundable and will be
        deducted from the refund amount.
      </p>

      <h2>6. Disputes</h2>
      <p>
        If you are not satisfied with the resolution of your refund request, you
        may raise a dispute through Razorpay&apos;s grievance mechanism. I am
        committed to resolving all disputes amicably and fairly.
      </p>
      <p>
        For escalated disputes, you may also contact the Razorpay Nodal Officer
        as per their{" "}
        <a
          href="https://razorpay.com/terms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service
        </a>
        .
      </p>

      <h2>7. Contact for Refunds</h2>
      <p>
        For any refund-related queries, please contact me directly:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>
          <strong>Phone:</strong> {portfolioData.personal.phone}
        </li>
        <li>
          <strong>Response time:</strong> Within 2 business days
        </li>
      </ul>

      <p>
        I value every client relationship and will always strive to find a fair
        and reasonable resolution to any concerns.
      </p>
    </LegalLayout>
  );
}
