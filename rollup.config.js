import typescript from 'rollup-plugin-typescript2';

const config = {
    input: 'src/index.ts',
    output: {
        name: 'chansole',
        file: 'index.js',
        format: 'cjs'
    },
    plugins: [
        typescript({
            tsconfig: 'tsconfig.json'
        })
    ]
}

export default config;
