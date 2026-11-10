import { cn } from "cn"
import { SpinnerIcon } from "@phosphor-icons/react"
import { Loader2Icon } from "lucide-react"

function Spinner({
  className,
  ...props
}) {
  return (
    <Loader2Icon data-slot="spinner" role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...props} />
  )
}

export { Spinner }
