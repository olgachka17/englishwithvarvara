import { useState } from 'react'
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
              <div
                key={`${doc.id}-${currentIndex}`}
                className={`flex-shrink-0 transition-all ${idx === 1 ? 'z-10 opacity-100' : 'z-0 opacity-60'}`}
                style={{ width: idx === 1 ? '340px' : '300px', transform: idx === 1 ? 'scale(1)' : 'scale(0.88)' }}
              >
                <Card 
                  className={`overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer border-0 ${
                    idx === 1 ? 'ring-4 ring-coral/50' : ''
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
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-coral text-white border-0 shadow-lg font-semibold">
                          <FilePdf className="mr-1" weight="fill" size={16} />
                          PDF
                        </Badge>
                      </div>
                      {idx === 1 && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center pb-8 opacity-0 hover:opacity-100 transition-opacity">
                          <div className="flex gap-3">
                            <Button
                              size="sm"
                              className="bg-white text-foreground hover:bg-white/90 font-semibold shadow-lg border-0"
                            >
                              <Eye className="mr-2" weight="fill" />
                              Просмотр
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-5 bg-white">
                      <h4 className="font-bold text-xl mb-2">{doc.title}</h4>
                      <p className="text-sm text-foreground/60">{doc.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2">
          <Button
            onClick={prevSlide}
            size="icon"
            className="pointer-events-auto rounded-full bg-coral text-white shadow-xl hover:scale-110 transition-transform border-0 hover:bg-coral/90"
          >
            <CaretLeft weight="bold" size={24} />
          </Button>
          <Button
            onClick={nextSlide}
            size="icon"
            className="pointer-events-auto rounded-full bg-coral text-white shadow-xl hover:scale-110 transition-transform border-0 hover:bg-coral/90"
          >
            <CaretRight weight="bold" size={24} />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {documents.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentIndex 
                  ? 'bg-coral w-10' 
                  : 'bg-foreground/20 w-2.5'
              }`}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedDoc} onOpenChange={() => setSelectedDoc(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto border-0 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">{selectedDoc?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-foreground/70 text-lg">{selectedDoc?.description}</p>
            <div className="relative aspect-[3/4] bg-muted rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={selectedDoc?.thumbnailUrl} 
                alt={selectedDoc?.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex gap-3 justify-end">
              <Button variant="outline" className="border-2 border-coral text-coral hover:bg-coral hover:text-white font-semibold">
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
