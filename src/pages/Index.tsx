import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4 animate-fade-in-left">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200/50">
                  <span className="text-white font-bold text-xl">Г</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 tracking-tight">ГОРХОН</div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">МЕДИАКОМАНДА</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-10 animate-fade-in-right">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105">О проекте</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105">Проекты</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105">Контакты</a>
            </div>
            
            <Button variant="ghost" className="md:hidden hover:bg-blue-50 transition-colors">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-pink-400/10 to-pink-600/10 rounded-full blur-3xl animate-float delay-200"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-indigo-400/5 rounded-full blur-2xl animate-float delay-100"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="space-y-8 animate-fade-in-left">
                <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-0 px-6 py-3 font-semibold text-sm tracking-wide shadow-sm">
                  Официальная медиакоманда поселка
                </Badge>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">ГОРХОН</span>
                  <br />
                  <span className="text-gray-900">ваш голос в</span>
                  <br />
                  <span className="bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 bg-clip-text text-transparent">цифровом мире</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl font-medium">
                  Создаем качественный контент для социальных сетей и формируем позитивное мнение о нашем поселке в диджитал пространстве
                </p>
              </div>
            </div>

            {/* Right Side - Photo Gallery */}
            <div className="relative animate-fade-in-right delay-300">
              <div className="grid grid-cols-12 gap-4">
                {/* Large main photo */}
                <div className="col-span-8 row-span-2 relative group">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white p-4 shadow-2xl shadow-blue-200/20 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl hover:shadow-blue-200/30">
                    <img 
                      src="https://cdn.poehali.dev/files/80a58e99-2b65-40a9-8533-e4763ab4af46.jpg"
                      alt="Панорамный вид на поселок Горхон"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                      <Icon name="MapPin" size={16} className="text-blue-600" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-semibold text-gray-800">Поселок Горхон</p>
                      <p className="text-xs text-gray-600">Красивые виды нашего поселка</p>
                    </div>
                  </div>
                </div>
                
                {/* Smaller photos */}
                <div className="col-span-4 relative group">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-white p-3 shadow-xl shadow-pink-200/20 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-200/30">
                    <img 
                      src="https://cdn.poehali.dev/files/05b861ba-cd19-4486-8cef-18e90153271c.jpg"
                      alt="Памятник в поселке Горхон"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs font-semibold">Памятник героям</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative year badge */}
                <div className="col-span-4 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-float">
                    <div className="text-purple-700 font-bold text-sm text-center">
                      <div className="text-lg">2025</div>
                      <div className="text-xs">год</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-60 animate-float delay-500"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-40 animate-float delay-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">О проекте</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Медиакоманда «Горхон» ведет официальное сообщество поселка в социальных сетях, 
              создает качественный контент и формирует позитивное мнение о нашем поселке
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-blue-50 via-white to-blue-50/30 hover:scale-105 animate-fade-in-up delay-100">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-blue-200/50">
                  <Icon name="Camera" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 font-bold tracking-tight">Качественный контент</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 text-lg leading-relaxed">
                  Создаем визуальный контент, который показывает жизнь поселка с лучшей стороны и привлекает внимание
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-pink-50 via-white to-pink-50/30 hover:scale-105 animate-fade-in-up delay-200">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-pink-200/50">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 font-bold tracking-tight">Активное сообщество</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 text-lg leading-relaxed">
                  Объединяем жителей через официальные каналы связи в социальных сетях и мессенджерах
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-purple-50 via-white to-purple-50/30 hover:scale-105 animate-fade-in-up delay-300">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-purple-200/50">
                  <Icon name="Megaphone" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 font-bold tracking-tight">Позитивный имидж</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 text-lg leading-relaxed">
                  Формируем положительную репутацию поселка в цифровом пространстве и медиасфере
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">Наши проекты</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Основные направления нашей деятельности по развитию медиаприсутствия поселка
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 group overflow-hidden bg-white hover:scale-[1.02] animate-fade-in-left">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/img/85b451cf-5ba9-4893-af96-6e34d090ab46.jpg" 
                  alt="По волнам школьной памяти"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <Badge className="absolute top-8 left-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-6 py-3 rounded-2xl shadow-xl shadow-blue-900/30 backdrop-blur-sm">
                  ФОТОПРОЕКТ
                </Badge>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tight">По волнам школьной памяти</h3>
                  <p className="text-gray-200 text-lg font-medium">Документируем историю образования</p>
                </div>
              </div>
              <CardContent className="p-8">
                <CardDescription className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Документируем историю образовательных учреждений поселка через фотографии, интервью и воспоминания жителей
                </CardDescription>
                <div className="flex flex-wrap gap-3 mb-8">
                  <Badge variant="outline" className="border-blue-200 text-blue-800 bg-blue-50/50 px-4 py-2 font-semibold">Фотография</Badge>
                  <Badge variant="outline" className="border-blue-200 text-blue-800 bg-blue-50/50 px-4 py-2 font-semibold">История</Badge>
                  <Badge variant="outline" className="border-blue-200 text-blue-800 bg-blue-50/50 px-4 py-2 font-semibold">Архив</Badge>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-bold py-4 text-lg shadow-xl shadow-blue-200/50 hover:shadow-2xl hover:shadow-blue-200/60 transition-all duration-300">
                  <Icon name="ExternalLink" size={20} className="mr-3" />
                  Подробнее о проекте
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 group overflow-hidden bg-white hover:scale-[1.02] animate-fade-in-right delay-200">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/img/526cedaf-0151-466e-b4b2-af2c3962d99a.jpg" 
                  alt="Горхон.Online 360°"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <Badge className="absolute top-8 left-8 bg-gradient-to-r from-pink-600 to-pink-700 text-white font-bold px-6 py-3 rounded-2xl shadow-xl shadow-pink-900/30 backdrop-blur-sm">
                  ВЕБ-ПРИЛОЖЕНИЕ
                </Badge>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-black text-white mb-3 tracking-tight">Горхон.Online 360°</h3>
                  <p className="text-gray-200 text-lg font-medium">Виртуальные туры по поселку</p>
                </div>
              </div>
              <CardContent className="p-8">
                <CardDescription className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Интерактивные виртуальные туры по поселку с возможностью 360° просмотра достопримечательностей и важных мест
                </CardDescription>
                <div className="flex flex-wrap gap-3 mb-8">
                  <Badge variant="outline" className="border-pink-200 text-pink-800 bg-pink-50/50 px-4 py-2 font-semibold">VR-туры</Badge>
                  <Badge variant="outline" className="border-pink-200 text-pink-800 bg-pink-50/50 px-4 py-2 font-semibold">Интерактив</Badge>
                  <Badge variant="outline" className="border-pink-200 text-pink-800 bg-pink-50/50 px-4 py-2 font-semibold">360°</Badge>
                </div>
                <Button variant="outline" className="w-full border-2 border-pink-200 text-pink-700 hover:bg-pink-50 hover:border-pink-300 rounded-2xl font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Icon name="ExternalLink" size={20} className="mr-3" />
                  Демо версия
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">Свяжитесь с нами</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                Хотите присоединиться к команде или предложить идею? Мы всегда открыты для сотрудничества!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Main Info */}
            <div className="lg:col-span-2 animate-fade-in-left">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-900/50">
                  <span className="text-white font-bold text-2xl">Г</span>
                </div>
                <div>
                  <div className="text-3xl font-black tracking-tight">ГОРХОН</div>
                  <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">МЕДИАКОМАНДА</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 max-w-lg text-lg">
                Официальная медиакоманда поселка Горхон, создающая качественный контент в социальных сетях
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://vk.com/gorhon_official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl shadow-blue-900/30"
                >
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 2.842-4.004 3.138-5.36.153-.701 0-1.215-1.003-1.215h-3.318c-.843 0-1.23.446-1.447.936 0 0-1.692 4.123-4.088 6.801-.775.775-1.127.48-1.127-.308V6.801c0-.843-.244-1.215-1.003-1.215H7.275c-.526 0-.843.394-.843.768 0 .804.843.99.93 3.255v4.923c0 1.078-.195 1.275-.75 1.275-1.38 0-4.74-4.141-6.74-8.892-.394-1.016-.788-1.423-1.633-1.423H-2.5c-.947 0-1.136.446-.9.936.275.578 2.717 6.892 5.684 10.893 1.97 2.768 4.74 4.274 7.274 4.274 1.517 0 1.703-.473 1.703-1.289v-2.972c0-.947.2-1.136.866-1.136.49 0 1.331.245 3.296 2.11 2.245 2.245 2.615 3.259 3.878 3.259h3.318c.947 0 1.421-.473 1.147-1.405-.299-.933-1.37-2.286-2.797-3.891z"/>
                  </svg>
                </a>
                <a 
                  href="https://t.me/gorhon_official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl shadow-blue-900/30"
                >
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.697 8.004c-.128.571-.465.713-.943.444l-2.611-1.925-1.261 1.212c-.14.14-.256.256-.526.256l.188-2.664 4.844-4.377c.209-.186-.046-.29-.324-.104l-5.989 3.771-2.585-.808c-.562-.175-.574-.562.117-.83L15.818 7.87c.468-.175.878.104.75.587z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="animate-fade-in-up delay-200">
              <h4 className="font-bold text-xl mb-6 tracking-tight">Контакты</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center text-lg">
                  <Icon name="Mail" size={20} className="mr-3 text-blue-400" />
                  <a href="mailto:admin@gorhon.ru" className="hover:text-blue-400 transition-colors">
                    admin@gorhon.ru
                  </a>
                </li>
                <li className="flex items-center text-lg">
                  <Icon name="MapPin" size={20} className="mr-3 text-blue-400" />
                  <span>поселок Горхон</span>
                </li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div className="animate-fade-in-up delay-300">
              <h4 className="font-bold text-xl mb-6 tracking-tight">Быстрые ссылки</h4>
              <ul className="space-y-4 text-gray-300">
                <li><a href="#about" className="hover:text-blue-400 transition-colors text-lg">О проекте</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition-colors text-lg">Наши проекты</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors text-lg">Контакты</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-16 pt-10 text-center text-gray-400 animate-fade-in-up delay-400">
            <p className="text-lg">&copy; 2025 ГОРХОН МЕДИАКОМАНДА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}