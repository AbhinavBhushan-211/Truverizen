import { 
  Cloud, Server, Database, Shield, Lock, Cpu, 
  BarChart, Users, Zap, Globe, FileText, Search,
  Activity, ShoppingBag, Landmark, Factory, Building2
} from 'lucide-react';
import { ServiceDetailContent, IndustryDetailContent } from '../types';

export const serviceDetails: Record<string, ServiceDetailContent> = {
  'cloud': {
    id: 'cloud',
    title: 'Cloud Services',
    tagline: 'Migration, Modernization & Management',
    description: 'We help enterprises seamlessly migrate to the cloud, re-architect legacy applications for scale, and ensure 24x7 operational resilience. Our approach balances rapid adaptation with consistent performance and compliance.',
    capabilities: [
      {
        title: 'Migration Strategies',
        items: [
          'VMware to Cloud migrations with minimal downtime',
          'Lift-and-shift from legacy physical servers',
          'SAP migrations to AWS/Azure environments',
          'Hybrid and multi-cloud integration strategies'
        ],
        icon: Globe
      },
      {
        title: 'App Modernization',
        items: [
          'Re-architecting for Microservices',
          'Containerization with Docker & Kubernetes',
          'Serverless functions for event-driven workloads',
          'Database modernization to scalable platforms'
        ],
        icon: Server
      },
      {
        title: 'Managed Operations',
        items: [
          '24x7 Cloud Operations & Monitoring',
          'Disaster Recovery Automation',
          'FinOps for cost optimization',
          'Operational resilience frameworks'
        ],
        icon: Activity
      }
    ],
    techStack: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'Ansible']
  },
  'ai': {
    id: 'ai',
    title: 'Generative AI & Automation',
    tagline: 'Automating Workflows, Enhancing Decisions',
    description: 'Enterprise-grade RAG, generative AI, and agentic platforms delivering 40–70% workflow reduction with secure, scalable deployments. We move beyond buzzwords to deliver "Truth" in AI.',
    capabilities: [
      {
        title: 'RAG-Based Assistants',
        items: [
          'Domain-aware retrieval from SOPs & policies',
          'Multi-format support (PDF, Docs, Excel)',
          'Contextual generation using business terminology',
          'Continuous learning via knowledge updates'
        ],
        icon: FileText
      },
      {
        title: 'Agentic Platforms',
        items: [
          'Tailored AI agents for HR, Finance, & Sales',
          'Automated invoice & purchase order processing',
          'AI-driven hiring and screening',
          'Sales enablement and proposal generation'
        ],
        icon: Users
      },
      {
        title: 'Secure AI Lifecycle',
        items: [
          'End-to-end MLOps and dataset engineering',
          'Secure deployment across cloud & on-prem',
          'Data privacy and enterprise compliance',
          'Scalable inference architectures'
        ],
        icon: Cpu
      }
    ],
    techStack: ['Python', 'OpenAI', 'LangChain', 'Pinecone', 'PyTorch', 'PostgreSQL', 'React', 'AWS Bedrock']
  },
  'security': {
    id: 'security',
    title: 'Cybersecurity & Governance',
    tagline: 'Zero-Trust Resilience & Compliance',
    description: 'Protect your digital assets with our comprehensive security framework. We align with global standards to ensure your infrastructure is secure, compliant, and resilient against modern threats.',
    capabilities: [
      {
        title: 'Governance & Compliance',
        items: [
          'Framework Alignment: ISO 27001, GDPR, HIPAA, RBI',
          'Automated Policy Enforcement',
          'Audit Readiness & Preparation',
          'Continuous Compliance Monitoring'
        ],
        icon: FileText
      },
      {
        title: 'Threat Detection (SOC)',
        items: [
          '24x7 Managed SOC with SIEM',
          'Real-time Threat Intelligence',
          'Incident Response & Mitigation',
          'Endpoint Detection (EDR/XDR)'
        ],
        icon: Shield
      },
      {
        title: 'Infrastructure Security',
        items: [
          'Vulnerability Assessment & Penetration Testing (VAPT)',
          'Cloud Security (WAF, IAM Hardening)',
          'Zero Trust Architecture Implementation',
          'Container & Kubernetes Security'
        ],
        icon: Lock
      }
    ],
    techStack: ['SentinelOne', 'CrowdStrike', 'Splunk', 'Wazuh', 'Burp Suite', 'Nessus', 'AWS GuardDuty']
  }
};

export const industryDetails: Record<string, IndustryDetailContent> = {
  'bfsi': {
    id: 'bfsi',
    name: 'Banking, Financial Services & Insurance',
    description: 'Accelerate digital transformation in BFSI with AI-driven fraud detection, automated compliance, and personalized customer experiences.',
    challenges: [
      'Rising fraudulent transactions and financial crime.',
      'Complex regulatory compliance (KYC/AML).',
      'Slow manual underwriting processes.'
    ],
    solutions: [
      {
        title: 'Fraud Detection & Anomaly Alerts',
        description: 'Real-time monitoring of transaction patterns to detect and block suspicious activities instantly.',
        icon: Shield
      },
      {
        title: 'Automated KYC/AML Processing',
        description: 'AI-powered document verification to speed up onboarding while ensuring regulatory compliance.',
        icon: FileText
      },
      {
        title: 'Credit Risk Scoring',
        description: 'Advanced algorithms to assess borrower risk more accurately and automate underwriting decisions.',
        icon: BarChart
      }
    ],
    metrics: [
      { value: '40%', label: 'Reduction in False Positives' },
      { value: '60%', label: 'Faster Customer Onboarding' }
    ]
  },
  'healthcare': {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    description: 'Improve patient outcomes and operational efficiency with medical document intelligence and clinical decision support systems.',
    challenges: [
      'Unstructured medical data in diverse formats.',
      'Administrative burden on clinical staff.',
      'Patient scheduling inefficiencies.'
    ],
    solutions: [
      {
        title: 'Clinical Decision Support',
        description: 'AI assistants that provide evidence-based insights to doctors at the point of care.',
        icon: Activity
      },
      {
        title: 'Medical Document Intelligence',
        description: 'Extracting critical patient data from handwritten notes, PDFs, and scans automatically.',
        icon: FileText
      },
      {
        title: 'Patient Journey Optimization',
        description: 'Smart scheduling and communication tools to reduce wait times and improve satisfaction.',
        icon: Users
      }
    ],
    metrics: [
      { value: '30%', label: 'Reduction in Admin Workload' },
      { value: '24x7', label: 'Patient Support Availability' }
    ]
  },
  'manufacturing': {
    id: 'manufacturing',
    name: 'Manufacturing & Supply Chain',
    description: 'Drive Industry 4.0 with predictive maintenance, automated quality control, and supply chain visibility.',
    challenges: [
      'Unplanned equipment downtime.',
      'Manual quality inspection errors.',
      'Supply chain disruptions.'
    ],
    solutions: [
      {
        title: 'Predictive Maintenance',
        description: 'IoT and AI analysis to predict equipment failures before they happen.',
        icon: Zap
      },
      {
        title: 'Automated Quality Inspection (Vision AI)',
        description: 'Computer vision systems (Dot Anomaly) to detect defects in real-time on the production line.',
        icon: Factory
      },
      {
        title: 'Inventory Optimization',
        description: 'AI forecasting to maintain optimal stock levels and reduce waste.',
        icon: Database
      }
    ],
    metrics: [
      { value: '20%', label: 'Increase in OEE' },
      { value: '50%', label: 'Reduction in QA Costs' }
    ]
  },
  'retail': {
    id: 'retail',
    name: 'Retail & E-commerce',
    description: 'Enhance customer engagement and optimize inventory with data-driven retail solutions.',
    challenges: [
      'Changing consumer preferences.',
      'Inventory mismanagement.',
      'High return rates.'
    ],
    solutions: [
      {
        title: 'Product Recommendations',
        description: 'Personalized shopping experiences driven by user behavior analysis.',
        icon: ShoppingBag
      },
      {
        title: 'Demand Forecasting',
        description: 'Accurate prediction of sales trends to optimize procurement and pricing.',
        icon: BarChart
      },
      {
        title: 'Smart Returns',
        description: 'Automated return processing and analysis to reduce fraud and restocking costs.',
        icon: Globe
      }
    ],
    metrics: [
      { value: '15%', label: 'Revenue Uplift' },
      { value: '30%', label: 'Inventory Cost Reduction' }
    ]
  },
  'public-sector': {
    id: 'public-sector',
    name: 'Public Sector',
    description: 'Modernize citizen services with automated document processing and accessible digital platforms.',
    challenges: [
      'Slow manual document processing.',
      'Limited accessibility to services.',
      'Legacy infrastructure.'
    ],
    solutions: [
      {
        title: 'Citizen Service Automation',
        description: 'Chatbots and portals for instant access to government services and information.',
        icon: Users
      },
      {
        title: 'Policy Interpretation Assistants',
        description: 'AI tools to help staff and citizens understand complex regulations.',
        icon: Landmark
      },
      {
        title: 'Document Digitization',
        description: 'Converting physical archives into searchable digital knowledge bases.',
        icon: FileText
      }
    ],
    metrics: [
      { value: '80%', label: 'Faster Service Delivery' },
      { value: '100%', label: 'Digital Accessibility' }
    ]
  }
};