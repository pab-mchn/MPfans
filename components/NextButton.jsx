import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NextButton({ href = "/", label = "Next" }) {
  return (
    <div className="mt-12 flex justify-end">
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition text-sm font-medium"
      >
        {label}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
