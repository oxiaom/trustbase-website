export const translations = {
  en: {
    // Header
    brand: "TrustBase Team",
    docs: "Docs",
    team: "Team",
    community: "Community",
    
    // Hero
    heroTitle: "TrustBase Team",
    heroSubtitle: "Building Decentralized Trust Infrastructure",
    heroDesc: "We provide P2P networks, trust scoring systems, decentralized governance, and other core technologies to help developers easily build trusted decentralized applications",
    getStarted: "Get Started",
    
    // Features
    featuresTitle: "Core Features",
    feature1Title: "Fully Decentralized",
    feature1Desc: "No dependency on third-party services, IPv6 P2P network, automatic NAT traversal",
    feature2Title: "Separation of Powers",
    feature2Desc: "Contract + Indexer + Council, checks and balances, transparent and auditable",
    feature3Title: "IPv6 P2P Network",
    feature3Desc: "Global reach, no NAT traversal needed, automatic optimal node connection",
    feature4Title: "Developer Friendly",
    feature4Desc: "Complete SDK (JavaScript/Python), 28 API tools, detailed documentation",
    
    // Use Cases
    useCasesTitle: "Use Cases",
    useCase1Title: "Game Development",
    useCase1Desc: "Decentralized games, player trust scoring",
    useCase2Title: "Online Tutorials",
    useCase2Desc: "Decentralized tutorials, creator trust scoring",
    useCase3Title: "Video Content",
    useCase3Desc: "Decentralized videos, creator trust scoring",
    useCase4Title: "Article Publishing",
    useCase4Desc: "Decentralized articles, author trust scoring",
    
    // Tech Stack
    techStackTitle: "Tech Stack",
    chainLayer: "Chain Layer",
    p2pNetwork: "P2P Network",
    devTools: "Developer Tools",
    
    // CTA
    ctaTitle: "Join Us",
    ctaDesc: "Become an open source contributor, build decentralized trust infrastructure together",
    learnMore: "Learn More",
    
    // Footer
    footerBrand: "TrustBase Team",
    footerDesc: "Building Decentralized Trust Infrastructure",
    footerDocs: "Docs",
    footerApiDocs: "API Docs",
    footerSdkDocs: "SDK Docs",
    footerDevGuide: "Dev Guide",
    footerCommunity: "Community",
    footerAbout: "About",
    footerContributors: "Contributors",
    footerCopyright: "© 2026 TrustBase Team. All rights reserved.",
  },
  zh: {
    // Header
    brand: "TrustBase Team",
    docs: "文档",
    team: "团队",
    community: "社区",
    
    // Hero
    heroTitle: "TrustBase Team",
    heroSubtitle: "构建去中心化信任基础设施",
    heroDesc: "我们提供 P2P 网络、信任评分系统、去中心化治理等核心技术，帮助开发者轻松构建可信的去中心化应用",
    getStarted: "开始使用",
    
    // Features
    featuresTitle: "核心特性",
    feature1Title: "完全去中心化",
    feature1Desc: "不依赖任何第三方服务，IPv6 P2P 网络，自动 NAT 穿透",
    feature2Title: "三权分立治理",
    feature2Desc: "合约 + 索引器 + 议会，权力制衡，透明可审计",
    feature3Title: "IPv6 P2P 网络",
    feature3Desc: "全球可达，无需 NAT 穿透，自动连接最优节点",
    feature4Title: "开发者友好",
    feature4Desc: "完整 SDK（JavaScript/Python），28 个 API 工具，详细文档",
    
    // Use Cases
    useCasesTitle: "应用场景",
    useCase1Title: "游戏开发",
    useCase1Desc: "去中心化游戏，玩家信任评分",
    useCase2Title: "在线教程",
    useCase2Desc: "去中心化教程，创作者信任评分",
    useCase3Title: "视频内容",
    useCase3Desc: "去中心化视频，创作者信任评分",
    useCase4Title: "文章发布",
    useCase4Desc: "去中心化文章，作者信任评分",
    
    // Tech Stack
    techStackTitle: "技术栈",
    chainLayer: "链层",
    p2pNetwork: "P2P 网络",
    devTools: "开发者工具",
    
    // CTA
    ctaTitle: "加入我们",
    ctaDesc: "成为开源贡献者，一起构建去中心化信任基础设施",
    learnMore: "了解更多",
    
    // Footer
    footerBrand: "TrustBase Team",
    footerDesc: "构建去中心化信任基础设施",
    footerDocs: "文档",
    footerApiDocs: "API 文档",
    footerSdkDocs: "SDK 文档",
    footerDevGuide: "开发指南",
    footerCommunity: "社区",
    footerAbout: "关于",
    footerContributors: "贡献者",
    footerCopyright: "© 2026 TrustBase Team. All rights reserved.",
  },
};

export type Language = "en" | "zh";
export type TranslationKey = keyof typeof translations.en;