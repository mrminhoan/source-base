import Button from 'antd/es/button';
import { useFeedbackStore } from '../../../store/feedback-store';
const projects = ['Project A', 'Project B', 'Project C'];

function FeedbackDetail() {
  const { projectSnapshot, projectStore } = useFeedbackStore();
  const toggleProject = (project) => {
    if (projectSnapshot.selectedProjects.has(project)) {
      projectStore.selectedProjects.delete(project);
    } else {
      projectStore.selectedProjects.add(project);
    }
  };
  return (
    <div>
      <h1>Project STORE</h1>

      <div>
        <h3>Chọn Dự Án</h3>
        <ul>
          {projects.map((project) => (
            <li key={project}>
              <label>
                <input
                  type="checkbox"
                  checked={projectSnapshot.selectedProjects.has(project)}
                  onChange={() => toggleProject(project)}
                />
                {project}
              </label>
            </li>
          ))}
        </ul>
        <div>
          <h4>Dự Án Đã Chọn:</h4>
          <ul>
            {[...projectSnapshot.selectedProjects].map((project, index) => (
              <li key={index}>{project ? project : ""}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeedbackDetail;
