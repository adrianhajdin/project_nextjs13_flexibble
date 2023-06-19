import { redirect } from "next/navigation";

import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getCurrentUser } from "@/lib/session";
import { getProjectDetails } from "@/lib/actions";

const EditProject = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurrentUser();
  if (!session?.user) redirect("/")

  const result = await getProjectDetails(id);
  
  if (!result?.project) return (
    <p className="no-result-text">Failed to fetch project info</p>
  )

  return (
    <Modal>
      <h3 className="modal-head-text">
        Edit Project
      </h3>

      <ProjectForm type="edit" session={session} project={result?.project} />
    </Modal>
  );
};

export default EditProject;

