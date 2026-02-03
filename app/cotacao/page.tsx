'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft,
  TrendingUp,
  RefreshCw,
  Wallet,
  ArrowRightLeft,
  CheckCircle2,
  Clock,
  Shield
} from 'lucide-react'

export default function CotacaoPage() {
  const hoje = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/152499.png"
                alt="DuronBet Logo"
                width={150}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-primary font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao início
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-5 h-5 mr-2 text-white" />
            <span className="text-white font-medium">Cotação Oficial</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Cotação do DURON
          </h1>
          <p className="text-xl text-white/90 mb-8">
            A moeda oficial do programa de indicação DuronBet
          </p>
          
          {/* Cotação Principal */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-3xl font-bold text-gray-900 shadow-lg">
                D$
              </div>
            </div>
            <div className="text-6xl font-bold text-gray-900 mb-2">
              1 DURON
            </div>
            <div className="flex items-center justify-center text-gray-400 mb-4">
              <ArrowRightLeft className="w-6 h-6 mx-4" />
            </div>
            <div className="text-5xl font-bold text-green-600 mb-4">
              R$ 1,00
            </div>
            <div className="flex items-center justify-center text-gray-500 text-sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Atualizado em: {hoje}
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Tudo sobre o <span className="text-yellow-500">DURON</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <Wallet className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Valor Fixo</h3>
              <p className="text-gray-600">
                O DURON possui cotação fixa de R$ 1,00. Sem variação, sem surpresas. 
                Seus ganhos são sempre previsíveis!
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <ArrowRightLeft className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conversão Fácil</h3>
              <p className="text-gray-600">
                Converta seus Durons para Real a qualquer momento. 
                Solicite o saque e receba em até 24 horas úteis.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Seguro</h3>
              <p className="text-gray-600">
                Seus Durons ficam seguros na sua conta. 
                Acumule sem pressa e saque quando preferir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabela de Conversão */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Tabela de Conversão
          </h2>
          
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-bold">DURONS (D$)</th>
                  <th className="py-4 px-6 text-center font-bold">=</th>
                  <th className="py-4 px-6 text-right font-bold">REAIS (R$)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-6 font-semibold text-yellow-600">D$ 10</td>
                  <td className="py-4 px-6 text-center text-gray-400"><ArrowRightLeft className="w-5 h-5 mx-auto" /></td>
                  <td className="py-4 px-6 text-right font-semibold text-green-600">R$ 10,00</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-6 font-semibold text-yellow-600">D$ 50</td>
                  <td className="py-4 px-6 text-center text-gray-400"><ArrowRightLeft className="w-5 h-5 mx-auto" /></td>
                  <td className="py-4 px-6 text-right font-semibold text-green-600">R$ 50,00</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-6 font-semibold text-yellow-600">D$ 100</td>
                  <td className="py-4 px-6 text-center text-gray-400"><ArrowRightLeft className="w-5 h-5 mx-auto" /></td>
                  <td className="py-4 px-6 text-right font-semibold text-green-600">R$ 100,00</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-6 font-semibold text-yellow-600">D$ 200</td>
                  <td className="py-4 px-6 text-center text-gray-400"><ArrowRightLeft className="w-5 h-5 mx-auto" /></td>
                  <td className="py-4 px-6 text-right font-semibold text-green-600">R$ 200,00</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-6 font-semibold text-yellow-600">D$ 500</td>
                  <td className="py-4 px-6 text-center text-gray-400"><ArrowRightLeft className="w-5 h-5 mx-auto" /></td>
                  <td className="py-4 px-6 text-right font-semibold text-green-600">R$ 500,00</td>
                </tr>
                <tr className="hover:bg-gray-100 transition-colors bg-yellow-50">
                  <td className="py-4 px-6 font-bold text-yellow-600">D$ 1.000</td>
                  <td className="py-4 px-6 text-center text-gray-400"><ArrowRightLeft className="w-5 h-5 mx-auto" /></td>
                  <td className="py-4 px-6 text-right font-bold text-green-600">R$ 1.000,00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-500 mt-6">
            * Saque mínimo: D$ 50 (R$ 50,00) | Sem taxa de conversão
          </p>
        </div>
      </section>

      {/* Como Sacar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Como Sacar seus Durons
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Acesse sua conta</h3>
              <p className="text-gray-600 text-sm">Entre na área de membros</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Vá em Durons</h3>
              <p className="text-gray-600 text-sm">Clique em "Meus Durons"</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Solicite saque</h3>
              <p className="text-gray-600 text-sm">Informe valor e dados bancários</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Receba o PIX</h3>
              <p className="text-gray-600 text-sm">Em até 24h úteis na sua conta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ganhos por Indicação */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Ganhe Durons Indicando
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A cada amigo que investir nas Classes Turbo, você ganha 1% do valor em Durons!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-200 text-center">
              <div className="text-4xl mb-3">🎾</div>
              <h3 className="font-bold text-gray-900 mb-1">Classe Rafael Nadal</h3>
              <p className="text-gray-500 text-sm mb-4">Investimento: R$ 1.000</p>
              <div className="bg-white rounded-xl py-3 px-4">
                <div className="text-2xl font-bold text-orange-600">D$ 10</div>
                <div className="text-green-600 text-sm font-medium">= R$ 10,00 por indicação</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200 text-center transform scale-105">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-gray-900 mb-1">Classe Roger Federer</h3>
              <p className="text-gray-500 text-sm mb-4">Investimento: R$ 5.000</p>
              <div className="bg-white rounded-xl py-3 px-4">
                <div className="text-2xl font-bold text-primary">D$ 50</div>
                <div className="text-green-600 text-sm font-medium">= R$ 50,00 por indicação</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200 text-center">
              <div className="text-4xl mb-3">👑</div>
              <h3 className="font-bold text-gray-900 mb-1">Classe Novak Djokovic</h3>
              <p className="text-gray-500 text-sm mb-4">Investimento: R$ 20.000</p>
              <div className="bg-white rounded-xl py-3 px-4">
                <div className="text-2xl font-bold text-purple-600">D$ 200</div>
                <div className="text-green-600 text-sm font-medium">= R$ 200,00 por indicação</div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/#indicacao"
              className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/30"
            >
              Começar a Indicar
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-xl p-6 group cursor-pointer border border-gray-200">
              <summary className="font-bold text-gray-900 flex justify-between items-center">
                O valor do Duron pode mudar?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Não! O Duron possui cotação fixa de R$ 1,00. Esse valor é garantido pela DuronBet 
                e não sofre variações de mercado.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 group cursor-pointer border border-gray-200">
              <summary className="font-bold text-gray-900 flex justify-between items-center">
                Qual o valor mínimo para saque?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                O valor mínimo para saque é de D$ 50 (equivalente a R$ 50,00). 
                Não há valor máximo para saque.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 group cursor-pointer border border-gray-200">
              <summary className="font-bold text-gray-900 flex justify-between items-center">
                Quanto tempo demora para receber o saque?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                O prazo para recebimento via PIX é de até 24 horas úteis após a solicitação. 
                Na maioria dos casos, o pagamento é processado em poucas horas.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 group cursor-pointer border border-gray-200">
              <summary className="font-bold text-gray-900 flex justify-between items-center">
                Existe taxa para conversão?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Não! A conversão de Durons para Real é totalmente gratuita. 
                Você recebe 100% do valor convertido.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 group cursor-pointer border border-gray-200">
              <summary className="font-bold text-gray-900 flex justify-between items-center">
                Os Durons expiram?
                <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Não! Seus Durons não têm prazo de validade. Você pode acumular pelo tempo 
                que quiser e sacar quando preferir.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Image
            src="/152499.png"
            alt="DuronBet Logo"
            width={120}
            height={48}
            className="h-10 w-auto mx-auto mb-4 brightness-0 invert"
          />
          <p className="text-gray-400 text-sm">
            &copy; 2024 DuronBet. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
