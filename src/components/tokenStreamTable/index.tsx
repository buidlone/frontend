import { useContext } from "react";
import LoadedValuesContext from "../../context/loadedValuesContext";
import { Footer, Table, Header, InvButton } from "./styled";

const tokenStreamData = [
  {
    phase: "Milestone 1",
    fundRelease: "1000",
    fundStream: "5000/2 mo",
    tokenRelease: "5 000",
    tokenStream: "15 000/2 mo",
  },
  {
    phase: "Milestone 1",
    fundRelease: "1000",
    fundStream: "5000/2 mo",
    tokenRelease: "5 000",
    tokenStream: "15 000/2 mo",
  },
  {
    phase: "Milestone 1",
    fundRelease: "1000",
    fundStream: "5000/2 mo",
    tokenRelease: "5 000",
    tokenStream: "15 000/2 mo",
  },
  {
    phase: "Milestone 1",
    fundRelease: "1000",
    fundStream: "5000/2 mo",
    tokenRelease: "5 000",
    tokenStream: "15 000/2 mo",
  },
  {
    phase: "Milestone 1",
    fundRelease: "1000",
    fundStream: "5000/2 mo",
    tokenRelease: "5 000",
    tokenStream: "15 000/2 mo",
  },
];

interface ITokenStreamTable {
  assets?: boolean;
}

const TokenStreamTable = ({ assets }: ITokenStreamTable) => {
  const { currency } = useContext(LoadedValuesContext);
  return (
    <>
      {assets && (
        <Header>
          <InvButton>1st investment</InvButton>
          <InvButton>2nd investment</InvButton>
          <InvButton>3rd investment</InvButton>
        </Header>
      )}
      <Table assets={assets}>
        <thead>
          <th />
          <th className="phase">Instant fund release ({currency.label})</th>
          <th className="phase">Fund stream ({currency.label})</th>
          <th className="phase">Token release (BDL1)</th>
          <th className="phase">Token stream (BDL1)</th>
        </thead>
        <tbody>
          {tokenStreamData &&
            tokenStreamData.map((item) => (
              <tr>
                <td className="phase">{item.phase}</td>
                <td data-label={`Instant fund release (${currency.label})`} className="fund">
                  {item.fundRelease}
                </td>
                <td data-label={`Fund stream (${currency.label})`} className="fund">
                  {item.fundStream}
                </td>
                <td data-label="Token release (BDL1)" className="token">
                  {item.tokenRelease}
                </td>
                <td data-label="Token stream (BDL1)" className="token">
                  {item.tokenStream}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Footer>
        {!assets && (
          <a href="">
            Still considering? Learn more about the project and its team
          </a>
        )}
      </Footer>
    </>
  );
};

export default TokenStreamTable;
