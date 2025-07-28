import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const wishes = [
    {
      title: "Волшебные моменты",
      text: "Пусть каждый день приносит тебе маленькие чудеса и причины для улыбки. Ты заслуживаешь всего самого прекрасного! ✨",
      image: "/img/8078c186-12e8-4f10-947e-e92bce7d90e8.jpg"
    },
    {
      title: "Нежные объятия", 
      text: "Желаю тебе тепла, которое согревает душу, и любви, которая окружает каждый твой шаг. Ты особенный! 💕",
      image: "/img/5df8f6f0-2e08-4caf-8dfb-3ccc16fe952c.jpg"
    },
    {
      title: "Сладкие мечты",
      text: "Пусть твои мечты сбываются одна за другой, а каждое утро встречает тебя с новыми возможностями! 🌸",
      image: "/img/2b60f1d8-89e1-4428-bf75-121a9410d553.jpg"
    }
  ];

  const extraWishes = [
    {
      title: "Яркие краски",
      text: "Пусть твоя жизнь будет наполнена радужными красками и светлыми моментами, которые останутся в памяти навсегда! 🌈"
    },
    {
      title: "Душевный покой",
      text: "Желаю тебе спокойствия в сердце, гармонии с собой и уверенности в завтрашнем дне. Всё будет хорошо! 🕊️"
    },
    {
      title: "Безграничная радость",
      text: "Пусть смех наполняет твои дни, а улыбка никогда не сходит с лица. Ты приносишь счастье в этот мир! 😊"
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="text-center mb-16">
          <div className="mb-6">
            <Icon name="Heart" size={64} className="mx-auto text-primary mb-4" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6 font-serif">
            Милый уголок тепла
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Здесь живут самые добрые пожелания и тёплые слова специально для тебя 💖
          </p>
        </div>
      </div>

      {/* Main Wishes with Images */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Особые пожелания</h2>
          <p className="text-muted-foreground text-lg">Каждое из них создано с любовью</p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
          {wishes.map((wish, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/40 hover:scale-105 bg-gradient-to-br from-card to-secondary/20">
              <div className="p-0">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={wish.image} 
                    alt={wish.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <Icon name="Heart" size={24} className="mx-auto text-primary mb-3" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 text-center">{wish.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-center">{wish.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Wishes */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ещё больше тепла</h2>
          <p className="text-muted-foreground text-lg">Пусть эти слова согреют твоё сердце</p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {extraWishes.map((wish, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/40 hover:scale-105 bg-gradient-to-br from-card to-accent/15">
              <div className="text-center h-full flex flex-col">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/15 rounded-full">
                    <Icon name="Star" size={28} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{wish.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">{wish.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-8">
              <Icon name="Heart" size={56} className="text-primary" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-6">С безграничной любовью</h3>
          <p className="text-muted-foreground text-xl leading-relaxed mb-8">
            Ты удивительный человек, который делает мир ярче и добрее. Пусть каждый твой день будет полон счастья, 
            а каждая минута приносит радость и вдохновение! 🌟
          </p>
          <Button className="px-10 py-4 text-lg rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
            <Icon name="Gift" size={24} className="mr-3" />
            Поделиться добротой
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 opacity-20 animate-pulse">
        <Icon name="Heart" size={32} className="text-primary" />
      </div>
      <div className="fixed top-40 right-16 opacity-20 animate-pulse delay-1000">
        <Icon name="Star" size={28} className="text-accent" />
      </div>
      <div className="fixed bottom-32 left-20 opacity-20 animate-pulse delay-2000">
        <Icon name="Sparkles" size={24} className="text-primary" />
      </div>
    </div>
  );
};

export default Index;