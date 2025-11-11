import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email.includes('@')) {
      toast({
        title: "Ошибка валидации",
        description: "Пожалуйста, введите корректный email адрес",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Спасибо за обращение!",
      description: "Мы свяжемся с вами в ближайшее время"
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const services = [
    {
      icon: "Plane",
      title: "VIP Туризм",
      description: "Эксклюзивные путешествия по всему миру с персональным сервисом"
    },
    {
      icon: "Sparkles",
      title: "Элитные Мероприятия",
      description: "Организация событий премиум-класса под ключ"
    },
    {
      icon: "Wine",
      title: "Частные Вечеринки",
      description: "Незабываемые приемы в лучших локациях"
    }
  ];

  const gallery = [
    {
      url: "https://cdn.poehali.dev/files/74779f59-7632-4f07-90c9-b2cfd9b62367.jpg",
      alt: "Винная терраса с панорамным видом"
    },
    {
      url: "https://cdn.poehali.dev/files/08880c23-4a6b-4d33-86cf-e32bdaeb93dc.jpg",
      alt: "Изысканная кухня высокого класса"
    },
    {
      url: "https://cdn.poehali.dev/files/c59bdc9d-7cad-4020-af80-ada2159a0229.jpg",
      alt: "Роскошный банкет с люстрами"
    },
    {
      url: "https://cdn.poehali.dev/files/9111adcd-9aef-415d-b907-8c2df9decb26.jpg",
      alt: "Премиальная яхта"
    },
    {
      url: "https://cdn.poehali.dev/files/af588b75-e12a-49b0-89d6-173da862e2b0.jpg",
      alt: "Эксклюзивная вилла с бассейном"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-semibold tracking-tight">PRESTIGE</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium hover:text-accent transition-colors">Главная</a>
              <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Услуги</a>
              <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">О компании</a>
              <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-6">
              Эксклюзивный<br />опыт класса люкс
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-light">
              Организация VIP-туризма, премиальных мероприятий и частных вечеринок мирового уровня
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full">
              Обсудить проект
            </Button>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl hover-scale group cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Персонализированный подход к каждому клиенту
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover-scale border-0 shadow-lg">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={28} className="text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">О компании</h2>
          <p className="text-xl leading-relaxed opacity-90 mb-6">
            Мы создаём уникальные впечатления для самых взыскательных клиентов. 
            Каждое мероприятие — это произведение искусства, каждое путешествие — незабываемая история.
          </p>
          <p className="text-lg leading-relaxed opacity-80">
            Наша команда профессионалов с многолетним опытом реализует самые смелые идеи, 
            обеспечивая безупречный сервис на всех этапах.
          </p>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Мы ответим в течение 24 часов
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-14 text-base"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-14 text-base"
              />
            </div>
            <div>
              <Textarea
                placeholder="Ваше сообщение"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-32 text-base"
              />
            </div>
            <Button type="submit" size="lg" className="w-full h-14 text-lg rounded-full bg-primary hover:bg-primary/90">
              Отправить сообщение
            </Button>
          </form>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-semibold mb-2">PRESTIGE</div>
              <p className="text-sm opacity-80">© 2025 Все права защищены</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex items-center gap-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <Icon name="Send" size={24} />
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
                <a href="tel:+79991234567" className="hover:text-accent transition-colors flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </a>
                <a href="mailto:info@prestige-vip.ru" className="hover:text-accent transition-colors flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@prestige-vip.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
