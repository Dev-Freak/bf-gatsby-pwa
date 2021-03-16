import * as React from "react"
import {
  Slider,
  Rail,
  Handles,
  Tracks,
  Ticks,
  SliderItem,
  GetRailProps,
  GetHandleProps,
  GetTrackProps,
} from "react-compound-slider"
import useFirstRenderDisabledEffect from "../../hooks/useFirstRenderDisabledEffect"

// *******************************************************
// RAIL
// *******************************************************
const railOuterStyle = {
  position: "absolute" as "absolute",
  width: "100%",
  height: 42,
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  cursor: "pointer",
}

const railInnerStyle = {
  position: "absolute" as "absolute",
  width: "100%",
  height: 14,
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  pointerEvents: "none" as "none",
  backgroundColor: "rgb(155,155,155)",
}

interface SliderRailProps {
  getRailProps: GetRailProps
}

export const SliderRail: React.FC<SliderRailProps> = ({ getRailProps }) => {
  return (
    <>
      <div style={railOuterStyle} {...getRailProps()} />
      <div className="bg-red-200" />
    </>
  )
}

// *******************************************************
// HANDLE COMPONENT
// *******************************************************
interface HandleProps {
  domain: number[]
  handle: SliderItem
  getHandleProps: GetHandleProps
  disabled?: boolean
}

const Handle: React.FC<HandleProps> = ({
  domain: [min, max],
  handle: { id, value, percent },
  disabled = false,
  getHandleProps,
}) => {
  return (
    <>
      <div
        style={{
          left: `${percent}%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          WebkitTapHighlightColor: "rgba(0,0,0,0)",
          zIndex: 5,
          width: 28,
          height: 42,
          cursor: "pointer",
          backgroundColor: "none",
        }}
        {...getHandleProps(id)}
      />
      <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{
          left: `${percent}%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          width: 24,
          height: 24,
          borderRadius: "50%",
          boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.3)",
          backgroundColor: disabled ? "#666" : "#5B6B91",
        }}
      />
    </>
  )
}

// *******************************************************
// TRACK COMPONENT
// *******************************************************
interface TrackProps {
  source: SliderItem
  target: SliderItem
  getTrackProps: GetTrackProps
  disabled?: boolean
}

export const Track: React.FC<TrackProps> = ({
  source,
  target,
  getTrackProps,
  disabled = false,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        transform: "translate(0%, -50%)",
        height: 7,
        zIndex: 1,
        backgroundColor: disabled ? "#999" : "#607E9E",
        borderRadius: 7,
        cursor: "pointer",
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps()}
    />
  )
}

// *******************************************************
// TICK COMPONENT
// *******************************************************
interface TickProps {
  tick: SliderItem
  count: number
  format?: (val: number) => string
}

export const Tick: React.FC<TickProps> = ({ tick, count, format = d => d }) => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          marginTop: 14,
          width: 1,
          height: 5,
          backgroundColor: "rgb(200,200,200)",
          left: `${tick.percent}%`,
        }}
      />
      <div
        style={{
          position: "absolute",
          marginTop: 22,
          fontSize: 10,
          textAlign: "center",
          marginLeft: `${-(100 / count) / 2}%`,
          width: `${100 / count}%`,
          left: `${tick.percent}%`,
        }}
      >
        {format(tick.value)}
      </div>
    </div>
  )
}

export type ValueType = number | string
export type Steps = Array<ValueType>
export type SliderProps = {
  defaultValue?: number
  onSliderChange: CallableFunction
}

const CustomSlider: React.FC<SliderProps> = ({ defaultValue, onSliderChange }) => {
  const domain = [7, 63]
  const defaultValueFormatted: ReadonlyArray<number> = [defaultValue ?? 7]
  const [values, setValues] = React.useState(defaultValueFormatted)
  const isFirstRender = useFirstRenderDisabledEffect()

  const onChange = (values: ReadonlyArray<number>) => {
    const arrayCopy = [...values]
    setValues(arrayCopy)
  }

  React.useEffect(() => {
    if (!isFirstRender && !values.find(value => value === defaultValue))
      onSliderChange(values)
  }, [values])

  return (
    <Slider
      mode={1}
      step={7}
      domain={domain}
      values={defaultValueFormatted}
      onChange={onChange}
      className="relative w-full"
    >
      <Rail>{({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}</Rail>
      <Handles>
        {({ handles, getHandleProps }) => (
          <div>
            {handles.map(handle => (
              <Handle
                key={handle.id}
                handle={handle}
                domain={domain}
                getHandleProps={getHandleProps}
              />
            ))}
          </div>
        )}
      </Handles>
      <Tracks>
        {({ tracks, getTrackProps }) => (
          <div>
            {tracks.map(({ id, source, target }) => (
              <Track
                key={id}
                source={source}
                target={target}
                getTrackProps={getTrackProps}
              />
            ))}
          </div>
        )}
      </Tracks>
      <Ticks values={[7, 14, 21, 28, 35, 42, 49, 56, 63]}>
        {({ ticks }) => (
          <div>
            {ticks.map(tick => (
              <Tick key={tick.id} tick={tick} count={ticks.length} />
            ))}
          </div>
        )}
      </Ticks>
    </Slider>
  )
}

export default CustomSlider
