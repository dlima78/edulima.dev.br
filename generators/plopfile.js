/* eslint-disable import/no-anonymous-default-export */
export default function (plop) {
  // controller generator
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase name}}/styles.tsx',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../tests/{{lowerCase name}}/{{lowerCase name}}.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
