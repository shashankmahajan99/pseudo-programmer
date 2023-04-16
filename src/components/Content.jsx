import styled from "styled-components";
import CodeHighlighter from "./CodeHighlighter";

function Content({ data }) {
  return (
    <StyledDocumentation className="documentation">
      <div>
        <h1>{data.heading}</h1>
        {Object.keys(data.sections).map((key, index) => {
          const sectionData = data.sections[key];
          return (
            <div key={index} id={key} className="documentation-item">
              <h2>{key + " " + sectionData.subheading}</h2>
              {sectionData.body && <p>{sectionData.body}</p>}
              {sectionData.examples &&
                Object.keys(sectionData.examples).map((exampleKey, index) => {
                  const exampleData = sectionData.examples[exampleKey];
                  return (
                    <div key={index}>
                      <h3>{exampleKey}</h3>
                      {exampleData.code && (
                        <pre>
                          <CodeHighlighter code={exampleData.code} />
                        </pre>
                      )}
                      {exampleData.codeContent && (
                        <p>{exampleData.codeContent}</p>
                      )}
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </StyledDocumentation>
  );
}

const StyledDiv = styled.div``;
const StyledDocumentation = styled(StyledDiv)`
  @media (max-width: 768px) {
    margin-top: 80px;
  }
`;
export default Content;
