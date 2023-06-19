import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constant";

type ColumnProps = {
    title: string;
    links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className="flex flex-col gap-3 text-[14px] leading-[23px]">
        <h4 className="font-semibold">{title}</h4>
        <ul className="flex flex-col gap-[7px] font-normal">
            {links.map((link) => (
                <Link href="/" key={link}>
                    {link}
                </Link>
            ))}
        </ul>
    </div>
);

const Footer = () => (
    <section className="flexStart flex-col paddings w-full gap-20 bg-light-white">
        <div className="flex flex-wrap md:justify-between justify-center items-start gap-12 w-full">
            <div className="flexStart flex-col max-w-[300px]">
                <Image
                    src="/logo-purple.svg"
                    width={116}
                    height={38}
                    alt="logo"
                />

                <div className="text-start text-sm font-normal mt-5">
                    Dribbble is the world&apos;s leading community for creatives to share,
                    grow, and get hired.
                </div>
                <Image
                    src="/socials.svg"
                    width={95}
                    height={18}
                    className="pt-[18px]"
                    alt="socials"
                />
            </div>
            <div className="flex max-md:text-center max-md:flex-col gap-12">
                <FooterColumn
                    title={footerLinks[0].title}
                    links={footerLinks[0].links}
                />
                <div className="flex flex-col gap-4">
                    <FooterColumn
                        title={footerLinks[1].title}
                        links={footerLinks[1].links}
                    />
                    <FooterColumn
                        title={footerLinks[2].title}
                        links={footerLinks[2].links}
                    />
                </div>
                <FooterColumn
                    title={footerLinks[3].title}
                    links={footerLinks[3].links}
                />
                <div className="flex flex-col gap-4">
                    <FooterColumn
                        title={footerLinks[4].title}
                        links={footerLinks[4].links}
                    />
                    <FooterColumn
                        title={footerLinks[5].title}
                        links={footerLinks[5].links}
                    />
                </div>
                <FooterColumn
                    title={footerLinks[6].title}
                    links={footerLinks[6].links}
                />
            </div>
        </div>

        <div className="flexBetween w-full text-sm font-normal">
            <p>@ 2023 Flexibble. All rights reserved</p>
            <p className="text-gray">
                <span className="text-black font-semibold">21,160,075</span> shots
                flexibble
            </p>
        </div>
    </section>
);

export default Footer;
