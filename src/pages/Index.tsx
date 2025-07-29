import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Geometric Abstract Shapes - Left Side */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Large teal triangle */}
        <div className="absolute top-0 left-0 w-0 h-0 border-l-[200px] border-l-transparent border-r-[150px] border-r-transparent border-b-[300px] border-b-teal-500 opacity-80 sm:border-l-[300px] sm:border-r-[200px] sm:border-b-[400px]"></div>
        
        {/* Pink geometric element */}
        <div className="absolute top-16 left-8 w-20 h-20 bg-secondary rounded-full opacity-60 sm:top-20 sm:left-10 sm:w-32 sm:h-32"></div>
        <div className="absolute top-24 left-12 w-16 h-16 bg-secondary rounded-full opacity-40 sm:top-32 sm:left-16 sm:w-24 sm:h-24"></div>
        
        {/* Blue shapes */}
        <div className="absolute top-32 left-24 w-24 h-24 bg-blue-600 rounded-lg transform rotate-45 opacity-70 sm:top-40 sm:left-32 sm:w-40 sm:h-40"></div>
        <div className="absolute top-48 left-16 w-12 h-12 bg-blue-400 rounded-full opacity-50 sm:top-60 sm:left-20 sm:w-20 sm:h-20"></div>
        
        {/* Green/teal elements */}
        <div className="absolute top-64 left-32 w-10 h-10 bg-emerald-600 transform rotate-45 opacity-60 sm:top-80 sm:left-40 sm:w-16 sm:h-16"></div>
        <div className="absolute bottom-32 left-8 w-20 h-20 bg-emerald-400 rounded-lg transform -rotate-12 opacity-50 sm:bottom-40 sm:left-10 sm:w-32 sm:h-32"></div>
        
        {/* Additional abstract elements */}
        <div className="absolute top-80 left-6 w-4 h-4 bg-black rounded-full sm:top-96 sm:left-8 sm:w-6 sm:h-6"></div>
        <div className="absolute top-60 left-36 w-6 h-6 bg-black rounded-full sm:top-72 sm:left-48 sm:w-8 sm:h-8"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-4 py-6 sm:px-6 sm:py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-white">
              <div className="text-2xl sm:text-3xl font-black tracking-tight">ГОРХОН</div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">
                СТРАНА ВОЗМОЖНОСТЕЙ
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-16 text-sm font-bold uppercase tracking-wider">
            <a href="#about" className="text-white hover:text-primary transition-colors px-4 py-2">О ПРОЕКТЕ</a>
            <a href="#projects" className="text-white hover:text-primary transition-colors px-4 py-2">ПРОЕКТЫ</a>
            <a href="#contact" className="text-white hover:text-primary transition-colors px-4 py-2">КОНТАКТЫ</a>
          </div>
          
          <Button variant="ghost" className="lg:hidden text-white">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-4 py-8 sm:px-6 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 sm:mb-8 text-white">
                «ГОРХОН» — твой старт<br />
                в мир медиавозможностей
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed font-medium">
                Строим мнение о поселке в диджитал мире через официальное сообщество в соцсетях
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full transition-all duration-300"
                >
                  СВЯЗАТЬСЯ С НАМИ
                </Button>
              </div>
            </div>

            {/* Right Side - Photos */}
            <div className="relative mt-8 lg:mt-0">
              {/* Mobile version - single photo */}
              <div className="lg:hidden">
                <div className="w-full max-w-sm mx-auto bg-white p-3 rounded-2xl shadow-2xl">
                  <img 
                    src="https://cdn.poehali.dev/files/80a58e99-2b65-40a9-8533-e4763ab4af46.jpg"
                    alt="Горхон поселок"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              </div>
              
              {/* Desktop version - overlapping photos */}
              <div className="relative hidden lg:block">
                {/* Main large photo */}
                <div className="relative">
                  <div className="w-80 h-64 bg-white p-3 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
                    <img 
                      src="https://cdn.poehali.dev/files/80a58e99-2b65-40a9-8533-e4763ab4af46.jpg"
                      alt="Горхон поселок"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  
                  {/* Second overlapping photo */}
                  <div className="absolute -bottom-8 -left-12 w-72 h-56 bg-white p-3 rounded-2xl shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                    <img 
                      src="https://cdn.poehali.dev/files/05b861ba-cd19-4486-8cef-18e90153271c.jpg"
                      alt="Памятник в Горхоне"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                
                {/* Star decoration */}
                <div className="absolute -top-4 -right-8 text-white transform rotate-12">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
                  </svg>
                </div>
                
                {/* Small decorative circles */}
                <div className="absolute -bottom-4 right-8 w-12 h-12 bg-blue-500 rounded-full opacity-60"></div>
                <div className="absolute top-8 right-4 w-8 h-8 bg-secondary rounded-full opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 text-white uppercase">О ПРОЕКТЕ</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Медиакоманда «Горхон» — это команда, которая ведет официальное сообщество поселка в социальных сетях, 
              создает качественный контент и формирует позитивное мнение о нашем поселке в цифровом пространстве.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-all duration-300 group">
              <CardHeader className="text-center pb-4 sm:pb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Camera" size={28} className="text-primary sm:w-9 sm:h-9" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-white font-bold">КОНТЕНТ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-400 text-sm sm:text-base">
                  Создаем качественный визуальный контент, который показывает жизнь поселка с лучшей стороны
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-all duration-300 group">
              <CardHeader className="text-center pb-4 sm:pb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Users" size={28} className="text-secondary sm:w-9 sm:h-9" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-white font-bold">СООБЩЕСТВО</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-400 text-sm sm:text-base">
                  Объединяем жителей через официальные каналы связи в социальных сетях
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-all duration-300 group sm:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-4 sm:pb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Megaphone" size={28} className="text-primary sm:w-9 sm:h-9" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-white font-bold">РЕПУТАЦИЯ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-400 text-sm sm:text-base">
                  Формируем положительный имидж поселка в диджитал пространстве
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 text-white uppercase">НАШИ ПРОЕКТЫ</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Основные направления нашей деятельности по развитию медиаприсутствия поселка
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            <Card className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/img/85b451cf-5ba9-4893-af96-6e34d090ab46.jpg" 
                  alt="По волнам школьной памяти"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <Badge className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-primary text-white font-bold px-3 py-1 sm:px-4 sm:py-2 uppercase tracking-wider text-xs sm:text-sm">ФОТОПРОЕКТ</Badge>
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">По волнам школьной памяти</h3>
                </div>
              </div>
              <CardHeader>
                <CardDescription className="text-sm sm:text-base text-gray-400">
                  Документируем историю образовательных учреждений поселка через фотографии и воспоминания жителей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  <Badge variant="outline" className="border-primary/30 text-primary font-medium text-xs sm:text-sm">Фотография</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary font-medium text-xs sm:text-sm">История</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary font-medium text-xs sm:text-sm">Архив</Badge>
                </div>
                <Button className="w-full rounded-xl font-bold uppercase tracking-wider text-sm sm:text-base">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  ПОДРОБНЕЕ
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/img/526cedaf-0151-466e-b4b2-af2c3962d99a.jpg" 
                  alt="Горхон.Online 360°"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <Badge className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-secondary text-white font-bold px-3 py-1 sm:px-4 sm:py-2 uppercase tracking-wider text-xs sm:text-sm">ВЕБ-ПРИЛОЖЕНИЕ</Badge>
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Горхон.Online 360°</h3>
                </div>
              </div>
              <CardHeader>
                <CardDescription className="text-sm sm:text-base text-gray-400">
                  Интерактивные виртуальные туры по поселку с возможностью 360° просмотра достопримечательностей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  <Badge variant="outline" className="border-secondary/30 text-secondary font-medium text-xs sm:text-sm">VR-туры</Badge>
                  <Badge variant="outline" className="border-secondary/30 text-secondary font-medium text-xs sm:text-sm">Интерактив</Badge>
                  <Badge variant="outline" className="border-secondary/30 text-secondary font-medium text-xs sm:text-sm">3D</Badge>
                </div>
                <Button variant="outline" className="w-full rounded-xl font-bold uppercase tracking-wider border-gray-700 text-sm sm:text-base">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  ДЕМО ВЕРСИЯ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 text-white uppercase">СВЯЗАТЬСЯ С НАМИ</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
            Хотите присоединиться к нашей команде или предложить идею для нового проекта? Свяжитесь с нами!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-bold uppercase tracking-wider rounded-full">
              <Icon name="Mail" size={20} className="mr-3" />
              НАПИСАТЬ НАМ
            </Button>
            <Button variant="outline" size="lg" className="border-gray-700 text-white hover:bg-white hover:text-black px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-bold uppercase tracking-wider rounded-full">
              <Icon name="MessageCircle" size={20} className="mr-3" />
              TELEGRAM
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="text-white mb-4">
                <div className="text-xl sm:text-2xl font-black">ГОРХОН</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-widest">
                  МЕДИАКОМАНДА
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Официальная медиакоманда поселка Горхон, создающая качественный контент в социальных сетях
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Проекты</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-primary transition-colors cursor-pointer">Фотопроекты</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Виртуальные туры</li>
                <li className="hover:text-primary transition-colors cursor-pointer">SMM продвижение</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Контент-маркетинг</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Контакты</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-primary transition-colors cursor-pointer">info@gorhon.ru</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Telegram: @gorhon</li>
                <li className="hover:text-primary transition-colors cursor-pointer">ВКонтакте</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
            <p>&copy; 2024 ГОРХОН МЕДИАКОМАНДА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}