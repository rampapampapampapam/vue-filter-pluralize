import rollupPluginJson from '@rollup/plugin-json';
import rollupPluginTypeScript from '@wessberg/rollup-plugin-ts';

export default {
  experimentalCodeSplitting: true,
  input: './src/main.ts',
  output: {
    exports: 'named'
  },
  plugins: [
    rollupPluginJson(),
    rollupPluginTypeScript()
  ]
}
