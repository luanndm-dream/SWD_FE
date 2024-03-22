import { cx } from "class-variance-authority"
import { Menu, XIcon } from "lucide-react"
import { useState } from "react"
import { CSSTransition } from "react-transition-group"
import HomeIcon from "../../assets/icon/home.svg"
import { Link, useLocation } from "react-router-dom"
import { cn } from "../../lib/utils"

const menuItems = [
  {
    title: "Home",
    icon: (
      <div>
        <img src={HomeIcon} alt="icon" className="h-10 w-10" />
      </div>
    ),
    link: "/home"
  },
]

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()
  return (
    <div className={cx("sidebar", { "sidebar-closed": !isOpen })}>
      <button
        className={"flex items-center ml-5"}
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? <Menu size={24} /> : <XIcon size={24} />}
      </button>
      <ul className="space-y-2 mt-4">
        {menuItems.map(item => (
          <Link to={item.link} key={item.title}>
            <div
              className={cn(
                "flex gap-4 items-center cursor-pointer hover:bg-[#B8F2FF] rounded-xl p-4",
                location.pathname.toLowerCase() == item.link.toLowerCase() &&
                  "bg-[#B8F2FF]"
              )}
            >
              {item.icon}
              <CSSTransition
                in={isOpen}
                timeout={200}
                classNames={"fade"}
                unmountOnExit
              >
                <span>{item.title}</span>
              </CSSTransition>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
