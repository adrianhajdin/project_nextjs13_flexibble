import { getUserProjects } from '@/lib/actions'
import { getCurrentUser } from '@/lib/session'
import ProfilePage from '@/components/profile/ProfilePage'

type Props = {
    params: {
        id: string
    },
    searchParams: {
        tab?: "work" | "projects" | "about";
        cursor?: string
    }
}

const UserProfile = async ({ params, searchParams }: Props) => {
    const session = await getCurrentUser()
    const cursor = searchParams.cursor || null

    // @ts-ignore
    const result = await getUserProjects(params.id, 20, cursor)
    if (!result?.user) return (
        <p className="no-result-text">Failed to fetch user info</p>
    )

    return (
        <>
            {/* @ts-ignore */}
            <ProfilePage user={result?.user} searchParams={searchParams} sessionUserId={session?.user?.id} />
        </>
    )
}

export default UserProfile