import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-16 grid-rows-16 h-full w-full">
          {Array.from({ length: 256 }).map((_, i) => (
            <div key={i} className="border border-white/10"></div>
          ))}
        </div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-primary to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="absolute top-20 right-20 w-32 h-32 opacity-30">
        <div className="w-full h-full bg-secondary transform rotate-45 rounded-lg"></div>
      </div>
      <div className="absolute bottom-32 left-1/4 w-24 h-24 opacity-25">
        <div className="w-full h-full border-4 border-primary rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-1/3 w-40 h-40 opacity-15">
        <div className="w-full h-full bg-gradient-to-tl from-secondary to-transparent rounded-lg transform -rotate-12"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Г</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">ГОРХОН</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">МЕДИАКОМАНДА</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-12 text-sm font-medium uppercase tracking-wider">
              <a href="#about" className="text-foreground hover:text-primary transition-colors border-r border-border pr-6">О НАС</a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors border-r border-border pr-6">КОМАНДА</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">ПРОЕКТЫ</a>
            </div>
            <Button variant="outline" className="md:hidden border-border">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-8 px-6 py-2 text-sm font-medium uppercase tracking-wider">
              Добровольная медиакоманда
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="text-white">«ГОРХОН» — твой старт</span><br />
              <span className="text-white">в мир </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">медиавозможностей</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
              Пройди путь от начинающего автора до лидера общественного мнения в сфере контент-маркетинга и SMM
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="px-12 py-6 text-lg font-semibold uppercase tracking-wider rounded-2xl">
                Связаться с командой
              </Button>
              <Button variant="outline" size="lg" className="px-12 py-6 text-lg font-semibold uppercase tracking-wider rounded-2xl border-border">
                Наши проекты
              </Button>
            </div>
          </div>
          
          {/* Decorative Photos */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="relative">
              <div className="w-80 h-60 bg-card rounded-3xl p-4 transform rotate-6 shadow-2xl">
                <img 
                  src="/img/3121379c-a970-4a50-b754-1caca6d4e8d3.jpg" 
                  alt="Команда Горхон"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-48 bg-card rounded-3xl p-4 transform -rotate-12 shadow-2xl">
                <img 
                  src="/img/85b451cf-5ba9-4893-af96-6e34d090ab46.jpg" 
                  alt="Проект команды"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Star" size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">О НАС</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Мы — команда энтузиастов, специализирующихся на ведении социальных сетей и контент-маркетинге. 
              Наша миссия — помочь проектам и брендам найти свой уникальный голос в цифровом пространстве.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Palette" size={36} className="text-primary" />
                </div>
                <CardTitle className="text-2xl text-white">Креативность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Создаем уникальный визуальный контент, который выделяется в потоке социальных сетей
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="Target" size={36} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl text-white">Стратегия</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Разрабатываем продуманные стратегии продвижения, основанные на анализе целевой аудитории
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="TrendingUp" size={36} className="text-primary" />
                </div>
                <CardTitle className="text-2xl text-white">Результат</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Достигаем измеримых результатов: рост охватов, вовлеченности и узнаваемости бренда
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative z-10 py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">НАША КОМАНДА</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессионалы с опытом в маркетинге, дизайне, копирайтинге и анализе данных
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Анна Смирнова",
                role: "SMM-менеджер",
                icon: "User",
                description: "Ведет стратегию продвижения и планирует контент-план"
              },
              {
                name: "Максим Петров",
                role: "Дизайнер",
                icon: "Palette",
                description: "Создает визуальный контент и разрабатывает фирменный стиль"
              },
              {
                name: "Елена Козлова",
                role: "Копирайтер",
                icon: "PenTool",
                description: "Пишет тексты и работает над тоном коммуникации"
              },
              {
                name: "Дмитрий Волков",
                role: "Аналитик",
                icon: "BarChart3",
                description: "Анализирует эффективность и оптимизирует стратегии"
              }
            ].map((member, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group text-center">
                <CardHeader className="pb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={member.icon as any} size={36} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl text-white">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mt-2 font-medium">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{member.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">НАШИ ПРОЕКТЫ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Два масштабных проекта, которые показывают наш подход к созданию контента
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/img/85b451cf-5ba9-4893-af96-6e34d090ab46.jpg" 
                  alt="По волнам школьной памяти"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <Badge className="absolute top-6 left-6 bg-primary text-white font-medium px-4 py-2">ФОТОПРОЕКТ</Badge>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">По волнам школьной памяти</h3>
                </div>
              </div>
              <CardHeader>
                <CardDescription className="text-base text-muted-foreground">
                  Фотопроект, посвященный сохранению школьных воспоминаний и созданию визуальной истории образовательных учреждений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-primary/30 text-primary">Фотография</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Сторителлинг</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Архивация</Badge>
                </div>
                <Button className="w-full rounded-xl font-semibold">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  ПОДРОБНЕЕ
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/img/526cedaf-0151-466e-b4b2-af2c3962d99a.jpg" 
                  alt="Горхон.Online 360°"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <Badge className="absolute top-6 left-6 bg-secondary text-white font-medium px-4 py-2">ВЕБ-ПРИЛОЖЕНИЕ</Badge>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Горхон.Online 360°</h3>
                </div>
              </div>
              <CardHeader>
                <CardDescription className="text-base text-muted-foreground">
                  Интерактивное веб-приложение для создания и просмотра панорамных туров с возможностью погружения в 360° контент
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="border-secondary/30 text-secondary">Web Development</Badge>
                  <Badge variant="outline" className="border-secondary/30 text-secondary">VR/AR</Badge>
                  <Badge variant="outline" className="border-secondary/30 text-secondary">UX/UI</Badge>
                </div>
                <Button variant="outline" className="w-full rounded-xl font-semibold border-border">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  ДЕМО ВЕРСИЯ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">ГОТОВЫ К СОТРУДНИЧЕСТВУ?</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Свяжитесь с нами, чтобы обсудить ваш проект и узнать, как мы можем помочь вашему бренду выделиться в цифровом пространстве
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-12 py-6 text-lg font-semibold uppercase tracking-wider rounded-2xl">
                <Icon name="Mail" size={20} className="mr-3" />
                Написать нам
              </Button>
              <Button variant="outline" size="lg" className="px-12 py-6 text-lg font-semibold uppercase tracking-wider rounded-2xl border-border">
                <Icon name="Phone" size={20} className="mr-3" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Г</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">ГОРХОН</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">МЕДИАКОМАНДА</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Добровольная медиакоманда, специализирующаяся на ведении социальных сетей и контент-маркетинге
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Услуги</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">SMM продвижение</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Контент-маркетинг</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Дизайн</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Аналитика</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Контакты</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">info@gorhon.ru</li>
                <li className="hover:text-primary transition-colors cursor-pointer">+7 (999) 123-45-67</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Telegram: @gorhon</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ГОРХОН. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}