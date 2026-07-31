import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full max-w-4xl mx-auto px-4 py-24 pb-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        <div className="flex flex-col space-y-4">
          <Link href="/terms" className="text-xl font-semibold hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-xl font-semibold hover:underline">
            Privacy policy
          </Link>
          <a href="mailto:support@grabit2me.com" className="text-xl font-semibold hover:underline">
            Contact
          </a>
          <a href="https://x.com/grabit2me" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:underline">
            X (FKA Twitter)
          </a>
        </div>
        
        <div className="flex flex-col items-start md:items-end space-y-2">
          <p className="font-semibold text-lg">Crafted with care</p>
          <p className="font-semibold text-lg text-black/40">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};
