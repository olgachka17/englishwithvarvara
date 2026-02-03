import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { DocumentCarousel } from '@/components/DocumentCarousel'
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
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 w-40 h-40 bg-primary/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/3 w-44 h-44 bg-accent/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-primary/30 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '0.5s' }} />
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, oklch(0.75 0.20 35 / 0.3) 35px, oklch(0.75 0.20 35 / 0.3) 36px)`
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-6 justify-center"
            >
              <Badge className="bg-accent text-accent-foreground text-sm md:text-base px-4 py-2 shadow-lg">
                <Sparkle className="inline mr-2" weight="fill" />
                10 лет преподавания
              </Badge>
              <Badge className="bg-gradient-to-r from-secondary to-primary text-white text-sm md:text-base px-4 py-2 shadow-lg">
                <Star className="mr-2" weight="fill" />
                C1 English
              </Badge>
              <Badge className="bg-primary text-primary-foreground text-sm md:text-base px-4 py-2 shadow-lg">
                <Globe className="mr-2" weight="fill" />
                Международный опыт
              </Badge>
              <Badge className="bg-gradient-to-r from-accent to-secondary text-white text-sm md:text-base px-4 py-2 shadow-lg">
                <Heart className="mr-2" weight="fill" />
                Ученики 18+
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Английский для взрослых 18+:
              </span>
              <br />
              <span className="text-foreground">
                без стеснения заговорите уже через несколько месяцев
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-10 leading-relaxed max-w-4xl mx-auto"
            >
              Я <span className="font-bold text-primary">Варвара</span>, преподаю английский <span className="font-semibold text-accent">10 лет</span> и помогаю взрослым заговорить уверенно для <span className="font-semibold text-secondary">работы, переезда и путешествий</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center gap-3"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-accent via-primary to-secondary hover:opacity-90 text-white text-lg md:text-xl px-10 py-7 md:px-12 md:py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105 font-bold"
                onClick={scrollToContact}
              >
                <Sparkle className="mr-3" weight="fill" size={28} />
                Записаться на бесплатный пробный урок
              </Button>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-sm md:text-base text-muted-foreground font-medium"
              >
                20 минут знакомства и персональный план обучения
              </motion.p>
            </motion.div>
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
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Card className="flex-1 p-8 md:p-10 shadow-2xl border-2 border-primary/10 bg-gradient-to-br from-white via-white to-primary/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-full -mr-32 -mt-32 blur-2xl" />
              <CardContent className="space-y-4 text-lg leading-relaxed p-0 relative z-10">
                <p>
                  Работаю преподавателем английского уже <span className="font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-lg">10 лет</span>, и если вернуться к началу карьеры, то сейчас я уже лучшая версия себя! 🎉
                </p>
                <p>
                  Мой текущий уровень — <span className="font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-lg">C1</span>, но продолжаю заниматься сама и совершенствоваться. Учиться никогда не поздно! 📚
                </p>
                <p>
                  У меня высшее лингвистическое образование и обучение в аспирантуре, что было не так-то просто 😅
                </p>
                <p>
                  Есть международный опыт работы в <span className="font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-lg">Китае в детском саду</span>, также сданный международный экзамен и небольшая стажировка в <span className="font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-lg">Шотландии</span> 🌍
                </p>
                <p className="text-xl font-semibold text-primary pt-4">
                  Ещё говорят, что я весёлая! 😂
                </p>
              </CardContent>
            </Card>
            <motion.div 
              className="w-full md:w-64 flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-xl opacity-40 animate-pulse" style={{ animationDuration: '3s' }} />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl opacity-50" />
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=350&fit=crop&crop=faces" 
                  alt="Варвара Ищенко" 
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white"
                />
              </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Квалификация и опыт 🎓
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Профессиональное образование и международная практика
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-6 shadow-xl hover:shadow-2xl transition-all border-t-4 border-t-primary bg-gradient-to-br from-white to-primary/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -mr-12 -mt-12" />
                <CardContent className="p-0 space-y-3 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <GraduationCap size={32} className="text-white" weight="fill" />
                  </div>
                  <h3 className="text-xl font-bold">Образование</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Высшее лингвистическое образование СПбГПУ, обучение в аспирантуре. Факультет Иностранных языков.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-6 shadow-xl hover:shadow-2xl transition-all border-t-4 border-t-secondary bg-gradient-to-br from-white to-secondary/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full -mr-12 -mt-12" />
                <CardContent className="p-0 space-y-3 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Globe size={32} className="text-white" weight="fill" />
                  </div>
                  <h3 className="text-xl font-bold">Международный опыт</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Работа в детском саду в Китае, стажировка в Шотландии, сданный международный экзамен.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-6 shadow-xl hover:shadow-2xl transition-all border-t-4 border-t-accent bg-gradient-to-br from-white to-accent/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full -mr-12 -mt-12" />
                <CardContent className="p-0 space-y-3 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Student size={32} className="text-white" weight="fill" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Дипломы и сертификаты 📜
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Подтверждённая квалификация и достижения
          </p>
          <DocumentCarousel />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Моя методика 🎯
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Преподаю английский для взрослых 18+ — для работы, поездок, учёбы или просто чтобы наконец-то начать говорить без ступора
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 md:p-10 shadow-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 40px, oklch(0.68 0.22 30 / 0.05) 40px, oklch(0.68 0.22 30 / 0.05) 41px)`
              }} />
              <CardContent className="p-0 space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Student size={36} className="text-white" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-primary">Беру любой уровень</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Можно прийти <span className="font-semibold text-foreground bg-yellow-100 px-2 py-0.5 rounded-lg">"с нуля"</span>, можно с базой или после долгого перерыва — подстроимся и спокойно разгонимся.
                    </p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Chats size={36} className="text-white" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-accent">Живые и интерактивные уроки</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Много общения, понятные объяснения и практика, которая сразу закрепляет материал. Использую качественные материалы платформы и добавляю свои задания под вашу цель.
                    </p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Sparkle size={36} className="text-white" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-secondary">Современные материалы</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Иногда подключаю короткие видео и мемы по теме — не ради "развлечь", а чтобы новые слова и правила <span className="font-semibold text-foreground bg-green-100 px-2 py-0.5 rounded-lg">запоминались быстрее и без ощущения зубрёжки</span>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full p-6 shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-primary/5 to-white border-2 border-primary/20">
                  <CardContent className="p-0 text-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Chats size={32} className="text-white" weight="fill" />
                    </div>
                    <h3 className="text-xl font-bold">Разговорный английский</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Для тех, кто хочет уверенно общаться и преодолеть языковой барьер
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full p-6 shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-accent/5 to-white border-2 border-accent/20">
                  <CardContent className="p-0 text-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <GraduationCap size={32} className="text-white" weight="fill" />
                    </div>
                    <h3 className="text-xl font-bold">Грамматика "по полочкам"</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Систематизируем знания и разбираем сложные темы понятным языком
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full p-6 shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-secondary/5 to-white border-2 border-secondary/20">
                  <CardContent className="p-0 text-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Globe size={32} className="text-white" weight="fill" />
                    </div>
                    <h3 className="text-xl font-bold">Для работы и путешествий</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Практический английский под конкретные цели и ситуации
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <Card className="p-8 shadow-2xl bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-full -mr-24 -mt-24 blur-2xl" />
              <CardContent className="p-0 relative z-10">
                <div className="flex items-start gap-4">
                  <CheckCircle size={36} className="text-accent flex-shrink-0 mt-1" weight="fill" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Индивидуальный подход</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      На старте уточняем <span className="font-semibold text-foreground bg-accent/10 px-2 py-0.5 rounded-lg">цель и комфортный темп</span>, а дальше идём по плану и регулярно отмечаем прогресс.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
            Что говорят мои ученики 💬
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Реальные отзывы и истории успеха
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full p-6 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full -mr-16 -mt-16 blur-xl" />
                <CardContent className="p-0 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      А
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Анастасия</h3>
                      <p className="text-sm text-muted-foreground">Студентка, 19 лет</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" className="text-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "Варвара помогла мне подготовиться к экзамену в университете. Её методика действительно работает! Теперь говорю по-английски гораздо увереннее. 🎓"
                  </p>
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                    Сдала экзамен на 5
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full p-6 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden bg-gradient-to-br from-white to-secondary/5 border-2 border-secondary/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full -mr-16 -mt-16 blur-xl" />
                <CardContent className="p-0 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      Д
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Дмитрий</h3>
                      <p className="text-sm text-muted-foreground">IT-специалист, 28 лет</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" className="text-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "Занимаюсь с Варварой уже полгода. Весёлая, всегда позитивная, и главное — уроки проходят легко и интересно. С B1 дошёл до B2+! 🚀"
                  </p>
                  <Badge variant="secondary" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
                    Повысил уровень до B2+
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full p-6 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden bg-gradient-to-br from-white to-accent/5 border-2 border-accent/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full -mr-16 -mt-16 blur-xl" />
                <CardContent className="p-0 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      Е
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Елена</h3>
                      <p className="text-sm text-muted-foreground">Менеджер проектов, 32 года</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" className="text-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "Начала заниматься после долгого перерыва — боялась, что всё забыла. Варвара помогла восстановить знания и выйти на новый уровень. Теперь спокойно общаюсь с иностранными коллегами! 💼"
                  </p>
                  <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                    Вернулась к английскому после 8 лет
                  </Badge>
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
              Платформы и специализация 💻
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12">
              Современные инструменты и проверенные подходы
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
                      <p className="text-muted-foreground">Работаю со взрослыми 18+</p>
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
            <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-8 shadow-2xl border-4 border-primary relative overflow-hidden bg-gradient-to-br from-white via-primary/5 to-accent/10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full -mr-20 -mt-20 blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
                <CardContent className="p-0 relative z-10">
                  <Badge className="mb-4 bg-gradient-to-r from-accent to-primary text-white shadow-lg">
                    Популярный выбор
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">Индивидуальные занятия</h3>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">1800₽</span>
                      <span className="text-muted-foreground text-lg">/урок</span>
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Clock size={28} className="text-primary flex-shrink-0 mt-1" weight="fill" />
                      <span className="text-lg">50-55 минут личного внимания</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkle size={28} className="text-accent flex-shrink-0 mt-1" weight="fill" />
                      <span className="font-bold text-accent text-lg">Первое занятие 20-25 минут БЕСПЛАТНО!</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={28} className="text-secondary flex-shrink-0 mt-1" weight="fill" />
                      <span className="text-lg">Программа адаптирована под ваши цели</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-8 shadow-2xl border-4 border-secondary relative overflow-hidden bg-gradient-to-br from-white via-secondary/5 to-primary/10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full -mr-20 -mt-20 blur-2xl animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                <CardContent className="p-0 relative z-10">
                  <Badge className="mb-4 bg-gradient-to-r from-secondary to-primary text-white shadow-lg">
                    Выгодное предложение
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">Парные занятия</h3>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-6xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">1400₽</span>
                      <span className="text-muted-foreground text-lg">/урок</span>
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Clock size={28} className="text-secondary flex-shrink-0 mt-1" weight="fill" />
                      <span className="text-lg">60-65 минут в паре с другом</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Chats size={28} className="text-primary flex-shrink-0 mt-1" weight="fill" />
                      <span className="text-lg">Больше практики общения</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={28} className="text-accent flex-shrink-0 mt-1" weight="fill" />
                      <span className="text-lg">Экономия + весёлая атмосфера</span>
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
          <div className="bg-gradient-to-r from-primary via-accent to-secondary p-2 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/40 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/30 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
            </div>
            <div className="bg-card rounded-[22px] p-8 md:p-12 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Готов начать? 🚀
              </h2>
              <p className="text-center text-muted-foreground text-lg mb-12">
                Свяжись со мной удобным способом и запишись на бесплатный пробный урок!
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
                <motion.div whileHover={{ y: -5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-accent/5 to-white border-2 border-accent/20">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Phone size={32} className="text-white" weight="fill" />
                      </div>
                      <h3 className="font-bold mb-2 text-lg">Телефон</h3>
                      <a href="tel:+79502274443" className="text-primary hover:text-accent transition-colors text-lg font-medium">
                        +7 (950) 227-44-43
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ y: -5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-secondary/5 to-white border-2 border-secondary/20">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <EnvelopeSimple size={32} className="text-white" weight="fill" />
                      </div>
                      <h3 className="font-bold mb-2 text-lg">Email</h3>
                      <a href="mailto:varvara.ishenko@gmail.com" className="text-primary hover:text-accent transition-colors break-all text-sm font-medium">
                        varvara.ishenko@gmail.com
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ y: -5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-primary/5 to-white border-2 border-primary/20">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <MapPin size={32} className="text-white" weight="fill" />
                      </div>
                      <h3 className="font-bold mb-2 text-lg">Локация</h3>
                      <p className="text-muted-foreground font-medium">
                        Санкт-Петербург<br />
                        (онлайн уроки)
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-white text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all font-bold relative overflow-hidden group"
                    asChild
                  >
                    <a href="https://wa.me/79502274443" target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Sparkle className="mr-3 relative z-10" weight="fill" size={28} />
                      <span className="relative z-10">Написать в WhatsApp</span>
                    </a>
                  </Button>
                </motion.div>
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