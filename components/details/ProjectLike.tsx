"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const ProjectLike = () => {
    const [hasLiked, setHasLiked] = useState<boolean>(false)

    return (
        <div className="flexCenter gap-5 lg:w-fit w-full">
            <button
                type="button"
                className="flexCenter save_btn"
            >
                <Image
                    src="/save.svg"
                    className="min-w-[14px] min-h-[14px]"
                    width={14}
                    height={14}
                    alt="save"
                />
                Save
            </button>

            <button
                type="button"
                className={`flexCenter like_btn ${hasLiked
                    ? "text-primary-purple bg-white border border-primary-purple"
                    : "text-white bg-primary-purple"
                    } `}
                onClick={() => setHasLiked(!hasLiked)}
            >
                <Image
                    src={`/hearth-${hasLiked ? "purple" : "white"}.svg`}
                    width={14}
                    height={14}
                    alt="like"
                />
                Like
            </button>
        </div>
    )
}

export default ProjectLike