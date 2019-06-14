import { classify, dasherize } from '@angular-devkit/core/src/utils/strings';
import {
  chain,
  externalSchematic,
  Rule,
  SchematicContext,
  Tree
} from '@angular-devkit/schematics';
import { path } from '@angular-devkit/core';

const createComponent = (options: any) =>
  externalSchematic('@schematics/angular', 'component', {
    name: options.name,
    project: 'ui-common',
    module: 'ui-common.module.ts',
    export: true
  });

const addTestComponentToTestApp = (options: any) =>
  externalSchematic('@schematics/angular', 'component', {
    name: `${classify(options.name)}Test`,
    project: 'ui-common-test-bed',
    module: 'app.module.ts'
  });

const addTestComponentToRouting = (options: any): Rule => (
  tree: Tree,
  _context: SchematicContext
) => {
  const routeToAdd = `{ path: '${dasherize(
    options.name
  )}', component: ${classify(options.name)}TestComponent}`;
  const modulePath = `apps/ui-common-test-bed/src/app/app.module.ts`;
  const buffer = tree.read(modulePath);
  const text = buffer.toString();
  if (!text) {
    throw Error();
  }
  const token = `RouterModule.forRoot([`;
  const indexToInsertAt = text.indexOf(token) + token.length;
  const newText = `${text.slice(0, indexToInsertAt)}${routeToAdd}${text.slice(
    indexToInsertAt
  )}`;
  tree.overwrite(modulePath, newText);
};

const mountComponentInTestBed = (options: any): Rule => (
  tree: Tree,
  _context: SchematicContext
) => {
  const tagToAdd = `<nrwl-${dasherize(options.name)}></nrwl-${dasherize(
    options.name
  )}>`;
  const componentPath = `libs/ui-common-test-bed/src/app/${dasherize(
    options.name
  )}-test/${dasherize(options.name)}-test.component.html`;
  tree.overwrite(componentPath, tagToAdd);
};

export default function(schema: any): Rule {
  return chain([
    createComponent(schema),
    addTestComponentToTestApp(schema),
    addTestComponentToRouting(schema)
  ]);
}
