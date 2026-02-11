import * as React from "react"
import { type VariantProps } from "class-variance-authority" // Ya no importas 'cva' aquí
import { Slot } from "radix-ui"

import { cn } from "../../lib/utils"
// 👇 IMPORTA LAS VARIANTES DESDE EL ARCHIVO NUEVO
import { buttonVariants } from './button-bariants';

// ... (El resto del código del componente Button sigue igual) ...

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

// 👇 IMPORTANTE: Solo exporta el componente Button por defecto o nombrado, 
// pero NO exportes buttonVariants desde aquí si no es necesario.
// Si necesitas exportarlo para usarlo en otro lado, haz:
export { Button }