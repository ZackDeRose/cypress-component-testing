import { createBuilder, BuilderOutput } from '@angular-devkit/architect';
import * as childProcess from 'child_process';

export default createBuilder((options, context) => {
  const child = childProcess.spawn('ng', [
    'e2e',
    'ui-common-test-bed-e2e',
    '--watch'
  ]);
  return new Promise<BuilderOutput>(resolve => {
    child.on('close', code => {
      resolve({ success: code === 0 });
    });
  });
});
