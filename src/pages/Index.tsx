import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">Г</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Горхон</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">Команда</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Проекты</a>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              Добровольная медиакоманда
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Горхон
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Создаем качественный контент для социальных сетей и помогаем брендам выстраивать эффективную коммуникацию с аудиторией
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с нами
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                <Icon name="Eye" size={20} className="mr-2" />
                Наши проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О нас</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы — команда энтузиастов, специализирующихся на ведении социальных сетей и контент-маркетинге. 
              Наша миссия — помочь проектам и брендам найти свой уникальный голос в цифровом пространстве.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" size={32} className="text-primary" />
                </div>
                <CardTitle>Креативность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Создаем уникальный визуальный контент, который выделяется в потоке социальных сетей
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={32} className="text-secondary" />
                </div>
                <CardTitle>Стратегия</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Разрабатываем продуманные стратегии продвижения, основанные на анализе целевой аудитории
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} className="text-primary" />
                </div>
                <CardTitle>Результат</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Достигаем измеримых результатов: рост охватов, вовлеченности и узнаваемости бренда
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Наша команда</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессионалы с опытом в маркетинге, дизайне, копирайтинге и анализе данных
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
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
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={member.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{member.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши проекты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Два масштабных проекта, которые показывают наш подход к созданию контента
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                <img 
                  src="/img/85b451cf-5ba9-4893-af96-6e34d090ab46.jpg" 
                  alt="По волнам школьной памяти"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary">Фотопроект</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">По волнам школьной памяти</CardTitle>
                <CardDescription className="text-base">
                  Фотопроект, посвященный сохранению школьных воспоминаний и созданию визуальной истории образовательных учреждений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Фотография</Badge>
                  <Badge variant="outline">Сторителлинг</Badge>
                  <Badge variant="outline">Архивация</Badge>
                </div>
                <Button className="w-full">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-secondary/10 to-primary/10 relative overflow-hidden">
                <img 
                  src="/img/526cedaf-0151-466e-b4b2-af2c3962d99a.jpg" 
                  alt="Горхон.Online 360°"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-secondary">Веб-приложение</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Горхон.Online 360°</CardTitle>
                <CardDescription className="text-base">
                  Интерактивное веб-приложение для создания и просмотра панорамных туров с возможностью погружения в 360° контент
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Web Development</Badge>
                  <Badge variant="outline">VR/AR</Badge>
                  <Badge variant="outline">UX/UI</Badge>
                </div>
                <Button className="w-full" variant="outline">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Демо версия
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы к сотрудничеству?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Свяжитесь с нами, чтобы обсудить ваш проект и узнать, как мы можем помочь вашему бренду выделиться в цифровом пространстве
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать нам
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">Г</span>
                </div>
                <span className="text-2xl font-bold">Горхон</span>
              </div>
              <p className="text-background/70 mb-6">
                Добровольная медиакоманда, специализирующаяся на ведении социальных сетей и контент-маркетинге
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-background hover:bg-background/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-background hover:bg-background/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-background hover:bg-background/10">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/70">
                <li>SMM продвижение</li>
                <li>Контент-маркетинг</li>
                <li>Дизайн</li>
                <li>Аналитика</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/70">
                <li>info@gorhon.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Telegram: @gorhon</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/50">
            <p>&copy; 2024 Горхон. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}