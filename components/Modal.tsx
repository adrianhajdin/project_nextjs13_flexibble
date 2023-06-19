"use client";

import { useCallback, useRef, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Modal({ children }: { children: ReactNode }) {
    const overlay = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        window.document.body.style.overflowY = "auto";
        router.back();
    }, [router]);

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (e.target === overlay.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay]
    );

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        window.document.body.style.overflowY = "hidden";
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);

    return (
        <div
            ref={overlay}
            className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/80"
            onClick={(e) => handleClick(e)}
        >
            <button
                type="button"
                onClick={() => onDismiss()}
                className="absolute top-[15px] right-[32px]"
            >
                <Image src="/close.svg" width={17} height={17} alt="close" />
            </button>

            <div
                ref={wrapper}
                className="flex justify-start items-center flex-col absolute h-[95%] w-full bottom-0 bg-white rounded-t-3xl lg:px-40 px-8 pt-14 pb-72 overflow-auto"
            >
                {children}
            </div>
        </div>
    );
}
