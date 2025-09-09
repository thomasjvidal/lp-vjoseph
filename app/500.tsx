import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ServerError() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-foreground">500</h1>
          <h2 className="text-2xl font-semibold text-foreground">Erro interno do servidor</h2>
          <p className="text-muted-foreground">
            Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full">
              Voltar ao início
            </Button>
          </Link>
          
          <div className="text-sm text-muted-foreground">
            <p>Se o problema persistir, entre em contato conosco.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
