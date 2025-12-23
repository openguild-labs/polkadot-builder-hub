export interface HackathonIdea {
  id: number;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
  prd: {
    overview: string;
    problemStatement: string;
    proposedSolution: string;
    keyFeatures: string[];
    technicalRequirements: string[];
    userStories: string[];
    successMetrics: string[];
    outOfScope: string[];
    timeline: string;
    resources: string[];
  };
}

export interface HackathonTrack {
  id: number;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  color: string;
  prizes: {
    first: string;
    second: string;
    third: string;
  };
  ideas: HackathonIdea[];
}

// Helper function to generate PRD content for each idea
function generatePRD(
  title: string,
  description: string,
  difficulty: "Beginner" | "Intermediate" | "Advanced",
  tags: string[],
  trackName: string
): HackathonIdea["prd"] {
  const difficultyTimelines = {
    Beginner: "2-3 weeks",
    Intermediate: "3-4 weeks",
    Advanced: "4-6 weeks",
  };

  const baseFeatures: Record<string, string[]> = {
    Payment: [
      "Secure wallet integration with Dedot or Polkadot-API (PAPI)",
      "Real-time transaction status updates",
      "Multi-currency support for DOT and stablecoins",
      "Transaction history and receipts",
    ],
    AI: [
      "Machine learning model integration",
      "Natural language processing capabilities",
      "Real-time inference engine",
      "Model versioning and updates",
    ],
    "Cross-chain": [
      "XCM message composition and sending",
      "Multi-chain asset tracking",
      "Bridge protocol integration",
      "Cross-chain transaction verification",
    ],
  };

  const baseTechRequirements: Record<string, string[]> = {
    Payment: [
      "Dedot or Polkadot-API (PAPI) for blockchain interactions",
      "Asset Hub pallet integration for stablecoin transfers",
      "React/Next.js frontend framework",
      "PostgreSQL or similar for off-chain data",
    ],
    AI: [
      "Polkadot Agent Kit (@polkadot-agent-kit/sdk) for AI agent development",
      "LangChain integration for building autonomous AI agents",
      "TensorFlow.js or ONNX Runtime for ML inference",
      "OpenAI/Anthropic API integration for LLM capabilities",
      "Substrate RPC for blockchain data",
      "Vector database for embeddings (Pinecone/Weaviate)",
    ],
    "Cross-chain": [
      "XCM SDK for cross-chain messaging",
      "Hyperbridge integration for EVM chains",
      "Multi-chain RPC providers",
      "Asset registry for chain mappings",
    ],
  };

  const trackKey =
    trackName.includes("Payment") || trackName.includes("Stablecoin")
      ? "Payment"
      : trackName.includes("AI")
      ? "AI"
      : "Cross-chain";

  return {
    overview: `${description} This project aims to leverage Polkadot's unique capabilities to deliver a seamless user experience while maintaining security and decentralization.`,
    problemStatement: `Current solutions in this space often suffer from poor user experience, high fees, or lack of interoperability. Users need a ${title.toLowerCase()} that is intuitive, cost-effective, and leverages the full potential of the Polkadot ecosystem.`,
    proposedSolution: `Build a ${difficulty.toLowerCase()}-level application that implements ${title.toLowerCase()} using Polkadot Hub's infrastructure. The solution will focus on user experience while maintaining the security guarantees of the underlying blockchain.`,
    keyFeatures: [
      ...baseFeatures[trackKey],
      `${tags[0]}-specific functionality`,
      "Responsive design for mobile and desktop",
      "Comprehensive error handling and user feedback",
      "Analytics dashboard for usage insights",
    ],
    technicalRequirements: [
      ...baseTechRequirements[trackKey],
      "TypeScript for type-safe development",
      "Jest/Vitest for unit and integration testing",
      "CI/CD pipeline with GitHub Actions",
    ],
    userStories: [
      `As a user, I want to ${description
        .toLowerCase()
        .replace("build ", "use ")
        .replace(
          "create ",
          "access "
        )} so that I can benefit from blockchain technology.`,
      "As a user, I want to connect my wallet easily so that I can start using the application quickly.",
      "As a user, I want to see clear transaction status so that I know when my actions are confirmed.",
      "As a user, I want to view my history so that I can track my past activities.",
      "As a developer, I want clear documentation so that I can extend or integrate with the platform.",
    ],
    successMetrics: [
      "Transaction success rate > 99%",
      "Average user session duration > 5 minutes",
      "User satisfaction score (NPS) > 40",
      "Page load time < 2 seconds",
      "Zero critical security vulnerabilities",
    ],
    outOfScope: [
      "Fiat on/off ramps (can be added in future iterations)",
      "Native mobile applications (web-first approach)",
      "Support for non-Polkadot chains (focus on ecosystem)",
      "Advanced trading features (unless specifically required)",
    ],
    timeline: difficultyTimelines[difficulty],
    resources: [
      "https://www.notion.so/openguild/Polkadot-Hub-Builder-Playbook-260659b1c81780e5b960e350c5dd7dba - Polkadot Hub Builder Playbook",
      "https://learn.openguild.wtf/learning-path/ - OpenGuild Builder Resources",
      "https://docs.polkadot.com/ - Official Polkadot Documentation",
      "https://wiki.polkadot.network/ - Polkadot Wiki",
      "https://dedot.dev/ - Dedot Documentation (recommended JS client)",
      "https://papi.how/ - Polkadot-API (PAPI) Documentation",
      ...(trackKey === "AI"
        ? [
            "https://github.com/elasticlabs-org/polkadot-agent-kit - Polkadot AI Agent Kit for building autonomous agents",
            "https://www.npmjs.com/package/@polkadot-agent-kit/sdk - Polkadot Agent Kit SDK",
            "https://js.langchain.com/docs/ - LangChain.js Documentation for AI agent development",
          ]
        : []),
      ...(trackKey === "Cross-chain"
        ? [
            "https://paritytech.github.io/xcm-docs/ - XCM Documentation",
            "https://docs.hyperbridge.network/ - Hyperbridge Documentation",
          ]
        : []),
    ],
  };
}

export const hackathonTracks: HackathonTrack[] = [
  {
    id: 1,
    name: "Stablecoin / Payment",
    shortName: "Payment",
    description:
      "Consumer applications that utilize stablecoins or offering payment use cases on Polkadot Hub.",
    icon: "💳",
    color: "#E6007A",
    prizes: {
      first: "$5,000",
      second: "$2,500",
      third: "$1,500",
    },
    ideas: [
      {
        id: 101,
        title: "Peer-to-Peer Payment App",
        description:
          "Build a Venmo-like P2P payment app using stablecoins on Polkadot Hub with QR code scanning and contact list integration.",
        difficulty: "Beginner",
        tags: ["P2P", "Mobile", "Stablecoin"],
        prd: generatePRD(
          "Peer-to-Peer Payment App",
          "Build a Venmo-like P2P payment app using stablecoins on Polkadot Hub with QR code scanning and contact list integration.",
          "Beginner",
          ["P2P", "Mobile", "Stablecoin"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 102,
        title: "Merchant Payment Gateway",
        description:
          "Create a payment gateway that allows merchants to accept stablecoin payments with automatic fiat conversion options.",
        difficulty: "Intermediate",
        tags: ["E-commerce", "Gateway", "Fiat"],
        prd: generatePRD(
          "Merchant Payment Gateway",
          "Create a payment gateway that allows merchants to accept stablecoin payments with automatic fiat conversion options.",
          "Intermediate",
          ["E-commerce", "Gateway", "Fiat"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 103,
        title: "Subscription Payment Manager",
        description:
          "Develop a recurring payment system for subscription services using smart contracts and stablecoins.",
        difficulty: "Intermediate",
        tags: ["Subscription", "Recurring", "SaaS"],
        prd: generatePRD(
          "Subscription Payment Manager",
          "Develop a recurring payment system for subscription services using smart contracts and stablecoins.",
          "Intermediate",
          ["Subscription", "Recurring", "SaaS"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 104,
        title: "Split Bill DApp",
        description:
          "Create an app for splitting bills among friends with automatic stablecoin settlements and expense tracking.",
        difficulty: "Beginner",
        tags: ["Social", "Split", "Groups"],
        prd: generatePRD(
          "Split Bill DApp",
          "Create an app for splitting bills among friends with automatic stablecoin settlements and expense tracking.",
          "Beginner",
          ["Social", "Split", "Groups"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 105,
        title: "Payroll System",
        description:
          "Build a decentralized payroll system for companies to pay employees in stablecoins with tax reporting features.",
        difficulty: "Advanced",
        tags: ["Enterprise", "Payroll", "HR"],
        prd: generatePRD(
          "Payroll System",
          "Build a decentralized payroll system for companies to pay employees in stablecoins with tax reporting features.",
          "Advanced",
          ["Enterprise", "Payroll", "HR"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 106,
        title: "Micro-Payment Content Platform",
        description:
          "Create a platform where creators can receive micro-payments in stablecoins for content (articles, videos, music).",
        difficulty: "Intermediate",
        tags: ["Creator", "Content", "Micropayments"],
        prd: generatePRD(
          "Micro-Payment Content Platform",
          "Create a platform where creators can receive micro-payments in stablecoins for content (articles, videos, music).",
          "Intermediate",
          ["Creator", "Content", "Micropayments"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 107,
        title: "Remittance Service",
        description:
          "Build a cross-border remittance service with low fees using stablecoins and local on/off ramps.",
        difficulty: "Advanced",
        tags: ["Remittance", "Cross-border", "Fiat"],
        prd: generatePRD(
          "Remittance Service",
          "Build a cross-border remittance service with low fees using stablecoins and local on/off ramps.",
          "Advanced",
          ["Remittance", "Cross-border", "Fiat"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 108,
        title: "Invoice Factoring Platform",
        description:
          "Create a platform where businesses can get instant payment on invoices using stablecoin liquidity pools.",
        difficulty: "Advanced",
        tags: ["B2B", "Invoice", "Liquidity"],
        prd: generatePRD(
          "Invoice Factoring Platform",
          "Create a platform where businesses can get instant payment on invoices using stablecoin liquidity pools.",
          "Advanced",
          ["B2B", "Invoice", "Liquidity"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 109,
        title: "Donation Platform",
        description:
          "Build a transparent donation platform for charities with real-time tracking of fund usage.",
        difficulty: "Beginner",
        tags: ["Charity", "Donation", "Transparency"],
        prd: generatePRD(
          "Donation Platform",
          "Build a transparent donation platform for charities with real-time tracking of fund usage.",
          "Beginner",
          ["Charity", "Donation", "Transparency"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 110,
        title: "Escrow Service",
        description:
          "Create a trustless escrow service for freelancers and clients using smart contracts.",
        difficulty: "Intermediate",
        tags: ["Escrow", "Freelance", "Trust"],
        prd: generatePRD(
          "Escrow Service",
          "Create a trustless escrow service for freelancers and clients using smart contracts.",
          "Intermediate",
          ["Escrow", "Freelance", "Trust"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 111,
        title: "Loyalty Points System",
        description:
          "Build a universal loyalty points system that converts to stablecoins across multiple merchants.",
        difficulty: "Intermediate",
        tags: ["Loyalty", "Rewards", "Retail"],
        prd: generatePRD(
          "Loyalty Points System",
          "Build a universal loyalty points system that converts to stablecoins across multiple merchants.",
          "Intermediate",
          ["Loyalty", "Rewards", "Retail"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 112,
        title: "Streaming Payments",
        description:
          "Create a real-time payment streaming service for hourly workers or content consumption.",
        difficulty: "Advanced",
        tags: ["Streaming", "Real-time", "Payments"],
        prd: generatePRD(
          "Streaming Payments",
          "Create a real-time payment streaming service for hourly workers or content consumption.",
          "Advanced",
          ["Streaming", "Real-time", "Payments"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 113,
        title: "Group Savings Pool",
        description:
          "Build a rotating savings club (ROSCA) application using smart contracts and stablecoins.",
        difficulty: "Intermediate",
        tags: ["Savings", "Social", "Community"],
        prd: generatePRD(
          "Group Savings Pool",
          "Build a rotating savings club (ROSCA) application using smart contracts and stablecoins.",
          "Intermediate",
          ["Savings", "Social", "Community"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 114,
        title: "Cashback Rewards App",
        description:
          "Create an app that provides stablecoin cashback rewards for purchases at partner merchants.",
        difficulty: "Beginner",
        tags: ["Cashback", "Rewards", "Shopping"],
        prd: generatePRD(
          "Cashback Rewards App",
          "Create an app that provides stablecoin cashback rewards for purchases at partner merchants.",
          "Beginner",
          ["Cashback", "Rewards", "Shopping"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 115,
        title: "Bill Payment Aggregator",
        description:
          "Build a platform to pay utility bills, rent, and other recurring expenses using stablecoins.",
        difficulty: "Intermediate",
        tags: ["Bills", "Utilities", "Aggregator"],
        prd: generatePRD(
          "Bill Payment Aggregator",
          "Build a platform to pay utility bills, rent, and other recurring expenses using stablecoins.",
          "Intermediate",
          ["Bills", "Utilities", "Aggregator"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 116,
        title: "Point of Sale Terminal",
        description:
          "Create a mobile POS system for small businesses to accept stablecoin payments.",
        difficulty: "Intermediate",
        tags: ["POS", "Retail", "Mobile"],
        prd: generatePRD(
          "Point of Sale Terminal",
          "Create a mobile POS system for small businesses to accept stablecoin payments.",
          "Intermediate",
          ["POS", "Retail", "Mobile"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 117,
        title: "Request Network Clone",
        description:
          "Build an invoicing and payment request system with automatic payment tracking.",
        difficulty: "Intermediate",
        tags: ["Invoice", "Request", "Tracking"],
        prd: generatePRD(
          "Request Network Clone",
          "Build an invoicing and payment request system with automatic payment tracking.",
          "Intermediate",
          ["Invoice", "Request", "Tracking"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 118,
        title: "Tipping Platform",
        description:
          "Create a social tipping platform for content creators across different social media.",
        difficulty: "Beginner",
        tags: ["Tips", "Social", "Creator"],
        prd: generatePRD(
          "Tipping Platform",
          "Create a social tipping platform for content creators across different social media.",
          "Beginner",
          ["Tips", "Social", "Creator"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 119,
        title: "Travel Expense Tracker",
        description:
          "Build an app for tracking and settling travel expenses among group travelers.",
        difficulty: "Beginner",
        tags: ["Travel", "Expense", "Groups"],
        prd: generatePRD(
          "Travel Expense Tracker",
          "Build an app for tracking and settling travel expenses among group travelers.",
          "Beginner",
          ["Travel", "Expense", "Groups"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 120,
        title: "Crowdfunding Platform",
        description:
          "Create a Kickstarter-like crowdfunding platform with milestone-based fund release.",
        difficulty: "Intermediate",
        tags: ["Crowdfunding", "Milestone", "Projects"],
        prd: generatePRD(
          "Crowdfunding Platform",
          "Create a Kickstarter-like crowdfunding platform with milestone-based fund release.",
          "Intermediate",
          ["Crowdfunding", "Milestone", "Projects"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 121,
        title: "Gift Card Marketplace",
        description:
          "Build a platform for buying and selling gift cards using stablecoins.",
        difficulty: "Beginner",
        tags: ["Gift Cards", "Marketplace", "Retail"],
        prd: generatePRD(
          "Gift Card Marketplace",
          "Build a platform for buying and selling gift cards using stablecoins.",
          "Beginner",
          ["Gift Cards", "Marketplace", "Retail"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 122,
        title: "Conditional Payment System",
        description:
          "Create smart contract-based payments that execute when specific conditions are met.",
        difficulty: "Advanced",
        tags: ["Conditional", "Smart Contract", "Automation"],
        prd: generatePRD(
          "Conditional Payment System",
          "Create smart contract-based payments that execute when specific conditions are met.",
          "Advanced",
          ["Conditional", "Smart Contract", "Automation"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 123,
        title: "Multi-Signature Wallet",
        description:
          "Build a user-friendly multi-sig wallet for teams and families to manage shared funds.",
        difficulty: "Intermediate",
        tags: ["Multi-sig", "Wallet", "Security"],
        prd: generatePRD(
          "Multi-Signature Wallet",
          "Build a user-friendly multi-sig wallet for teams and families to manage shared funds.",
          "Intermediate",
          ["Multi-sig", "Wallet", "Security"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 124,
        title: "Batch Payment Tool",
        description:
          "Create a tool for sending payments to multiple addresses in a single transaction.",
        difficulty: "Beginner",
        tags: ["Batch", "Bulk", "Efficiency"],
        prd: generatePRD(
          "Batch Payment Tool",
          "Create a tool for sending payments to multiple addresses in a single transaction.",
          "Beginner",
          ["Batch", "Bulk", "Efficiency"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 125,
        title: "Payment Link Generator",
        description:
          "Build a service for creating shareable payment links with customizable amounts.",
        difficulty: "Beginner",
        tags: ["Links", "Share", "Simple"],
        prd: generatePRD(
          "Payment Link Generator",
          "Build a service for creating shareable payment links with customizable amounts.",
          "Beginner",
          ["Links", "Share", "Simple"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 126,
        title: "Rent Payment Platform",
        description:
          "Create a platform for tenants to pay rent in stablecoins with automatic reminders.",
        difficulty: "Intermediate",
        tags: ["Rent", "Real Estate", "Recurring"],
        prd: generatePRD(
          "Rent Payment Platform",
          "Create a platform for tenants to pay rent in stablecoins with automatic reminders.",
          "Intermediate",
          ["Rent", "Real Estate", "Recurring"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 127,
        title: "Healthcare Payment Solution",
        description:
          "Build a HIPAA-compliant payment system for healthcare services using stablecoins.",
        difficulty: "Advanced",
        tags: ["Healthcare", "Compliance", "Medical"],
        prd: generatePRD(
          "Healthcare Payment Solution",
          "Build a HIPAA-compliant payment system for healthcare services using stablecoins.",
          "Advanced",
          ["Healthcare", "Compliance", "Medical"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 128,
        title: "Education Fee Payment",
        description:
          "Create a platform for paying tuition and education fees with installment options.",
        difficulty: "Intermediate",
        tags: ["Education", "Tuition", "Installment"],
        prd: generatePRD(
          "Education Fee Payment",
          "Create a platform for paying tuition and education fees with installment options.",
          "Intermediate",
          ["Education", "Tuition", "Installment"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 129,
        title: "Gig Economy Payments",
        description:
          "Build instant payment solutions for gig workers (delivery, rideshare, etc.).",
        difficulty: "Intermediate",
        tags: ["Gig", "Instant", "Workers"],
        prd: generatePRD(
          "Gig Economy Payments",
          "Build instant payment solutions for gig workers (delivery, rideshare, etc.).",
          "Intermediate",
          ["Gig", "Instant", "Workers"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 130,
        title: "Payment Analytics Dashboard",
        description:
          "Create an analytics dashboard for businesses to track payment flows and trends.",
        difficulty: "Intermediate",
        tags: ["Analytics", "Dashboard", "Business"],
        prd: generatePRD(
          "Payment Analytics Dashboard",
          "Create an analytics dashboard for businesses to track payment flows and trends.",
          "Intermediate",
          ["Analytics", "Dashboard", "Business"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 131,
        title: "Offline Payment Solution",
        description:
          "Build a system for making stablecoin payments without internet connectivity.",
        difficulty: "Advanced",
        tags: ["Offline", "SMS", "Low-connectivity"],
        prd: generatePRD(
          "Offline Payment Solution",
          "Build a system for making stablecoin payments without internet connectivity.",
          "Advanced",
          ["Offline", "SMS", "Low-connectivity"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 132,
        title: "Payment Dispute Resolution",
        description:
          "Create a decentralized arbitration system for payment disputes.",
        difficulty: "Advanced",
        tags: ["Dispute", "Arbitration", "Resolution"],
        prd: generatePRD(
          "Payment Dispute Resolution",
          "Create a decentralized arbitration system for payment disputes.",
          "Advanced",
          ["Dispute", "Arbitration", "Resolution"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 133,
        title: "Virtual Card Generator",
        description:
          "Build a service that generates virtual debit cards funded by stablecoins.",
        difficulty: "Advanced",
        tags: ["Virtual Card", "Debit", "Fiat Bridge"],
        prd: generatePRD(
          "Virtual Card Generator",
          "Build a service that generates virtual debit cards funded by stablecoins.",
          "Advanced",
          ["Virtual Card", "Debit", "Fiat Bridge"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 134,
        title: "Auction Payment System",
        description:
          "Create a payment system specifically for online auctions with bid holds.",
        difficulty: "Intermediate",
        tags: ["Auction", "Bidding", "Marketplace"],
        prd: generatePRD(
          "Auction Payment System",
          "Create a payment system specifically for online auctions with bid holds.",
          "Intermediate",
          ["Auction", "Bidding", "Marketplace"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 135,
        title: "Commission Splitter",
        description:
          "Build an automatic revenue splitting tool for partnerships and affiliates.",
        difficulty: "Beginner",
        tags: ["Commission", "Split", "Affiliate"],
        prd: generatePRD(
          "Commission Splitter",
          "Build an automatic revenue splitting tool for partnerships and affiliates.",
          "Beginner",
          ["Commission", "Split", "Affiliate"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 136,
        title: "Prepaid Account System",
        description:
          "Create a prepaid balance system for services with top-up functionality.",
        difficulty: "Beginner",
        tags: ["Prepaid", "Balance", "Top-up"],
        prd: generatePRD(
          "Prepaid Account System",
          "Create a prepaid balance system for services with top-up functionality.",
          "Beginner",
          ["Prepaid", "Balance", "Top-up"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 137,
        title: "Cross-Platform Payment SDK",
        description:
          "Build an SDK for integrating stablecoin payments into any application.",
        difficulty: "Advanced",
        tags: ["SDK", "Integration", "Developer"],
        prd: generatePRD(
          "Cross-Platform Payment SDK",
          "Build an SDK for integrating stablecoin payments into any application.",
          "Advanced",
          ["SDK", "Integration", "Developer"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 138,
        title: "Family Allowance Manager",
        description:
          "Create an app for parents to manage children's allowances with spending controls.",
        difficulty: "Beginner",
        tags: ["Family", "Allowance", "Parental"],
        prd: generatePRD(
          "Family Allowance Manager",
          "Create an app for parents to manage children's allowances with spending controls.",
          "Beginner",
          ["Family", "Allowance", "Parental"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 139,
        title: "Event Ticketing Payments",
        description:
          "Build a payment system integrated with event ticketing and refund management.",
        difficulty: "Intermediate",
        tags: ["Events", "Tickets", "Refunds"],
        prd: generatePRD(
          "Event Ticketing Payments",
          "Build a payment system integrated with event ticketing and refund management.",
          "Intermediate",
          ["Events", "Tickets", "Refunds"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 140,
        title: "Marketplace Escrow",
        description:
          "Create an escrow system for peer-to-peer marketplace transactions.",
        difficulty: "Intermediate",
        tags: ["Marketplace", "Escrow", "P2P"],
        prd: generatePRD(
          "Marketplace Escrow",
          "Create an escrow system for peer-to-peer marketplace transactions.",
          "Intermediate",
          ["Marketplace", "Escrow", "P2P"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 141,
        title: "Bounty Payment Platform",
        description:
          "Build a platform for posting and paying bounties for tasks and bug fixes.",
        difficulty: "Intermediate",
        tags: ["Bounty", "Tasks", "Developer"],
        prd: generatePRD(
          "Bounty Payment Platform",
          "Build a platform for posting and paying bounties for tasks and bug fixes.",
          "Intermediate",
          ["Bounty", "Tasks", "Developer"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 142,
        title: "Recurring Investment App",
        description:
          "Create a dollar-cost averaging app for automated recurring investments.",
        difficulty: "Intermediate",
        tags: ["DCA", "Investment", "Automated"],
        prd: generatePRD(
          "Recurring Investment App",
          "Create a dollar-cost averaging app for automated recurring investments.",
          "Intermediate",
          ["DCA", "Investment", "Automated"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 143,
        title: "Payment Notification Service",
        description:
          "Build a multi-channel notification system for payment updates.",
        difficulty: "Beginner",
        tags: ["Notifications", "Alerts", "Multi-channel"],
        prd: generatePRD(
          "Payment Notification Service",
          "Build a multi-channel notification system for payment updates.",
          "Beginner",
          ["Notifications", "Alerts", "Multi-channel"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 144,
        title: "Checkout Widget",
        description:
          "Create an embeddable checkout widget for e-commerce websites.",
        difficulty: "Beginner",
        tags: ["Widget", "E-commerce", "Embed"],
        prd: generatePRD(
          "Checkout Widget",
          "Create an embeddable checkout widget for e-commerce websites.",
          "Beginner",
          ["Widget", "E-commerce", "Embed"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 145,
        title: "Payment Scheduler",
        description:
          "Build a tool for scheduling future payments with custom timing.",
        difficulty: "Beginner",
        tags: ["Schedule", "Future", "Automation"],
        prd: generatePRD(
          "Payment Scheduler",
          "Build a tool for scheduling future payments with custom timing.",
          "Beginner",
          ["Schedule", "Future", "Automation"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 146,
        title: "Multi-Currency Converter",
        description:
          "Create a payment app with real-time multi-currency conversion.",
        difficulty: "Intermediate",
        tags: ["Currency", "Conversion", "Multi"],
        prd: generatePRD(
          "Multi-Currency Converter",
          "Create a payment app with real-time multi-currency conversion.",
          "Intermediate",
          ["Currency", "Conversion", "Multi"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 147,
        title: "Payment Proof Generator",
        description:
          "Build a system for generating verifiable payment receipts and proofs.",
        difficulty: "Beginner",
        tags: ["Receipt", "Proof", "Verification"],
        prd: generatePRD(
          "Payment Proof Generator",
          "Build a system for generating verifiable payment receipts and proofs.",
          "Beginner",
          ["Receipt", "Proof", "Verification"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 148,
        title: "Automated Tax Withholding",
        description:
          "Create a payment system that automatically withholds taxes for contractors.",
        difficulty: "Advanced",
        tags: ["Tax", "Withholding", "Compliance"],
        prd: generatePRD(
          "Automated Tax Withholding",
          "Create a payment system that automatically withholds taxes for contractors.",
          "Advanced",
          ["Tax", "Withholding", "Compliance"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 149,
        title: "Payment Insurance",
        description:
          "Build a payment protection system with insurance against failed deliveries.",
        difficulty: "Advanced",
        tags: ["Insurance", "Protection", "Guarantee"],
        prd: generatePRD(
          "Payment Insurance",
          "Build a payment protection system with insurance against failed deliveries.",
          "Advanced",
          ["Insurance", "Protection", "Guarantee"],
          "Stablecoin / Payment"
        ),
      },
      {
        id: 150,
        title: "Social Commerce Payments",
        description:
          "Create a payment solution for social media in-app purchases.",
        difficulty: "Intermediate",
        tags: ["Social", "Commerce", "In-app"],
        prd: generatePRD(
          "Social Commerce Payments",
          "Create a payment solution for social media in-app purchases.",
          "Intermediate",
          ["Social", "Commerce", "In-app"],
          "Stablecoin / Payment"
        ),
      },
    ],
  },
  {
    id: 2,
    name: "AI-powered Onchain",
    shortName: "AI",
    description:
      "Applying the power of AI into onchain solutions on Polkadot Hub.",
    icon: "🤖",
    color: "#552BBF",
    prizes: {
      first: "$5,000",
      second: "$2,500",
      third: "$1,500",
    },
    ideas: [
      {
        id: 201,
        title: "AI Trading Agent",
        description:
          "Build an autonomous AI agent that executes trades based on market analysis and user-defined strategies.",
        difficulty: "Advanced",
        tags: ["Trading", "Agent", "DeFi"],
        prd: generatePRD(
          "AI Trading Agent",
          "Build an autonomous AI agent that executes trades based on market analysis and user-defined strategies.",
          "Advanced",
          ["Trading", "Agent", "DeFi"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 202,
        title: "Smart Contract Auditor",
        description:
          "Create an AI-powered tool that audits smart contracts for vulnerabilities and best practices.",
        difficulty: "Advanced",
        tags: ["Security", "Audit", "Analysis"],
        prd: generatePRD(
          "Smart Contract Auditor",
          "Create an AI-powered tool that audits smart contracts for vulnerabilities and best practices.",
          "Advanced",
          ["Security", "Audit", "Analysis"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 203,
        title: "AI Portfolio Manager",
        description:
          "Build an AI that manages and rebalances crypto portfolios based on risk tolerance and goals.",
        difficulty: "Advanced",
        tags: ["Portfolio", "Management", "DeFi"],
        prd: generatePRD(
          "AI Portfolio Manager",
          "Build an AI that manages and rebalances crypto portfolios based on risk tolerance and goals.",
          "Advanced",
          ["Portfolio", "Management", "DeFi"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 204,
        title: "Fraud Detection System",
        description:
          "Create an AI system that detects fraudulent transactions and suspicious wallet activities.",
        difficulty: "Advanced",
        tags: ["Fraud", "Detection", "Security"],
        prd: generatePRD(
          "Fraud Detection System",
          "Create an AI system that detects fraudulent transactions and suspicious wallet activities.",
          "Advanced",
          ["Fraud", "Detection", "Security"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 205,
        title: "Natural Language Wallet",
        description:
          "Build a wallet that understands natural language commands for transactions.",
        difficulty: "Intermediate",
        tags: ["NLP", "Wallet", "UX"],
        prd: generatePRD(
          "Natural Language Wallet",
          "Build a wallet that understands natural language commands for transactions.",
          "Intermediate",
          ["NLP", "Wallet", "UX"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 206,
        title: "AI NFT Generator",
        description:
          "Create an AI that generates unique NFT artwork based on user prompts and mints them onchain.",
        difficulty: "Intermediate",
        tags: ["NFT", "Generative", "Art"],
        prd: generatePRD(
          "AI NFT Generator",
          "Create an AI that generates unique NFT artwork based on user prompts and mints them onchain.",
          "Intermediate",
          ["NFT", "Generative", "Art"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 207,
        title: "Sentiment Analysis Oracle",
        description:
          "Build an oracle that provides onchain sentiment analysis data from social media.",
        difficulty: "Advanced",
        tags: ["Oracle", "Sentiment", "Data"],
        prd: generatePRD(
          "Sentiment Analysis Oracle",
          "Build an oracle that provides onchain sentiment analysis data from social media.",
          "Advanced",
          ["Oracle", "Sentiment", "Data"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 208,
        title: "AI Customer Support",
        description:
          "Create an AI chatbot for DApp customer support with blockchain knowledge.",
        difficulty: "Intermediate",
        tags: ["Support", "Chatbot", "Help"],
        prd: generatePRD(
          "AI Customer Support",
          "Create an AI chatbot for DApp customer support with blockchain knowledge.",
          "Intermediate",
          ["Support", "Chatbot", "Help"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 209,
        title: "Predictive Gas Optimizer",
        description:
          "Build an AI that predicts optimal gas prices and transaction timing.",
        difficulty: "Intermediate",
        tags: ["Gas", "Optimization", "Prediction"],
        prd: generatePRD(
          "Predictive Gas Optimizer",
          "Build an AI that predicts optimal gas prices and transaction timing.",
          "Intermediate",
          ["Gas", "Optimization", "Prediction"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 210,
        title: "AI Code Generator",
        description:
          "Create a tool that generates Solidity/ink! smart contracts from natural language descriptions.",
        difficulty: "Advanced",
        tags: ["Code Generation", "Smart Contract", "NLP"],
        prd: generatePRD(
          "AI Code Generator",
          "Create a tool that generates Solidity/ink! smart contracts from natural language descriptions.",
          "Advanced",
          ["Code Generation", "Smart Contract", "NLP"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 211,
        title: "Whale Activity Tracker",
        description:
          "Build an AI that tracks and analyzes large wallet movements and provides insights.",
        difficulty: "Intermediate",
        tags: ["Whale", "Analysis", "Tracking"],
        prd: generatePRD(
          "Whale Activity Tracker",
          "Build an AI that tracks and analyzes large wallet movements and provides insights.",
          "Intermediate",
          ["Whale", "Analysis", "Tracking"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 212,
        title: "AI Governance Advisor",
        description:
          "Create an AI that analyzes governance proposals and provides voting recommendations.",
        difficulty: "Intermediate",
        tags: ["Governance", "DAO", "Voting"],
        prd: generatePRD(
          "AI Governance Advisor",
          "Create an AI that analyzes governance proposals and provides voting recommendations.",
          "Intermediate",
          ["Governance", "DAO", "Voting"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 213,
        title: "Automated Market Maker AI",
        description:
          "Build an AI that optimizes AMM parameters for better liquidity provision.",
        difficulty: "Advanced",
        tags: ["AMM", "Liquidity", "DeFi"],
        prd: generatePRD(
          "Automated Market Maker AI",
          "Build an AI that optimizes AMM parameters for better liquidity provision.",
          "Advanced",
          ["AMM", "Liquidity", "DeFi"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 214,
        title: "AI Risk Assessor",
        description:
          "Create a tool that assesses DeFi protocol risks using AI analysis.",
        difficulty: "Advanced",
        tags: ["Risk", "Assessment", "DeFi"],
        prd: generatePRD(
          "AI Risk Assessor",
          "Create a tool that assesses DeFi protocol risks using AI analysis.",
          "Advanced",
          ["Risk", "Assessment", "DeFi"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 215,
        title: "Smart Contract Explainer",
        description:
          "Build an AI that explains smart contract code in simple terms.",
        difficulty: "Beginner",
        tags: ["Education", "Explanation", "UX"],
        prd: generatePRD(
          "Smart Contract Explainer",
          "Build an AI that explains smart contract code in simple terms.",
          "Beginner",
          ["Education", "Explanation", "UX"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 216,
        title: "AI Price Predictor",
        description:
          "Create a price prediction model that publishes forecasts onchain.",
        difficulty: "Advanced",
        tags: ["Prediction", "Price", "Oracle"],
        prd: generatePRD(
          "AI Price Predictor",
          "Create a price prediction model that publishes forecasts onchain.",
          "Advanced",
          ["Prediction", "Price", "Oracle"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 217,
        title: "Personalized DeFi Recommendations",
        description:
          "Build an AI that recommends DeFi strategies based on user profiles.",
        difficulty: "Intermediate",
        tags: ["Recommendations", "Personalized", "DeFi"],
        prd: generatePRD(
          "Personalized DeFi Recommendations",
          "Build an AI that recommends DeFi strategies based on user profiles.",
          "Intermediate",
          ["Recommendations", "Personalized", "DeFi"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 218,
        title: "AI Content Moderator",
        description:
          "Create an AI moderator for decentralized social platforms.",
        difficulty: "Intermediate",
        tags: ["Moderation", "Social", "Content"],
        prd: generatePRD(
          "AI Content Moderator",
          "Create an AI moderator for decentralized social platforms.",
          "Intermediate",
          ["Moderation", "Social", "Content"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 219,
        title: "Transaction Classifier",
        description:
          "Build an AI that automatically categorizes and labels transactions.",
        difficulty: "Beginner",
        tags: ["Classification", "Organization", "UX"],
        prd: generatePRD(
          "Transaction Classifier",
          "Build an AI that automatically categorizes and labels transactions.",
          "Beginner",
          ["Classification", "Organization", "UX"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 220,
        title: "AI Yield Optimizer",
        description:
          "Create an AI that finds and moves funds to optimal yield opportunities.",
        difficulty: "Advanced",
        tags: ["Yield", "Optimization", "DeFi"],
        prd: generatePRD(
          "AI Yield Optimizer",
          "Create an AI that finds and moves funds to optimal yield opportunities.",
          "Advanced",
          ["Yield", "Optimization", "DeFi"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 221,
        title: "Voice-Controlled DApp",
        description:
          "Build a DApp that can be controlled entirely through voice commands.",
        difficulty: "Intermediate",
        tags: ["Voice", "Accessibility", "UX"],
        prd: generatePRD(
          "Voice-Controlled DApp",
          "Build a DApp that can be controlled entirely through voice commands.",
          "Intermediate",
          ["Voice", "Accessibility", "UX"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 222,
        title: "AI Token Analyzer",
        description:
          "Create a tool that analyzes token fundamentals and provides ratings.",
        difficulty: "Intermediate",
        tags: ["Analysis", "Tokens", "Research"],
        prd: generatePRD(
          "AI Token Analyzer",
          "Create a tool that analyzes token fundamentals and provides ratings.",
          "Intermediate",
          ["Analysis", "Tokens", "Research"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 223,
        title: "Automated Bug Bounty Hunter",
        description:
          "Build an AI that automatically scans protocols for vulnerabilities.",
        difficulty: "Advanced",
        tags: ["Security", "Bug Bounty", "Automation"],
        prd: generatePRD(
          "Automated Bug Bounty Hunter",
          "Build an AI that automatically scans protocols for vulnerabilities.",
          "Advanced",
          ["Security", "Bug Bounty", "Automation"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 224,
        title: "AI Meeting Scheduler",
        description:
          "Create a decentralized AI scheduler for DAO meetings with stake-weighted voting.",
        difficulty: "Beginner",
        tags: ["Scheduling", "DAO", "Coordination"],
        prd: generatePRD(
          "AI Meeting Scheduler",
          "Create a decentralized AI scheduler for DAO meetings with stake-weighted voting.",
          "Beginner",
          ["Scheduling", "DAO", "Coordination"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 225,
        title: "Smart Alert System",
        description:
          "Build an AI that monitors positions and sends intelligent alerts.",
        difficulty: "Intermediate",
        tags: ["Alerts", "Monitoring", "Notifications"],
        prd: generatePRD(
          "Smart Alert System",
          "Build an AI that monitors positions and sends intelligent alerts.",
          "Intermediate",
          ["Alerts", "Monitoring", "Notifications"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 226,
        title: "AI Documentation Generator",
        description:
          "Create a tool that auto-generates documentation for smart contracts.",
        difficulty: "Intermediate",
        tags: ["Documentation", "Developer", "Automation"],
        prd: generatePRD(
          "AI Documentation Generator",
          "Create a tool that auto-generates documentation for smart contracts.",
          "Intermediate",
          ["Documentation", "Developer", "Automation"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 227,
        title: "Personalized News Aggregator",
        description:
          "Build an AI-powered crypto news aggregator with personalized feeds.",
        difficulty: "Beginner",
        tags: ["News", "Aggregator", "Personalized"],
        prd: generatePRD(
          "Personalized News Aggregator",
          "Build an AI-powered crypto news aggregator with personalized feeds.",
          "Beginner",
          ["News", "Aggregator", "Personalized"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 228,
        title: "AI Arbitrage Finder",
        description:
          "Create an AI that identifies arbitrage opportunities across DEXs.",
        difficulty: "Advanced",
        tags: ["Arbitrage", "Trading", "MEV"],
        prd: generatePRD(
          "AI Arbitrage Finder",
          "Create an AI that identifies arbitrage opportunities across DEXs.",
          "Advanced",
          ["Arbitrage", "Trading", "MEV"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 229,
        title: "Smart Contract Optimizer",
        description: "Build an AI that optimizes smart contract gas usage.",
        difficulty: "Advanced",
        tags: ["Optimization", "Gas", "Developer"],
        prd: generatePRD(
          "Smart Contract Optimizer",
          "Build an AI that optimizes smart contract gas usage.",
          "Advanced",
          ["Optimization", "Gas", "Developer"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 230,
        title: "AI Identity Verifier",
        description: "Create an AI-powered KYC/identity verification system.",
        difficulty: "Advanced",
        tags: ["Identity", "KYC", "Verification"],
        prd: generatePRD(
          "AI Identity Verifier",
          "Create an AI-powered KYC/identity verification system.",
          "Advanced",
          ["Identity", "KYC", "Verification"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 231,
        title: "Onchain AI Companion",
        description:
          "Build a personal AI assistant that lives onchain and helps with Web3 tasks.",
        difficulty: "Advanced",
        tags: ["Assistant", "Personal", "Companion"],
        prd: generatePRD(
          "Onchain AI Companion",
          "Build a personal AI assistant that lives onchain and helps with Web3 tasks.",
          "Advanced",
          ["Assistant", "Personal", "Companion"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 232,
        title: "AI Translation Layer",
        description:
          "Create real-time translation for decentralized messaging apps.",
        difficulty: "Intermediate",
        tags: ["Translation", "Language", "Communication"],
        prd: generatePRD(
          "AI Translation Layer",
          "Create real-time translation for decentralized messaging apps.",
          "Intermediate",
          ["Translation", "Language", "Communication"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 233,
        title: "Predictive NFT Valuator",
        description:
          "Build an AI that estimates NFT values based on traits and market data.",
        difficulty: "Intermediate",
        tags: ["NFT", "Valuation", "Prediction"],
        prd: generatePRD(
          "Predictive NFT Valuator",
          "Build an AI that estimates NFT values based on traits and market data.",
          "Intermediate",
          ["NFT", "Valuation", "Prediction"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 234,
        title: "AI Liquidity Predictor",
        description:
          "Create a model that predicts liquidity movements and pool health.",
        difficulty: "Advanced",
        tags: ["Liquidity", "Prediction", "DeFi"],
        prd: generatePRD(
          "AI Liquidity Predictor",
          "Create a model that predicts liquidity movements and pool health.",
          "Advanced",
          ["Liquidity", "Prediction", "DeFi"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 235,
        title: "Smart Email Responder",
        description:
          "Build an AI that handles Web3 project email inquiries automatically.",
        difficulty: "Beginner",
        tags: ["Email", "Automation", "Support"],
        prd: generatePRD(
          "Smart Email Responder",
          "Build an AI that handles Web3 project email inquiries automatically.",
          "Beginner",
          ["Email", "Automation", "Support"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 236,
        title: "AI Proposal Writer",
        description:
          "Create an AI that helps write governance proposals for DAOs.",
        difficulty: "Intermediate",
        tags: ["Governance", "Writing", "DAO"],
        prd: generatePRD(
          "AI Proposal Writer",
          "Create an AI that helps write governance proposals for DAOs.",
          "Intermediate",
          ["Governance", "Writing", "DAO"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 237,
        title: "Transaction Anomaly Detector",
        description:
          "Build an AI that detects unusual patterns in transaction history.",
        difficulty: "Intermediate",
        tags: ["Anomaly", "Detection", "Security"],
        prd: generatePRD(
          "Transaction Anomaly Detector",
          "Build an AI that detects unusual patterns in transaction history.",
          "Intermediate",
          ["Anomaly", "Detection", "Security"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 238,
        title: "AI Social Trading",
        description:
          "Create a platform for AI-generated trading signals with social features.",
        difficulty: "Intermediate",
        tags: ["Social", "Trading", "Signals"],
        prd: generatePRD(
          "AI Social Trading",
          "Create a platform for AI-generated trading signals with social features.",
          "Intermediate",
          ["Social", "Trading", "Signals"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 239,
        title: "Smart Contract Test Generator",
        description:
          "Build an AI that generates comprehensive test suites for contracts.",
        difficulty: "Advanced",
        tags: ["Testing", "Developer", "QA"],
        prd: generatePRD(
          "Smart Contract Test Generator",
          "Build an AI that generates comprehensive test suites for contracts.",
          "Advanced",
          ["Testing", "Developer", "QA"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 240,
        title: "AI Loan Underwriter",
        description:
          "Create an AI underwriting system for DeFi lending protocols.",
        difficulty: "Advanced",
        tags: ["Lending", "Underwriting", "DeFi"],
        prd: generatePRD(
          "AI Loan Underwriter",
          "Create an AI underwriting system for DeFi lending protocols.",
          "Advanced",
          ["Lending", "Underwriting", "DeFi"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 241,
        title: "Onchain Data Visualizer",
        description:
          "Build an AI that creates visual representations of blockchain data.",
        difficulty: "Intermediate",
        tags: ["Visualization", "Data", "Analytics"],
        prd: generatePRD(
          "Onchain Data Visualizer",
          "Build an AI that creates visual representations of blockchain data.",
          "Intermediate",
          ["Visualization", "Data", "Analytics"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 242,
        title: "AI Grant Writer",
        description:
          "Create a tool that helps write grant proposals for Web3 projects.",
        difficulty: "Beginner",
        tags: ["Grants", "Writing", "Funding"],
        prd: generatePRD(
          "AI Grant Writer",
          "Create a tool that helps write grant proposals for Web3 projects.",
          "Beginner",
          ["Grants", "Writing", "Funding"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 243,
        title: "Market Manipulation Detector",
        description:
          "Build an AI that identifies potential market manipulation patterns.",
        difficulty: "Advanced",
        tags: ["Manipulation", "Detection", "Security"],
        prd: generatePRD(
          "Market Manipulation Detector",
          "Build an AI that identifies potential market manipulation patterns.",
          "Advanced",
          ["Manipulation", "Detection", "Security"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 244,
        title: "AI Protocol Simulator",
        description:
          "Create simulations of protocol changes before implementation.",
        difficulty: "Advanced",
        tags: ["Simulation", "Testing", "Protocol"],
        prd: generatePRD(
          "AI Protocol Simulator",
          "Create simulations of protocol changes before implementation.",
          "Advanced",
          ["Simulation", "Testing", "Protocol"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 245,
        title: "Smart Airdrop Qualifier",
        description:
          "Build an AI that identifies wallets eligible for airdrops based on activity.",
        difficulty: "Intermediate",
        tags: ["Airdrop", "Eligibility", "Analysis"],
        prd: generatePRD(
          "Smart Airdrop Qualifier",
          "Build an AI that identifies wallets eligible for airdrops based on activity.",
          "Intermediate",
          ["Airdrop", "Eligibility", "Analysis"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 246,
        title: "AI-Powered Search Engine",
        description:
          "Create a Web3-native search engine with AI-powered results.",
        difficulty: "Advanced",
        tags: ["Search", "Discovery", "Web3"],
        prd: generatePRD(
          "AI-Powered Search Engine",
          "Create a Web3-native search engine with AI-powered results.",
          "Advanced",
          ["Search", "Discovery", "Web3"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 247,
        title: "Community Sentiment Tracker",
        description:
          "Build a tool that tracks community sentiment across Discord/Telegram.",
        difficulty: "Intermediate",
        tags: ["Sentiment", "Community", "Social"],
        prd: generatePRD(
          "Community Sentiment Tracker",
          "Build a tool that tracks community sentiment across Discord/Telegram.",
          "Intermediate",
          ["Sentiment", "Community", "Social"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 248,
        title: "AI Meme Generator",
        description:
          "Create an AI that generates crypto memes and mints them as NFTs.",
        difficulty: "Beginner",
        tags: ["Meme", "NFT", "Fun"],
        prd: generatePRD(
          "AI Meme Generator",
          "Create an AI that generates crypto memes and mints them as NFTs.",
          "Beginner",
          ["Meme", "NFT", "Fun"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 249,
        title: "Smart Contract Migration Assistant",
        description: "Build an AI that helps migrate contracts between chains.",
        difficulty: "Advanced",
        tags: ["Migration", "Cross-chain", "Developer"],
        prd: generatePRD(
          "Smart Contract Migration Assistant",
          "Build an AI that helps migrate contracts between chains.",
          "Advanced",
          ["Migration", "Cross-chain", "Developer"],
          "AI-powered Onchain"
        ),
      },
      {
        id: 250,
        title: "AI Treasury Manager",
        description:
          "Create an AI that manages DAO treasuries with optimization strategies.",
        difficulty: "Advanced",
        tags: ["Treasury", "DAO", "Management"],
        prd: generatePRD(
          "AI Treasury Manager",
          "Create an AI that manages DAO treasuries with optimization strategies.",
          "Advanced",
          ["Treasury", "DAO", "Management"],
          "AI-powered Onchain"
        ),
      },
    ],
  },
  {
    id: 3,
    name: "Cross-chain Apps",
    shortName: "Cross-chain",
    description:
      "Build solutions on top of XCM or Hyperbridge to enable cross-chain features.",
    icon: "🔗",
    color: "#00B2FF",
    prizes: {
      first: "$5,000",
      second: "$2,500",
      third: "$1,500",
    },
    ideas: [
      {
        id: 301,
        title: "Universal DEX Aggregator",
        description:
          "Build a DEX aggregator that finds best prices across all connected chains via XCM.",
        difficulty: "Advanced",
        tags: ["DEX", "Aggregator", "XCM"],
        prd: generatePRD(
          "Universal DEX Aggregator",
          "Build a DEX aggregator that finds best prices across all connected chains via XCM.",
          "Advanced",
          ["DEX", "Aggregator", "XCM"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 302,
        title: "Cross-chain NFT Bridge",
        description:
          "Create a bridge for transferring NFTs between Polkadot parachains and EVM chains.",
        difficulty: "Advanced",
        tags: ["NFT", "Bridge", "Hyperbridge"],
        prd: generatePRD(
          "Cross-chain NFT Bridge",
          "Create a bridge for transferring NFTs between Polkadot parachains and EVM chains.",
          "Advanced",
          ["NFT", "Bridge", "Hyperbridge"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 303,
        title: "Multi-chain Portfolio Tracker",
        description:
          "Build a unified portfolio tracker that aggregates balances from multiple chains.",
        difficulty: "Intermediate",
        tags: ["Portfolio", "Tracking", "Multi-chain"],
        prd: generatePRD(
          "Multi-chain Portfolio Tracker",
          "Build a unified portfolio tracker that aggregates balances from multiple chains.",
          "Intermediate",
          ["Portfolio", "Tracking", "Multi-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 304,
        title: "Cross-chain Lending Protocol",
        description:
          "Create a lending protocol that accepts collateral from any connected chain.",
        difficulty: "Advanced",
        tags: ["Lending", "DeFi", "XCM"],
        prd: generatePRD(
          "Cross-chain Lending Protocol",
          "Create a lending protocol that accepts collateral from any connected chain.",
          "Advanced",
          ["Lending", "DeFi", "XCM"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 305,
        title: "Universal Identity System",
        description:
          "Build a cross-chain identity system that works across all parachains.",
        difficulty: "Intermediate",
        tags: ["Identity", "Universal", "XCM"],
        prd: generatePRD(
          "Universal Identity System",
          "Build a cross-chain identity system that works across all parachains.",
          "Intermediate",
          ["Identity", "Universal", "XCM"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 306,
        title: "Chain-Agnostic DAO",
        description:
          "Create a DAO framework that can govern assets across multiple chains.",
        difficulty: "Advanced",
        tags: ["DAO", "Governance", "Multi-chain"],
        prd: generatePRD(
          "Chain-Agnostic DAO",
          "Create a DAO framework that can govern assets across multiple chains.",
          "Advanced",
          ["DAO", "Governance", "Multi-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 307,
        title: "Cross-chain Yield Aggregator",
        description:
          "Build a yield aggregator that finds best yields across all connected chains.",
        difficulty: "Advanced",
        tags: ["Yield", "Aggregator", "DeFi"],
        prd: generatePRD(
          "Cross-chain Yield Aggregator",
          "Build a yield aggregator that finds best yields across all connected chains.",
          "Advanced",
          ["Yield", "Aggregator", "DeFi"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 308,
        title: "Universal Token Wrapper",
        description:
          "Create a service that wraps any token for use on any connected chain.",
        difficulty: "Advanced",
        tags: ["Wrapper", "Token", "Interoperability"],
        prd: generatePRD(
          "Universal Token Wrapper",
          "Create a service that wraps any token for use on any connected chain.",
          "Advanced",
          ["Wrapper", "Token", "Interoperability"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 309,
        title: "Cross-chain Messaging App",
        description:
          "Build a messaging app that works across all Polkadot parachains.",
        difficulty: "Intermediate",
        tags: ["Messaging", "Social", "XCM"],
        prd: generatePRD(
          "Cross-chain Messaging App",
          "Build a messaging app that works across all Polkadot parachains.",
          "Intermediate",
          ["Messaging", "Social", "XCM"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 310,
        title: "Multi-chain Name Service",
        description:
          "Create a domain name service that resolves across all connected chains.",
        difficulty: "Intermediate",
        tags: ["Names", "DNS", "Universal"],
        prd: generatePRD(
          "Multi-chain Name Service",
          "Create a domain name service that resolves across all connected chains.",
          "Intermediate",
          ["Names", "DNS", "Universal"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 311,
        title: "Cross-chain Subscription Manager",
        description:
          "Build subscription payments that work regardless of which chain users prefer.",
        difficulty: "Intermediate",
        tags: ["Subscription", "Payments", "XCM"],
        prd: generatePRD(
          "Cross-chain Subscription Manager",
          "Build subscription payments that work regardless of which chain users prefer.",
          "Intermediate",
          ["Subscription", "Payments", "XCM"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 312,
        title: "Universal Staking Dashboard",
        description:
          "Create a dashboard to manage staking across all Polkadot ecosystem chains.",
        difficulty: "Intermediate",
        tags: ["Staking", "Dashboard", "Multi-chain"],
        prd: generatePRD(
          "Universal Staking Dashboard",
          "Create a dashboard to manage staking across all Polkadot ecosystem chains.",
          "Intermediate",
          ["Staking", "Dashboard", "Multi-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 313,
        title: "Cross-chain Oracle Network",
        description:
          "Build an oracle that provides data to multiple chains via XCM.",
        difficulty: "Advanced",
        tags: ["Oracle", "Data", "XCM"],
        prd: generatePRD(
          "Cross-chain Oracle Network",
          "Build an oracle that provides data to multiple chains via XCM.",
          "Advanced",
          ["Oracle", "Data", "XCM"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 314,
        title: "Multi-chain Token Launchpad",
        description:
          "Create a launchpad that distributes tokens across multiple chains.",
        difficulty: "Advanced",
        tags: ["Launchpad", "Token", "Distribution"],
        prd: generatePRD(
          "Multi-chain Token Launchpad",
          "Create a launchpad that distributes tokens across multiple chains.",
          "Advanced",
          ["Launchpad", "Token", "Distribution"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 315,
        title: "Cross-chain Insurance Protocol",
        description:
          "Build an insurance protocol that covers assets across chains.",
        difficulty: "Advanced",
        tags: ["Insurance", "Protection", "Multi-chain"],
        prd: generatePRD(
          "Cross-chain Insurance Protocol",
          "Build an insurance protocol that covers assets across chains.",
          "Advanced",
          ["Insurance", "Protection", "Multi-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 316,
        title: "Universal Gas Payment",
        description: "Create a system to pay gas on any chain using any token.",
        difficulty: "Advanced",
        tags: ["Gas", "Payment", "Universal"],
        prd: generatePRD(
          "Universal Gas Payment",
          "Create a system to pay gas on any chain using any token.",
          "Advanced",
          ["Gas", "Payment", "Universal"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 317,
        title: "Cross-chain NFT Marketplace",
        description:
          "Build a marketplace where NFTs from any chain can be traded.",
        difficulty: "Advanced",
        tags: ["NFT", "Marketplace", "Multi-chain"],
        prd: generatePRD(
          "Cross-chain NFT Marketplace",
          "Build a marketplace where NFTs from any chain can be traded.",
          "Advanced",
          ["NFT", "Marketplace", "Multi-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 318,
        title: "Multi-chain Governance Aggregator",
        description:
          "Create a tool to participate in governance across multiple protocols.",
        difficulty: "Intermediate",
        tags: ["Governance", "Voting", "Aggregator"],
        prd: generatePRD(
          "Multi-chain Governance Aggregator",
          "Create a tool to participate in governance across multiple protocols.",
          "Intermediate",
          ["Governance", "Voting", "Aggregator"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 319,
        title: "Cross-chain Swap Widget",
        description: "Build an embeddable widget for cross-chain token swaps.",
        difficulty: "Intermediate",
        tags: ["Swap", "Widget", "Integration"],
        prd: generatePRD(
          "Cross-chain Swap Widget",
          "Build an embeddable widget for cross-chain token swaps.",
          "Intermediate",
          ["Swap", "Widget", "Integration"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 320,
        title: "Universal Wallet Connect",
        description:
          "Create a wallet connection standard that works across all chains.",
        difficulty: "Intermediate",
        tags: ["Wallet", "Connect", "Standard"],
        prd: generatePRD(
          "Universal Wallet Connect",
          "Create a wallet connection standard that works across all chains.",
          "Intermediate",
          ["Wallet", "Connect", "Standard"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 321,
        title: "Cross-chain Escrow Service",
        description:
          "Build an escrow that holds assets from different chains securely.",
        difficulty: "Advanced",
        tags: ["Escrow", "Multi-asset", "Security"],
        prd: generatePRD(
          "Cross-chain Escrow Service",
          "Build an escrow that holds assets from different chains securely.",
          "Advanced",
          ["Escrow", "Multi-asset", "Security"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 322,
        title: "Multi-chain Analytics Platform",
        description:
          "Create an analytics platform that tracks metrics across all chains.",
        difficulty: "Intermediate",
        tags: ["Analytics", "Data", "Multi-chain"],
        prd: generatePRD(
          "Multi-chain Analytics Platform",
          "Create an analytics platform that tracks metrics across all chains.",
          "Intermediate",
          ["Analytics", "Data", "Multi-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 323,
        title: "Cross-chain Limit Orders",
        description:
          "Build a system for placing limit orders that execute across chains.",
        difficulty: "Advanced",
        tags: ["Trading", "Orders", "Cross-chain"],
        prd: generatePRD(
          "Cross-chain Limit Orders",
          "Build a system for placing limit orders that execute across chains.",
          "Advanced",
          ["Trading", "Orders", "Cross-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 324,
        title: "Universal Airdrop Tool",
        description:
          "Create a tool to distribute airdrops across multiple chains simultaneously.",
        difficulty: "Intermediate",
        tags: ["Airdrop", "Distribution", "Multi-chain"],
        prd: generatePRD(
          "Universal Airdrop Tool",
          "Create a tool to distribute airdrops across multiple chains simultaneously.",
          "Intermediate",
          ["Airdrop", "Distribution", "Multi-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 325,
        title: "Cross-chain Liquidity Router",
        description:
          "Build a router that finds optimal liquidity paths across chains.",
        difficulty: "Advanced",
        tags: ["Liquidity", "Routing", "DeFi"],
        prd: generatePRD(
          "Cross-chain Liquidity Router",
          "Build a router that finds optimal liquidity paths across chains.",
          "Advanced",
          ["Liquidity", "Routing", "DeFi"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 326,
        title: "Multi-chain Notification Service",
        description:
          "Create a notification service for events across all connected chains.",
        difficulty: "Beginner",
        tags: ["Notifications", "Events", "Multi-chain"],
        prd: generatePRD(
          "Multi-chain Notification Service",
          "Create a notification service for events across all connected chains.",
          "Beginner",
          ["Notifications", "Events", "Multi-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 327,
        title: "Cross-chain DAO Treasury",
        description:
          "Build a DAO treasury that can hold and manage assets across chains.",
        difficulty: "Advanced",
        tags: ["DAO", "Treasury", "Multi-chain"],
        prd: generatePRD(
          "Cross-chain DAO Treasury",
          "Build a DAO treasury that can hold and manage assets across chains.",
          "Advanced",
          ["DAO", "Treasury", "Multi-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 328,
        title: "Universal Token Index",
        description:
          "Create an index fund that tracks tokens across multiple chains.",
        difficulty: "Advanced",
        tags: ["Index", "Fund", "Multi-chain"],
        prd: generatePRD(
          "Universal Token Index",
          "Create an index fund that tracks tokens across multiple chains.",
          "Advanced",
          ["Index", "Fund", "Multi-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 329,
        title: "Cross-chain Social Graph",
        description:
          "Build a social graph that follows users across all chains.",
        difficulty: "Intermediate",
        tags: ["Social", "Graph", "Identity"],
        prd: generatePRD(
          "Cross-chain Social Graph",
          "Build a social graph that follows users across all chains.",
          "Intermediate",
          ["Social", "Graph", "Identity"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 330,
        title: "Multi-chain Batch Transactions",
        description:
          "Create a tool for executing batch transactions across multiple chains.",
        difficulty: "Advanced",
        tags: ["Batch", "Transactions", "Efficiency"],
        prd: generatePRD(
          "Multi-chain Batch Transactions",
          "Create a tool for executing batch transactions across multiple chains.",
          "Advanced",
          ["Batch", "Transactions", "Efficiency"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 331,
        title: "Cross-chain Prediction Market",
        description:
          "Build a prediction market that accepts bets from any chain.",
        difficulty: "Advanced",
        tags: ["Prediction", "Market", "Multi-chain"],
        prd: generatePRD(
          "Cross-chain Prediction Market",
          "Build a prediction market that accepts bets from any chain.",
          "Advanced",
          ["Prediction", "Market", "Multi-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 332,
        title: "Universal Revenue Sharing",
        description:
          "Create a revenue sharing system that distributes across chains.",
        difficulty: "Intermediate",
        tags: ["Revenue", "Distribution", "XCM"],
        prd: generatePRD(
          "Universal Revenue Sharing",
          "Create a revenue sharing system that distributes across chains.",
          "Intermediate",
          ["Revenue", "Distribution", "XCM"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 333,
        title: "Cross-chain Credential System",
        description:
          "Build a credential/badge system that works across all chains.",
        difficulty: "Intermediate",
        tags: ["Credentials", "Badges", "Portable"],
        prd: generatePRD(
          "Cross-chain Credential System",
          "Build a credential/badge system that works across all chains.",
          "Intermediate",
          ["Credentials", "Badges", "Portable"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 334,
        title: "Multi-chain Crowdfunding",
        description:
          "Create a crowdfunding platform that accepts funds from any chain.",
        difficulty: "Intermediate",
        tags: ["Crowdfunding", "Multi-chain", "Funding"],
        prd: generatePRD(
          "Multi-chain Crowdfunding",
          "Create a crowdfunding platform that accepts funds from any chain.",
          "Intermediate",
          ["Crowdfunding", "Multi-chain", "Funding"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 335,
        title: "Cross-chain Perpetuals DEX",
        description: "Build a perpetuals exchange with cross-chain collateral.",
        difficulty: "Advanced",
        tags: ["Perpetuals", "DEX", "Trading"],
        prd: generatePRD(
          "Cross-chain Perpetuals DEX",
          "Build a perpetuals exchange with cross-chain collateral.",
          "Advanced",
          ["Perpetuals", "DEX", "Trading"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 336,
        title: "Universal Asset Registry",
        description: "Create a registry of all assets across connected chains.",
        difficulty: "Intermediate",
        tags: ["Registry", "Assets", "Discovery"],
        prd: generatePRD(
          "Universal Asset Registry",
          "Create a registry of all assets across connected chains.",
          "Intermediate",
          ["Registry", "Assets", "Discovery"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 337,
        title: "Cross-chain Vault Strategy",
        description:
          "Build vault strategies that deploy capital across multiple chains.",
        difficulty: "Advanced",
        tags: ["Vault", "Strategy", "DeFi"],
        prd: generatePRD(
          "Cross-chain Vault Strategy",
          "Build vault strategies that deploy capital across multiple chains.",
          "Advanced",
          ["Vault", "Strategy", "DeFi"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 338,
        title: "Multi-chain Payment Splitter",
        description:
          "Create a payment splitter that distributes to addresses on different chains.",
        difficulty: "Intermediate",
        tags: ["Payment", "Splitter", "Distribution"],
        prd: generatePRD(
          "Multi-chain Payment Splitter",
          "Create a payment splitter that distributes to addresses on different chains.",
          "Intermediate",
          ["Payment", "Splitter", "Distribution"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 339,
        title: "Cross-chain Token Gating",
        description:
          "Build a token gating system that checks balances across chains.",
        difficulty: "Intermediate",
        tags: ["Token Gating", "Access", "Multi-chain"],
        prd: generatePRD(
          "Cross-chain Token Gating",
          "Build a token gating system that checks balances across chains.",
          "Intermediate",
          ["Token Gating", "Access", "Multi-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 340,
        title: "Universal Referral System",
        description:
          "Create a referral tracking system that works across all chains.",
        difficulty: "Beginner",
        tags: ["Referral", "Tracking", "Multi-chain"],
        prd: generatePRD(
          "Universal Referral System",
          "Create a referral tracking system that works across all chains.",
          "Beginner",
          ["Referral", "Tracking", "Multi-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 341,
        title: "Cross-chain Flash Loans",
        description:
          "Build flash loans that can borrow from multiple chain pools.",
        difficulty: "Advanced",
        tags: ["Flash Loans", "DeFi", "Multi-chain"],
        prd: generatePRD(
          "Cross-chain Flash Loans",
          "Build flash loans that can borrow from multiple chain pools.",
          "Advanced",
          ["Flash Loans", "DeFi", "Multi-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 342,
        title: "Multi-chain Event Ticketing",
        description:
          "Create event tickets as NFTs that can be verified on any chain.",
        difficulty: "Intermediate",
        tags: ["Tickets", "Events", "NFT"],
        prd: generatePRD(
          "Multi-chain Event Ticketing",
          "Create event tickets as NFTs that can be verified on any chain.",
          "Intermediate",
          ["Tickets", "Events", "NFT"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 343,
        title: "Cross-chain Reputation System",
        description:
          "Build a reputation score that aggregates activity across chains.",
        difficulty: "Intermediate",
        tags: ["Reputation", "Score", "Multi-chain"],
        prd: generatePRD(
          "Cross-chain Reputation System",
          "Build a reputation score that aggregates activity across chains.",
          "Intermediate",
          ["Reputation", "Score", "Multi-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 344,
        title: "Universal Multisig",
        description:
          "Create a multisig wallet that can sign transactions on any chain.",
        difficulty: "Advanced",
        tags: ["Multisig", "Wallet", "Universal"],
        prd: generatePRD(
          "Universal Multisig",
          "Create a multisig wallet that can sign transactions on any chain.",
          "Advanced",
          ["Multisig", "Wallet", "Universal"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 345,
        title: "Cross-chain RWA Platform",
        description:
          "Build a real-world asset platform with cross-chain trading.",
        difficulty: "Advanced",
        tags: ["RWA", "Assets", "Multi-chain"],
        prd: generatePRD(
          "Cross-chain RWA Platform",
          "Build a real-world asset platform with cross-chain trading.",
          "Advanced",
          ["RWA", "Assets", "Multi-chain"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 346,
        title: "Multi-chain Fee Estimator",
        description:
          "Create a tool that estimates fees for cross-chain transactions.",
        difficulty: "Beginner",
        tags: ["Fees", "Estimation", "UX"],
        prd: generatePRD(
          "Multi-chain Fee Estimator",
          "Create a tool that estimates fees for cross-chain transactions.",
          "Beginner",
          ["Fees", "Estimation", "UX"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 347,
        title: "Cross-chain Gaming Assets",
        description:
          "Build a system for using gaming assets across different chain games.",
        difficulty: "Advanced",
        tags: ["Gaming", "Assets", "Interoperability"],
        prd: generatePRD(
          "Cross-chain Gaming Assets",
          "Build a system for using gaming assets across different chain games.",
          "Advanced",
          ["Gaming", "Assets", "Interoperability"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 348,
        title: "Universal Token Allowance Manager",
        description:
          "Create a tool to manage token allowances across all chains.",
        difficulty: "Beginner",
        tags: ["Allowance", "Security", "Management"],
        prd: generatePRD(
          "Universal Token Allowance Manager",
          "Create a tool to manage token allowances across all chains.",
          "Beginner",
          ["Allowance", "Security", "Management"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 349,
        title: "Cross-chain Merkle Distributor",
        description:
          "Build a merkle distributor for efficient multi-chain airdrops.",
        difficulty: "Intermediate",
        tags: ["Merkle", "Distribution", "Efficient"],
        prd: generatePRD(
          "Cross-chain Merkle Distributor",
          "Build a merkle distributor for efficient multi-chain airdrops.",
          "Intermediate",
          ["Merkle", "Distribution", "Efficient"],
          "Cross-chain Apps"
        ),
      },
      {
        id: 350,
        title: "Multi-chain Bridge Aggregator",
        description:
          "Create an aggregator that finds the best bridge route between chains.",
        difficulty: "Advanced",
        tags: ["Bridge", "Aggregator", "Routing"],
        prd: generatePRD(
          "Multi-chain Bridge Aggregator",
          "Create an aggregator that finds the best bridge route between chains.",
          "Advanced",
          ["Bridge", "Aggregator", "Routing"],
          "Cross-chain Apps"
        ),
      },
    ],
  },
];

export const consolidationPrizes = [
  {
    name: "Most Loved Project",
    prize: "$500",
    winners: 3,
    description:
      "Voted by the community as the most exciting and beloved project.",
  },
  {
    name: "Best UI/UX Project",
    prize: "$500",
    winners: 3,
    description:
      "Recognizing exceptional user interface and user experience design.",
  },
];

// Helper function to get idea by ID
export function getIdeaById(
  id: number
): { idea: HackathonIdea; track: HackathonTrack } | null {
  for (const track of hackathonTracks) {
    const idea = track.ideas.find((i) => i.id === id);
    if (idea) {
      return { idea, track };
    }
  }
  return null;
}
