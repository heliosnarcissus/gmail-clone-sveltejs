module.exports = {
  future: {
     removeDeprecatedGapUtilities: true,
     //purgeLayersByDefault: true,
  },
  purge: [
   // "./src/**/*.svelte",
  ],
  theme: {
    extend: {
      backgroundOpacity:{
        '90': '0.90',
      },
      height: theme => ({
        "screen/2": "50vh",
        "48%": "48vh",
      }),
    }
  },
  variants: {},
  plugins: [],
}
