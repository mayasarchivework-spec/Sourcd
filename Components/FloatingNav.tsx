import Link from "next/link";
import Image from "next/image";
import ModeToggle from "./ModeToggle";

export default function FloatingNav() {
  return (
    <nav className="floating-nav">
      <div className="floating-nav__links-left">
        <Link href="/profile" className="floating-nav__item app-nav-control">
          <Image src="/profile.svg" alt="Profile" width={20} height={20} />
        </Link>
        <Link href="/" className="app-nav-control">All</Link>
        <Link href="/boards" className="app-nav-control">Boards</Link>
      </div>

      <Link href="/" className="floating-nav__logo" aria-label="Sourcd home">
        S
      </Link>

      <div className="floating-nav__links-right">
        <Link href="/planner" className="app-nav-control">Planner</Link>
        <Link href="/calendar" className="app-nav-control">Calendar</Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
