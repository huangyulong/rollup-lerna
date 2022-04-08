import { terser } from 'rollup-plugin-terser'
import { babel } from '@rollup/plugin-babel'

export default {
    input: 'uppercase.js',
    output: [
        {
            file: 'dist/uppercase-bundle-cjs.js',
            format: 'cjs',
        },
        {
            file: 'dist/uppercase-bundle-cjs-min.js',
            format: 'cjs',
            name: 'uppercase-cjs-min',
            plugins: [
                terser(), 
                babel({
                    babelHelper: 'bundled'
                })
            ]
        },
        {
            file: 'dist/uppercase-bundle-umd.js',
            name: 'uppercase-umd',
            format: 'umd'
        },
        {
            file: 'dist/uppercase-bundle-es-min.js',
            format: 'es',
            name: 'uppercase-es-min',
            plugins: [terser()]
        },
        {
            file: 'dist/uppercase-bundle-amd.js',
            name: 'uppercase-amd',
            format: 'amd'
        }
    ]
}