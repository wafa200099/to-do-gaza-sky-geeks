const Projects = [
  {
    name: "project1",
    link: "www.google.com",
  },
];

const Portfolio = () => {
  return (
    <ul>
      {Projects.map((project) => (
        <li>
          <span>{project.name}</span>
          <a href={project.link}>go to link</a>
        </li>
      ))}
    </ul>
  );
};
export default Portfolio;
