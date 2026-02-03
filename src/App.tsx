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
    <div className="min-h-screen bg-gradient-to-br from-[oklch(0.99_0.01_45)] via-[oklch(0.98_0.02_35)] to-[oklch(0.96_0.025_40)]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[oklch(0.85_0.12_35)] rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[oklch(0.88_0.08_40)] rounded-full blur-3xl" />
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
              <Badge className="text-sm md:text-base px-5 py-2 bg-mint text-mint-foreground hover:bg-mint/90">
                <Sparkle className="inline mr-2" weight="fill" />
                10 лет преподавания
              </Badge>
              <Badge className="text-sm md:text-base px-5 py-2 bg-mint text-mint-foreground hover:bg-mint/90">
                <Star className="mr-2" weight="fill" />
                C1 English
              </Badge>
              <Badge className="text-sm md:text-base px-5 py-2 bg-mint text-mint-foreground hover:bg-mint/90">
                <Globe className="mr-2" weight="fill" />
                Международный опыт
              </Badge>
              <Badge className="text-sm md:text-base px-5 py-2 bg-mint text-mint-foreground hover:bg-mint/90">
                <Heart className="mr-2" weight="fill" />
                Ученики 18+
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
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
              className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto text-muted-foreground"
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
                className="text-lg md:text-xl px-10 py-6 md:px-12 md:py-7 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 font-bold bg-primary hover:bg-primary/90"
                onClick={scrollToContact}
              >
                <Sparkle className="mr-3" weight="fill" size={24} />
                Записаться на бесплатный пробный урок
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Немного обо мне 😊
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Card className="flex-1 p-8 md:p-10 shadow-lg border-2 border-primary/10 hover:shadow-xl transition-shadow">
              <CardContent className="space-y-4 text-lg leading-relaxed p-0">
                <p>
                  Работаю преподавателем английского уже <span className="font-bold text-primary">10 лет</span>, и если вернуться к началу карьеры, то сейчас я уже лучшая версия себя! 🎉
                </p>
                <p>
                  Мой текущий уровень — <span className="font-bold text-primary">C1</span>, но продолжаю заниматься сама и совершенствоваться. Учиться никогда не поздно! 📚
                </p>
                <p>
                  У меня высшее лингвистическое образование и обучение в аспирантуре, что было не так-то просто 😅
                </p>
                <p>
                  Есть международный опыт работы в <span className="font-semibold text-accent">Китае в детском саду</span>, также сданный международный экзамен и небольшая стажировка в <span className="font-semibold text-accent">Шотландии</span> 🌍
                </p>
                <p className="text-xl font-semibold pt-4 text-accent">
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
                <div className="absolute -inset-2 bg-gradient-to-br from-primary via-accent to-primary rounded-3xl blur-xl opacity-30" />
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
              <Card className="h-full p-6 shadow-md hover:shadow-xl transition-all border-2 border-primary/20">
                <CardContent className="p-0 space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <GraduationCap size={32} className="text-primary" weight="fill" />
                  </div>
                  <h3 className="text-xl font-bold">Образование</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Высшее лингвистическое образование СПбГПУ, обучение в аспирантуре. Факультет Иностранных языков.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-6 shadow-md hover:shadow-xl transition-all border-2 border-primary/20">
                <CardContent className="p-0 space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Globe size={32} className="text-primary" weight="fill" />
                  </div>
                  <h3 className="text-xl font-bold">Международный опыт</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Работа в детском саду в Китае, стажировка в Шотландии, сданный международный экзамен.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-6 shadow-md hover:shadow-xl transition-all border-2 border-accent/20">
                <CardContent className="p-0 space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
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
            <Card className="p-8 md:p-10 shadow-lg border-2 border-primary/10">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Student size={36} className="text-primary" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-primary">Беру любой уровень</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Можно прийти <span className="font-semibold text-foreground">"с нуля"</span>, можно с базой или после долгого перерыва — подстроимся и спокойно разгонимся.
                    </p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Chats size={36} className="text-primary" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-primary">Живые и интерактивные уроки</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Много общения, понятные объяснения и практика, которая сразу закрепляет материал. Использую качественные материалы платформы и добавляю свои задания под вашу цель.
                    </p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Sparkle size={36} className="text-accent" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-accent">Современные материалы</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Иногда подключаю короткие видео и мемы по теме — не ради "развлечь", а чтобы новые слова и правила <span className="font-semibold text-foreground">запоминались быстрее и без ощущения зубрёжки</span>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full p-6 shadow-md hover:shadow-xl transition-all border-2 border-primary/20">
                  <CardContent className="p-0 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Chats size={32} className="text-primary" weight="fill" />
                    </div>
                    <h3 className="text-xl font-bold">Разговорный английский</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Для тех, кто хочет уверенно общаться и преодолеть языковой барьер
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full p-6 shadow-md hover:shadow-xl transition-all border-2 border-primary/20">
                  <CardContent className="p-0 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <GraduationCap size={32} className="text-primary" weight="fill" />
                    </div>
                    <h3 className="text-xl font-bold">Грамматика "по полочкам"</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Систематизируем знания и разбираем сложные темы понятным языком
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full p-6 shadow-md hover:shadow-xl transition-all border-2 border-accent/20">
                  <CardContent className="p-0 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Globe size={32} className="text-accent" weight="fill" />
                    </div>
                    <h3 className="text-xl font-bold">Для работы и путешествий</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Практический английский под конкретные цели и ситуации
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <Card className="p-8 shadow-lg border-2 border-primary/20">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <CheckCircle size={36} className="flex-shrink-0 mt-1 text-primary" weight="fill" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Индивидуальный подход</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      На старте уточняем <span className="font-semibold text-foreground">цель и комфортный темп</span>, а дальше идём по плану и регулярно отмечаем прогресс.
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
              <Card className="h-full p-6 shadow-md hover:shadow-xl transition-all border-2 border-primary/20">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      А
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Анастасия</h3>
                      <p className="text-sm text-muted-foreground">Студентка, 19 лет</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" size={20} className="text-[oklch(0.88_0.15_70)]" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "Варвара помогла мне подготовиться к экзамену в университете. Её методика действительно работает! Теперь говорю по-английски гораздо увереннее. 🎓"
                  </p>
                  <Badge className="text-xs bg-primary text-primary-foreground">
                    Сдала экзамен на 5
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full p-6 shadow-md hover:shadow-xl transition-all border-2 border-primary/20">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      Д
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Дмитрий</h3>
                      <p className="text-sm text-muted-foreground">IT-специалист, 28 лет</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" size={20} className="text-[oklch(0.88_0.15_70)]" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "Занимаюсь с Варварой уже полгода. Весёлая, всегда позитивная, и главное — уроки проходят легко и интересно. С B1 дошёл до B2+! 🚀"
                  </p>
                  <Badge className="text-xs bg-primary text-primary-foreground">
                    Повысил уровень до B2+
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full p-6 shadow-md hover:shadow-xl transition-all border-2 border-accent/20">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      Е
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Елена</h3>
                      <p className="text-sm text-muted-foreground">Менеджер проектов, 32 года</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" size={20} className="text-[oklch(0.88_0.15_70)]" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "Начала заниматься после долгого перерыва — боялась, что всё забыла. Варвара помогла восстановить знания и выйти на новый уровень. Теперь спокойно общаюсь с иностранными коллегами! 💼"
                  </p>
                  <Badge className="text-xs bg-accent text-accent-foreground">
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
          <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-br from-[oklch(0.98_0.02_35)] to-[oklch(0.96_0.025_40)]">
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
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={24} className="text-primary" weight="fill" />
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
              <Card className="h-full p-8 shadow-lg border-2 border-primary hover:shadow-xl transition-all">
                <CardContent className="p-0">
                  <Badge className="mb-4 bg-primary text-primary-foreground">
                    Популярный выбор
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">Индивидуальные занятия</h3>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold text-primary">1800₽</span>
                      <span className="text-muted-foreground text-lg">/урок</span>
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Clock size={24} className="flex-shrink-0 mt-1 text-primary" weight="fill" />
                      <span className="text-lg">50-55 минут личного внимания</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkle size={24} className="flex-shrink-0 mt-1 text-primary" weight="fill" />
                      <span className="font-bold text-lg text-primary">Первое занятие 20-25 минут БЕСПЛАТНО!</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={24} className="flex-shrink-0 mt-1 text-primary" weight="fill" />
                      <span className="text-lg">Программа адаптирована под ваши цели</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-8 shadow-lg border-2 border-accent hover:shadow-xl transition-all">
                <CardContent className="p-0">
                  <Badge className="mb-4 bg-accent text-accent-foreground">
                    Выгодное предложение
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">Парные занятия</h3>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold text-accent">1400₽</span>
                      <span className="text-muted-foreground text-lg">/урок</span>
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Clock size={24} className="flex-shrink-0 mt-1 text-accent" weight="fill" />
                      <span className="text-lg">60-65 минут в паре с другом</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Chats size={24} className="flex-shrink-0 mt-1 text-accent" weight="fill" />
                      <span className="text-lg">Больше практики общения</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={24} className="flex-shrink-0 mt-1 text-accent" weight="fill" />
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
          <div className="rounded-3xl shadow-2xl p-2 bg-gradient-to-br from-primary via-accent to-primary">
            <div className="bg-card rounded-[22px] p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Готов начать? 🚀
              </h2>
              <p className="text-center text-muted-foreground text-lg mb-12">
                Свяжись со мной удобным способом и запишись на бесплатный пробный урок!
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
                <motion.div whileHover={{ y: -5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="p-6 text-center shadow-md hover:shadow-lg transition-all border-2 border-primary/20">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Phone size={32} className="text-primary" weight="fill" />
                      </div>
                      <h3 className="font-bold mb-2 text-lg">Телефон</h3>
                      <a href="tel:+79502274443" className="text-lg font-medium text-primary hover:opacity-80 transition-colors">
                        +7 (950) 227-44-43
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ y: -5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="p-6 text-center shadow-md hover:shadow-lg transition-all border-2 border-accent/20">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <EnvelopeSimple size={32} className="text-accent" weight="fill" />
                      </div>
                      <h3 className="font-bold mb-2 text-lg">Email</h3>
                      <a href="mailto:varvara.ishenko@gmail.com" className="break-all text-sm font-medium text-accent hover:opacity-80 transition-colors">
                        varvara.ishenko@gmail.com
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ y: -5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="p-6 text-center shadow-md hover:shadow-lg transition-all border-2 border-primary/20">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <MapPin size={32} className="text-primary" weight="fill" />
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
                    className="text-xl px-12 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all font-bold bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href="https://wa.me/79502274443" target="_blank" rel="noopener noreferrer">
                      <Sparkle className="mr-3" weight="fill" size={24} />
                      Написать в WhatsApp
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <footer className="py-12 bg-gradient-to-br from-[oklch(0.98_0.02_35)] to-[oklch(0.96_0.025_40)]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            © 2024 Варвара Ищенко. Преподаватель английского языка
          </p>
          <p className="text-sm text-muted-foreground">
            Сделано с <Heart className="inline" weight="fill" size={16} style={{ color: 'oklch(0.68 0.20 25)' }} /> для моих будущих учеников
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
