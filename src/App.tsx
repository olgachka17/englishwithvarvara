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
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.99_0.012_40)] via-[oklch(0.98_0.025_35)] to-[oklch(0.97_0.04_30)]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[oklch(0.75_0.18_15)] opacity-[0.08] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[oklch(0.88_0.08_15)] opacity-[0.10] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[oklch(0.95_0.05_45)] opacity-[0.15] rounded-full blur-3xl" />
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
              <Badge className="text-sm md:text-base px-6 py-2.5 bg-soft-pink text-soft-pink-foreground hover:bg-soft-pink/90 shadow-sm font-semibold border-0">
                <Sparkle className="inline mr-2" weight="fill" />
                10 лет преподавания
              </Badge>
              <Badge className="text-sm md:text-base px-6 py-2.5 bg-soft-pink text-soft-pink-foreground hover:bg-soft-pink/90 shadow-sm font-semibold border-0">
                <Star className="mr-2" weight="fill" />
                C1 English
              </Badge>
              <Badge className="text-sm md:text-base px-6 py-2.5 bg-soft-pink text-soft-pink-foreground hover:bg-soft-pink/90 shadow-sm font-semibold border-0">
                <Globe className="mr-2" weight="fill" />
                Международный опыт
              </Badge>
              <Badge className="text-sm md:text-base px-6 py-2.5 bg-soft-pink text-soft-pink-foreground hover:bg-soft-pink/90 shadow-sm font-semibold border-0">
                <Heart className="mr-2" weight="fill" />
                Ученики 18+
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-primary via-coral to-accent bg-clip-text text-transparent drop-shadow-sm">
                Английский для взрослых 18+:
              </span>
              <br />
              <span className="text-foreground">
                заговорите уверенно через несколько месяцев
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl mb-10 leading-relaxed max-w-4xl mx-auto text-foreground/70"
            >
              Я <span className="font-bold text-accent">Варвара</span>, преподаю английский 10 лет и помогаю взрослым говорить уверенно для работы, переезда и путешествий 💖
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button 
                size="lg" 
                className="text-base md:text-lg px-10 py-6 md:px-12 md:py-7 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 font-bold bg-coral text-white hover:bg-coral/90 border-0"
                onClick={scrollToContact}
              >
                <Sparkle className="mr-3" weight="fill" size={24} />
                Записаться на бесплатный пробный урок
              </Button>
              <p className="text-base text-foreground/60 mt-4 font-medium">
                20 минут знакомства и персональный план обучения
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Немного обо мне 😊
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <Card className="flex-1 p-8 md:p-10 shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-shadow">
              <CardContent className="space-y-4 text-base leading-relaxed p-0">
                <p>
                  Работаю преподавателем английского уже <span className="font-bold text-coral">10 лет</span>, и если вернуться к началу карьеры, то сейчас я уже лучшая версия себя! 🎉
                </p>
                <p>
                  Мой текущий уровень — <span className="font-bold text-coral">C1</span>, но продолжаю совершенствоваться. Учиться никогда не поздно! 📚
                </p>
                <p>
                  У меня высшее лингвистическое образование и обучение в аспирантуре, что было не так-то просто 😅
                </p>
                <p>
                  Есть международный опыт работы в <span className="font-semibold text-accent">Китае в детском саду</span>, также сданный международный экзамен и небольшая стажировка в <span className="font-semibold text-accent">Шотландии</span> 🌍
                </p>
                <p className="text-lg font-bold pt-4 text-accent">
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
                <div className="absolute -inset-3 bg-gradient-to-br from-[oklch(0.95_0.08_30)] via-[oklch(0.92_0.10_20)] to-[oklch(0.88_0.10_15)] rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity" />
                
                <motion.div
                  className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-br from-coral to-[oklch(0.75_0.18_15)] shadow-lg flex items-center justify-center z-10"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ 
                    duration: 4.5, 
                    repeat: Infinity, 
                    ease: [0.45, 0.05, 0.55, 0.95],
                    repeatType: "reverse"
                  }}
                >
                  <Sparkle size={36} weight="duotone" className="text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-[oklch(0.88_0.08_15)] to-[oklch(0.75_0.18_15)] shadow-md flex items-center justify-center z-10"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: [0.42, 0, 0.58, 1],
                    delay: 0.8,
                    repeatType: "reverse"
                  }}
                >
                  <Heart size={28} weight="duotone" className="text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute top-8 -left-10 w-14 h-14 rounded-full bg-gradient-to-br from-[oklch(0.82_0.16_18)] to-[oklch(0.78_0.18_12)] shadow-md flex items-center justify-center z-10"
                  animate={{ 
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: [0.43, 0.13, 0.23, 0.96],
                    repeatType: "reverse"
                  }}
                >
                  <Star size={24} weight="duotone" className="text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -top-4 left-12 w-12 h-12 rounded-full bg-gradient-to-br from-[oklch(0.92_0.06_35)] to-[oklch(0.85_0.12_25)] shadow-sm flex items-center justify-center z-10"
                  animate={{ 
                    x: [0, 6, -6, 0],
                    y: [0, -6, 6, 0]
                  }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity, 
                    ease: [0.65, 0, 0.35, 1],
                    delay: 1.5,
                    repeatType: "reverse"
                  }}
                >
                  <GraduationCap size={22} weight="duotone" className="text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-12 -right-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[oklch(0.83_0.16_20)] to-[oklch(0.80_0.14_15)] shadow-md flex items-center justify-center z-10"
                  animate={{ 
                    rotate: [0, -6, 6, 0]
                  }}
                  transition={{ 
                    duration: 5.5, 
                    repeat: Infinity, 
                    ease: [0.37, 0, 0.63, 1],
                    delay: 1.2,
                    repeatType: "reverse"
                  }}
                >
                  <ChatCircleDots size={28} weight="duotone" className="text-white" />
                </motion.div>
                
                <div className="relative p-2.5 bg-gradient-to-br from-coral via-[oklch(0.82_0.16_18)] to-[oklch(0.88_0.08_15)] rounded-full shadow-2xl">
                  <div className="p-2 bg-white rounded-full">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces" 
                      alt="Варвара Ищенко" 
                      className="w-full h-full object-cover rounded-full aspect-square shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Квалификация и опыт 🎓
          </h2>
          <p className="text-center text-foreground/60 text-lg mb-10">
            Профессиональное образование и международная практика
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-6 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral to-[oklch(0.75_0.18_15)] flex items-center justify-center mb-4 shadow-lg">
                    <GraduationCap size={32} className="text-white" weight="fill" />
                  </div>
                  <h3 className="text-xl font-bold">Образование</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Высшее лингвистическое образование СПбГПУ, обучение в аспирантуре. Факультет Иностранных языков.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-6 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[oklch(0.75_0.18_15)] to-[oklch(0.88_0.08_15)] flex items-center justify-center mb-4 shadow-lg">
                    <Globe size={32} className="text-white" weight="fill" />
                  </div>
                  <h3 className="text-xl font-bold">Международный опыт</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Работа в детском саду в Китае, стажировка в Шотландии, сданный международный экзамен.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-6 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[oklch(0.88_0.08_15)] to-[oklch(0.72_0.20_25)] flex items-center justify-center mb-4 shadow-lg">
                    <Student size={32} className="text-white" weight="fill" />
                  </div>
                  <h3 className="text-xl font-bold">Практика</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
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
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Дипломы и сертификаты 📜
          </h2>
          <p className="text-center text-foreground/60 text-lg mb-10">
            Подтверждённая квалификация и достижения
          </p>
          <DocumentCarousel />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Моя методика 🎯
          </h2>
          <p className="text-center text-foreground/60 text-lg mb-10 max-w-4xl mx-auto">
            Преподаю английский для взрослых 18+ — для работы, поездок, учёбы или просто чтобы наконец-то начать говорить без ступора
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="p-8 md:p-10 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0 space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-coral to-[oklch(0.75_0.18_15)] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Student size={32} className="text-white" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-coral">Беру любой уровень</h3>
                    <p className="text-lg leading-relaxed text-foreground/70">
                      Можно прийти <span className="font-bold text-foreground">"с нуля"</span>, можно с базой или после долгого перерыва — подстроимся и спокойно разгонимся.
                    </p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[oklch(0.75_0.18_15)] to-[oklch(0.88_0.08_15)] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Chats size={32} className="text-white" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-accent">Живые уроки</h3>
                    <p className="text-lg leading-relaxed text-foreground/70">
                      Много общения, понятные объяснения и практика, которая сразу закрепляет материал. Использую качественные материалы платформы и добавляю свои задания под вашу цель.
                    </p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[oklch(0.88_0.08_15)] to-[oklch(0.72_0.20_25)] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Sparkle size={32} className="text-white" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-accent">Современные материалы</h3>
                    <p className="text-lg leading-relaxed text-foreground/70">
                      Иногда подключаю короткие видео и мемы по теме — не ради "развлечь", а чтобы новые слова и правила <span className="font-bold text-foreground">запоминались быстрее и без ощущения зубрёжки</span>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full p-6 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-coral to-[oklch(0.75_0.18_15)] flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Chats size={28} className="text-white" weight="fill" />
                    </div>
                    <h3 className="text-lg font-bold">Разговорный английский</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">
                      Для тех, кто хочет уверенно общаться и преодолеть языковой барьер
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full p-6 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[oklch(0.75_0.18_15)] to-[oklch(0.88_0.08_15)] flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <GraduationCap size={28} className="text-white" weight="fill" />
                    </div>
                    <h3 className="text-lg font-bold">Грамматика "по полочкам"</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">
                      Систематизируем знания и разбираем сложные темы понятным языком
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full p-6 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[oklch(0.88_0.08_15)] to-[oklch(0.72_0.20_25)] flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Globe size={28} className="text-white" weight="fill" />
                    </div>
                    <h3 className="text-lg font-bold">Для работы и путешествий</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">
                      Практический английский под конкретные цели и ситуации
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-start gap-5">
                  <CheckCircle size={36} className="flex-shrink-0 mt-1 text-coral" weight="fill" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Индивидуальный подход</h3>
                    <p className="text-lg leading-relaxed text-foreground/70">
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
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Что говорят мои ученики 💬
          </h2>
          <p className="text-center text-foreground/60 text-lg mb-10">
            Реальные отзывы и истории успеха
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full p-6 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-coral to-[oklch(0.75_0.18_15)] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      А
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Анастасия</h3>
                      <p className="text-xs text-foreground/60">Студентка, 19 лет</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" size={18} className="text-[oklch(0.88_0.12_25)]" />
                    ))}
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-4 text-sm">
                    "Варвара помогла мне подготовиться к экзамену в университете. Её методика действительно работает! Теперь говорю по-английски гораздо увереннее. 🎓"
                  </p>
                  <Badge className="text-xs bg-coral text-white font-semibold border-0 shadow-sm">
                    Сдала экзамен на 5
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full p-6 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[oklch(0.75_0.18_15)] to-[oklch(0.88_0.08_15)] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      Д
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Дмитрий</h3>
                      <p className="text-xs text-foreground/60">IT-специалист, 28 лет</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" size={18} className="text-[oklch(0.88_0.12_25)]" />
                    ))}
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-4 text-sm">
                    "Занимаюсь с Варварой уже полгода. Весёлая, всегда позитивная, и главное — уроки проходят легко и интересно. С B1 дошёл до B2+! 🚀"
                  </p>
                  <Badge className="text-xs bg-accent text-white font-semibold border-0 shadow-sm">
                    Повысил уровень до B2+
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full p-6 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[oklch(0.88_0.08_15)] to-[oklch(0.72_0.20_25)] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      Е
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Елена</h3>
                      <p className="text-xs text-foreground/60">Менеджер проектов, 32 года</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" size={18} className="text-[oklch(0.88_0.12_25)]" />
                    ))}
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-4 text-sm">
                    "Начала после долгого перерыва — боялась, что всё забыла. Варвара помогла восстановить знания и выйти на новый уровень. Теперь спокойно общаюсь с иностранными коллегами! 💼"
                  </p>
                  <Badge className="text-xs bg-soft-pink text-white font-semibold border-0 shadow-sm">
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
          className="mb-12"
        >
          <div className="rounded-[3rem] p-2 bg-gradient-to-br from-peach via-soft-pink to-accent/20">
            <div className="rounded-[2.5rem] p-8 md:p-12 bg-white/95 backdrop-blur-sm">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
                Платформы и специализация 💻
              </h2>
              <p className="text-center text-foreground/60 text-lg mb-10">
                Современные инструменты и проверенные подходы
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 shadow-lg border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-coral to-[oklch(0.75_0.18_15)] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <ChatCircleDots size={24} className="text-white" weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Платформы</h3>
                        <p className="text-foreground/70 text-sm">Работаю на Zoom, Progress Me, Kami — выбираем то, что удобно!</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 shadow-lg border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[oklch(0.75_0.18_15)] to-[oklch(0.88_0.08_15)] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <CheckCircle size={24} className="text-white" weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Специализация</h3>
                        <p className="text-foreground/70 text-sm">Подготовка к школьным, университетским экзаменам, ОГЭ. Акцент на говорении.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 shadow-lg border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[oklch(0.88_0.08_15)] to-[oklch(0.72_0.20_25)] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <Student size={24} className="text-white" weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Ученики</h3>
                        <p className="text-foreground/70 text-sm">Работаю со взрослыми 18+</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 shadow-lg border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-coral to-[oklch(0.75_0.18_15)] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <Heart size={24} className="text-white" weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Мой принцип</h3>
                        <p className="text-foreground/70 text-sm">Начинаем с весёлого повторения пройденного материала и им же заканчиваем! 😊</p>
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
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Стоимость занятий 💰
          </h2>
          <p className="text-center text-foreground/60 text-lg mb-10">
            Прозрачные цены и бесплатный пробный урок
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-8 shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-coral to-[oklch(0.75_0.18_15)] opacity-10 rounded-full blur-3xl" />
                <CardContent className="p-0 relative">
                  <Badge className="mb-4 bg-coral text-white font-bold text-xs border-0 shadow-md">
                    Популярный выбор
                  </Badge>
                  <h3 className="text-2xl font-bold mb-5">Индивидуальные занятия</h3>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-coral to-accent bg-clip-text text-transparent">1800₽</span>
                      <span className="text-foreground/60 text-lg font-semibold">/урок</span>
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Clock size={24} className="flex-shrink-0 mt-1 text-coral" weight="fill" />
                      <span className="text-base font-medium">50-55 минут личного внимания</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkle size={24} className="flex-shrink-0 mt-1 text-coral" weight="fill" />
                      <span className="font-bold text-base text-coral">Первое занятие 20-25 минут БЕСПЛАТНО!</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={24} className="flex-shrink-0 mt-1 text-coral" weight="fill" />
                      <span className="text-base font-medium">Программа под ваши цели</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full p-8 shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[oklch(0.88_0.08_15)] to-[oklch(0.75_0.18_15)] opacity-10 rounded-full blur-3xl" />
                <CardContent className="p-0 relative">
                  <Badge className="mb-4 bg-soft-pink text-white font-bold text-xs border-0 shadow-md">
                    Выгодное предложение
                  </Badge>
                  <h3 className="text-2xl font-bold mb-5">Парные занятия</h3>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-[oklch(0.88_0.08_15)] to-accent bg-clip-text text-transparent">1400₽</span>
                      <span className="text-foreground/60 text-lg font-semibold">/урок</span>
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Clock size={24} className="flex-shrink-0 mt-1 text-accent" weight="fill" />
                      <span className="text-base font-medium">60-65 минут в паре с другом</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Chats size={24} className="flex-shrink-0 mt-1 text-accent" weight="fill" />
                      <span className="text-base font-medium">Больше практики общения</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={24} className="flex-shrink-0 mt-1 text-accent" weight="fill" />
                      <span className="text-base font-medium">Экономия + весёлая атмосфера</span>
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
          className="mb-12"
        >
          <div className="rounded-[3rem] shadow-2xl p-2 bg-gradient-to-br from-coral via-accent to-soft-pink">
            <div className="bg-white rounded-[2.8rem] p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
                Готов начать? 🚀
              </h2>
              <p className="text-center text-foreground/60 text-lg mb-10">
                Свяжись со мной удобным способом и запишись на бесплатный пробный урок!
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
                <motion.div whileHover={{ y: -5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all border-0 bg-gradient-to-br from-white to-peach/20">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-coral to-[oklch(0.75_0.18_15)] flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Phone size={28} className="text-white" weight="fill" />
                      </div>
                      <h3 className="font-bold mb-2 text-lg">Телефон</h3>
                      <a href="tel:+79502274443" className="text-base font-semibold text-coral hover:opacity-80 transition-colors">
                        +7 (950) 227-44-43
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ y: -5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all border-0 bg-gradient-to-br from-white to-soft-pink/20">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[oklch(0.75_0.18_15)] to-[oklch(0.88_0.08_15)] flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <EnvelopeSimple size={28} className="text-white" weight="fill" />
                      </div>
                      <h3 className="font-bold mb-2 text-lg">Email</h3>
                      <a href="mailto:varvara.ishenko@gmail.com" className="break-all text-xs font-semibold text-accent hover:opacity-80 transition-colors">
                        varvara.ishenko@gmail.com
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ y: -5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all border-0 bg-gradient-to-br from-white to-peach/20">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[oklch(0.88_0.08_15)] to-[oklch(0.72_0.20_25)] flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <MapPin size={28} className="text-white" weight="fill" />
                      </div>
                      <h3 className="font-bold mb-2 text-lg">Локация</h3>
                      <p className="text-foreground/70 font-semibold text-sm">
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
                    className="text-lg px-12 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all font-bold bg-coral text-white hover:bg-coral/90 border-0"
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

      <footer className="relative py-10 bg-gradient-to-br from-peach/30 via-soft-pink/30 to-accent/15">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/70 mb-3 text-base font-medium">
            © 2024 Варвара Ищенко. Преподаватель английского языка
          </p>
          <p className="text-sm text-foreground/60">
            Сделано с <Heart className="inline" weight="fill" size={16} style={{ color: 'oklch(0.70 0.22 20)' }} /> для моих будущих учеников
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
