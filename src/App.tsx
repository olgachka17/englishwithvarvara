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
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.99_0.008_60)] via-[oklch(0.98_0.02_50)] to-[oklch(0.96_0.03_340)]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[oklch(0.75_0.18_345)] opacity-[0.08] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[oklch(0.88_0.08_290)] opacity-[0.12] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[oklch(0.94_0.06_50)] opacity-[0.15] rounded-full blur-3xl" />
      </div>
      
      <div className="relative overflow-hidden">

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
              className="flex flex-wrap gap-3 mb-8 justify-center"
            >
              <Badge className="text-sm md:text-base px-6 py-2.5 bg-lavender text-lavender-foreground hover:bg-lavender/90 shadow-sm font-semibold border-0">
                <Sparkle className="inline mr-2" weight="fill" />
                10 лет преподавания
              </Badge>
              <Badge className="text-sm md:text-base px-6 py-2.5 bg-lavender text-lavender-foreground hover:bg-lavender/90 shadow-sm font-semibold border-0">
                <Star className="mr-2" weight="fill" />
                C1 English
              </Badge>
              <Badge className="text-sm md:text-base px-6 py-2.5 bg-lavender text-lavender-foreground hover:bg-lavender/90 shadow-sm font-semibold border-0">
                <Globe className="mr-2" weight="fill" />
                Международный опыт
              </Badge>
              <Badge className="text-sm md:text-base px-6 py-2.5 bg-lavender text-lavender-foreground hover:bg-lavender/90 shadow-sm font-semibold border-0">
                <Heart className="mr-2" weight="fill" />
                Ученики 18+
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-primary via-coral to-accent bg-clip-text text-transparent drop-shadow-sm">
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
              className="text-xl md:text-2xl mb-10 leading-relaxed max-w-4xl mx-auto text-foreground/70"
            >
              Я <span className="font-bold text-accent">Варвара</span>, преподаю английский 10 лет и помогаю взрослым заговорить уверенно для работы, переезда и путешествий 💖
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button 
                size="lg" 
                className="text-lg md:text-xl px-12 py-7 md:px-14 md:py-8 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 font-bold bg-coral text-white hover:bg-coral/90 border-0"
                onClick={scrollToContact}
              >
                <Sparkle className="mr-3" weight="fill" size={28} />
                Записаться на бесплатный пробный урок
              </Button>
              <p className="text-base text-foreground/60 mt-4 font-medium">
                20 минут знакомства и персональный план обучения
              </p>
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
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Немного обо мне 😊
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <Card className="flex-1 p-10 md:p-12 shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-shadow">
              <CardContent className="space-y-5 text-lg leading-relaxed p-0">
                <p>
                  Работаю преподавателем английского уже <span className="font-bold text-coral">10 лет</span>, и если вернуться к началу карьеры, то сейчас я уже лучшая версия себя! 🎉
                </p>
                <p>
                  Мой текущий уровень — <span className="font-bold text-coral">C1</span>, но продолжаю заниматься сама и совершенствоваться. Учиться никогда не поздно! 📚
                </p>
                <p>
                  У меня высшее лингвистическое образование и обучение в аспирантуре, что было не так-то просто 😅
                </p>
                <p>
                  Есть международный опыт работы в <span className="font-semibold text-accent">Китае в детском саду</span>, также сданный международный экзамен и небольшая стажировка в <span className="font-semibold text-accent">Шотландии</span> 🌍
                </p>
                <p className="text-xl font-bold pt-6 text-accent">
                  Ещё говорят, что я весёлая! 😂
                </p>
              </CardContent>
            </Card>
            <motion.div 
              className="w-full md:w-72 flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-br from-coral via-accent to-primary rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=350&fit=crop&crop=faces" 
                  alt="Варвара Ищенко" 
                  className="relative rounded-[2rem] shadow-2xl w-full h-auto object-cover border-4 border-white"
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
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Квалификация и опыт 🎓
          </h2>
          <p className="text-center text-foreground/60 text-xl mb-16">
            Профессиональное образование и международная практика
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-8 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-coral to-accent/80 flex items-center justify-center mb-6 shadow-lg">
                    <GraduationCap size={36} className="text-white" weight="fill" />
                  </div>
                  <h3 className="text-2xl font-bold">Образование</h3>
                  <p className="text-foreground/70 leading-relaxed text-base">
                    Высшее лингвистическое образование СПбГПУ, обучение в аспирантуре. Факультет Иностранных языков.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-8 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary/80 flex items-center justify-center mb-6 shadow-lg">
                    <Globe size={36} className="text-white" weight="fill" />
                  </div>
                  <h3 className="text-2xl font-bold">Международный опыт</h3>
                  <p className="text-foreground/70 leading-relaxed text-base">
                    Работа в детском саду в Китае, стажировка в Шотландии, сданный международный экзамен.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-8 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lavender to-accent/60 flex items-center justify-center mb-6 shadow-lg">
                    <Student size={36} className="text-white" weight="fill" />
                  </div>
                  <h3 className="text-2xl font-bold">Практика</h3>
                  <p className="text-foreground/70 leading-relaxed text-base">
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
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Дипломы и сертификаты 📜
          </h2>
          <p className="text-center text-foreground/60 text-xl mb-16">
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
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Моя методика 🎯
          </h2>
          <p className="text-center text-foreground/60 text-xl mb-16 max-w-4xl mx-auto">
            Преподаю английский для взрослых 18+ — для работы, поездок, учёбы или просто чтобы наконец-то начать говорить без ступора
          </p>

          <div className="max-w-5xl mx-auto space-y-10">
            <Card className="p-10 md:p-14 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0 space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-coral to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Student size={40} className="text-white" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-coral">Беру любой уровень</h3>
                    <p className="text-xl leading-relaxed text-foreground/70">
                      Можно прийти <span className="font-bold text-foreground">"с нуля"</span>, можно с базой или после долгого перерыва — подстроимся и спокойно разгонимся.
                    </p>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Chats size={40} className="text-white" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-accent">Живые и интерактивные уроки</h3>
                    <p className="text-xl leading-relaxed text-foreground/70">
                      Много общения, понятные объяснения и практика, которая сразу закрепляет материал. Использую качественные материалы платформы и добавляю свои задания под вашу цель.
                    </p>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-lavender to-accent/60 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Sparkle size={40} className="text-white" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-lavender to-accent bg-clip-text text-transparent">Современные материалы</h3>
                    <p className="text-xl leading-relaxed text-foreground/70">
                      Иногда подключаю короткие видео и мемы по теме — не ради "развлечь", а чтобы новые слова и правила <span className="font-bold text-foreground">запоминались быстрее и без ощущения зубрёжки</span>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full p-8 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0 text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-coral to-accent flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Chats size={36} className="text-white" weight="fill" />
                    </div>
                    <h3 className="text-2xl font-bold">Разговорный английский</h3>
                    <p className="text-foreground/70 leading-relaxed text-base">
                      Для тех, кто хочет уверенно общаться и преодолеть языковой барьер
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full p-8 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0 text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <GraduationCap size={36} className="text-white" weight="fill" />
                    </div>
                    <h3 className="text-2xl font-bold">Грамматика "по полочкам"</h3>
                    <p className="text-foreground/70 leading-relaxed text-base">
                      Систематизируем знания и разбираем сложные темы понятным языком
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full p-8 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0 text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lavender to-accent/60 flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Globe size={36} className="text-white" weight="fill" />
                    </div>
                    <h3 className="text-2xl font-bold">Для работы и путешествий</h3>
                    <p className="text-foreground/70 leading-relaxed text-base">
                      Практический английский под конкретные цели и ситуации
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <Card className="p-10 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-start gap-6">
                  <CheckCircle size={44} className="flex-shrink-0 mt-1 text-coral" weight="fill" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Индивидуальный подход</h3>
                    <p className="text-xl leading-relaxed text-foreground/70">
                      На старте уточняем <span className="font-bold text-foreground">цель и комфортный темп</span>, а дальше идём по плану и регулярно отмечаем прогресс.
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
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Что говорят мои ученики 💬
          </h2>
          <p className="text-center text-foreground/60 text-xl mb-16">
            Реальные отзывы и истории успеха
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full p-8 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-coral to-accent flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      А
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Анастасия</h3>
                      <p className="text-sm text-foreground/60">Студентка, 19 лет</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" size={22} className="text-[oklch(0.88_0.15_50)]" />
                    ))}
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-6 text-base">
                    "Варвара помогла мне подготовиться к экзамену в университете. Её методика действительно работает! Теперь говорю по-английски гораздо увереннее. 🎓"
                  </p>
                  <Badge className="text-sm bg-coral text-white font-semibold border-0 shadow-sm">
                    Сдала экзамен на 5
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full p-8 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      Д
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Дмитрий</h3>
                      <p className="text-sm text-foreground/60">IT-специалист, 28 лет</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" size={22} className="text-[oklch(0.88_0.15_50)]" />
                    ))}
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-6 text-base">
                    "Занимаюсь с Варварой уже полгода. Весёлая, всегда позитивная, и главное — уроки проходят легко и интересно. С B1 дошёл до B2+! 🚀"
                  </p>
                  <Badge className="text-sm bg-accent text-white font-semibold border-0 shadow-sm">
                    Повысил уровень до B2+
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full p-8 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lavender to-accent flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      Е
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Елена</h3>
                      <p className="text-sm text-foreground/60">Менеджер проектов, 32 года</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" size={22} className="text-[oklch(0.88_0.15_50)]" />
                    ))}
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-6 text-base">
                    "Начала заниматься после долгого перерыва — боялась, что всё забыла. Варвара помогла восстановить знания и выйти на новый уровень. Теперь спокойно общаюсь с иностранными коллегами! 💼"
                  </p>
                  <Badge className="text-sm bg-lavender text-white font-semibold border-0 shadow-sm">
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
          <div className="rounded-[3rem] p-2 bg-gradient-to-br from-peach via-lavender to-accent/30">
            <div className="rounded-[2.5rem] p-10 md:p-16 bg-white/95 backdrop-blur-sm">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
                Платформы и специализация 💻
              </h2>
              <p className="text-center text-foreground/60 text-xl mb-16">
                Современные инструменты и проверенные подходы
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 shadow-lg border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-5 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-coral to-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <ChatCircleDots size={28} className="text-white" weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Платформы</h3>
                        <p className="text-foreground/70 text-base">Работаю на Zoom, Progress Me, Kami — выбираем то, что удобно!</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-8 shadow-lg border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-5 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <CheckCircle size={28} className="text-white" weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Специализация</h3>
                        <p className="text-foreground/70 text-base">Подготовка к школьным, университетским экзаменам, ОГЭ. Акцент на говорении.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-8 shadow-lg border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-5 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-lavender to-accent/60 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <Student size={28} className="text-white" weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Ученики</h3>
                        <p className="text-foreground/70 text-base">Работаю со взрослыми 18+</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-8 shadow-lg border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-5 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-coral to-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <Heart size={28} className="text-white" weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Мой принцип</h3>
                        <p className="text-foreground/70 text-base">Начинаем с весёлого повторения пройденного материала и им же заканчиваем! 😊</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Стоимость занятий 💰
          </h2>
          <p className="text-center text-foreground/60 text-xl mb-16">
            Прозрачные цены и бесплатный пробный урок
          </p>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-10 shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-coral to-accent opacity-10 rounded-full blur-3xl" />
                <CardContent className="p-0 relative">
                  <Badge className="mb-6 bg-coral text-white font-bold text-sm border-0 shadow-md">
                    Популярный выбор
                  </Badge>
                  <h3 className="text-3xl font-bold mb-6">Индивидуальные занятия</h3>
                  <div className="mb-8">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-6xl font-bold bg-gradient-to-r from-coral to-accent bg-clip-text text-transparent">1800₽</span>
                      <span className="text-foreground/60 text-xl font-semibold">/урок</span>
                    </div>
                  </div>
                  <Separator className="my-8" />
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <Clock size={28} className="flex-shrink-0 mt-1 text-coral" weight="fill" />
                      <span className="text-lg font-medium">50-55 минут личного внимания</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <Sparkle size={28} className="flex-shrink-0 mt-1 text-coral" weight="fill" />
                      <span className="font-bold text-lg text-coral">Первое занятие 20-25 минут БЕСПЛАТНО!</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle size={28} className="flex-shrink-0 mt-1 text-coral" weight="fill" />
                      <span className="text-lg font-medium">Программа адаптирована под ваши цели</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-10 shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lavender to-accent opacity-10 rounded-full blur-3xl" />
                <CardContent className="p-0 relative">
                  <Badge className="mb-6 bg-lavender text-white font-bold text-sm border-0 shadow-md">
                    Выгодное предложение
                  </Badge>
                  <h3 className="text-3xl font-bold mb-6">Парные занятия</h3>
                  <div className="mb-8">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-6xl font-bold bg-gradient-to-r from-lavender to-accent bg-clip-text text-transparent">1400₽</span>
                      <span className="text-foreground/60 text-xl font-semibold">/урок</span>
                    </div>
                  </div>
                  <Separator className="my-8" />
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <Clock size={28} className="flex-shrink-0 mt-1 text-accent" weight="fill" />
                      <span className="text-lg font-medium">60-65 минут в паре с другом</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <Chats size={28} className="flex-shrink-0 mt-1 text-accent" weight="fill" />
                      <span className="text-lg font-medium">Больше практики общения</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle size={28} className="flex-shrink-0 mt-1 text-accent" weight="fill" />
                      <span className="text-lg font-medium">Экономия + весёлая атмосфера</span>
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
          <div className="rounded-[3rem] shadow-2xl p-2 bg-gradient-to-br from-coral via-accent to-lavender">
            <div className="bg-white rounded-[2.8rem] p-10 md:p-16">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
                Готов начать? 🚀
              </h2>
              <p className="text-center text-foreground/60 text-xl mb-16">
                Свяжись со мной удобным способом и запишись на бесплатный пробный урок!
              </p>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                <motion.div whileHover={{ y: -5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="p-8 text-center shadow-lg hover:shadow-xl transition-all border-0 bg-gradient-to-br from-white to-peach/20">
                    <CardContent className="p-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-coral to-accent flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Phone size={36} className="text-white" weight="fill" />
                      </div>
                      <h3 className="font-bold mb-3 text-xl">Телефон</h3>
                      <a href="tel:+79502274443" className="text-lg font-semibold text-coral hover:opacity-80 transition-colors">
                        +7 (950) 227-44-43
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ y: -5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="p-8 text-center shadow-lg hover:shadow-xl transition-all border-0 bg-gradient-to-br from-white to-lavender/20">
                    <CardContent className="p-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <EnvelopeSimple size={36} className="text-white" weight="fill" />
                      </div>
                      <h3 className="font-bold mb-3 text-xl">Email</h3>
                      <a href="mailto:varvara.ishenko@gmail.com" className="break-all text-sm font-semibold text-accent hover:opacity-80 transition-colors">
                        varvara.ishenko@gmail.com
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ y: -5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="p-8 text-center shadow-lg hover:shadow-xl transition-all border-0 bg-gradient-to-br from-white to-peach/20">
                    <CardContent className="p-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lavender to-accent flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <MapPin size={36} className="text-white" weight="fill" />
                      </div>
                      <h3 className="font-bold mb-3 text-xl">Локация</h3>
                      <p className="text-foreground/70 font-semibold text-base">
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
                    className="text-xl px-14 py-8 rounded-full shadow-xl hover:shadow-2xl transition-all font-bold bg-coral text-white hover:bg-coral/90 border-0"
                    asChild
                  >
                    <a href="https://wa.me/79502274443" target="_blank" rel="noopener noreferrer">
                      <Sparkle className="mr-3" weight="fill" size={28} />
                      Написать в WhatsApp
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <footer className="relative py-16 bg-gradient-to-br from-peach/30 via-lavender/30 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/70 mb-4 text-lg font-medium">
            © 2024 Варвара Ищенко. Преподаватель английского языка
          </p>
          <p className="text-base text-foreground/60">
            Сделано с <Heart className="inline" weight="fill" size={18} style={{ color: 'oklch(0.72 0.19 20)' }} /> для моих будущих учеников
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
