import { AppHome } from './app-home';
import { tsConfigPathsAliasWorksText } from '~/tsconfig-paths-test'
console.log(tsConfigPathsAliasWorksText)

describe('app', () => {
  it('builds', () => {
    expect(new AppHome()).toBeTruthy();
  });
});
