
import Link from "next/link";
import logo3 from './../app/Assets/logo3.png';

export function Logo() {
    return (
        <Link href="/coach" className="flex items-center gap-2 font-headline font-bold text-lg">
            <Image
          src={logo3}// Path to your PNG file in the public directory
          alt="FINmate Logo" // Essential for accessibility
          width={48} // Set the width of your PNG image (in px)
          height={48} // Set the height of your PNG image (in px)
          className="text-primary" // Apply any necessary Tailwind classes for styling (e.g., for spacing if needed)
        />
            <span className="text-primary">FINmate</span>
        </Link>
    )
}
