import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bottom area */}
        <div className="md:flex  pb-4 md:pb-8">
            <div className="pr-4 text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out">
              Atlas Consulting © 2024{" "}
            </div>
            <div className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out">
              KVK: 75939053
            </div>
        </div>
      </div>
    </footer>
  );
}
