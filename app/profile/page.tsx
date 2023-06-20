import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import { getUserProjects } from "@/lib/actions";
import ProfilePage from "@/components/profile/ProfilePage";

// TODO: I believe we no longer need /profile/page.tsx. We can just use the profile/[id].page.tsx and pass in the user id.
// TODO: Fix all typescript any's and @ts-ignore's
// TODO: Write the intro for the video (include grafbase features as well)
// TODO: Make the newly created post appear immediately on the feed

type Props = {
  searchParams: any
  // searchParams: {
  //   cursor?: "string"
  // };
};

const MyProfile = async ({ searchParams }: any) => {
  const session = await getCurrentUser();
  // @ts-ignore
  if (!session?.user?.id) redirect("/")

  const cursor = searchParams.cursor || null

  // @ts-ignore
  const result = await getUserProjects(session?.user?.id, 20, cursor)

  return (
    <>
      <ProfilePage
        // @ts-ignore
        user={result?.user}
        // @ts-ignore
        searchParams={searchParams}
        // @ts-ignore
        sessionUserId={session?.user?.id}
      />
    </>
  );
};

export default MyProfile;
