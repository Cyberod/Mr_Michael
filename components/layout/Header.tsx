"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { mainNav, primaryCta, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

const MOBILE_NAV_ID = "mobile-navigation";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Close on navigation — otherwise the panel survives a route change and
  // covers the page the user just asked for. Adjusting during render (rather
  // than in an effect) avoids a cascading re-render, and unlike an onClick
  // handler it also catches browser back/forward.
  const [renderedPathname, setRenderedPathname] = useState(pathname);
  if (renderedPathname !== pathname) {
    setRenderedPathname(pathname);
    if (open) setOpen(false);
  }

  // Lock the background from scrolling behind the open panel.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Escape closes and returns focus to the toggle; Tab is trapped inside the
  // panel so keyboard users cannot wander into the page behind it.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  // Move focus into the panel when it opens.
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
  }, [open]);

  return (
    <header className="border-outline-variant/60 bg-surface sticky top-0 z-50 w-full border-b">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="font-display text-headline-sm text-primary tracking-tight">
          {siteConfig.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-label-md border-b-2 pb-1 transition-colors",
                  active
                    ? "border-secondary text-secondary"
                    : "text-on-surface-variant hover:text-primary border-transparent"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={primaryCta.href}
            className="bg-primary text-label-md text-on-primary inline-flex items-center justify-center rounded-md px-6 py-3 transition-opacity hover:opacity-90"
          >
            {primaryCta.label}
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={MOBILE_NAV_ID}
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-primary -mr-2 inline-flex size-11 items-center justify-center rounded-md lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
            className="size-6"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile panel. The Stitch build rendered this toggle on every page with
          no JavaScript behind it, leaving the site unnavigable on a phone. */}
      <div
        id={MOBILE_NAV_ID}
        ref={panelRef}
        hidden={!open}
        className="border-outline-variant bg-surface border-t lg:hidden"
      >
        <Container as="nav" className="flex flex-col py-4">
          <span className="sr-only">Main</span>
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "border-outline-variant/60 text-label-md border-b py-4 transition-colors",
                  active ? "text-secondary" : "text-on-surface-variant hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={primaryCta.href}
            className="bg-primary text-label-md text-on-primary mt-6 inline-flex items-center justify-center rounded-md px-6 py-4"
          >
            {primaryCta.label}
          </Link>
        </Container>
      </div>
    </header>
  );
}
