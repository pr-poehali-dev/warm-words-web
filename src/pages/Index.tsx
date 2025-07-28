import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const wishes = [
    {
      title: "Тёплые объятия",
      text: "Пусть каждый день приносит тебе столько же тепла, сколько даёт мягкое одеяло холодным вечером. Ты заслуживаешь всех самых добрых моментов в жизни! 🤗"
    },
    {
      title: "Уютные вечера", 
      text: "Желаю тебе бесконечно уютных вечеров с чашкой горячего чая и любимыми котиками рядом. Пусть дом всегда будет твоей крепостью! 🏠"
    },
    {
      title: "Сладкие сны",
      text: "Пусть твои сны будут наполнены самыми приятными воспоминаниями и мечтами. Спи крепко, зная, что завтра будет ещё лучше сегодняшнего дня! ✨"
    }
  ];

  const favoriteFood = [
    {
      name: "Домашние котлеты",
      description: "Самые вкусные, сочные котлеты с золотистой корочкой - это не просто еда, это объятия для души!",
      emoji: "🍖"
    },
    {
      name: "Ароматная шаурма", 
      description: "Идеальное сочетание хрустящего лаваша, сочного мяса и свежих овощей - кулинарное счастье в каждом кусочке!",
      emoji: "🌯"
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
            Добро пожаловать в уютный уголок
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Здесь живут тёплые слова, милые создания и самые вкусные моменты жизни
          </p>
        </div>
      </div>

      {/* Cute Animals Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Милые друзья</h2>
          <p className="text-muted-foreground">Они делают каждый день светлее</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
            <div className="text-center">
              <img 
                src="/img/37a150c2-857a-4c8d-89ab-d3a3f46d3fac.jpg" 
                alt="Уютный котик"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-foreground mb-2">Пушистое счастье</h3>
              <p className="text-muted-foreground">
                Котики знают секрет настоящего уюта - нужно просто мурлыкать от удовольствия! 🐱
              </p>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
            <div className="text-center">
              <img 
                src="/img/e3598289-5141-4e40-9729-ca5f829c344d.jpg" 
                alt="Забавная обезьянка"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-foreground mb-2">Озорное веселье</h3>
              <p className="text-muted-foreground">
                Обезьянки напоминают нам: жизнь прекрасна, когда в ней есть место для игр и смеха! 🐵
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Favorite Food Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Любимые вкусности</h2>
          <p className="text-muted-foreground">Еда, которая согревает сердце</p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {favoriteFood.map((food, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                <div className="text-center">
                  <div className="text-6xl mb-4">{food.emoji}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{food.name}</h3>
                  <p className="text-muted-foreground mb-4">{food.description}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <img 
              src="/img/4e519104-1ece-44f8-ad2b-b69767e437aa.jpg" 
              alt="Аппетитные котлеты"
              className="w-full max-w-md mx-auto h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Warm Wishes Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Тёплые пожелания</h2>
          <p className="text-muted-foreground">Пусть эти слова согреют твоё сердце</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {wishes.map((wish, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30 bg-gradient-to-br from-card to-accent/10">
              <div className="text-center h-full flex flex-col">
                <div className="mb-4">
                  <Icon name="Sparkles" size={32} className="mx-auto text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{wish.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{wish.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <Icon name="Heart" size={48} className="mx-auto text-primary mb-6" />
          <h3 className="text-2xl font-bold text-foreground mb-4">С любовью и теплом</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Пусть каждый день приносит радость, а каждый момент будет наполнен уютом и счастьем. 
            Ты особенный человек, и мир становится лучше с тобой! 💕
          </p>
          <Button className="mt-6 px-8 py-3 text-lg rounded-full">
            <Icon name="Coffee" size={20} className="mr-2" />
            Поделиться теплом
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;