module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontSize: {
        xxs: "10px",
      },
      padding: {
        7: "1.75rem",
      },
      height: {
        node: "18px",
        36: "9rem",
      },
      width: {
        fit: "fit-content",
        node: "18px",
        36: "9rem",
      },
      colors: {
        disabled: "#D6D6D6",
        brand: "#001C54",
        idle: "#5B6B91",
        unselected: "#606060",
        idleDark: "#DFE3EA",
        idleLight: "#EFF0F4",
        brandIdleDark: "#29406F",
        brandIdleLight: "#344976",
        completedDark: "#00DA86",
        completedLight: "#D8FCD0",
        activeLight: "#B2BACB",
      },
    },
  },
  variants: {
    transitionProperty: ["responsive", "hover"],
    width: ["responsive", "hover"],
    opacity: ["responsive", "hover", "group-hover"],
    visibility: ["responsive", "hover", "group-hover"],
    display: ["responsive", "hover", "group-hover"],
  },
  plugins: [],
}
