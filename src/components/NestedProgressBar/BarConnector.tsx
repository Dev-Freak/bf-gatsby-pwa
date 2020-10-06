import * as React from "react"
import PropTypes from "prop-types"

export interface BarConnectorProps {
  isVertical?: true | false
}

const BarConnector: React.FC<BarConnectorProps> = ({
  isVertical,
}: BarConnectorProps) => {
  const styles = isVertical ? { width: "2px" } : { height: "2px" }
  const classes = isVertical ? "h-full max-h-xs" : "w-full max-w-xs"

  return (
    <div className="flex items-center justify-center flex-grow">
      <span style={styles} className={`block bg-brandIdleLight ${classes}`} />
    </div>
  )
}

BarConnector.propTypes = {
  isVertical: PropTypes.bool,
}

BarConnector.defaultProps = {
  isVertical: false,
}

export default BarConnector
