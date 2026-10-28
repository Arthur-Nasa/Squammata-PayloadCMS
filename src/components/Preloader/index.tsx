'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PreloaderAnimation } from '@/common/scrollAnimation'

export const Preloader = () => {
  const [show, setShow] = useState(true);
  const pathname = usePathname();
  const isArthurPortfolio =
    pathname?.startsWith('/arthur') ||
    pathname?.startsWith('/portfolio') ||
    pathname?.includes('Squammata-PayloadCMS') ||
    (typeof window !== 'undefined' && (
      window.location.pathname.includes('Squammata-PayloadCMS') ||
      window.location.hostname.includes('github.io') ||
      window.location.pathname === '/' ||
      window.location.pathname.endsWith('/index.html') ||
      document.querySelector('[data-portfolio-standalone="true"]') !== null ||
      document.getElementById('sobre') !== null
    ));
  
  useEffect(() => {
    const cleanup = PreloaderAnimation();

    const t = setTimeout(() => {
      setShow(false);
    }, 1000)

    return () => {
      cleanup?.();
      clearTimeout(t);
    }
  }, []);

  if (!show) return null;

  return (
    <>
      <div className="mil-preloader-frame">
          <div></div>
          <div className="mil-logo">
              {isArthurPortfolio ? (
                <Image
                  src="/arthur-saggioratto.jpg"
                  alt="Arthur Saggioratto"
                  width={64}
                  height={64}
                  style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }}
                  priority
                  unoptimized
                />
              ) : (
                <Image src="/logo/squammata/squammata-lockup-horizontal-white.svg" alt="Squammata" width={160} height={34} priority />
              )}
          </div>
          <div className="mil-preloader mil-tac">
              <div>
                  <p className="mil-c-m-3 mil-mb-1 mil-t-16">Carregando...</p>
                  <div className="mil-mb-2"><span className="mil-counter mil-counter-2 mil-c-m-4">00</span><span className="mil-c-a-1 mil-sub-text-1">%</span></div>
                  <div className="mil-mil-preloader-line-frame">
                      <div className="mil-mil-preloader-line"></div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}