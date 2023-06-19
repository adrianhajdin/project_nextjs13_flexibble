import { UserNode } from '@/common.types'
import Image from 'next/image'

import ProfileAbout from './ProfileAbout'
import ProfileButtons from './ProfileButtons'
import ProfileFilter from './ProfileFilters'
import ProfileProjects from './ProfileProjects'

type SearchParams = {
    tab?: "work" | "projects" | "about";
}

type Props = {
    user: UserNode;
    searchParams: SearchParams;
    sessionUserId: string | undefined | null;
}

const ProfilePage = ({ user, searchParams }: Props) => {
    function renderProfileContent() {
        switch (searchParams.tab) {
            case "work":
            case "projects":
                // @ts-ignore
                return <ProfileProjects user={user} />;
            case "about":
                // @ts-ignore
                return <ProfileAbout user={user} />;
            default:
                return null;
        }
    }

    return (
        <section className='flexCenter flex-col w-full paddings !lg:py-[85px] !py-16'>
            <section className="flexBetween max-lg:flex-col gap-y-10 w-full">
                <div>
                    <Image
                        src={user?.avatarUrl}
                        width={100}
                        height={100}
                        className="rounded-full"
                        alt="user image"
                    />
                    <p className="text-[35px] leading-[42px] font-bold mt-[40px]">
                        {user?.name}
                    </p>
                    <p className="md:text-[47px] text-[30px] md:leading-[61px] leading-[32px] font-extrabold md:mt-[40px] mt-5 lg:max-w-[444px]">
                        I’m Software Engineer at JSM 👋
                    </p>
                    <div className="flex mt-[30px] gap-5">
                        <ProfileButtons user={user} />
                    </div>
                </div>

                {/* @ts-ignore */}
                {user?.projects?.edges?.length > 0 ? (
                    <Image
                        // @ts-ignore
                        src={user?.projects?.edges[0]?.node?.image}
                        width={739}
                        height={554}
                        alt="project image"
                        className='rounded-xl'
                    />
                ) : (
                    <Image
                        src="/profile-post.png"
                        width={739}
                        height={554}
                        alt="project image"
                        className='rounded-xl'
                    />
                )}
            </section>

            <section className="flexStart flex-col lg:mt-[118px] mt-16 w-full">
                <ProfileFilter />
                {renderProfileContent()}
            </section>
        </section>
    )
}

export default ProfilePage