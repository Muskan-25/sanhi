import React, { useEffect } from 'react'
import Header from '../components/layout/Header'
import PageHero from '../components/common/PageHero'
import { Box, Typography } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import TuneIcon from '@mui/icons-material/Tune';
import CheckIcon from "@mui/icons-material/Check";
import '../styles/how-we-work.scss'
import services_bg from '../assets/services_bg.png'

const steps = [
  {
    id: "01",
    title: "Requirement Assessment",
    icon: <DescriptionOutlinedIcon />,
    description: "We begin with a comprehensive discovery phase to gain a deep understanding of your business environment. This includes evaluating your objectives, existing workflows, operational bottlenecks, compliance requirements, and long-term goals. Our team collaborates closely with key stakeholders to ensure expectations are clearly defined from the outset.",
    deliverables: [
      "Clear understanding of business priorities",
      "Alignment on outsourcing goals and success criteria",
      "Identification of potential risks and dependencies"
    ]
  },
  {
    id: "02",
    title: "Process Mapping & Scope Definition",
    icon: <MonitorOutlinedIcon />,
    description: "Once requirements are understood, we document end-to-end workflows and define a precise service scope. This step ensures complete transparency by outlining responsibilities, deliverables, turnaround times, escalation paths, and communication protocols. Nothing is left to assumption.",
    deliverables: [
      "Well-documented processes and ownership",
      "Clearly defined scope and service boundaries",
      "Reduced operational ambiguity and misalignment"
    ]
  },
  {
    id: "03",
    title: "Customized Solution Design",
    icon: <TuneIcon />,
    description: "Based on the agreed scope, we design a tailored outsourcing model that fits your business structure. This includes defining team composition, tools and technologies, reporting frameworks, governance models, and performance metrics. Our solutions are built to be scalable, secure, and cost-efficient.",
    deliverables: [
      "Customized engagement model",
      "Defined KPIs and reporting cadence",
      "Operational readiness aligned with business needs"
    ]
  },
  {
    id: "04",
    title: "Knowledge Transfer & Team Onboarding",
    icon: <CheckCircleOutlineOutlinedIcon />,
    description: "Before execution begins, our team undergoes structured knowledge transfer sessions. This includes documentation reviews, system access setup, shadowing sessions, and training aligned with your processes and standards. We ensure our team is fully prepared before taking ownership.",
    deliverables: [
      "Smooth transition with minimal disruption",
      "Well-trained, process-ready team",
      "Business continuity and quality assurance"
    ]
  },
  {
    id: "05",
    title: "Service Execution & Performance Tracking",
    icon: <AutoGraphIcon />,
    description: "With onboarding complete, we begin service delivery under strict quality and performance controls. Dedicated account managers oversee daily operations, track KPIs, and provide regular performance reports. Open communication channels ensure transparency and responsiveness at all times.",
    deliverables: [
      "Consistent service quality",
      "Real-time visibility into performance",
      "Proactive issue resolution"
    ]
  },
  {
    id: "06",
    title: "Review, Optimization & Scaling",
    icon: <MonitorHeartOutlinedIcon />,
    description: "Outsourcing is not static. We conduct periodic performance reviews to identify improvement opportunities, optimize workflows, and adjust resource allocation. As your business grows or requirements change, we scale services seamlessly to support new demands.",
    deliverables: [
      "Continuous process improvement",
      "Flexible scaling without disruption",
      "Long-term operational efficiency"
    ]
  }
];

function HowWeWork() {
  useEffect(() => {
    // Handle hash navigation on mount
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Header home={false} />
      <PageHero title="How It Works" bgImage={services_bg} />

      <Box className="how-we-work-page">
        {/* Introduction Section */}
        <Box className="intro-section">
          <Box className="container">
            <Typography className="section-title">
              Our Structured Approach to Delivering Reliable Outsourcing Solutions
            </Typography>
            <Typography className="section-description">
              At StriveEdge, we believe successful outsourcing is built on clarity, accountability, and
              collaboration. Our delivery framework is designed to minimize risk, ensure transparency, and
              deliver consistent results while adapting to your evolving business needs. Each step in our
              process is carefully structured to provide control, visibility, and measurable outcomes.
            </Typography>
          </Box>
        </Box>

        {/* Steps Section */}
        <Box className="steps-section">
          <Box className="container">
            {steps.map((step) => (
              <Box key={step.id} id={`step-${step.id}`} className="step-card">
                <Box className="step-header">
                  {/* <Box className="step-number">{step.id}</Box> */}
                  <Box className="step-icon-wrapper">
                    {step.icon}
                  </Box>
                  <Typography className="step-title">{step.title}</Typography>
                </Box>
                <Typography className="step-description">{step.description}</Typography>
                <Box className="deliverables-section">
                  <Typography className="deliverables-title">What this delivers:</Typography>
                  <Box className="deliverables-list">
                    {step.deliverables.map((item, index) => (
                      <Box key={index} className="deliverable-item">
                        <CheckIcon className="check-icon" />
                        <Typography>{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Partnership Section */}
        {/* <Box className="partnership-section">
          <Box className="container">
            <Typography className="section-title">A Partnership Built for Long-Term Success</Typography>
            <Typography className="section-description">
              Our structured approach ensures that outsourcing with StriveEdge is predictable, controlled, and
              results-driven. From initial assessment to ongoing optimization, we work as an extension of your
              team—focused on delivering value, reliability, and sustainable growth.
            </Typography>
          </Box>
        </Box> */}

        {/* KPIs Section */}
        <Box className="kpis-section">
          <Box className="container">
            <Typography className="section-title">KPIs & Reporting Structure</Typography>
            <Typography className="section-description">
              To ensure accountability and measurable success, we operate with a clearly defined performance
              management and reporting framework. This structure provides full visibility into operations
              while enabling data-driven decision-making.
            </Typography>

            <Box className="kpis-content">
              <Box className="kpi-subsection">
                <Typography className="subsection-title">Key Performance Indicators (KPIs)</Typography>
                <Typography className="subsection-description">
                  We define KPIs specific to the services you engage with us for, ensuring performance
                  measurement is practical, relevant, and outcome-driven. KPIs are finalized during onboarding
                  and reviewed regularly.
                </Typography>
              </Box>

              <Box className="kpi-subsection">
                <Typography className="subsection-title">Operational KPIs (Across Services)</Typography>
                <Box className="kpi-list">
                  {[
                    "Turnaround time (TAT) adherence per task or process",
                    "Accuracy and error-rate thresholds",
                    "Productivity levels (tasks completed per resource)",
                    "SLA compliance percentage",
                    "Rework and exception rates"
                  ].map((item, index) => (
                    <Box key={index} className="kpi-item">
                      <CheckIcon className="check-icon" />
                      <Typography>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box className="kpi-subsection">
                <Typography className="subsection-title">Service-Specific KPIs</Typography>
                <Box className="kpi-list">
                  {[
                    "Insurance Process Outsourcing: claim processing accuracy, policy issuance timelines, backlog reduction, compliance adherence",
                    "Accounting & Bookkeeping: reconciliation accuracy, on-time month-end closing, reporting completeness, audit readiness",
                    "Taxation & Compliance: filing timeliness, regulatory compliance rate, error-free submissions",
                    "Digital Marketing Services: campaign performance metrics, lead quality, conversion rates, content delivery timelines",
                    "Web Development & IT Services: project milestone adherence, system uptime, defect resolution time, security incident response",
                    "Financial Advisory Services (if applicable): report accuracy, turnaround time for analysis, compliance with agreed advisory scope"
                  ].map((item, index) => (
                    <Box key={index} className="kpi-item">
                      <CheckIcon className="check-icon" />
                      <Typography>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box className="kpi-subsection">
                <Typography className="subsection-title">Client Experience KPIs</Typography>
                <Box className="kpi-list">
                  {[
                    "Responsiveness and communication effectiveness",
                    "Issue resolution time",
                    "Client satisfaction feedback scores"
                  ].map((item, index) => (
                    <Box key={index} className="kpi-item">
                      <CheckIcon className="check-icon" />
                      <Typography>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box className="kpi-subsection">
                <Typography className="subsection-title">Reporting & Communication Cadence</Typography>
                <Typography className="subsection-description">
                  Our reporting structure is designed to keep stakeholders informed without creating unnecessary
                  complexity:
                </Typography>
                <Box className="kpi-list">
                  {[
                    "Daily or weekly operational reports (as required)",
                    "Monthly performance summaries with KPI tracking",
                    "Exception and risk reports for proactive issue management",
                    "Quarterly business reviews focused on optimization and growth"
                  ].map((item, index) => (
                    <Box key={index} className="kpi-item">
                      <CheckIcon className="check-icon" />
                      <Typography>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box className="kpi-subsection">
                <Typography className="subsection-title">Governance & Oversight</Typography>
                <Typography className="subsection-description">
                  Each engagement is supported by a dedicated Account Manager who acts as a single point of
                  contact. Regular review meetings ensure alignment, transparency, and continuous improvement.
                  This structured approach ensures performance is continuously measured, communicated, and
                  improved.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Final CTA Section */}
        <Box className="cta-section">
          <Box className="container">
            <Typography className="section-title">A Partnership Built for Long-Term Success</Typography>
            <Typography className="section-description">
              Our structured approach ensures that outsourcing with StriveEdge is predictable, controlled, and
              results-driven. From initial assessment to ongoing optimization, we work as an extension of your
              team—focused on delivering value, reliability, and sustainable growth.
            </Typography>
            <Typography className="cta-text">
              Partner with StriveEdge to experience outsourcing done with precision, accountability, and
              confidence.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default HowWeWork
