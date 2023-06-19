import Image from 'next/image'
import Link from 'next/link'

type Props = {
    id: string;
    image: string;
    title: string
}

const RelatedProjectCard = ({ id, image, title }: Props) => {
    return (
        <div className="flexCenter related_project-card drop-shadow-card">
            <Link
                href={`/project/${id}`}
                className="flexCenter group relative w-full h-full"
            >
                <Image
                    src={image}
                    width={414}
                    height={314}
                    className="w-full h-full object-cover rounded-2xl"
                    alt="project image"
                />

                <div className="hidden group-hover:flex related_project-card_title">
                    <p className="w-full">{title}</p>
                </div>
            </Link>
        </div>
    )
}

export default RelatedProjectCard