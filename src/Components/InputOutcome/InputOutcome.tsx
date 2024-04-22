import {ChangeEvent, memo, useCallback, useState} from "react";
import {IWithOutcome} from "../../Shared/Model/Model";
import classes from "./InputOutcome.module.css";
import {fixedGetProbabilityFromOdd} from "../../Services/CalculateMarkets/Utils/Convertations";


const InputOutcome = memo<IWithOutcome>(({
  outcome
                                         }) => {
  const [value, setValue] =
    useState(outcome.oddValue?.toFixed(4) || 0);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    console.log(newValue)
    if (isFinite(newValue)) {
      if (newValue < 1) {
        outcome.oddValue = undefined;
        outcome.probValue = undefined;
        setValue(0);
        return;
      }
      outcome.oddValue = newValue;
      outcome.probValue = fixedGetProbabilityFromOdd(newValue);
      setValue(newValue.toString());
    }
  }, []);

  return (
    <div className={classes.outcome}>
      <div className={classes.name}>
        {outcome.name}
      </div>
      <input
        value={value}
        type={"number"}
        onChange={onChange}
        className={classes.inputValue}
      />
    </div>
  );
});
InputOutcome.displayName = "InputOutcome";

export default InputOutcome;