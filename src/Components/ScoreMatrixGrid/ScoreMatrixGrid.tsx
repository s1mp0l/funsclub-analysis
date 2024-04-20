import { memo } from "react";
import { emptyArray } from "../../Shared/Utils/Common";
import classes from "./ScoreMatrixGrid.module.css";

interface ScoreMatrixGridProps {
  matrix: (number | string)[][];
}

const ScoreMatrixGrid = memo<ScoreMatrixGridProps>(({
                                                      matrix
}) => {
  return (
    <div className={classes.matrixContainer}>
      <table className={classes.matrixTable}>
        <tbody>
        <tr>
          <td className={classes.firstCell}>
            <div className={classes.firstCellTeam1}>
              ↓ <span className={classes.teamNumber}>1</span>
            </div>
            <div className={classes.firstCellTeam2}>
              → <br /><span className={classes.teamNumber}>2</span>
            </div>
          </td>
          {emptyArray(7).map((i) => (
            <td key={`header-${i}`}>{i}</td>
          ))}
        </tr>
        {matrix.map((row, index) => (
          <tr key={`row-${index}`}>
            <td>{index}</td>
            {row.map((cell, index) => (
              <td key={`cell-${index}`}>{cell || 'x'}</td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
});
ScoreMatrixGrid.displayName = "ScoreMatrixGrid";

export default ScoreMatrixGrid;
