import { useState, useEffect } from "react";
import { Collapse } from "react-collapse";
import { useWindowWidth } from "@react-hook/window-size";
import { IoIosArrowDown } from "react-icons/io";
function Menu({ title, items }) {
  const windowWidth = useWindowWidth();
  const [isopen, setOpen] = useState(true);
  const toggleCollapse = () => {
    if (windowWidth <= 768) {
      //windowWith 768 den kücük oldugunda calıssın.
      setOpen(!isopen);
    }
  };
  useEffect(() => {
    setOpen(windowWidth >= 768 ? true : false);
  }, [windowWidth]);

  return (
    <section>
      <nav className="grid gap-y-2 md:gap-y-4">
          <h6 className="text-primary-brand-color font-normal text-lg  flex items-center justify-between">
            {title}
            <button className="grid md:hidden w-6 h-6 place-items-center rounded-lg bg-primary-brand-color bg-opacity-10 text-primary-brand-color " onClick={toggleCollapse}>
            <span className={`transition-all transform ${isopen ? '-rotate-180' : '' }`}>
            <IoIosArrowDown size={14}/>
            </span>
          </button>
          </h6>
        <Collapse isOpened={isopen}>
          <nav>
            <ul className="grid md:gap-y-2">
              {items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:text-brand-color">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Collapse>
      </nav>
    </section>
  );
}

export default Menu;
