import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">Г</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">ГОРХОН</div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">МЕДИАКОМАНДА</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white font-medium transition-colors">О проекте</a>
              <a href="#projects" className="text-gray-300 hover:text-white font-medium transition-colors">Проекты</a>
              <a href="#contact" className="text-gray-300 hover:text-white font-medium transition-colors">Контакты</a>
            </div>
            
            <Button variant="ghost" className="md:hidden text-white hover:bg-gray-800">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 px-6 py-3 font-semibold text-sm rounded-full">
                Официальная медиакоманда поселка
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ГОРХОН
                  </span>
                  <br />
                  <span className="text-white">ваш голос в</span>
                  <br />
                  <span className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                    цифровом мире
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Создаем качественный контент для социальных сетей и формируем 
                  позитивное мнение о нашем поселке в цифровом пространстве
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
                >
                  Наши проекты
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-gray-600 text-white hover:bg-gray-800 px-8 py-4 rounded-full font-semibold text-lg"
                >
                  О команде
                </Button>
              </div>
            </div>

            {/* Right Side - Photo Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {/* Main large photo */}
                <div className="col-span-2 relative group">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-1">
                    <div className="w-full h-full rounded-xl overflow-hidden">
                      <img 
                        src="https://cdn.poehali.dev/files/80a58e99-2b65-40a9-8533-e4763ab4af46.jpg"
                        alt="Панорамный вид на поселок Горхон"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2">
                    <p className="text-white text-sm font-medium">Поселок Горхон</p>
                  </div>
                </div>
                
                {/* Two smaller photos */}
                <div className="relative group">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-1">
                    <div className="w-full h-full rounded-lg overflow-hidden">
                      <img 
                        src="https://cdn.poehali.dev/files/05b861ba-cd19-4486-8cef-18e90153271c.jpg"
                        alt="Памятник в поселке Горхон"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <div className="text-white font-bold text-center">
                      <div className="text-2xl">2025</div>
                      <div className="text-xs opacity-80">год</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">О проекте</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Медиакоманда «Горхон» ведет официальное сообщество поселка в социальных сетях, 
              создает качественный контент и формирует позитивное мнение о нашем поселке
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/80 border-gray-700 hover:bg-gray-800 transition-colors">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/25">
                  <Icon name="Camera" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-white font-bold">Качественный контент</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300 text-lg leading-relaxed">
                  Создаем визуальный контент, который показывает жизнь поселка с лучшей стороны и привлекает внимание
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/80 border-gray-700 hover:bg-gray-800 transition-colors">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/25">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-white font-bold">Активное сообщество</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300 text-lg leading-relaxed">
                  Объединяем жителей через официальные каналы связи в социальных сетях и мессенджерах
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/80 border-gray-700 hover:bg-gray-800 transition-colors">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-pink-500/25">
                  <Icon name="Megaphone" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-white font-bold">Позитивный имидж</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300 text-lg leading-relaxed">
                  Формируем положительную репутацию поселка в цифровом пространстве и медиасфере
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Наши проекты</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Основные направления нашей деятельности по развитию медиаприсутствия поселка
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gray-800/80 border-gray-700 overflow-hidden hover:bg-gray-800 transition-colors group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/img/85b451cf-5ba9-4893-af96-6e34d090ab46.jpg" 
                  alt="По волнам школьной памяти"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <Badge className="absolute top-6 left-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg">
                  ФОТОПРОЕКТ
                </Badge>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-black text-white mb-3">По волнам школьной памяти</h3>
                  <p className="text-gray-200 text-lg font-medium">Документируем историю образования</p>
                </div>
              </div>
              <CardContent className="p-8">
                <CardDescription className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Документируем историю образовательных учреждений поселка через фотографии, интервью и воспоминания жителей
                </CardDescription>
                <div className="flex flex-wrap gap-3 mb-8">
                  <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10 px-4 py-2 font-semibold rounded-full">Фотография</Badge>
                  <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10 px-4 py-2 font-semibold rounded-full">История</Badge>
                  <Badge variant="outline" className="border-blue-500/50 text-blue-400 bg-blue-500/10 px-4 py-2 font-semibold rounded-full">Архив</Badge>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full font-semibold py-4 text-lg shadow-lg">
                  <Icon name="ExternalLink" size={20} className="mr-3" />
                  Подробнее о проекте
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/80 border-gray-700 overflow-hidden hover:bg-gray-800 transition-colors group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/img/526cedaf-0151-466e-b4b2-af2c3962d99a.jpg" 
                  alt="Горхон.Online 360°"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <Badge className="absolute top-6 left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg">
                  ВЕБ-ПРИЛОЖЕНИЕ
                </Badge>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-black text-white mb-3">Горхон.Online 360°</h3>
                  <p className="text-gray-200 text-lg font-medium">Виртуальные туры по поселку</p>
                </div>
              </div>
              <CardContent className="p-8">
                <CardDescription className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Интерактивные виртуальные туры по поселку с возможностью 360° просмотра достопримечательностей и важных мест
                </CardDescription>
                <div className="flex flex-wrap gap-3 mb-8">
                  <Badge variant="outline" className="border-purple-500/50 text-purple-400 bg-purple-500/10 px-4 py-2 font-semibold rounded-full">VR-туры</Badge>
                  <Badge variant="outline" className="border-purple-500/50 text-purple-400 bg-purple-500/10 px-4 py-2 font-semibold rounded-full">Интерактив</Badge>
                  <Badge variant="outline" className="border-purple-500/50 text-purple-400 bg-purple-500/10 px-4 py-2 font-semibold rounded-full">360°</Badge>
                </div>
                <Button variant="outline" className="w-full border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 rounded-full font-semibold py-4 text-lg">
                  <Icon name="ExternalLink" size={20} className="mr-3" />
                  Демо версия
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Хотите присоединиться к команде или предложить идею? Мы всегда открыты для сотрудничества!
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg"
            >
              <Icon name="Mail" size={20} className="mr-3" />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-2xl">Г</span>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">ГОРХОН</div>
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">МЕДИАКОМАНДА</div>
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
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 2.842-4.004 3.138-5.36.153-.701 0-1.215-1.003-1.215h-3.318c-.843 0-1.23.446-1.447.936 0 0-1.692 4.123-4.088 6.801-.775.775-1.127.48-1.127-.308V6.801c0-.843-.244-1.215-1.003-1.215H7.275c-.526 0-.843.394-.843.768 0 .804.843.99.93 3.255v4.923c0 1.078-.195 1.275-.75 1.275-1.38 0-4.74-4.141-6.74-8.892-.394-1.016-.788-1.423-1.633-1.423H-2.5c-.947 0-1.136.446-.9.936.275.578 2.717 6.892 5.684 10.893 1.97 2.768 4.74 4.274 7.274 4.274 1.517 0 1.703-.473 1.703-1.289v-2.972c0-.947.2-1.136.866-1.136.49 0 1.331.245 3.296 2.11 2.245 2.245 2.615 3.259 3.878 3.259h3.318c.947 0 1.421-.473 1.147-1.405-.299-.933-1.37-2.286-2.797-3.891z"/>
                  </svg>
                </a>
                <a 
                  href="https://t.me/gorhon_official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.697 8.004c-.128.571-.465.713-.943.444l-2.611-1.925-1.261 1.212c-.14.14-.256.256-.526.256l.188-2.664 4.844-4.377c.209-.186-.046-.29-.324-.104l-5.989 3.771-2.585-.808c-.562-.175-.574-.562.117-.83L15.818 7.87c.468-.175.878.104.75.587z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-white">Контакты</h4>
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
            <div>
              <h4 className="font-bold text-xl mb-6 text-white">Быстрые ссылки</h4>
              <ul className="space-y-4 text-gray-300">
                <li><a href="#about" className="hover:text-blue-400 transition-colors text-lg">О проекте</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition-colors text-lg">Наши проекты</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors text-lg">Контакты</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-10 text-center text-gray-400">
            <p className="text-lg">&copy; 2025 ГОРХОН МЕДИАКОМАНДА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}