import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  GraduationCap, 
  Globe, 
  Chats, 
  Clock, 
  Sparkle,
  Phone,
  EnvelopeSimple,
  MapPin,
  Student,
  Heart,
  Star,
  ChatCircleDots,
  CheckCircle
} from '@phosphor-icons/react'

function App() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/40 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-40 h-40 bg-secondary/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-accent/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="mb-4 bg-accent text-accent-foreground text-base px-4 py-1">
                  <Sparkle className="inline mr-2" weight="fill" />
                  10 лет опыта
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                  Привет, будущий ученик ☺️
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                  Меня зовут <span className="font-bold text-primary">Варвара</span>, и я помогу тебе полюбить английский!
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <Badge variant="secondary" className="text-base px-4 py-2">
                    <Star className="mr-2" weight="fill" />
                    C1 уровень
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2">
                    <Globe className="mr-2" weight="fill" />
                    Международный опыт
                  </Badge>
                  <Badge variant="secondary" className="text-base px-4 py-2">
                    <Heart className="mr-2" weight="fill" />
                    Весёлые уроки
                  </Badge>
                </div>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                  onClick={scrollToContact}
                >
                  <Sparkle className="mr-2" weight="fill" />
                  Записаться на пробный урок
                </Button>
              </motion.div>

              <motion.div 
                className="w-full md:w-72 lg:w-80 flex-shrink-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-30" />
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=faces" 
                    alt="Варвара Ищенко" 
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Немного обо мне 😊
          </h2>
          <Card className="p-8 md:p-10 shadow-lg border-2">
            <CardContent className="space-y-4 text-lg leading-relaxed p-0">
              <p>
                Работаю преподавателем английского уже <span className="font-bold text-primary">10 лет</span>, и если вернуться к началу карьеры, то сейчас я уже лучшая версия себя! 🎉
              </p>
              <p>
                Мой текущий уровень — <span className="font-bold text-accent">C1</span>, но продолжаю заниматься сама и совершенствоваться. Учиться никогда не поздно! 📚
              </p>
              <p>
                У меня высшее лингвистическое образование и обучение в аспирантуре, что было не так-то просто 😅
              </p>
              <p>
                Есть международный опыт работы в <span className="font-semibold text-secondary">Китае в детском саду</span>, также сданный международный экзамен и небольшая стажировка в <span className="font-semibold text-secondary">Шотландии</span> 🌍
              </p>
              <p className="text-xl font-semibold text-primary pt-4">
                Ещё говорят, что я весёлая! 😂
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Квалификация и опыт 🎓
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Профессиональное образование и международная практика
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-t-primary">
                <CardContent className="p-0 space-y-3">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <GraduationCap size={32} className="text-primary" weight="fill" />
                  </div>
                  <h3 className="text-xl font-bold">Образование</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Высшее лингвистическое образование СПбГПУ, обучение в аспирантуре. Факультет Иностранных языков.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-t-secondary">
                <CardContent className="p-0 space-y-3">
                  <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Globe size={32} className="text-secondary" weight="fill" />
                  </div>
                  <h3 className="text-xl font-bold">Международный опыт</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Работа в детском саду в Китае, стажировка в Шотландии, сданный международный экзамен.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-t-accent">
                <CardContent className="p-0 space-y-3">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                    <Student size={32} className="text-accent" weight="fill" />
                  </div>
                  <h3 className="text-xl font-bold">Практика</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Преподаватель в СПбГПУ с 2019 года. Работа на различных специальностях, составление планов уроков.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Как я работаю 🎯
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12">
              Современные методы и индивидуальный подход
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 shadow-md">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ChatCircleDots size={24} className="text-primary" weight="fill" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Платформы</h3>
                      <p className="text-muted-foreground">Работаю на Zoom, Progress Me, Kami — выбираем то, что удобно!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-md">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={24} className="text-secondary" weight="fill" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Специализация</h3>
                      <p className="text-muted-foreground">Подготовка к школьным, университетским экзаменам, ОГЭ. Акцент на говорении.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-md">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Student size={24} className="text-accent" weight="fill" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Ученики</h3>
                      <p className="text-muted-foreground">Работаю преимущественно со взрослыми и подростками 14+</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-md">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart size={24} className="text-primary" weight="fill" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Мой принцип</h3>
                      <p className="text-muted-foreground">Начинаем с весёлого повторения пройденного материала и им же заканчиваем! 😊</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Стоимость занятий 💰
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Прозрачные цены и бесплатный пробный урок
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-8 shadow-xl border-2 border-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16" />
                <CardContent className="p-0 relative z-10">
                  <Badge className="mb-4 bg-accent text-accent-foreground">
                    Популярный выбор
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">Индивидуальные занятия</h3>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold text-primary">1800₽</span>
                      <span className="text-muted-foreground">/урок</span>
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Clock size={24} className="text-primary flex-shrink-0 mt-1" weight="fill" />
                      <span>50-55 минут личного внимания</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkle size={24} className="text-accent flex-shrink-0 mt-1" weight="fill" />
                      <span className="font-bold text-accent">Первое занятие 20-25 минут БЕСПЛАТНО!</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={24} className="text-secondary flex-shrink-0 mt-1" weight="fill" />
                      <span>Программа адаптирована под ваши цели</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-8 shadow-xl border-2 border-secondary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16" />
                <CardContent className="p-0 relative z-10">
                  <Badge className="mb-4 bg-secondary text-secondary-foreground">
                    Выгодное предложение
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">Парные занятия</h3>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold text-secondary">1400₽</span>
                      <span className="text-muted-foreground">/урок</span>
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Clock size={24} className="text-secondary flex-shrink-0 mt-1" weight="fill" />
                      <span>60-65 минут в паре с другом</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Chats size={24} className="text-primary flex-shrink-0 mt-1" weight="fill" />
                      <span>Больше практики общения</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" weight="fill" />
                      <span>Экономия + весёлая атмосфера</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-primary via-accent to-secondary p-1 rounded-3xl shadow-2xl">
            <div className="bg-card rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Готов начать? 🚀
              </h2>
              <p className="text-center text-muted-foreground text-lg mb-12">
                Свяжись со мной удобным способом и запишись на бесплатный пробный урок!
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
                <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone size={32} className="text-accent" weight="fill" />
                    </div>
                    <h3 className="font-bold mb-2">Телефон</h3>
                    <a href="tel:+79502274443" className="text-primary hover:text-accent transition-colors">
                      +7 (950) 227-44-43
                    </a>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <EnvelopeSimple size={32} className="text-secondary" weight="fill" />
                    </div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <a href="mailto:varvara.ishenko@gmail.com" className="text-primary hover:text-accent transition-colors break-all">
                      varvara.ishenko@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin size={32} className="text-primary" weight="fill" />
                    </div>
                    <h3 className="font-bold mb-2">Локация</h3>
                    <p className="text-muted-foreground">
                      Санкт-Петербург<br />
                      (онлайн уроки)
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-white text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all"
                  asChild
                >
                  <a href="https://wa.me/79502274443" target="_blank" rel="noopener noreferrer">
                    <Sparkle className="mr-3" weight="fill" size={28} />
                    Написать в WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <footer className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            © 2024 Варвара Ищенко. Преподаватель английского языка
          </p>
          <p className="text-sm text-muted-foreground">
            Сделано с <Heart className="inline text-primary" weight="fill" size={16} /> для моих будущих учеников
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App