function Sidebar({ data }) {
  return (
    <div className="sidebar">
      <ul>
        {data.map((heading, index) => (
          <li key={index}>
            <a href={`#${heading.heading}`}>{heading.heading}</a>
            {Object.keys(heading.sections).map((section, index) => (
              <ul key={index}>
                <li>
                  <a href={`#${heading.sections[section].subheading}`}>
                    {section} {heading.sections[section].subheading}
                  </a>
                </li>
              </ul>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Sidebar;
