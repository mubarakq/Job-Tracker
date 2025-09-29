interface linkContain{
    className?: string;
    children?: string;
    onClick: ()=>void;
}

const Logo = ({className="", onClick, children}:linkContain) => {
  return (
    <div className={className} onClick={onClick}>
        {children}
    </div>
  )
}
export default Logo