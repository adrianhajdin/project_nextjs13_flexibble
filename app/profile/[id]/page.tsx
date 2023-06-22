import { getUserProjects } from '@/lib/actions'
import ProfilePage from '@/components/ProfilePage'
import { UserProfile } from '@/common.types';

type Props = {
    params: {
        id: string,
    },
    searchParams: {
        cursor?: string;
    };
}

const UserProfile = async ({ params, searchParams }: Props) => {
    const cursor = searchParams.cursor as string

    const result = await getUserProjects(params.id, 20, cursor) as { user: UserProfile }

    if (!result?.user) return (
        <p className="no-result-text">Failed to fetch user info</p>
    )

    return <ProfilePage user={result?.user}  />
}

export default UserProfile
