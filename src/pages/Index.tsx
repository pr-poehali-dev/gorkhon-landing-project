import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">Г</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">ГОРХОН</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">МЕДИАКОМАНДА</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">О проекте</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Проекты</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Контакты</a>
            </div>
            
            <Button variant="ghost" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/30 py-20 sm:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-600/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 font-medium">
                  Официальная медиакоманда поселка
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">ГОРХОН</span> — ваш голос в <span className="text-pink-600">цифровом мире</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Создаем качественный контент для социальных сетей и формируем позитивное мнение о нашем поселке в диджитал пространстве
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
                <Button variant="outline" size="lg" className="border-pink-200 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-semibold rounded-xl">
                  <Icon name="Eye" size={20} className="mr-2" />
                  Наши проекты
                </Button>
              </div>
            </div>

            {/* Right Side - Photos */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Main large photo */}
                <div className="col-span-2 relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white p-3">
                    <img 
                      src="https://cdn.poehali.dev/files/80a58e99-2b65-40a9-8533-e4763ab4af46.jpg"
                      alt="Вид на поселок Горхон"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={16} className="text-white" />
                  </div>
                </div>
                
                {/* Second photo */}
                <div className="relative">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg bg-white p-2">
                    <img 
                      src="https://cdn.poehali.dev/files/05b861ba-cd19-4486-8cef-18e90153271c.jpg"
                      alt="Памятник в Горхоне"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center">
                    <div className="text-pink-600 font-bold text-sm text-center">
                      <div>2024</div>
                      <div className="text-xs">год</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">О проекте</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Медиакоманда «Горхон» ведет официальное сообщество поселка в социальных сетях, 
              создает качественный контент и формирует позитивное мнение о нашем поселке
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-blue-50 to-blue-100/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name="Camera" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 font-bold">Качественный контент</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 text-base leading-relaxed">
                  Создаем визуальный контент, который показывает жизнь поселка с лучшей стороны и привлекает внимание
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-pink-50 to-pink-100/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name="Users" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 font-bold">Активное сообщество</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 text-base leading-relaxed">
                  Объединяем жителей через официальные каналы связи в социальных сетях и мессенджерах
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-purple-50 to-purple-100/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon name="Megaphone" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 font-bold">Позитивный имидж</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 text-base leading-relaxed">
                  Формируем положительную репутацию поселка в цифровом пространстве и медиасфере
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Наши проекты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Основные направления нашей деятельности по развитию медиаприсутствия поселка
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-white">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/img/85b451cf-5ba9-4893-af96-6e34d090ab46.jpg" 
                  alt="По волнам школьной памяти"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge className="absolute top-6 left-6 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg">
                  ФОТОПРОЕКТ
                </Badge>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">По волнам школьной памяти</h3>
                  <p className="text-gray-200 text-sm">Документируем историю образования</p>
                </div>
              </div>
              <CardContent className="p-6">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  Документируем историю образовательных учреждений поселка через фотографии, интервью и воспоминания жителей
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">Фотография</Badge>
                  <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">История</Badge>
                  <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">Архив</Badge>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold py-3">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Подробнее о проекте
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-white">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/img/526cedaf-0151-466e-b4b2-af2c3962d99a.jpg" 
                  alt="Горхон.Online 360°"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge className="absolute top-6 left-6 bg-pink-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg">
                  ВЕБ-ПРИЛОЖЕНИЕ
                </Badge>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Горхон.Online 360°</h3>
                  <p className="text-gray-200 text-sm">Виртуальные туры по поселку</p>
                </div>
              </div>
              <CardContent className="p-6">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  Интерактивные виртуальные туры по поселку с возможностью 360° просмотра достопримечательностей и важных мест
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-pink-200 text-pink-700 bg-pink-50">VR-туры</Badge>
                  <Badge variant="outline" className="border-pink-200 text-pink-700 bg-pink-50">Интерактив</Badge>
                  <Badge variant="outline" className="border-pink-200 text-pink-700 bg-pink-50">360°</Badge>
                </div>
                <Button variant="outline" className="w-full border-pink-200 text-pink-600 hover:bg-pink-50 rounded-xl font-semibold py-3">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Демо версия
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Хотите присоединиться к команде или предложить идею? Мы всегда открыты для сотрудничества!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать нам
              </Button>
              <Button variant="outline" size="lg" className="border-pink-200 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-semibold rounded-xl">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">Г</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">ГОРХОН</div>
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wide">МЕДИАКОМАНДА</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Официальная медиакоманда поселка Горхон, создающая качественный контент в социальных сетях
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://vk.com/gorhon_official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-colors group"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 2.842-4.004 3.138-5.36.153-.701 0-1.215-1.003-1.215h-3.318c-.843 0-1.23.446-1.447.936 0 0-1.692 4.123-4.088 6.801-.775.775-1.127.48-1.127-.308V6.801c0-.843-.244-1.215-1.003-1.215H7.275c-.526 0-.843.394-.843.768 0 .804.843.99.93 3.255v4.923c0 1.078-.195 1.275-.75 1.275-1.38 0-4.74-4.141-6.74-8.892-.394-1.016-.788-1.423-1.633-1.423H-2.5c-.947 0-1.136.446-.9.936.275.578 2.717 6.892 5.684 10.893 1.97 2.768 4.74 4.274 7.274 4.274 1.517 0 1.703-.473 1.703-1.289v-2.972c0-.947.2-1.136.866-1.136.49 0 1.331.245 3.296 2.11 2.245 2.245 2.615 3.259 3.878 3.259h3.318c.947 0 1.421-.473 1.147-1.405-.299-.933-1.37-2.286-2.797-3.891z"/>
                  </svg>
                </a>
                <a 
                  href="https://t.me/gorhon_official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors group"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.697 8.004c-.128.571-.465.713-.943.444l-2.611-1.925-1.261 1.212c-.14.14-.256.256-.526.256l.188-2.664 4.844-4.377c.209-.186-.046-.29-.324-.104l-5.989 3.771-2.585-.808c-.562-.175-.574-.562.117-.83L15.818 7.87c.468-.175.878.104.75.587z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2 text-blue-400" />
                  <a href="mailto:admin@gorhon.ru" className="hover:text-blue-400 transition-colors">
                    admin@gorhon.ru
                  </a>
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2 text-blue-400" />
                  <span>поселок Горхон</span>
                </li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Быстрые ссылки</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">О проекте</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition-colors">Наши проекты</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ГОРХОН МЕДИАКОМАНДА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}