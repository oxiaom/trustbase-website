import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="border-b border-gray-700">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              TrustBase Team
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/docs" className="hover:text-blue-400 transition-colors">
                文档
              </Link>
              <Link href="/team" className="hover:text-blue-400 transition-colors">
                团队
              </Link>
              <Link href="/community" className="hover:text-blue-400 transition-colors">
                社区
              </Link>
              <a
                href="https://github.com/oxiaom/trustcoin-ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          TrustBase Team
        </h1>
        <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          构建去中心化信任基础设施
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          我们提供 P2P 网络、信任评分系统、去中心化治理等核心技术，
          帮助开发者轻松构建可信的去中心化应用
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/docs"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            开始使用
          </Link>
          <a
            href="https://github.com/oxiaom/trustcoin-ecommerce"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">核心特性</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-colors">
            <div className="text-5xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold mb-3">完全去中心化</h3>
            <p className="text-gray-400">
              不依赖任何第三方服务，IPv6 P2P 网络，自动 NAT 穿透
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-colors">
            <div className="text-5xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold mb-3">三权分立治理</h3>
            <p className="text-gray-400">
              合约 + 索引器 + 议会，权力制衡，透明可审计
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-colors">
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-3">IPv6 P2P 网络</h3>
            <p className="text-gray-400">
              全球可达，无需 NAT 穿透，自动连接最优节点
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-colors">
            <div className="text-5xl mb-4">👨‍💻</div>
            <h3 className="text-xl font-bold mb-3">开发者友好</h3>
            <p className="text-gray-400">
              完整 SDK（JavaScript/Python），28 个 API 工具，详细文档
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-6 py-20 bg-gray-800/50">
        <h2 className="text-4xl font-bold text-center mb-16">应用场景</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-2">游戏开发</h3>
            <p className="text-gray-400">去中心化游戏，玩家信任评分</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2">在线教程</h3>
            <p className="text-gray-400">去中心化教程，创作者信任评分</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-xl font-bold mb-2">视频内容</h3>
            <p className="text-gray-400">去中心化视频，创作者信任评分</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-2">文章发布</h3>
            <p className="text-gray-400">去中心化文章，作者信任评分</p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">技术栈</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-3 text-blue-400">链层</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• Cosmos SDK v0.53.6</li>
              <li>• CometBFT</li>
              <li>• Go 1.24.1</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-3 text-purple-400">P2P 网络</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• IPv6 优先</li>
              <li>• 自动 NAT 穿透</li>
              <li>• 自建 Relay 中继</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-3 text-pink-400">开发者工具</h3>
            <ul className="text-gray-400 space-y-2">
              <li>• JavaScript SDK</li>
              <li>• Python SDK</li>
              <li>• 28 个 API 工具</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">加入我们</h2>
        <p className="text-xl text-gray-300 mb-8">
          成为开源贡献者，一起构建去中心化信任基础设施
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/community"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all"
          >
            了解更多
          </Link>
          <a
            href="https://github.com/oxiaom/trustcoin-ecommerce"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                TrustBase Team
              </div>
              <p className="text-gray-400">
                构建去中心化信任基础设施
              </p>
            </div>
            <div>
              <div className="font-bold mb-4">文档</div>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="/docs/api" className="hover:text-white">API 文档</Link></li>
                <li><Link href="/docs/sdk" className="hover:text-white">SDK 文档</Link></li>
                <li><Link href="/docs/guide" className="hover:text-white">开发指南</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-4">社区</div>
              <ul className="text-gray-400 space-y-2">
                <li><a href="https://github.com/oxiaom/trustcoin-ecommerce" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
                <li><Link href="/community" className="hover:text-white">Discord</Link></li>
                <li><Link href="/blog" className="hover:text-white">博客</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-bold mb-4">关于</div>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="/team" className="hover:text-white">团队</Link></li>
                <li><Link href="/community" className="hover:text-white">贡献者</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2026 TrustBase Team. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
