import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </SheetTrigger>
      <SheetContent side="right" className="bg-white border-none lg:hidden">
        <nav className="flex-col flexBetween max-container gap-20 padding-container relative z-30 py-5">
          <Link href="/">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>
          <ul className=" h-full gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-18 text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="sm:flexCenter">
            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
            />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
