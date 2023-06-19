"use client"

import Link from "next/link";

type Props = {
    title: string;
    url?: string;
    buttonText: string;
    userId: string;
    onClick: () => void;
}

const SocialMedia = ({ title, url, buttonText, userId, onClick }: Props) => {
    return (
        <div className="flex flex-col w-full gap-3">
            <p className="text-lg font-bold">{title}</p>
            
                <Link href={url || 'https://test.com'} target="_blank" rel="noreferrer" className="text-primary-purple">
                    {url}
                </Link>
         
        </div>
    );
};

export default SocialMedia