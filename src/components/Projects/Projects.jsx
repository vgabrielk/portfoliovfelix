import React, { useState, memo } from "react";
import { FaGithub } from "react-icons/fa";

import "./Projects.css";
import { data } from "../../Data";

function Projects({ theme }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <br />
      <h3 data-aos="fade" style={{ color: theme ? "#fff" : "#161B22" }}>
        Projetos Recentes
      </h3>
      <div className="input-box">
        <input
          type="text"
          style={{ backgroundColor: theme ? "#fff" : "#161B22", marginTop: 30 }}
          placeholder="Filtrar por : Tecnologia | Nome"
          onChange={(e) => setSearch(e.target.value)}
          data-aos="fade"
        />
      </div>
      <p
        style={{ color: theme ? "#fff" : "#161B22", marginTop: 30 }}
        data-aos="fade"
      >
        Clique para visualizar
      </p>
      <main className="projects">
        {data
          .filter((val) => {
            if (search === "") {
              return val;
            }
            return (
              val.tech.toLowerCase().includes(search.toLowerCase()) ||
              val.title.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map((project) => (
            <div className="project-content-box" key={project.id}>
              <div className="project-content">
                <div className="image-content">
                  {project.repository ? (
                    <a href={project.repositoryLink}>
                      <FaGithub className="github-icon" />
                    </a>
                  ) : null}
                  <div className="framework-lang" >
                      {project.lang}
                  </div>
                  <h3
                    className="image-title"
                    style={{ color: theme ? "#fff" : "#161B22" }}
                  >
                    {project.title}
                  </h3>
                  <a href={project.link}>
                    <img
                      className="image-project"
                      loading="lazy"
                      src={project.image}
                      width={"350px"}
                      name={project.image}
                      alt=""
                      data-aos="fade"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
      </main>
    </>
  );
}

export default memo(Projects);
