import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CaretLeft, CaretRight, FilePdf, Download, Eye } from '@phosphor-icons/react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface Document {
  id: string
  title: string
  description: string
  thumbnailUrl: string
  pdfUrl?: string
}

const documents: Document[] = [
  {
    id: '1',
    title: 'Диплом Бакалавра',
    description: 'СПбГПУ, Факультет Иностранных Языков',
    thumbnailUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=500&fit=crop',
  },
  {
    id: '2',
    title: 'Сертификат C1',
    description: 'Международный экзамен по английскому языку',
    thumbnailUrl: 'https://images.unsplash.com/photo-1589395937772-3c944d08f0e3?w=400&h=500&fit=crop',
  },
  {
    id: '3',
    title: 'Аспирантура',
    description: 'Документ о прохождении обучения в аспирантуре',
    thumbnailUrl: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=500&fit=crop',
  },
  {
    id: '4',
    title: 'Сертификат из Шотландии',
    description: 'Стажировка в Шотландии',
    thumbnailUrl: 'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=400&h=500&fit=crop',
  },
]

export function DocumentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % documents.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + documents.length) % documents.length)
  }

  const getVisibleDocs = (): Document[] => {
    const visible: Document[] = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % documents.length
      visible.push(documents[index])
    }
    return visible
  }

  return (
    <>
      <div className="relative max-w-5xl mx-auto">
        <div className="overflow-hidden">
          <div className="flex gap-6 justify-center items-center px-4">
            {getVisibleDocs().map((doc, idx) => (
              <motion.div
                key={`${doc.id}-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: idx === 1 ? 1 : 0.5, 
                  scale: idx === 1 ? 1 : 0.85,
                }}
                transition={{ duration: 0.3 }}
                className={`flex-shrink-0 ${idx === 1 ? 'z-10' : 'z-0'}`}
                style={{ width: idx === 1 ? '320px' : '280px' }}
              >
                <Card 
                  className={`overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer ${
                    idx === 1 ? 'border-2 border-primary' : ''
                  }`}
                  onClick={() => idx === 1 && setSelectedDoc(doc)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] bg-muted">
                      <img 
                        src={doc.thumbnailUrl} 
                        alt={doc.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-accent text-accent-foreground">
                          <FilePdf className="mr-1" weight="fill" size={16} />
                          PDF
                        </Badge>
                      </div>
                      {idx === 1 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                        >
                          <div className="flex gap-3">
                            <Button
                              size="sm"
                              className="bg-white text-black hover:bg-white/90"
                            >
                              <Eye className="mr-2" weight="fill" />
                              Просмотр
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-1">{doc.title}</h4>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2">
          <Button
            onClick={prevSlide}
            size="icon"
            className="pointer-events-auto rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
          >
            <CaretLeft weight="bold" size={24} />
          </Button>
          <Button
            onClick={nextSlide}
            size="icon"
            className="pointer-events-auto rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
          >
            <CaretRight weight="bold" size={24} />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {documents.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedDoc} onOpenChange={() => setSelectedDoc(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedDoc?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">{selectedDoc?.description}</p>
            <div className="relative aspect-[3/4] bg-muted rounded-lg overflow-hidden">
              <img 
                src={selectedDoc?.thumbnailUrl} 
                alt={selectedDoc?.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex gap-3 justify-end">
              <Button variant="outline">
                <Download className="mr-2" weight="bold" />
                Скачать PDF
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
