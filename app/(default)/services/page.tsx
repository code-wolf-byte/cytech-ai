import PricingTables from '@/components/pricing-tables';
import Faqs from '@/components/faqs';
import Testimonials from '@/components/testimonials';
import Cta from '@/components/cta';
import HoverableBox from '@/components/HoverableBox';
import styles from '@/app/css/additional-styles/HoverableBox.module.css'; // Adjust the path if necessary

export const metadata = {
  title: 'services - CytechAI',
  description: 'Page description',
};

export default function Features() {
  return (
    <>
      <PricingTables />
      <div className={styles.container}>
      <div className={styles.grid}>
        <HoverableBox
          title="Strategy and Consulting"
          description="Keep your most valuable assets protected in a complex environment."
          icon="/images/analysis.png"
        />
        <HoverableBox
          title="Governance, Risk and Compliance"
          description="Manage risk and meet legal and regulatory compliance obligations."
          icon="/images/digital.png"
        />
        <HoverableBox
          title="Security Testing and Assurance"
          description="Comprehensive testing to protect your digital assets and ensure operational resilience."
          icon='/images/testing.png'
        />
        <HoverableBox
          title="Cyber Strategic Communications"
          description="Prepare, respond and recover from cyber incidents."
          icon="/images/planning.png"
        />
        <HoverableBox
          title="Identity and Access Management"
          description="Effectively manage digital identities and access management."
          icon="/images/verified.png"
        />
        <HoverableBox
          title="Network and Infrastructure Solutions"
          description="Design, integrate and deploy solutions to support your technology needs."
          icon="/images/internet.png"
        />
        <HoverableBox
          title="Cloud Security and Solutions"
          description="Design, build and manage secure cloud and data solutions."
          icon="/images/cloud.png"
        />
        <HoverableBox
          title="Managed Security Services"
          description="Cyber security expertise delivered as a service."
          icon="/images/cyber.png"
        />
        <HoverableBox
          title="Digital Forensics and Incident Response"
          description="Digital forensic investigations, proactive threat hunting and cyber breach response."
          icon="/images/forensics.png"
        />
        <HoverableBox
          title="Cyber Capability, Education and Training"
          description="Organisation-wide education and training, tailored to your needs."
          icon="/images/education.png"
        />
        <HoverableBox
          title="Privacy Advisory"
          description="Build a sustainable and socially responsible data-driven business."
          icon="/images/personal.png"
        />
        <HoverableBox
          title="Cyber Intelligence"
          description="Gain a decision advantage with unparalleled visibility into the cyber threat landscape."
          icon="/images/brain.png"
        />
      </div>
      </div>
      <Cta />
    </>
  );
}
