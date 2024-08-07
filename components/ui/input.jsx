import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[48px] w-full justify-between items-center rounded-md border border-white/10 bg-primary px-4 py-5 text-base text-white/70 placeholder:text-white/50 focus:border-accent outline-none",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
