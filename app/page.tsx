'use client'

import Image from 'next/image'
import { useState } from 'react'
import { 
  TrendingUp, 
  Target, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  CheckCircle2, 
  Star,
  MessageCircle,
  Clock,
  Trophy,
  ArrowRight,
  Menu,
  X,
  Gift,
  Share2
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/152499.png"
                alt="DuronBet Logo"
                width={150}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#inicio" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Início
              </a>
              <a href="#recursos" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Recursos
              </a>
              <a href="#planos" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Grupo VIP
              </a>
              <a href="#classes" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Classes Turbo
              </a>
              <a href="#indicacao" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Indicação
              </a>
              <a href="/cotacao" className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors flex items-center">
                💰 Durons
              </a>
              <a 
                href="#planos" 
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50"
              >
                Começar Agora
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Início</a>
                <a href="#recursos" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Recursos</a>
                <a href="#planos" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Grupo VIP</a>
                <a href="#classes" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Classes Turbo</a>
                <a href="#indicacao" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Indicação</a>
                <a href="/cotacao" className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center" onClick={() => setIsMenuOpen(false)}>💰 Cotação Durons</a>
                <a href="#resultados" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Resultados</a>
                <a 
                  href="#planos" 
                  className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Começar Agora
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="gradient-bg py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Trophy className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Plataforma #1 em Análise de Tênis</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Agora você pode lucrar um salário de um
                <span className="block text-yellow-300">campeão de tênis no conforto da sua casa.</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Análises profissionais, estatísticas avançadas e sinais certeiros. 
                Maximize seus resultados com nossa plataforma de inteligência esportiva com IA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#planos" 
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center justify-center shadow-xl"
                >
                  Acessar Plataforma
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="#recursos" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center justify-center"
                >
                  Saiba Mais
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl lg:text-4xl font-bold">92%</div>
                  <div className="text-white/80 text-sm">Taxa de Acerto</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold">5K+</div>
                  <div className="text-white/80 text-sm">Membros Ativos</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold">24/7</div>
                  <div className="text-white/80 text-sm">Suporte Online</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-end">
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-75"></div>
                <Image
                  src="/tennis-player.png"
                  alt="Jogador de Tênis"
                  width={500}
                  height={500}
                  className="relative drop-shadow-2xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Por que escolher a <span className="gradient-text">DuronBet</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos as melhores ferramentas e análises para você ter sucesso nas apostas de tênis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Análises Estatísticas</h3>
              <p className="text-gray-600 leading-relaxed">
                Dados detalhados de cada jogador, histórico de confrontos e performance em diferentes superfícies.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sinais em Tempo Real</h3>
              <p className="text-gray-600 leading-relaxed">
                Receba alertas instantâneos com as melhores oportunidades de apostas direto no seu celular.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Alta Precisão</h3>
              <p className="text-gray-600 leading-relaxed">
                Nossos algoritmos identificam value bets com alta probabilidade de sucesso.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gestão de Banca</h3>
              <p className="text-gray-600 leading-relaxed">
                Ferramentas para controlar sua banca e apostar de forma responsável e lucrativa.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Histórico Comprovado</h3>
              <p className="text-gray-600 leading-relaxed">
                Acompanhe nosso histórico transparente de resultados e lucratividade.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 rounded-2xl p-8 card-hover border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comunidade VIP</h3>
              <p className="text-gray-600 leading-relaxed">
                Faça parte de uma comunidade exclusiva de apostadores profissionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Como <span className="gradient-text">Funciona</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Em apenas 3 passos você começa a receber os melhores sinais de tênis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg shadow-primary/30">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Escolha seu Plano</h3>
              <p className="text-gray-600">
                Selecione o plano que melhor se adapta às suas necessidades e objetivos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg shadow-primary/30">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Acesse a Plataforma</h3>
              <p className="text-gray-600">
                Receba seu acesso exclusivo e conecte-se ao nosso grupo VIP de sinais.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg shadow-primary/30">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comece a Lucrar</h3>
              <p className="text-gray-600">
                Siga os sinais, aplique as estratégias e veja sua banca crescer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Grupo Wimbledon */}
      <section id="planos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Grupo <span className="gradient-text">Wimbledon</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acesso exclusivo ao grupo de sinais mais preciso do Brasil
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-primary rounded-3xl p-10 text-white relative card-hover shadow-2xl shadow-primary/40">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold">
                🎾 ACESSO VIP
              </div>
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Grupo Wimbledon</h3>
                <div className="text-5xl font-bold">
                  R$495<span className="text-lg text-white/70 font-normal">/mês</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-lg">Sinais ilimitados de alta precisão</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-lg">Análises avançadas com IA</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-lg">Grupo VIP exclusivo no Telegram</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-lg">Suporte prioritário 24/7</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-lg">Gestão de banca profissional</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-lg">Lives exclusivas com analistas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-lg">Acesso a todas as estatísticas</span>
                </li>
              </ul>
              <button className="w-full py-4 px-6 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
                Entrar no Grupo Wimbledon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Turbo Section */}
      <section id="classes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Classes Turbo de <span className="gradient-text">Jogadores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Invista e obtenha retorno com nossa alavancagem exclusiva. Escolha sua classe e maximize seus ganhos!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Classe Rafael Nadal */}
            <div className="bg-white rounded-2xl p-8 border-2 border-orange-400 card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative">
                <div className="inline-flex items-center bg-orange-400/10 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  🎾 INICIANTE
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Classe Rafael Nadal</h3>
                <p className="text-gray-500 mb-6">Para quem está começando sua jornada</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Investimento</span>
                    <span className="text-2xl font-bold text-gray-900">R$ 1.000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Retorno</span>
                    <span className="text-2xl font-bold text-green-600">R$ 3.000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Lucro Líquido</span>
                    <span className="text-xl font-bold text-green-600">R$ 1.200</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-orange-50 rounded-lg px-4">
                    <span className="text-gray-600">Taxa de Corretagem</span>
                    <span className="text-xl font-bold text-orange-600">40%</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-4 mb-6 text-center">
                  <span className="text-green-700 font-semibold">Retorno de 3x sobre o investimento!</span>
                </div>

                <button className="w-full py-4 px-6 bg-orange-400 hover:bg-orange-500 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-orange-400/30">
                  Investir Agora
                </button>
              </div>
            </div>

            {/* Classe Roger Federer */}
            <div className="bg-primary rounded-2xl p-8 pt-10 text-white card-hover relative transform scale-105 shadow-xl shadow-primary/30 mt-6">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold z-10 whitespace-nowrap shadow-lg">
                ⭐ MAIS ESCOLHIDO
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 overflow-hidden"></div>
              <div className="relative">
                <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  🏆 INTERMEDIÁRIO
                </div>
                <h3 className="text-2xl font-bold mb-2">Classe Roger Federer</h3>
                <p className="text-white/70 mb-6">Para investidores que buscam mais</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-white/80">Investimento</span>
                    <span className="text-2xl font-bold">R$ 5.000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-white/80">Retorno</span>
                    <span className="text-2xl font-bold text-yellow-400">R$ 15.000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-white/80">Lucro Líquido</span>
                    <span className="text-xl font-bold text-yellow-400">R$ 7.000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-white/10 rounded-lg px-4">
                    <span className="text-white/80">Taxa de Corretagem</span>
                    <span className="text-xl font-bold text-yellow-400">30%</span>
                  </div>
                </div>

                <div className="bg-yellow-400/20 rounded-xl p-4 mb-6 text-center">
                  <span className="text-yellow-300 font-semibold">Retorno de 3x sobre o investimento!</span>
                </div>

                <button className="w-full py-4 px-6 bg-white text-primary hover:bg-gray-100 rounded-full font-bold text-lg transition-all shadow-lg">
                  Investir Agora
                </button>
              </div>
            </div>

            {/* Classe Novak Djokovic */}
            <div className="bg-white rounded-2xl p-8 border-2 border-purple-500 card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative">
                <div className="inline-flex items-center bg-purple-500/10 text-purple-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  👑 ELITE
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Classe Novak Djokovic</h3>
                <p className="text-gray-500 mb-6">Para investidores de alto nível</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Investimento</span>
                    <span className="text-2xl font-bold text-gray-900">R$ 20.000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Retorno</span>
                    <span className="text-2xl font-bold text-green-600">R$ 60.000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Lucro Líquido</span>
                    <span className="text-xl font-bold text-green-600">R$ 32.000</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-purple-50 rounded-lg px-4">
                    <span className="text-gray-600">Taxa de Corretagem</span>
                    <span className="text-xl font-bold text-purple-600">20%</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-4 mb-6 text-center">
                  <span className="text-green-700 font-semibold">Retorno de 3x sobre o investimento!</span>
                </div>

                <button className="w-full py-4 px-6 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-purple-500/30">
                  Investir Agora
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              * Os retornos são baseados em nossa taxa de acerto histórica de 92%. Resultados podem variar. 
              A taxa de corretagem é cobrada apenas sobre o lucro obtido.
            </p>
          </div>
        </div>
      </section>

      {/* Indicação Section */}
      <section id="indicacao" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Gift className="w-5 h-5 mr-2" />
              PROGRAMA DE INDICAÇÃO
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Indique e Ganhe <span className="gradient-text">Durons</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A cada indicação para as Classes Turbo, você acumula <strong>Durons (D$)</strong> que podem ser convertidos em <strong>dinheiro real (R$)</strong>!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* How it works */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Como funciona?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg">Compartilhe seu link</h4>
                    <p className="text-gray-600">Pegue seu link de indicação exclusivo na área de membros</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg">Seu amigo investe</h4>
                    <p className="text-gray-600">Quando seu indicado investir em qualquer Classe Turbo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg">Acumule Durons</h4>
                    <p className="text-gray-600">Receba automaticamente 1% em Durons do investimento total</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 text-lg">Converta em Dinheiro</h4>
                    <p className="text-gray-600">Troque seus Durons por Real (R$) a qualquer momento!</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-2xl border border-green-200">
                <div className="flex items-center mb-3">
                  <Share2 className="w-6 h-6 text-green-600 mr-2" />
                  <span className="font-bold text-green-800">Sem limite de ganhos!</span>
                </div>
                <p className="text-green-700">
                  Quanto mais você indica, mais Durons acumula. Converta para Real e saque quando quiser!
                </p>
              </div>
            </div>

            {/* Bonus Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Seus Durons por indicação</h3>
              <div className="flex justify-center mb-6">
                <a href="/cotacao" className="inline-flex items-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-500 transition-colors">
                  💰 1 DURON = R$ 1,00 | Ver Cotação
                </a>
              </div>
              
              {/* Nadal Bonus */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                    🎾
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Classe Rafael Nadal</h4>
                    <p className="text-gray-600 text-sm">Investimento: R$ 1.000</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-orange-600">D$ 10</div>
                  <div className="text-sm text-green-600 font-medium">= R$ 10,00</div>
                </div>
              </div>

              {/* Federer Bonus */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/20 rounded-xl p-6 border border-primary/30 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-2xl mr-4">
                    🏆
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Classe Roger Federer</h4>
                    <p className="text-gray-600 text-sm">Investimento: R$ 5.000</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">D$ 50</div>
                  <div className="text-sm text-green-600 font-medium">= R$ 50,00</div>
                </div>
              </div>

              {/* Djokovic Bonus */}
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl mr-4">
                    👑
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Classe Novak Djokovic</h4>
                    <p className="text-gray-600 text-sm">Investimento: R$ 20.000</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-purple-600">D$ 200</div>
                  <div className="text-sm text-green-600 font-medium">= R$ 200,00</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center mt-6">
                <p className="text-lg mb-2">Exemplo: Indique <span className="font-bold">10 amigos</span> para a Classe Federer</p>
                <p className="text-3xl font-bold">D$ 500 = R$ 500,00</p>
                <p className="text-sm mt-2 text-green-100">Saque direto na sua conta bancária!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="resultados" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Resultados Comprovados
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Veja o que nossos membros estão conquistando
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl lg:text-6xl font-bold mb-2">92%</div>
              <div className="text-white/80">Taxa de Acerto</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold mb-2">+250%</div>
              <div className="text-white/80">ROI Médio Mensal</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold mb-2">5.000+</div>
              <div className="text-white/80">Membros Ativos</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold mb-2">50K+</div>
              <div className="text-white/80">Sinais Enviados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              O que dizem nossos <span className="gradient-text">Membros</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Incrível! Em 3 meses consegui triplicar minha banca seguindo os sinais da DuronBet. 
                A análise de tênis deles é simplesmente a melhor do mercado."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  RA
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">Rafael A.</div>
                  <div className="text-gray-500 text-sm">Membro Premium</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "O suporte é excepcional e os sinais são muito precisos. Já indiquei para vários 
                amigos e todos estão satisfeitos com os resultados."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  MS
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">Marcos S.</div>
                  <div className="text-gray-500 text-sm">Membro Profissional</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Melhor investimento que fiz! As análises são completas e me ajudaram a entender 
                melhor o mercado de tênis. Recomendo demais!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  JL
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">Julia L.</div>
                  <div className="text-gray-500 text-sm">Membro Premium</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Perguntas <span className="gradient-text">Frequentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            <details className="bg-white rounded-xl p-6 group cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 flex justify-between items-center">
                Como funciona o sistema de sinais?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Nossos analistas estudam cada partida e enviam sinais com antecedência via Telegram. 
                Cada sinal inclui a odd recomendada, stake sugerida e análise completa do jogo.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 group cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 flex justify-between items-center">
                Qual a taxa de acerto dos sinais?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Nossa taxa de acerto média é de 92%, considerando todos os sinais enviados nos últimos 
                12 meses. Publicamos nossos resultados de forma transparente para todos os membros.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 group cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 flex justify-between items-center">
                Posso cancelar a qualquer momento?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Sim! Você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas 
                adicionais. Seu acesso permanece ativo até o final do período pago.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 group cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 flex justify-between items-center">
                Preciso de experiência prévia com apostas?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Não! Nossa plataforma é ideal tanto para iniciantes quanto para apostadores experientes. 
                Oferecemos materiais educativos e suporte para todos os níveis.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pronto para começar a <span className="gradient-text">lucrar</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Junte-se a milhares de apostadores que já estão lucrando com a DuronBet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#planos" 
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center justify-center shadow-lg shadow-primary/30"
            >
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <Image
                src="/152499.png"
                alt="DuronBet Logo"
                width={150}
                height={60}
                className="h-14 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 mb-6 max-w-md">
                A plataforma mais completa de análise e sinais de tênis do Brasil. 
                Transforme sua forma de apostar com inteligência e estratégia.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
                <li><a href="#recursos" className="text-gray-400 hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#planos" className="text-gray-400 hover:text-white transition-colors">Planos</a></li>
                <li><a href="#resultados" className="text-gray-400 hover:text-white transition-colors">Resultados</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  suporte@duronbet.com
                </li>
                <li className="flex items-center text-gray-400">
                  <Clock className="w-5 h-5 mr-2" />
                  Suporte 24/7
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DuronBet. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">
              Aposte com responsabilidade. Este site é destinado apenas a maiores de 18 anos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
