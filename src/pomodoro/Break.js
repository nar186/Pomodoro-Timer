import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function Break({session, breakDuration, setBreakDuration }){
return(
    <div className="float-right">
        <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
                Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
            <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick = {() => {
                      if (!session && breakDuration >1)
                      minutesToDuration(setBreakDuration(breakDuration - 1))
                  }}
            >
                  <span className="oi oi-minus" />
            </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
            <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick = {() => {
                    if (!session && breakDuration < 15)
                    minutesToDuration(setBreakDuration(breakDuration + 1))
                }}
            >
                <span className="oi oi-plus" />
            </button>
            </div>
        </div>
    </div>
)
}

export default Break;