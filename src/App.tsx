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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const scrollToContact = () => scrollToSection('contact')

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.98_0.02_85)] via-[oklch(0.96_0.08_340)] to-[oklch(0.95_0.10_30)]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[oklch(0.70_0.18_200)] opacity-[0.15] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[oklch(0.88_0.22_105)] opacity-[0.18] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[oklch(0.72_0.22_50)] opacity-[0.20] rounded-full blur-3xl" />
      </div>
      
      <div className="relative overflow-hidden">

        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex flex-wrap gap-2.5 mb-5 justify-center">
              <Badge className="text-sm md:text-base px-5 py-2 bg-sunny-yellow text-sunny-yellow-foreground hover:bg-sunny-yellow/90 shadow-md font-semibold border-0">
                <Sparkle className="inline mr-2" weight="fill" size={18} />
                10 лет преподавания
              </Badge>
              <Badge className="text-sm md:text-base px-5 py-2 bg-turquoise text-turquoise-foreground hover:bg-turquoise/90 shadow-md font-semibold border-0">
                <Star className="mr-2" weight="fill" size={18} />
                C1 English
              </Badge>
              <Badge className="text-sm md:text-base px-5 py-2 bg-orange text-orange-foreground hover:bg-orange/90 shadow-md font-semibold border-0">
                <Globe className="mr-2" weight="fill" size={18} />
                Международный опыт
              </Badge>
              <Badge className="text-sm md:text-base px-5 py-2 bg-bright-magenta text-bright-magenta-foreground hover:bg-bright-magenta/90 shadow-md font-semibold border-0">
                <Heart className="mr-2" weight="fill" size={18} />
                Ученики 18+
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              <span className="bg-gradient-to-r from-bright-magenta via-coral to-accent bg-clip-text text-transparent drop-shadow-sm">
                Английский для взрослых 18+:
              </span>
              <br />
              <span className="text-foreground">
                заговорите уверенно через несколько месяцев
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-6 leading-relaxed max-w-4xl mx-auto text-foreground/70">
              Я <span className="font-bold text-accent">Варвара</span>, преподаю английский 10 лет и помогаю взрослым говорить уверенно для работы, переезда и путешествий 💖
            </p>
            
            <div>
              <Button 
                size="lg" 
                className="text-base md:text-lg px-8 py-5 md:px-10 md:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 font-bold bg-coral text-white hover:bg-coral/90 border-0"
                onClick={scrollToContact}
              >
                <Sparkle className="mr-2.5" weight="fill" size={22} />
                Записаться на бесплатный пробный урок
              </Button>
              <p className="text-sm text-foreground/60 mt-2 font-medium">
                20 минут знакомства и персональный план обучения
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <section id="about" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Немного обо мне 😊
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Card className="flex-1 p-6 md:p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-shadow">
              <CardContent className="space-y-3.5 text-base leading-relaxed p-0">
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
                <p className="text-base font-bold pt-2 text-accent">
                  Ещё говорят, что я весёлая! 😂
                </p>
              </CardContent>
            </Card>
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-2.5 bg-gradient-to-br from-[oklch(0.95_0.08_30)] via-[oklch(0.92_0.10_20)] to-[oklch(0.88_0.10_15)] rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity" />
                
                <motion.div
                  className="absolute -top-6 -right-7 w-16 h-16 rounded-full bg-gradient-to-br from-bright-magenta to-soft-pink shadow-lg flex items-center justify-center z-10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    duration: 4.5, 
                    repeat: Infinity, 
                    ease: [0.45, 0.05, 0.55, 0.95],
                    repeatType: "reverse"
                  }}
                >
                  <Sparkle size={30} weight="duotone" className="text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-5 -left-5 w-14 h-14 rounded-full bg-gradient-to-br from-coral to-primary shadow-md flex items-center justify-center z-10"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: [0.42, 0, 0.58, 1],
                    delay: 0.8,
                    repeatType: "reverse"
                  }}
                >
                  <Heart size={24} weight="duotone" className="text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute top-6 -left-8 w-12 h-12 rounded-full bg-gradient-to-br from-sunny-yellow to-orange shadow-md flex items-center justify-center z-10"
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
                  <Star size={20} weight="duotone" className="text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -top-3 left-10 w-10 h-10 rounded-full bg-gradient-to-br from-turquoise to-lavender shadow-sm flex items-center justify-center z-10"
                  animate={{ 
                    x: [0, 5, -5, 0],
                    y: [0, -5, 5, 0]
                  }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity, 
                    ease: [0.65, 0, 0.35, 1],
                    delay: 1.5,
                    repeatType: "reverse"
                  }}
                >
                  <GraduationCap size={18} weight="duotone" className="text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-10 -right-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange to-sunny-yellow shadow-md flex items-center justify-center z-10"
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
                  <ChatCircleDots size={24} weight="duotone" className="text-white" />
                </motion.div>
                
                <div className="relative p-2 bg-gradient-to-br from-bright-magenta via-soft-pink to-orange rounded-full shadow-2xl">
                  <div className="p-1.5 bg-white rounded-full">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces" 
                      alt="Варвара Ищенко" 
                      className="w-full h-full object-cover rounded-full aspect-square shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="qualifications" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Квалификация и опыт 🎓
          </h2>
          <p className="text-center text-foreground/60 text-base mb-6">
            Профессиональное образование и международная практика
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="h-full p-5 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0 space-y-2.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange to-sunny-yellow flex items-center justify-center mb-3 shadow-lg">
                  <GraduationCap size={28} className="text-white" weight="fill" />
                </div>
                <h3 className="text-lg font-bold">Образование</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  Высшее лингвистическое образование СПбГПУ, обучение в аспирантуре. Факультет Иностранных языков.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full p-5 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0 space-y-2.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-turquoise to-lavender flex items-center justify-center mb-3 shadow-lg">
                  <Globe size={28} className="text-white" weight="fill" />
                </div>
                <h3 className="text-lg font-bold">Международный опыт</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  Работа в детском саду в Китае, стажировка в Шотландии, сданный международный экзамен.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full p-5 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0 space-y-2.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-bright-magenta to-soft-pink flex items-center justify-center mb-3 shadow-lg">
                  <Student size={28} className="text-white" weight="fill" />
                </div>
                <h3 className="text-lg font-bold">Практика</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  Преподаватель в СПбГПУ с 2019 года. Работа на различных специальностях, составление планов уроков.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="certificates" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Дипломы и сертификаты 📜
          </h2>
          <p className="text-center text-foreground/60 text-base mb-6">
            Подтверждённая квалификация и достижения
          </p>
          <DocumentCarousel />
        </section>

        <section id="methodology" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Моя методика 🎯
          </h2>
          <p className="text-center text-foreground/60 text-base mb-6 max-w-4xl mx-auto">
            Преподаю английский для взрослых 18+ — для работы, поездок, учёбы или просто чтобы наконец-то начать говорить без ступора
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="p-6 md:p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-turquoise to-lavender flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Student size={28} className="text-white" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2.5 text-turquoise">Беру любой уровень</h3>
                    <p className="text-base leading-relaxed text-foreground/70">
                      Можно прийти <span className="font-bold text-foreground">"с нуля"</span>, можно с базой или после долгого перерыва — подстроимся и спокойно разгонимся.
                    </p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-bright-magenta to-soft-pink flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Chats size={28} className="text-white" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2.5 text-bright-magenta">Живые уроки</h3>
                    <p className="text-base leading-relaxed text-foreground/70">
                      Много общения, понятные объяснения и практика, которая сразу закрепляет материал. Использую качественные материалы платформы и добавляю свои задания под вашу цель.
                    </p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-sunny-yellow to-orange flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Sparkle size={28} className="text-white" weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2.5 text-orange">Современные материалы</h3>
                    <p className="text-base leading-relaxed text-foreground/70">
                      Иногда подключаю короткие видео и мемы по теме — не ради "развлечь", а чтобы новые слова и правила <span className="font-bold text-foreground">запоминались быстрее и без ощущения зубрёжки</span>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-5">
              <Card className="h-full p-5 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0 text-center space-y-2.5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-bright-magenta to-soft-pink flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Chats size={26} className="text-white" weight="fill" />
                  </div>
                  <h3 className="text-base font-bold">Разговорный английский</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Для тех, кто хочет уверенно общаться и преодолеть языковой барьер
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full p-5 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0 text-center space-y-2.5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sunny-yellow to-orange flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <GraduationCap size={26} className="text-white" weight="fill" />
                  </div>
                  <h3 className="text-base font-bold">Грамматика "по полочкам"</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Систематизируем знания и разбираем сложные темы понятным языком
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full p-5 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0 text-center space-y-2.5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-turquoise to-lavender flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Globe size={26} className="text-white" weight="fill" />
                  </div>
                  <h3 className="text-base font-bold">Для работы и путешествий</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    Практический английский под конкретные цели и ситуации
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="p-6 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <CheckCircle size={32} className="flex-shrink-0 mt-1 text-turquoise" weight="fill" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">Индивидуальный подход</h3>
                    <p className="text-base leading-relaxed text-foreground/70">
                      На старте уточняем <span className="font-bold text-foreground">цель и комфортный темп</span>, а дальше идём по плану и регулярно отмечаем прогресс.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="testimonials" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Что говорят мои ученики 💬
          </h2>
          <p className="text-center text-foreground/60 text-base mb-6">
            Реальные отзывы и истории успеха
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            <Card className="h-full p-5 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-bright-magenta to-soft-pink flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    А
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Анастасия</h3>
                    <p className="text-xs text-foreground/60">Студентка, 19 лет</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} weight="fill" size={18} className="text-sunny-yellow" />
                  ))}
                </div>
                <p className="text-foreground/70 leading-relaxed mb-3 text-sm">
                  "Варвара помогла мне подготовиться к экзамену в университете. Её методика действительно работает! Теперь говорю по-английски гораздо увереннее. 🎓"
                </p>
                <Badge className="text-xs bg-bright-magenta text-white font-semibold border-0 shadow-sm">
                  Сдала экзамен на 5
                </Badge>
              </CardContent>
            </Card>

            <Card className="h-full p-5 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-turquoise to-lavender flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    Д
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Дмитрий</h3>
                    <p className="text-xs text-foreground/60">IT-специалист, 28 лет</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} weight="fill" size={18} className="text-sunny-yellow" />
                  ))}
                </div>
                <p className="text-foreground/70 leading-relaxed mb-3 text-sm">
                  "Занимаюсь с Варварой уже полгода. Весёлая, всегда позитивная, и главное — уроки проходят легко и интересно. С B1 дошёл до B2+! 🚀"
                </p>
                <Badge className="text-xs bg-turquoise text-white font-semibold border-0 shadow-sm">
                  Повысил уровень до B2+
                </Badge>
              </CardContent>
            </Card>

            <Card className="h-full p-5 shadow-lg hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange to-sunny-yellow flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    Е
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Елена</h3>
                    <p className="text-xs text-foreground/60">Менеджер проектов, 32 года</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} weight="fill" size={18} className="text-sunny-yellow" />
                  ))}
                </div>
                <p className="text-foreground/70 leading-relaxed mb-3 text-sm">
                  "Начала после долгого перерыва — боялась, что всё забыла. Варвара помогла восстановить знания и выйти на новый уровень. Теперь спокойно общаюсь с иностранными коллегами! 💼"
                </p>
                <Badge className="text-xs bg-orange text-white font-semibold border-0 shadow-sm">
                  Вернулась к английскому после 8 лет
                </Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="platforms" className="mb-16 scroll-mt-20">
          <div className="rounded-[2.5rem] p-1.5 bg-gradient-to-br from-sunny-yellow via-turquoise to-bright-magenta">
            <div className="rounded-[2.25rem] p-6 md:p-10 bg-white/95 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Платформы и специализация 💻
              </h2>
              <p className="text-center text-foreground/60 text-base mb-6">
                Современные инструменты и проверенные подходы
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                <Card className="p-5 shadow-lg border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-3.5 mb-2">
                      <div className="w-11 h-11 bg-gradient-to-br from-turquoise to-lavender rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <ChatCircleDots size={22} className="text-white" weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1.5">Платформы</h3>
                        <p className="text-foreground/70 text-sm">Работаю на Zoom, Progress Me, Kami — выбираем то, что удобно!</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-5 shadow-lg border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-3.5 mb-2">
                      <div className="w-11 h-11 bg-gradient-to-br from-sunny-yellow to-orange rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <CheckCircle size={22} className="text-white" weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1.5">Специализация</h3>
                        <p className="text-foreground/70 text-sm">Подготовка к школьным, университетским экзаменам, ОГЭ. Акцент на говорении.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-5 shadow-lg border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-3.5 mb-2">
                      <div className="w-11 h-11 bg-gradient-to-br from-bright-magenta to-soft-pink rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <Student size={22} className="text-white" weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1.5">Ученики</h3>
                        <p className="text-foreground/70 text-sm">Работаю со взрослыми 18+</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-5 shadow-lg border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-3.5 mb-2">
                      <div className="w-11 h-11 bg-gradient-to-br from-coral to-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <Heart size={22} className="text-white" weight="fill" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1.5">Мой принцип</h3>
                        <p className="text-foreground/70 text-sm">Начинаем с весёлого повторения пройденного материала и им же заканчиваем! 😊</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Стоимость занятий 💰
          </h2>
          <p className="text-center text-foreground/60 text-base mb-6">
            Прозрачные цены и бесплатный пробный урок
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="h-full p-6 shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-bright-magenta to-accent opacity-10 rounded-full blur-3xl" />
              <CardContent className="p-0 relative">
                <Badge className="mb-3 bg-bright-magenta text-white font-bold text-xs border-0 shadow-md">
                  Популярный выбор
                </Badge>
                <h3 className="text-xl font-bold mb-4">Индивидуальные занятия</h3>
                <div className="mb-5">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold bg-gradient-to-r from-bright-magenta to-accent bg-clip-text text-transparent">1800₽</span>
                    <span className="text-foreground/60 text-base font-semibold">/урок</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <Clock size={22} className="flex-shrink-0 mt-0.5 text-bright-magenta" weight="fill" />
                    <span className="text-sm font-medium">50-55 минут личного внимания</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Sparkle size={22} className="flex-shrink-0 mt-0.5 text-bright-magenta" weight="fill" />
                    <span className="font-bold text-sm text-bright-magenta">Первое занятие 20-25 минут БЕСПЛАТНО!</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={22} className="flex-shrink-0 mt-0.5 text-bright-magenta" weight="fill" />
                    <span className="text-sm font-medium">Программа под ваши цели</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full p-6 shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-turquoise to-lavender opacity-10 rounded-full blur-3xl" />
              <CardContent className="p-0 relative">
                <Badge className="mb-3 bg-turquoise text-white font-bold text-xs border-0 shadow-md">
                  Выгодное предложение
                </Badge>
                <h3 className="text-xl font-bold mb-4">Парные занятия</h3>
                <div className="mb-5">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold bg-gradient-to-r from-turquoise to-lavender bg-clip-text text-transparent">1400₽</span>
                    <span className="text-foreground/60 text-base font-semibold">/урок</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <Clock size={22} className="flex-shrink-0 mt-0.5 text-turquoise" weight="fill" />
                    <span className="text-sm font-medium">60-65 минут в паре с другом</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Chats size={22} className="flex-shrink-0 mt-0.5 text-turquoise" weight="fill" />
                    <span className="text-sm font-medium">Больше практики общения</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={22} className="flex-shrink-0 mt-0.5 text-turquoise" weight="fill" />
                    <span className="text-sm font-medium">Экономия + весёлая атмосфера</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="mb-16 scroll-mt-20">
          <div className="rounded-[2.5rem] shadow-2xl p-1.5 bg-gradient-to-br from-bright-magenta via-orange to-sunny-yellow">
            <div className="bg-white rounded-[2.25rem] p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Готов начать? 🚀
              </h2>
              <p className="text-center text-foreground/60 text-base mb-6">
                Свяжись со мной удобным способом и запишись на бесплатный пробный урок!
              </p>

              <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-6">
                <Card className="p-5 text-center shadow-lg hover:shadow-xl transition-all border-0 bg-gradient-to-br from-white to-bright-magenta/10">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-bright-magenta to-soft-pink flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Phone size={26} className="text-white" weight="fill" />
                    </div>
                    <h3 className="font-bold mb-1.5 text-base">Телефон</h3>
                    <a href="tel:+79502274443" className="text-sm font-semibold text-bright-magenta hover:opacity-80 transition-colors">
                      +7 (950) 227-44-43
                    </a>
                  </CardContent>
                </Card>

                <Card className="p-5 text-center shadow-lg hover:shadow-xl transition-all border-0 bg-gradient-to-br from-white to-turquoise/10">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-turquoise to-lavender flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <EnvelopeSimple size={26} className="text-white" weight="fill" />
                    </div>
                    <h3 className="font-bold mb-1.5 text-base">Email</h3>
                    <a href="mailto:varvara.ishenko@gmail.com" className="break-all text-xs font-semibold text-turquoise hover:opacity-80 transition-colors">
                      varvara.ishenko@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="p-5 text-center shadow-lg hover:shadow-xl transition-all border-0 bg-gradient-to-br from-white to-orange/10">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange to-sunny-yellow flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <MapPin size={26} className="text-white" weight="fill" />
                    </div>
                    <h3 className="font-bold mb-1.5 text-base">Локация</h3>
                    <p className="text-foreground/70 font-semibold text-sm">
                      Санкт-Петербург<br />
                      (онлайн уроки)
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  className="text-base px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all font-bold bg-gradient-to-r from-bright-magenta to-soft-pink text-white hover:opacity-90 border-0"
                  asChild
                >
                  <a href="https://wa.me/79502274443" target="_blank" rel="noopener noreferrer">
                    <Sparkle className="mr-2.5" weight="fill" size={22} />
                    Написать в WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="relative py-10 bg-white/60 backdrop-blur-sm border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="flex justify-center gap-6 mb-5">
              <a 
                href="tel:+79502274443"
                className="text-foreground/60 hover:text-bright-magenta transition-colors"
              >
                <Phone size={24} weight="fill" />
              </a>
              <a 
                href="mailto:varvara.ishenko@gmail.com"
                className="text-foreground/60 hover:text-turquoise transition-colors"
              >
                <EnvelopeSimple size={24} weight="fill" />
              </a>
              <a 
                href="https://wa.me/79502274443"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-orange transition-colors"
              >
                <ChatCircleDots size={24} weight="fill" />
              </a>
            </div>
            
            <Separator className="max-w-xs mx-auto" />
            
            <div>
              <p className="text-foreground/80 mb-1 font-semibold">
                Варвара Ищенко
              </p>
              <p className="text-foreground/60 text-sm mb-3">
                Преподаватель английского языка
              </p>
              <p className="text-xs text-foreground/50">
                © 2024 Все права защищены
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
