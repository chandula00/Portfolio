import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { ProjectsData } from "../data/projects";
import styles from "../styles/Projects.module.scss";

export const Projects = () => {
  const [modalShow, setModalShow] = useState(false);
  const [deps, setDeps] = useState({});

  const handleShow = (data) => {
    // setDeps(data);
    // setModalShow(true);
    window.open(data.url, "_blank");
  };

  const handleClose = () => setModalShow(false);

  let sectionName, projects;

  if (ProjectsData) {
    sectionName = "Projects";
    projects = ProjectsData.map((project) => (
      <div
        className={styles.project_cont}
        key={project.title}
        style={{ cursor: "pointer" }}
      >
        <span className={styles.portfolio_items}>
          <div className={styles.foto} onClick={() => handleShow(project)}>
            <div >
              <img
                src={project.images[0]}
                alt="projectImages"
                height="230"
                style={{
                  marginBottom: 0,
                  paddingBottom: 0,
                  position: "relative",
                }}
              />
              <span className={styles.project_date}>{project.startDate}</span>
              <br />
              <p className={styles.project_title_settings}>{project.title}</p>
            </div>
          </div>
        </span>
      </div>
    ));
  }

  return (
    <section className={styles.project} id="projects">
      <div className={styles.container}>
        <h1 className={styles.section_title}>
          <span>{sectionName}</span>
        </h1>
        <div className={styles.item_container}>
          <div className={styles.items}>{projects}</div>
        </div>
        <ProjectDetailsModal
          show={modalShow}
          onHide={handleClose}
          data={deps}
        />
      </div>
    </section>
  );
};
