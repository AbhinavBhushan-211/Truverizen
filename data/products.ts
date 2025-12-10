import { FileText, Database, MessageSquare, Server, ShieldCheck, Activity, Cpu, AlertTriangle, HardHat } from 'lucide-react';
import { ProductData } from '../types';

export const productData: ProductData[] = [
  {
    id: "tara",
    badge: "AI Response Assistant",
    title: "Meet",
    titleHighlight: "TARA AI",
    titleHighlightColor: "text-indigo-600",
    subtitle: "Domain-Specific Intelligence",
    description: "A domain-trained, continuously learning AI that democratizes access to enterprise data. TARA understands your internal SOPs and databases to provide instant, accurate answers—reducing information search time by up to 85%.",
    features: [
      {
        title: "Knowledge Base",
        description: "Retrieval from SOPs, policies, & FAQs.",
        icon: FileText,
        color: "text-blue-600",
        bgColor: "bg-blue-50"
      },
      {
        title: "Text to SQL",
        description: "Translate English to secure SQL queries.",
        icon: Database,
        color: "text-purple-600",
        bgColor: "bg-purple-50"
      },
      {
        title: "Enterprise Ready",
        description: "24/7 support for Service & HR.",
        icon: MessageSquare,
        color: "text-teal-600",
        bgColor: "bg-teal-50"
      }
    ],
    theme: 'light',
    align: 'left',
    linkTo: "/products/tara"
  },
  {
    id: "cloud-manager",
    badge: "Unified Observability",
    title: "Control with",
    titleHighlight: "Cloud Manager",
    titleHighlightColor: "text-blue-400",
    subtitle: "Single Pane of Glass",
    description: "Achieve real-time visibility across your hybrid and multi-cloud operations. Cloud Manager consolidates metrics, logs, and alerts into one intuitive interface, accelerating troubleshooting and optimizing performance.",
    features: [
      {
        title: "Multi-Cloud",
        description: "AWS, Azure, GCP metrics in one view.",
        icon: Server,
        color: "text-blue-400",
        bgColor: "bg-blue-500/10"
      },
      {
        title: "Compliance",
        description: "Real-time drift detection scanning.",
        icon: ShieldCheck,
        color: "text-emerald-400",
        bgColor: "bg-emerald-500/10"
      },
      {
        title: "Cost Intel",
        description: "Identify idle resources instantly.",
        icon: Activity,
        color: "text-orange-400",
        bgColor: "bg-orange-500/10"
      }
    ],
    theme: 'dark',
    align: 'right',
    linkTo: "/products/cloud-manager"
  },
  {
    id: "dot-anomaly",
    badge: "Visual Intelligence",
    title: "Secure with",
    titleHighlight: "Dot Anomaly",
    titleHighlightColor: "text-orange-600",
    subtitle: "High-Speed Visual Detection",
    description: "An advanced visual inspection platform designed for real-time quality control and safety monitoring. Utilizing a hierarchical patch retrieval engine, it detects defects and hazards with sub-millisecond precision.",
    features: [
      {
        title: "Edge AI",
        description: "Local processing, sub-second response.",
        icon: Cpu,
        color: "text-orange-600",
        bgColor: "bg-orange-50"
      },
      {
        title: "Hazards",
        description: "Detect fire, smoke, & zone breaches.",
        icon: AlertTriangle,
        color: "text-red-600",
        bgColor: "bg-red-50"
      },
      {
        title: "PPE Check",
        description: "Auto-monitor helmets & vests.",
        icon: HardHat,
        color: "text-yellow-600",
        bgColor: "bg-yellow-50"
      }
    ],
    theme: 'light',
    align: 'left',
    linkTo: "/products/dot-anomaly"
  }
];