import typescript from 'rollup-plugin-typescript2';

const config = {
    input: 'src/index.ts',
    output: [
        {
            file: 'index.esm.js',
            format: 'es'
        },
        {
            name: 'chansole',
            file: 'index.umd.js',
            format: 'umd'
        }
    ],
    plugins: [
        typescript({
            tsconfig: 'tsconfig.json'
        })
    ]
}

export default config;
