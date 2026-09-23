import { ClipboardList, Package, PackageCheck, Banknote } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Postúlate",
    description: "Llena el formulario con tus datos básicos y nosotros te contactaremos.",
  },
  {
    icon: Package,
    title: "Elige tu puesto",
    description: "Selecciona el puesto que mejor se adapte a tu perfil y experiencia.",
  },
  {
    icon: PackageCheck,
    title: "Incorpórate al equipo",
    description: "Únete a nuestro equipo de trabajo y comienza tu capacitación.",
  },
  {
    icon: Banknote,
    title: "Recibe tu pago",
    description: "Recibes tu salario puntual, que puede aumentar según tu puesto y horas extras.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            ¿Cómo funciona?
          </h2>
          <p className="text-muted-foreground text-balance">
            Comenzar es muy sencillo. Sigue estos pasos y forma parte de nuestro equipo de trabajo.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
                <step.icon className="h-8 w-8 text-primary" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {index + 1}
                </span>
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
