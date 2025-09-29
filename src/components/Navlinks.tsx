
interface linkContain{
    className?: string;
    children?: React.ReactNode;
}

const Navlinks = ({className="", children}:linkContain) => {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default Navlinks