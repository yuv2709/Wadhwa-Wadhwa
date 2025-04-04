"use client";

import React, { useState } from 'react';
import { useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const practiceAreas = [
    {
      id: 'direct-tax',
      title: 'Direct Tax',
      content: `Direct taxation forms the backbone of a nation’s fiscal policy and legal compliance framework. At our firm, we have developed deep expertise in handling all facets of direct tax laws, including Income Tax, Capital Gains Tax, TDS (Tax Deducted at Source), and Wealth Tax, ensuring our clients receive comprehensive support in both planning and compliance.
  
  We provide strategic tax planning services to individuals, professionals, and businesses, helping them lawfully reduce their tax liabilities through well-structured financial decisions. Our approach involves a detailed understanding of each client’s financial profile, investment patterns, and business operations to suggest the most effective tax-saving options that align with current laws and judicial precedents.
  
  Our firm has extensive experience in preparing and filing accurate income tax returns, managing advance tax calculations, and assisting clients during tax assessments, reassessments, and audits conducted by the Income Tax Department. We represent clients before Assessing Officers, Appellate Authorities, the Income Tax Appellate Tribunal (ITAT), and even High Courts when necessary.
  
  We also handle complex notices and scrutiny cases, ensuring that the client’s interests are well-defended. Our proactive support during survey, search and seizure operations ensures timely legal intervention and guidance to minimize risk and exposure.
  
  Additionally, we assist corporate clients in matters related to transfer pricing, corporate restructuring, tax exemptions under special schemes, and international taxation, offering legal clarity in an ever-evolving regulatory landscape.
  
  Our commitment to staying abreast of the latest amendments in tax laws, budget provisions, and landmark rulings ensures that our clients receive accurate, updated, and practical legal advice. With a balance of litigation experience and advisory insight, we aim to offer not just compliance — but peace of mind.`
    },
    {
      id: 'indirect-tax',
      title: 'Indirect Tax & GST',
      content: `Navigating indirect tax regimes, particularly the Goods and Services Tax (GST), requires in-depth expertise and timely compliance. Our firm provides end-to-end legal assistance in all matters related to indirect taxation, including GST registration, return filings, audits, investigations, and litigation.
  
  We assist clients in understanding and complying with CGST, SGST, IGST, and UTGST provisions, ensuring that they meet all statutory obligations while optimizing input tax credits. Our team evaluates business transactions and supply chains to identify tax-efficient models and resolve classification disputes.
  
  In legacy matters such as Service Tax, VAT, Excise, and Central Sales Tax, we offer strong representation in assessments and appellate proceedings. We support clients during Departmental audits, anti-evasion proceedings, and show cause notices.
  
  For businesses engaged in cross-border trade, we provide guidance on import/export taxes, customs duties, and related regulatory frameworks. Our legal solutions ensure GST compliance is not just a burden—but a tool for transparency and operational efficiency.`
    },
    {
      id: 'civil-litigation',
      title: 'Civil Litigation',
      content: `Civil litigation demands a strategic, patient, and legally rigorous approach. Our firm represents clients in a broad spectrum of civil disputes involving property, contracts, tort claims, partnership conflicts, and succession matters.
  
  We appear regularly before District Courts, High Courts, and tribunals, handling complex civil suits, injunction applications, and appeals. Our team meticulously drafts plaints, written statements, applications under Order 39, and other civil pleadings with legal precision.
  
  We specialize in securing interim relief, partition of ancestral properties, recovery of dues, enforcement of contracts, and declaratory suits. From filing to final judgment and execution, we manage each stage with dedication and client-focused strategy.
  
  Our commitment to research-backed arguments, client confidentiality, and ethical representation ensures that our clients' civil rights and property interests are strongly protected in every legal battle.`
    },
    {
      id: 'real-estate',
      title: 'Real Estate Law',
      content: `Real estate transactions involve significant financial stakes and legal intricacies. Our firm offers end-to-end legal support in property matters, including land acquisition, due diligence, title verification, sale deed drafting, lease agreements, and property registration.
  
  We conduct exhaustive background checks on land titles to uncover encumbrances, zoning regulations, and regulatory clearances, thereby ensuring legally sound investment decisions. We also assist in drafting and reviewing MOUs, joint development agreements, builder-buyer contracts, and commercial leases.
  
  Our litigation team handles real estate disputes involving ownership, possession, tenancy, construction delays, and regulatory compliance. We represent clients before RERA authorities, civil courts, consumer forums, and appellate tribunals.
  
  Whether you're buying, selling, inheriting, or leasing property, our expert legal guidance safeguards your interests and helps you make informed real estate choices.`
    },
    {
      id: 'insolvency',
      title: 'Insolvency & Bankruptcy',
      content: `Our firm plays a key role in India’s rapidly evolving insolvency landscape under the Insolvency and Bankruptcy Code (IBC). We advise and represent financial creditors, operational creditors, corporate debtors, and resolution professionals throughout the insolvency process.
  
  We handle filing and defending insolvency petitions before NCLT, negotiate resolution plans, and coordinate with Committee of Creditors (CoC) and Insolvency Professionals (IPs). Our team provides strategic advice in pre-insolvency negotiations and assists with restructuring and turnaround plans.
  
  For companies undergoing liquidation, we help navigate compliance, asset sales, and creditor settlements. In cross-border insolvency, we support legal proceedings involving foreign assets and debtors under relevant international laws.
  
  Our experience in high-stake insolvency cases ensures that our clients receive pragmatic and commercially viable solutions while staying within the bounds of IBC regulations.`
    },
    {
      id: 'labour',
      title: 'Labour & Employment',
      content: `The ever-changing framework of labor laws requires continuous compliance and legal foresight. Our firm provides employers and employees with holistic advice on employment contracts, industrial relations, workplace policies, and dispute resolution.
  
  We assist in drafting employment agreements, HR manuals, POSH (Prevention of Sexual Harassment) policies, and retrenchment notices. We also advise on minimum wage, gratuity, provident fund, ESI, and other statutory obligations.
  
  Our representation includes defending clients before Labour Commissioners, Industrial Tribunals, and High Courts in matters involving wrongful termination, wage disputes, employee misconduct, and trade union conflicts.
  
  Whether it’s preventive legal advice or litigation support, our focus is on creating fair, compliant, and mutually beneficial employment relationships that foster trust and reduce legal risk.`
    },
    {
      id: 'dispute-resolution',
      title: 'Dispute Resolution',
      content: `In today’s fast-paced commercial environment, businesses and individuals prefer time-bound and cost-effective resolution mechanisms over long-drawn court battles. We offer expert services in alternative dispute resolution (ADR), including arbitration, mediation, and conciliation.
  
  Our firm assists in drafting arbitration agreements, selecting arbitrators, and initiating domestic and international arbitration proceedings. We represent clients in institutional and ad hoc arbitrations across sectors such as construction, infrastructure, IP, and commercial transactions.
  
  We also provide mediation and conciliation services, especially in family, commercial, and consumer disputes, ensuring outcomes that preserve relationships and prevent reputational damage.
  
  From pre-dispute strategy to enforcement of arbitral awards, our team is committed to resolving disputes efficiently and equitably.`
    },
    {
      id: 'matrimonial',
      title: 'Matrimonial Disputes',
      content: `Matrimonial disputes are emotionally challenging and legally intricate. We support clients through these difficult times with a combination of compassion, confidentiality, and strong legal acumen.
  
  Our services include representing clients in divorce petitions, maintenance claims, alimony, child custody, domestic violence cases, and mutual consent separations. We handle both contested and uncontested divorce cases under Hindu, Muslim, Christian, and Special Marriage Acts.
  
  We also assist in drafting pre-nuptial agreements, visitation rights agreements, and in negotiating property settlements. Our goal is to protect your legal rights while minimizing emotional trauma and maintaining the dignity of all involved.
  
  With sensitivity and strength, we walk beside our clients through one of the most personal legal journeys they may face.`
    },
    {
      id: 'consumer-law',
      title: 'Consumer Law',
      content: `In a consumer-driven economy, protecting buyers and businesses from unfair practices is critical. Our firm represents both consumers and companies before Consumer Forums, State Commissions, and the National Consumer Disputes Redressal Commission (NCDRC).
  
  We handle complaints related to defective products, deficient services, real estate delays, e-commerce frauds, misleading advertisements, and unfair trade practices. We ensure that our clients receive timely compensation, replacement, or refund as appropriate.
  
  For businesses, we offer preventive legal audits and risk assessments to ensure compliance with consumer protection laws and avoid costly litigation.
  
  Our firm combines legal precision with swift execution to secure favorable outcomes in consumer disputes.`
    },
    {
      id: 'arbitration',
      title: 'Arbitration',
      content: `Arbitration is a preferred mode of resolving commercial disputes, offering speed, confidentiality, and enforceability. We provide comprehensive legal services across all stages of arbitration, from agreement drafting to final award enforcement.
  
  We represent clients in ad hoc and institutional arbitrations governed by rules such as UNCITRAL, ICC, SIAC, and LCIA. Our team has experience in construction, infrastructure, shareholder, joint venture, and cross-border contract disputes.
  
  We also assist in interim relief, challenge of arbitral awards, and proceedings under Sections 9, 11, 34, and 36 of the Arbitration and Conciliation Act.
  
  With a focus on procedural efficiency and result-oriented advocacy, we help our clients resolve complex disputes outside the courtroom.`
    },
    {
      id: 'commercial-law',
      title: 'Commercial Law',
      content: `Commercial law lies at the heart of business operations. We help companies navigate the legal complexities of modern commerce by offering tailored advice on contracts, regulatory compliance, and corporate structuring.
  
  Our firm assists in drafting and negotiating commercial contracts including supply agreements, service contracts, franchise deals, NDAs, MOUs, and licensing arrangements. We support startups and SMEs with company formation, shareholders' agreements, and investment documentation.
  
  We advise on mergers, acquisitions, joint ventures, FDI compliance, and due diligence to ensure legally sound growth strategies. We also represent clients in commercial disputes before courts and arbitral forums.
  
  Our goal is to empower businesses with legally secure and growth-friendly solutions that minimize risk and enhance profitability.`
    },
    {
      id: 'criminal-matters',
      title: 'Criminal Matters',
      content: `Criminal law is a cornerstone of individual rights and justice. At Wadhwa & Wadhwa, we provide strong, strategic legal representation to individuals and entities facing criminal allegations, ensuring due process and a fair trial.

We assist clients across all stages of criminal proceedings—beginning with pre-FIR advisory, bail applications (anticipatory and regular), and continuing through investigation, trial, and appeals. Our firm handles a broad range of offenses including white-collar crimes, economic offenses, cybercrime, and cases under the NDPS Act.

We also support clients in filing and defending complaints related to domestic violence, dowry harassment, sexual offenses, and criminal defamation. Our team regularly appears before trial courts, High Courts, and the Supreme Court, offering skilled representation in quashing petitions, revisions, and appeals.

Whether it’s a sensitive personal matter or a high-stakes commercial criminal case, we focus on protecting our clients’ rights and reputations with discretion, diligence, and professionalism.`
    }
  ];
  

  export default function PracticeAreasPage() {
    const [selected, setSelected] = useState(practiceAreas[0]);
  
    // Handle URL hash on first render
    useEffect(() => {
      const hash = window.location.hash.replace("#", "");
      const found = practiceAreas.find((area) => area.id === hash);
      if (found) {
        setSelected(found);
      }
    }, []);
  
    return (
      <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-24">
        {/* Mobile Sidebar */}
        <div className="md:hidden bg-white shadow-md px-4 py-4">
          <label className="block text-sm text-gray-600 mb-2">Select Area</label>
          <select
            value={selected.id}
            onChange={(e) =>
              setSelected(practiceAreas.find((area) => area.id === e.target.value))
            }
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {practiceAreas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.title}
              </option>
            ))}
          </select>
        </div>
  
        {/* Desktop + Content Layout */}
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="hidden md:block md:w-64 bg-white shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-primary">Practice Areas</h2>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li
                key={area.id}
                onClick={() => {
                  setSelected(area);
                  history.replaceState(null, "", `#${area.id}`); // avoid pushing to history
                }}
                className={`cursor-pointer p-2 rounded-md transition ${
                  selected.id === area.id
                    ? "bg-primary text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {area.title}
              </li>
              
              ))}
            </ul>
          </aside>
  
          {/* Main Content */}
          <main className="flex-1 p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              {selected.title}
            </h1>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-mulish whitespace-pre-line">
              {selected.content}
            </p>
          </main>
        </div>
      </div>
      <Footer />
      </>
    );
  }