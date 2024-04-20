import {memo} from "react";
import classes from "./BaseOutcome.module.css";

interface BaseOutcomeProps {
  name: string;
  value: number;
}

const BaseOutcome = memo<BaseOutcomeProps>(({
  name,
  value,
                                            }) => {
  return (
    <div className={classes.outcome}>
      <div className={classes.name}>
        {name}
      </div>
      <div className={classes.value}>
        {value.toFixed(2) + '%'}
      </div>
    </div>
  );
});
BaseOutcome.displayName = "BaseOutcome";

export default BaseOutcome;