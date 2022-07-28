import FundingBlock from "../src/components/fundingBlock";
import ProjectHeader from "../src/components/projectHeader";

const Buidl1 = () => {
  return (
    <div
      style={{
        maxWidth: "1400px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <ProjectHeader
        text={"Project 1 - BUIDL 1 - Self raising capital"}
        stage={"STAGE 1"}
      />

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <FundingBlock />
        <FundingBlock />
      </div>
    </div>
  );
};

export default Buidl1;
