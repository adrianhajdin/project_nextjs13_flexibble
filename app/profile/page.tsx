import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import { getUserProjects } from "@/lib/actions";
import ProfilePage from "@/components/profile/ProfilePage";

type Props = {
  searchParams: {
    tab?: "work" | "projects" | "about";
    cursor?: "string"
  };
};

const MyProfile = async ({ searchParams }: Props) => {
  const session = await getCurrentUser();
  // @ts-ignore
  if (!session?.user?.id) redirect("/")

  const cursor = searchParams.cursor || null

  // @ts-ignore
  const result = await getUserProjects(session?.user?.id, 20, cursor)

  return (
    <>
      <ProfilePage
        user={result?.user}
        searchParams={searchParams}
        // @ts-ignore
        sessionUserId={session?.user?.id}
      />
    </>
  );
};

export default MyProfile;
