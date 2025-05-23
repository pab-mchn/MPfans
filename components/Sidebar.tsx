'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
const sections = [
  {
    title: '🌎 Introduccion',
    links: [
      { label: 'Que es MP Fans', href: '/' },
    ],
  },
  {
    title: '🌎 Checkout Pro',
    links: [
        { label: 'Que es y como empezar', href: '/docs/checkout-pro/set-up' },
        { label: 'Integracion con Javascript', href: '/docs/checkout-pro/con_javascript' },
        { label: 'Integracion con React js', href: '/docs/checkout-pro/con_reactjs' },
        { label: 'Integracion con Next js', href: '/docs/checkout-pro/con_nextjs' },
        { label: 'Capturando informacion de pagos (webhoocks)', href: '/docs/checkout-pro/webhoocks' },
    ],
  },
  {
    title: '🌎 Mas recursos',
    links: [
        { label: 'Actualizaciones de la Api', href: '/docs/recursos/actualizaciones' },
        { label: 'Mas de Mercado Pago 🔥', href: '/docs/recursos/mas-de-mp' },
        { label: 'codigos', href: '/docs/recursos/codigos' },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const sidebarContent = (
    <>
       <Link href="/" className="mb-6 block text-2xl font-bold hover:text-white">
        MP FANS
      </Link>

      <nav className="space-y-6">
        {sections.map(({ title, links }) => (
          <div key={title}>
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {title}
            </h2>
            <ul className="space-y-1">
              {links.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`block rounded px-2 py-1 text-sm transition ${
                        active
                          ? 'bg-zinc-800 text-white'
                          : 'text-zinc-400 hover:bg-zinc-200 hover:bg-opacity-20'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </>
  );

  return (
    <>
      {/* ---------- DESKTOP SIDEBAR ---------- */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 overflow-y-auto bg-zinc-900 px-6 py-8 text-zinc-100 md:block">
        {sidebarContent}
      </aside>

      {/* ---------- MOBILE HEADER ---------- */}
      <header className="fixed left-0 top-0 z-50 flex h-14 w-full items-center justify-between bg-zinc-900 px-4 text-zinc-100 md:hidden">
      <button onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu size={24} />
      </button>
    <span className="text-lg font-bold">MP FANS</span>
      {/* placeholder para equilibrar el flex */}
    <div className="w-6" />
</header>
 

      {/* ---------- MOBILE DRAWER ---------- */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <aside className="fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto bg-zinc-900 px-6 py-8 text-zinc-100 shadow-lg transition-transform duration-200 animate-slide-in">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="mb-6 text-zinc-400 hover:text-white"
            >
              <X size={24} />
            </button>
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  );
}
