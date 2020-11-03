module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      inset: {
        nodeTop: "20px",
        nodeLeft: "30px",
      },
      fontSize: {
        xxs: "10px",
      },
      padding: {
        7: "1.75rem",
      },
      height: {
        connector: "35px",
        firstConnect: "40px",
        lastConnector: "6rem",
        node: "18px",
        36: "9rem",
      },
      width: {
        connector: "2px",
        fit: "fit-content",
        node: "18px",
        36: "9rem",
      },
      maxHeight: {
        connector: "4rem",
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
        sliderLabel: "#2B2B2B",
        sliderIdle: "#F1F2F3",
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
