import type { linkContain } from "../types/types"

const Navlinks = ({className="", children}:linkContain) => {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default Navlinks